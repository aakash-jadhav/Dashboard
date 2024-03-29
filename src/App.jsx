import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, Login, New, Single, List } from "./pages/pages"
import { productInputs, userInputs } from "./formSource"
import "./style/dark.scss"
import { useContext } from "react"
import { DarkModeContext } from "./context/darkModeContext.jsx"

function App() {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add new User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add new Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
