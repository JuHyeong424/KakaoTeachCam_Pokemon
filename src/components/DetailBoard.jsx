import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {usePokemonContext} from "../context/PokemonContext.jsx";
import {useEffect, useState} from "react";
import backgroundImg from "../assets/background3.jpg"

function DetailBoard({ pokemon }) {
    const navigate = useNavigate();
    const { notifyDelete, notifyAdd, notifyLimit, notifySame, notifyNotSame, myPokemon, setMyPokemon } = usePokemonContext();

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
            notifyAdd();
            setMyPokemon([...myPokemon, pokemon]);
        }
    }

    function deleteMyPokemon() {
        const exists = myPokemon.some(p => p.id === pokemon.id);
        if (exists) {
            notifyDelete();
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
        <Background>
            <DetailComponent>
                <TopBar>
                    <BackButton onClick={onClickHandle}>back</BackButton>
                </TopBar>
                <DetailImg src={pokemon.img_url} alt={pokemon.korean_name}></DetailImg>
                <DetailName>{pokemon.korean_name}</DetailName>
                <p>{pokemon.types}</p>
                <p>{pokemon.description}</p>
                <ButtonGroup>
                    <AddBtn onClick={addMyPokemon}>추가하기</AddBtn>
                    <DelBtn onClick={deleteMyPokemon}>삭제하기</DelBtn>
                </ButtonGroup>

            </DetailComponent>
        </Background>
    )
}

export default DetailBoard;

const Background = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
`

const DetailComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: 3px solid gainsboro;
    width: 50%;
    margin: 0 auto;
    font-family: "CookieRun Regular", sans-serif;
    padding: 20px;
    background-color: white;
`
const TopBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`
const BackButton = styled.button`
    background-color: orange;
    margin-top: 20px;
    margin-right: 20px;

    &:hover {
        background-color: sandybrown;
        color: white;
        border: 1px solid sandybrown;
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
const ButtonGroup = styled.div`
    display: flex;   
    justify-content: space-between;
    width: 300px;
    margin-top: 20px;
    margin-bottom: 20px;
    
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 100%;
    }
`

const AddBtn = styled.button`
    background-color: skyblue;
    color: white;

    &:hover {
        background-color: cornflowerblue;
        color: black;
        border: 1px solid cornflowerblue;
    }
`
const DelBtn = styled.button`
    background-color: palevioletred;
    color: white;

    &:hover {
        background-color: indianred;
        color: black;
        border: 1px solid indianred;
    }
`