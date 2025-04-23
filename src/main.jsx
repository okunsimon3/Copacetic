import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.jsx';
import './index.css'
import App from './App.jsx'
import About from './About.jsx'
import Media from './Media.jsx'
import { BrowserRouter, Routes, Route} from "react-router"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}></Route>
          <Route index element={<Home />}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/media' element={<Media />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
