import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {usePokemonContext} from "../context/PokemonContext.jsx";

function Dashboard() {
    const navigate = useNavigate();
    const { notifyDelete, myPokemon, setMyPokemon } = usePokemonContext();

    function onClickDelete(item) {
        notifyDelete();
        setMyPokemon(arr => arr.filter(p => p.id !== item.id));
    }

    function onClickHandle(id) {
        navigate(`/detail?id=${id}`);
    }

    return (
        <DashBoardContainer>
            <BoardTitle>나만의 포켓몬</BoardTitle>
            <DashGrid>
                {[...myPokemon, ...Array( 6 - myPokemon.length).fill(null)].map((item, index) => (
                    <CardLayout key={item ? item.id : `empty - ${index}`}>
                        {item ? (
                            <div onClick={() => onClickHandle(item.id)}>
                                <img src={item.img_url} alt={item.name}/>
                                <h3>{item.korean_name}</h3>
                                <Id>No. {String(item.id).padStart(3, '0')}</Id>
                                <Button onClick={(e) => {
                                    e.stopPropagation();
                                    onClickDelete(item)}}>삭제</Button>
                            </div>
                        ) : (
                            <SlotImg src='	https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png' alt='empty slot' />
                        )}
                    </CardLayout>
                ))}
            </DashGrid>
        </DashBoardContainer>
    )
}

export default Dashboard;

const DashBoardContainer = styled.div`
    background-color: whitesmoke;
    border: 1px solid gainsboro;
    border-radius: 20px;
    margin-bottom: 20px;
`

const DashGrid = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    overflow-x: auto;
    padding: 10px;
`;


const SlotImg = styled.img`
    height: 30px;   
    width: 30px;
`

const CardLayout = styled.div`
    flex: 0 0 auto;
    width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 20px;
    margin: 10px 0;
    cursor: pointer;

    &:hover {
        transform: translateY(5px);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
        background-color: beige;
    }
`;


const Button = styled.button`
    font-family: "CookieRun Regular", sans-serif;
    background-color: palevioletred;
    color: white;
    
    &:hover {
        background-color: indianred;
        color: black;
        border: 1px solid indianred;
    }
`

const BoardTitle = styled.h1`
    color: orangered;
    font-family: "CookieRun Regular", sans-serif;
    margin-bottom: 10px;
`

const Id = styled.p`
    font-family: "CookieRun Regular", sans-serif;   
`