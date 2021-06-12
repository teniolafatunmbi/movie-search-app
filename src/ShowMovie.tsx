import React from "react";

interface movieProps {
    movies: any
}


const ShowMovie: React.FC<movieProps> = ({movies}) => {
   const { Title, Director, Writer, stars, Released, Rated } = movies; 
    const movieDetails = [ Title, Director, Writer, stars, Released, Rated ];
    return(
            <div className="movie">
                <img src={movies.Poster} className="img" width="300px"/>
                <div className="movie-details">
                    {   
                        movieDetails.map((detail, i) => {
                            return <p key={i}> {detail}</p> 
                        })
                    }
                </div>
            </div>
        )
}

export default ShowMovie;