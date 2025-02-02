import { ReactNode, useState, createContext } from "react";

interface ModalContextData {
    isModalOpen: boolean;
    modalContent: JSX.Element | null;
    HandleCloseModal: () => void;
    HandleOpenModal: (element: JSX.Element, type?: ModalAnimacaoType) => void;

    animationType: ModalAnimacaoType;
    animationState: 'open' | 'opening' | 'closing' | 'closed';
    setAnimationType: React.Dispatch<React.SetStateAction<"fade" | "move">>;
}

export type ModalAnimacaoType = "fade" | "move";

interface ModalContextProviderProps {
    children: ReactNode;
}

export const ModalContext = createContext({} as ModalContextData);

export default function ModalContextProvider({ children }: ModalContextProviderProps) {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<JSX.Element | null>(null);

    const [animationType, setAnimationType] = useState<ModalAnimacaoType>('fade');
    const [animationState, setAnimationState] = useState<'open' | 'opening' | 'closing' | 'closed'>('closed');
    
    const closeModal = () => {
        setModalContent(null);
        setIsModalOpen(false);
    }

    const HandleCloseModal = () => {
        setAnimationState('closing');
        setTimeout(() => {
            closeModal();
            setAnimationState('closed');
        }, 300);
    }
    
    const HandleOpenModal = (element: JSX.Element, type?: ModalAnimacaoType) => {
        if(type !== undefined) {
            setAnimationType(type);
        } else {
            setAnimationType('fade');
        }
        setIsModalOpen(true);
        setModalContent(element);
        setAnimationState('opening');
        setTimeout(() => {
            setAnimationState('open');
        }, 1000);
    }
    
    return (
        <ModalContext.Provider value={{ animationState, animationType, setAnimationType, HandleOpenModal, isModalOpen, HandleCloseModal, modalContent }} >
            { children }
        </ModalContext.Provider>
    );
}