import PokemonCard from "./PokemonCard.jsx";
import styled from "styled-components";
import {usePokemonContext} from "../context/PokemonContext.jsx";

function PokemonList() {
    const { pokemonList } = usePokemonContext();

    return (
        <ListContainer>
        {pokemonList.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
        </ListContainer>
    )
}

export default PokemonList;

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    background-color: #f0f0f0;
    gap: 20px;
    border-radius: 20px;
    border: 1px solid lightgrey;
    padding: 20px;
`