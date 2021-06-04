import axios from "axios";
import React, { useEffect } from "react";

interface searchProps{
    Text: string, 
    setText: any,
    setMovies: any
}

const Form: React.FC<searchProps> = ({Text, setText, setMovies}) => {

    const SearchChange = (e:any) =>{ 
        return setText(e.currentTarget.value);
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const res = await axios.get(`http://www.omdbapi.com/?t=${Text}&apikey=6070c157`);
        if(res.data.Response === "True") setMovies({ ...[res.data] });
        else alert(res.data.Error)
    }

    return(
        <div className="form">
            <form onSubmit={handleSubmit} >
                <input type="search" placeholder="Search movie" value={Text} onChange={SearchChange} />
                <button className="btn">Check movie</button>
            </form>
        </div>
        
    )
}

export default Form;