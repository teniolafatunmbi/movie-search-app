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
        <div>
            <img src={movies.Poster} />
            <div>
                {
                    movieDetails.map((detail) => {
                        return <p>{detail}</p> 
                    })
                }
            </div>
        </div>
    )
}

export default Movie;