import { ReactNode, useState, useEffect, createContext } from "react";
import ModalContextProvider from "./ModalContext";

interface ThemeContextProps {
    children: ReactNode;
}

type IScrollState = 'initial' | 'scrolling' | 'preparing' | 'closing';

interface ThemeContextData {
    theme: string;
    setThemeController: (name: string) => void;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    toggleTheme: () => void;
    ToggleThemeButton: () => JSX.Element;
    ScrollState: IScrollState;
}

export const ThemeContext = createContext({} as ThemeContextData);

export default function ThemeContextProvider({ children }: ThemeContextProps) {

    const THEME_STORAGE_KEY = 'com.ofernandoavila.theme_saved';
    const [theme, setTheme] = useState<string>('dark');
    const [themeController, setThemecontroller] = useState<string>('');

    const [ScrollState, setScrollState] = useState<IScrollState>('initial');
    const scrollThreshold = 5;
    const scrollCloseThreshold = 25;

    const __handleScroll = () => {
        switch(ScrollState) {
            case 'initial':
                if(window.scrollY > scrollThreshold && ScrollState === 'initial') {
                    setScrollState('scrolling');
                }
                break;

            case 'scrolling':
                if(window.scrollY < scrollCloseThreshold) {
                    setScrollState('initial');
                }
                break;
        }
    }

    const toggleTheme = () => {
        return __setTheme(theme === 'light' ? 'dark' : 'light');
    }

    const setThemeController = (name: string) => {
        setThemecontroller(name);
    }

    const __getTheme = async (): Promise<string> => {
        let themeSaved = await localStorage.getItem(THEME_STORAGE_KEY);

        return themeSaved ?? 'dark';
    }

    const __setTheme = async (value: string): Promise<void> => {
        setTheme(value);
        return await localStorage.setItem(THEME_STORAGE_KEY, value);
    }

    const ToggleThemeButton = () => (
        <div style={{ position: 'absolute', top: 16, left: 16 }} >
            <div className="form-group">
                <span className="toggle-switch">
                    <input id="switch-rounded" type="checkbox" checked={theme !== 'light'} onChange={toggleTheme} />
                    <label htmlFor="switch-rounded">
                        <i className={` fa ${theme === 'light' ? 'fa-moon' : 'fa-sun'} `}></i>
                    </label>
                </span>
            </div>
        </div>
    );

    const [scrollY, setScrollY] = useState(0);

    const __changeScrollY = () => {
        setScrollY(window.scrollY);
    }

    useEffect(() => {
        __getTheme().then(value => setTheme(value));

        window.addEventListener('scroll', __changeScrollY);

        return () => {
            window.removeEventListener('scroll', __changeScrollY);
        };
    }, []);

    useEffect(() => {
        __handleScroll();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollY]);

    useEffect(() => {
        if (themeController !== '') {
            if (theme === 'light') {
                document.querySelector('html')!.classList.remove(themeController + '-dark');
                document.querySelector('html')!.classList.remove('dark');
                document.querySelector('html')!.classList.add(themeController + '-light');
            } else {
                document.querySelector('html')!.classList.remove(themeController + '-light');
                document.querySelector('html')!.classList.remove('light');
                document.querySelector('html')!.classList.add(themeController + '-dark');
            }
        } else {
            if (theme === 'light') {
                document.querySelector('html')!.classList.remove('dark');
                document.querySelector('html')!.classList.add('light');
            } else {
                document.querySelector('html')!.classList.remove('light');
                document.querySelector('html')!.classList.add('dark');
            }
        }
    }, [theme, themeController]);

    return (
        <ThemeContext.Provider value={{ ScrollState, setThemeController, theme, setTheme, toggleTheme, ToggleThemeButton }}>
            <ModalContextProvider>
                {children}
            </ModalContextProvider>
        </ThemeContext.Provider>
    );
}