import React from "react";
import { useParams } from "react-router-dom"

export const Details = () => {
    const [data, setData] = React.useState({})

    React.useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon`)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(e => console.log(e))
    }, []);

    const images = data.sprites

    return (
            <div className="details">
            <a className="return" href="/"><i className="bi bi-arrow-left"></i></a>
            <h2>{data.id} : {data.name}</h2>
            {data.types?.map((p) => <p>{p.type.name}</p>)}
            <p>Taille : {data.height}</p>
            <p>Poids : {data.weight}</p>
        </div>
    )
}