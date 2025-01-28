import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Post } from "./pages/post/Post"


function App() {
  return (
    <BrowserRouter basename="/wordpress">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/posts/:slug" element={ <Post /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
