
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
function TrendingPage(){

    const para = useParams()
    const id = para.id

    const [listSeries,setListSeries] = useState([]);
   
    const  loadAllSeries = async () =>{
         const path = "http://localhost:8182/person/tendence"

        const result = await  axios.get(path);
        setListSeries(result.data);
    }
    useEffect(() => {

        loadAllSeries()
    }, [listSeries]);
    
    return(
        <div className="container">
            <div className="row gap-2">
                {listSeries.map((ligne, i) => (
                        <div className="card col-2" key={i}>
                            <div className="card-body">
                                <h5 className="card-title"> Titre: {ligne.title}</h5>
                                <p className="card-text">
                                    Genre: {ligne.genre}
                                </p>
                                <p> Nombre d'épisodes: {ligne.episodesNumber}  </p>
                            </div>
                            <div className="card-footer">
                                <small className="text-body-secondary"> Note: {ligne.rating}</small>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>

    );

}
export default TrendingPage