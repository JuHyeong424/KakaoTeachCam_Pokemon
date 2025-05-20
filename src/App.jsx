import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Dex from "./pages/Dex.jsx";
import Detail from "./pages/Detail.jsx";
import {PokemonProvider} from "./context/PokemonContext.jsx";

function App() {
  return (
        <BrowserRouter>
            <PokemonProvider>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/dex" element={<Dex />} />
                  <Route path="/detail" element={<Detail />} />
              </Routes>
            </PokemonProvider>
        </BrowserRouter>
  )
}

export default App
