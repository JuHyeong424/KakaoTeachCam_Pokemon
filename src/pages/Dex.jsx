import PokemonList from "../components/PokemonList.jsx";
import Dashboard from "../components/Dashboard.jsx";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

function Dex() {
    const location = useLocation();
    const [pokemon, setPokemon] = useState(null);

    // 첫 마운트일 때만 location.state.pokemon을 반영
    useEffect(() => {
        if (location.state?.pokemon) {
            setPokemon(location.state.pokemon);
            // 히스토리 상태 초기화 (새로고침 시 state 안 남게)
            window.history.replaceState({}, document.title);
        }
    }, [location.state]);

    return (
        <div>
            <Dashboard pokemon={pokemon}/>
            <PokemonList />
        </div>
    )
}

export default Dex;