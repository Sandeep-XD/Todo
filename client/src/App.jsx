import {createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider} from "react-router" 
import Home from "./pages/Home"
import Todo from "./pages/Todo"
import '../src/app.css'
import About from "./pages/About"
import Credit from "./pages/Credit"
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element ={<Home/>}>
      <Route index element={<Todo/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/credit" element={<Credit/>}/>
    </Route>
  ))
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
