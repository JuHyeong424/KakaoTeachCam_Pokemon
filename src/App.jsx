import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Dex from "./pages/Dex.jsx";
import Detail from "./pages/Detail.jsx";
import {PokemonProvider} from "./context/PokemonContext.jsx";
import {ToastContainer} from "react-toastify";

function App() {
  return (
        <BrowserRouter>
            <PokemonProvider>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/dex" element={<Dex />} />
                  <Route path="/detail" element={<Detail />} />
              </Routes>
                <ToastContainer position="top-center" autoClose={1000} closeOnClick draggable />
            </PokemonProvider>
        </BrowserRouter>
  )
}

export default App
