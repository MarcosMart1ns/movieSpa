import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {MovieService} from "../services/MovieService";

export const MovieDetail = () => {
    let {id} = useParams();
    const [movie, setMovie] = useState({});

    const fetchMovie = async () => {
        const {data} = await MovieService.getMovie(id);
        setMovie((data));
    }

    useEffect(()=>{
        fetchMovie();
    }, []);

    return (
        <>
            <h1>{movie.title}</h1>
            <article>
                {movie.overview}
            </article>
        </>
    );
}
