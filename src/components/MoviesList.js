import {MovieItem} from "./MovieItem";

export const MoviesList = ({movies}) => {
    return <section>
        <ul>
            {movies.map(m => <MovieItem movie = {m}/>)} 9:18
        </ul>
    </section>
}