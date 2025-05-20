import {useNavigate} from "react-router-dom";
import styled from 'styled-components';

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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Img = styled.img`
    width: 600px;
    height: 220px;
    margin-bottom: 20px;
`

const Button = styled.button`
    width: 214px;   
    height: 44px;
    background-color: lightgray;
    font-family: "CookieRun Regular",serif;
    
    &:hover {
        background-color: black;
        color: white;
    }
`