import React from "react";

interface movieProps {
    movies: any
}


const Movie: React.FC<movieProps> = ({movies}) => {
    const movieDetails = [
        movies.Title,
        movies.Director,
        movies.Writer,
        movies.stars,
        movies.Released,
        movies.Rated,
    ]
    return(
            <div className="movie">
                <img src={movies.Poster} className="img" width="300px"/>
                <div className="movie-details">
                    {
                        movieDetails.map((detail, i) => {
                            return <p key={i}>{detail}</p> 
                        })
                    }
                </div>
            </div>
        )
}

export default Movie;