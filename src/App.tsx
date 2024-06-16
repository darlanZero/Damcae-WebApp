import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './pages/root/rootLayout'
import Frontpage from './pages/root/Frontpage'
import FormLayout from './pages/Form/FormLayout'
import Login from './pages/Form/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>

            <Route index element={<Frontpage />} />
          </Route>

          <Route element={<FormLayout />}>
            <Route path="/form" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App
