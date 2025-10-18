
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
function PageHistory(){

    const para = useParams()

     const [user, setUser] = useState(null);
     const [error, setError] = useState("");
    const [listSeries,setListSeries] = useState([]);

   useEffect(() => {

      fetchUser();
    }, []);



 const fetchUser = async () => {
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
          setUser(response.data);
          console.log(response.data)
          loadAllSeries(response.data.id)
        } catch (err) {

          console.error(err);
          setError("Non connecté ou token invalide");
        }
      };

    const  loadAllSeries = async (id) =>{
        const path = "http://localhost:8182/history/" + id
        const result = await  axios.get(path);
        setListSeries(result.data);
    }

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
export default PageHistory