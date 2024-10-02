import { RouterProvider } from "react-router-dom"
import router from "./router/index.jsx"
import "./index.scss"

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
