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


 const fetchUser = async (serieId) => {
        try {
          // On récupère le token du localStorage
          const token = localStorage.getItem("token");
          if (!token) {
              alert("veuillez vous connecter")
            setError("Aucun token trouvé — connecte-toi d'abord.");
            return;
          }

          // Appel à ton endpoint sécurisé
          const response = await axios.get("http://localhost:8182/auth/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          // Si tout va bien

          console.log(response.data.id + " serie id : " + serieId)
          addHistory(response.data.id, serieId)

        } catch (err) {
          console.error(err);
          setError("Non connecté ou token invalide");
        }
      };

    const addHistory = async (userId, serieId) =>{
        try{

            const response = await axios.post("http://localhost:8182/history/" + userId + "/" + serieId);
                    }

        catch{
            console.log("nop")
            }

}


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
                                <button onClick={()=>{fetchUser(ligne.id)}}>Regarder</button>


                            </div>
                        </div>
                    )
                )}
            </div>
        </div>

        );


        }
        export default SeriesCatalog;