import PokemonList from "../components/PokemonList.jsx";
import Dashboard from "../components/Dashboard.jsx";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { usePokemonContext } from "../context/PokemonContext.jsx";

function Dex() {
    const location = useLocation();
    const { setMyPokemon, limitAlert, setLimitAlert, sameAlert, setSameAlert } = usePokemonContext();

    // 포켓몬 추가 처리
    useEffect(() => {
        const newPokemon = location.state?.pokemon;

        if (newPokemon && newPokemon.id) {
            setMyPokemon(prev => {
                if (prev.length >= 6) {
                    setLimitAlert(true);
                    return prev;
                } else if (prev.some(p => p.id === newPokemon.id)) {
                    setSameAlert(true);
                    return prev;
                }
                return [...prev, newPokemon];
            });
        }
    }, [location.state, setLimitAlert, setMyPokemon, setSameAlert]);

    // 알림 처리
    useEffect(() => {
        if (limitAlert) {
            alert("포켓몬은 최대 여섯개까지만 선택 할 수 있어요.");
            setLimitAlert(false);
        }
    }, [limitAlert, setLimitAlert]);

    useEffect(() => {
        if (sameAlert) {
            alert('이미 선택된 포켓몬입니다.');
            setSameAlert(false);
        }
    }, [sameAlert, setSameAlert]);

    return (
        <div>
            <Dashboard />
            <PokemonList />
        </div>
    )
}

export default Dex;