import DetailBoard from "../components/DetailBoard.jsx";
import {useLocation} from "react-router-dom";
import {usePokemonContext} from "../context/PokemonContext.jsx";

function Detail() {
    const { pokemonList } = usePokemonContext();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const pokemon = pokemonList.find(p => String(p.id) === id);

    return (
        <DetailBoard pokemon={pokemon}></DetailBoard>
    )
}

export default Detail;