import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {usePokemonContext} from "../context/PokemonContext.jsx";

function PokemonCard({ pokemon }) {
    // id를 000으로 바꿔줌
    const id = String(pokemon.id).padStart(3, '0');
    const navigate = useNavigate();
    const { setSelectedPokemon } = usePokemonContext();

    function onClickHandle() {
        navigate(`/detail?id=${pokemon.id}`);
    }

    function addClickHandle(e) {
        e.stopPropagation(); // 부모 클릭 이벤트 막기
        setSelectedPokemon(pokemon);
        navigate(`/dex`);
    }
    
    return (
        <CardContainer>
            <CardLayout onClick={onClickHandle}>
                <img src={pokemon.img_url} alt={pokemon.korean_name}></img>
                <h3>{pokemon.korean_name}</h3>
                <Id>No. {id}</Id>
                <CardButton onClick={addClickHandle}>추가</CardButton>
            </CardLayout>
        </CardContainer>
    )
}

export default PokemonCard;

const CardContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const CardLayout = styled.span`
    border: 1px solid whitesmoke;
    background-color: white;
    width: 100%;
    height: 100vh;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding-top: 20px;
    cursor: pointer;
    
    &:hover{
        transform: translateY(5px);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
        background-color: beige;
    }
`

const CardButton = styled.button`
    font-family: "CookieRun Regular", sans-serif;
    background-color: skyblue;
    color: white;
    
    &:hover{
        background-color: cornflowerblue;
        border: 1px solid cornflowerblue;
        color: black;
    }
`

const Id = styled.p`
    font-family: "CookieRun Regular", sans-serif;   
`