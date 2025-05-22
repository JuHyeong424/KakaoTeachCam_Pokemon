import PokemonList from "../components/PokemonList.jsx";
import Dashboard from "../components/Dashboard.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import { usePokemonContext } from "../context/PokemonContext.jsx";

function Dex() {
    const location = useLocation();
    const navigate = useNavigate();
    const { dexAlert, setDexAlert, notifyLimit, notifySame, selectedPokemon, setSelectedPokemon, setMyPokemon } = usePokemonContext();

    // 포켓몬 추가 처리
    useEffect(() => {
        const newPokemon = selectedPokemon;

        if (newPokemon && newPokemon.id) {
            setMyPokemon(prev => {
                if (prev.length >= 6) {
                    setDexAlert('limit');
                    return prev;
                } else if (prev.some(p => p.id === newPokemon.id)) {
                    setDexAlert('same');
                    return prev;
                }
                return [...prev, newPokemon];
            });
            setSelectedPokemon(null);

            // replace: true 옵션으로 히스토리 상태 덮어쓰기
            navigate(location.pathname, { replace: true});
        }
    }, [location.pathname, location.state, navigate, selectedPokemon, setMyPokemon, setSelectedPokemon, setDexAlert]);

    // 알림 처리
    useEffect(() => {
        if (dexAlert === 'limit') {
            notifyLimit();
        } else if (dexAlert === 'same') {
            notifySame();
        }
        setDexAlert(null);
    }, [dexAlert]);

    return (
        <div>
            <Dashboard />
            <PokemonList />
        </div>
    )
}

export default Dex;