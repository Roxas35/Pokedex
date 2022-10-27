import React from "react"
import { Pokemon } from "../Components/Pokemon"

export const Home = () => {

    const [pokemons, setPokemons] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchResult, setSearchResult] = React.useState([]);
    const handleChange = e => {
        setSearchTerm(e.target.value);
    }

    React.useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(data => setPokemons(data.results))
        .catch(err => console.log(err))
    }, []);

    React.useEffect(() => {
        const results = pokemons.filter(p =>
            p.name.toLowerCase().includes(searchTerm)
        );
        setSearchResult(results)
    }, [searchTerm]);

    return (
        <>
            <nav>
            <h1>Pokedex</h1>
            <form action="">
                <input type="text" placeholder='Rechercher' value={searchTerm} onChange={handleChange} />
            </form>
            </nav>
            {searchResult.map((p, index) => <Pokemon key={index} pokemon={p} url={p.url} />)}
        </>
    )
}