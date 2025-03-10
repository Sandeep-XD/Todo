import {createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider} from "react-router" 
import Home from "./pages/Home"
import Todo from "./pages/Todo"
import '../src/app.css'
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element ={<Home/>}>
      <Route index element={<Todo/>}/>
    </Route>
  ))
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
