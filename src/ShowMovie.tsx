import React from "react";
import Movie from "./Movie";

interface movieProps {
    movies: any
};

const ShowMovie: React.FC<movieProps> = ({movies}) => {
    return(
        <div>
        {
            movies.map((movie: any) => {
                return <Movie movies={movie} />
            })
        }
        </div>
    );
};

export default ShowMovie;