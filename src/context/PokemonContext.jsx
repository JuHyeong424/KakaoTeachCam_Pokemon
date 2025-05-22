import {createContext, useContext, useState} from "react";
import MOCK_DATA from "../data/MOCK_DATA.jsx";
import {toast} from "react-toastify";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
    const [myPokemon, setMyPokemon] = useState([]);
    const [limitAlert, setLimitAlert] = useState(false);
    const [sameAlert, setSameAlert] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const notifyLimit = () => {
        toast.error("포켓몬은 최대 여섯개까지만 선택 할 수 있어요.");
    };

    const notifySame = () => {
        toast.warn("이미 선택된 포켓몬입니다.");
    }

    const notifyNotSame = () => {
        toast.warn("선택된 포켓몬이 아닙니다.")
    }

    return (
        <PokemonContext.Provider value={{
            myPokemon, setMyPokemon, limitAlert, setLimitAlert, sameAlert, setSameAlert, pokemonList: MOCK_DATA, selectedPokemon, setSelectedPokemon, notifyLimit, notifySame, notifyNotSame }}
        >
            { children }
        </PokemonContext.Provider>
    )
}
export function usePokemonContext() {
    return useContext(PokemonContext);
}