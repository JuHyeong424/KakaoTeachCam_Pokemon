import {useNavigate} from "react-router-dom";
import styled from "styled-components";

function DetailBoard({ pokemon }) {
    const navigate = useNavigate();

    function onClickHandle() {
        navigate('/dex');
    }

    return (
        <DetailComponent>
            <DetailImg src={pokemon.img_url} alt={pokemon.korean_name}></DetailImg>
            <DetailName>{pokemon.korean_name}</DetailName>
            <p>{pokemon.types}</p>
            <p>{pokemon.description}</p>
            <BackButton onClick={onClickHandle}>뒤로 가기</BackButton>
        </DetailComponent>
    )
}

export default DetailBoard;

const DetailComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: 1px solid gainsboro;
    width: 50%;
    margin: 0 auto;
    font-family: "CookieRun Regular", sans-serif;
    padding: 20px;
`

const BackButton = styled.button`
    background-color: orange;
    margin-top: 20px;

    &:hover {
        background-color: indianred;
        color: white;
        border: 1px solid indianred;
    }
`

const DetailImg = styled.img`
    width: 200px;   
    height: 200px;
`

const DetailName = styled.h3`
    color: red;
    font-size: 2rem;   
    margin: 0;
`