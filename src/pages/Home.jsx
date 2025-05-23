import {useNavigate} from "react-router-dom";
import styled from 'styled-components';
import backgroundImage from '../assets/background2.jpg';

function Home() {
    const navigate = useNavigate();

    function goDex() {
        navigate("/dex")
    }

    return (
        <HomeContainer>
            <Img
                src='https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png'
                alt='포켓몬 도감입니다.'
            />
            <Button onClick={goDex}>포켓몬 도감 시작하기</Button>
        </HomeContainer>
    )
}

export default Home;

const HomeContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
`

const Img = styled.img`
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 220px;
`

const Button = styled.button`
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 260px;
    height: 60px;
    background-color: red;
    color: white;
    font-family: "CookieRun Regular", serif;

    &:hover {
        background-color: black;
        color: white;
        border: 1px solid black;
    }
`