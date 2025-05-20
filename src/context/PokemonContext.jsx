import {createContext, useContext, useState} from "react";
import MOCK_DATA from "../data/MOCK_DATA.jsx";
import PokemonList from "../components/PokemonList.jsx";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
    const [myPokemon, setMyPokemon] = useState([]);
    const [limitAlert, setLimitAlert] = useState(false);
    const [sameAlert, setSameAlert] = useState(false);

    return (
        <PokemonContext.Provider value={{
            myPokemon, setMyPokemon, limitAlert, setLimitAlert, sameAlert, setSameAlert, pokemonList: MOCK_DATA }}
        >
            { children }
        </PokemonContext.Provider>
    )
}
export function usePokemonContext() {
    return useContext(PokemonContext);
}