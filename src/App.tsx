import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Post } from "./pages/post/Post";
import { Blog } from "./pages/Blog";
import GlobalContextProvider from "./contexts/GlobalContext";
import { Login } from "./pages/auth/Login";
import { Page } from "./pages/Page";

function App() {
    return (
        <BrowserRouter basename="/">
            <GlobalContextProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/posts/:slug" element={<Post />} />

                    <Route path="/auth/login" element={ <Login /> } />

                    <Route
						path="*"
						element={<Page />}
					/>
                </Routes>
            </GlobalContextProvider>
        </BrowserRouter>
    );
}

export default App;
