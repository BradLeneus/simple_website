import {useEffect, useState} from "react";
import axios from "axios";

function SeriesCatalog() {
    const [listSeries,setListSeries] = useState([]);
    // const  [singleSerie,setSingleSerie] = useState(null);
    const  loadAllSeries = async () =>{
        const result = await  axios.get("http://localhost:8182/series/getAll");
        setListSeries(result.data);
    }
    useEffect(() => {

        loadAllSeries()
    }, [listSeries]);



    // const getSerieByGenre = async () =>{
    //     let name = document.getElementById("name").value
    //
    //
    //     const result = await axios.get(`http://localhost:8182/person/search/${name}`);
    //
    //     if(result.data.id >0){
    //         console.log(result.data)
    //         setSinglePerson(result.data)
    //         setListPerson()
    //     }
    //
    //
    //
    //
    // }
    // const deleteAPerson = (id) =>{
    //     axios.delete(`http://localhost:8182/person/deleteById/${id}`)
    //         .then(() =>{
    //
    //         }).catch((error) =>{
    //         console.log(error)
    //     })
    //     console.log("delete Person with id " + id)
    // }
    // const handleSearch =  (e)=>{
    //     console.log(e.target.value)
    //     if(e.target.value == ""){
    //         setSinglePerson(null)
    //     }
    // }



return (



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
        export default SeriesCatalog;