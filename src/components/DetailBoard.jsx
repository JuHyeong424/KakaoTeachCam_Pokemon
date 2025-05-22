import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {usePokemonContext} from "../context/PokemonContext.jsx";
import {useEffect, useState} from "react";

function DetailBoard({ pokemon }) {
    const navigate = useNavigate();
    const { notifyLimit, notifySame, notifyNotSame, myPokemon, setMyPokemon } = usePokemonContext();

    const [detailAlert, setDetailAlert] = useState(null);
    console.log(myPokemon);
    console.log(pokemon)

    function onClickHandle() {
        navigate('/dex');
    }

    function addMyPokemon() {
        const exists = myPokemon.some(p => p.id === pokemon.id);
        const limit = myPokemon.length === 6;

        if (exists) {
            setDetailAlert('duplicate');
        } else if (limit) {
            setDetailAlert('limit');
        } else {
            setMyPokemon([...myPokemon, pokemon]);
        }
    }

    function deleteMyPokemon() {
        const exists = myPokemon.some(p => p.id === pokemon.id);
        if (exists) {
            setMyPokemon(prev => prev.filter(k => k.id !== pokemon.id));
        } else {
            setDetailAlert('noSelected');
        }
    }

    useEffect(() => {
        if (detailAlert === 'duplicate') {
            notifySame();
        } else if (detailAlert === 'limit') {
            notifyLimit();
        } else if (detailAlert === 'noSelected') {
            notifyNotSame();
        }

        setDetailAlert(null);
    }, [detailAlert]);

    return (
        <DetailComponent>
            <DetailImg src={pokemon.img_url} alt={pokemon.korean_name}></DetailImg>
            <DetailName>{pokemon.korean_name}</DetailName>
            <p>{pokemon.types}</p>
            <p>{pokemon.description}</p>
            <BackButton onClick={onClickHandle}>뒤로 가기</BackButton>
            <button onClick={addMyPokemon}>추가하기</button>
            <button onClick={deleteMyPokemon}>삭제하기</button>
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