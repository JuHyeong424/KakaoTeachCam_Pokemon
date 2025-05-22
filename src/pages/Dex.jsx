import PokemonList from "../components/PokemonList.jsx";
import Dashboard from "../components/Dashboard.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import { usePokemonContext } from "../context/PokemonContext.jsx";

function Dex() {
    const location = useLocation();
    const navigate = useNavigate();
    const { notifyLimit, notifySame, selectedPokemon, setSelectedPokemon, setMyPokemon, limitAlert, setLimitAlert, sameAlert, setSameAlert } = usePokemonContext();

    // 포켓몬 추가 처리
    useEffect(() => {
        const newPokemon = selectedPokemon;

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
            setSelectedPokemon(null);

            // replace: true 옵션으로 히스토리 상태 덮어쓰기
            navigate(location.pathname, { replace: true});
        }
    }, [location.pathname, location.state, navigate, selectedPokemon, setLimitAlert, setMyPokemon, setSameAlert, setSelectedPokemon]);

    // 알림 처리
    useEffect(() => {
        if (limitAlert) {
            notifyLimit("포켓몬은 최대 여섯개까지만 선택 할 수 있어요.");
            setLimitAlert(false);
        }
    }, [limitAlert, notifyLimit, setLimitAlert]);

    useEffect(() => {
        if (sameAlert) {
            notifySame('이미 선택된 포켓몬입니다.');
            setSameAlert(false);
        }
    }, [notifySame, sameAlert, setSameAlert]);

    return (
        <div>
            <Dashboard />
            <PokemonList />
        </div>
    )
}

export default Dex;