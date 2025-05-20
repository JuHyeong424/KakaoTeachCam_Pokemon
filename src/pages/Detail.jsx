import DetailBoard from "../components/DetailBoard.jsx";
import {useLocation} from "react-router-dom";
import MOCK_DATA from "../data/MOCK_DATA.jsx";

function Detail() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const pokemon = MOCK_DATA.find(p => String(p.id) === id);

    return (
        <DetailBoard pokemon={pokemon}></DetailBoard>
    )
}

export default Detail;