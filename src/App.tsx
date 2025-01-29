import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Post } from "./pages/post/Post";
import { Blog } from "./pages/Blog";
import GlobalContextProvider from "./contexts/GlobalContext";

function App() {
    return (
        <GlobalContextProvider>
            <BrowserRouter basename="/wordpress">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/posts/:slug" element={<Post />} />
                </Routes>
            </BrowserRouter>
        </GlobalContextProvider>
    );
}

export default App;
