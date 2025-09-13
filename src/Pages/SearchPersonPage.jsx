import { useEffect, useState } from 'react';
import axios from "axios";
// import { searchPeople } from './utils/search';

import {useNavigate} from "react-router-dom";

function SearchPersonPage() {
    const [listPerson,setListPerson] = useState([]);
    const  [singlePerson,setSinglePerson] = useState(null);
    const  loadAllPersons = async () =>{
        const result = await  axios.get("http://localhost:8182/person/getAll");
        setListPerson(result.data);
    }


    useEffect(() => {

        loadAllPersons()
    }, [listPerson]);

    const gePersonByName = async () =>{
        let name = document.getElementById("name").value


        const result = await axios.get(`http://localhost:8182/person/search/${name}`);

        if(result.data.id >0){
            console.log(result.data)
            setSinglePerson(result.data)
            setListPerson()
        }




    }
    const deleteAPerson = (id) =>{
        axios.delete(`http://localhost:8182/person/deleteById/${id}`)
            .then(() =>{

            }).catch((error) =>{
            console.log(error)
        })
        console.log("delete Person with id " + id)
    }
    const handleSearch =  (e)=>{
        console.log(e.target.value)
        if(e.target.value == ""){
            setSinglePerson(null)
        }
    }
    /*const  createPerson () =>{
        axios.post(`http://localhost:8182/person/${name}/${lastName}/${email}/${gender}`);
    }*/


    // const  navigate = useNavigate();




    return (
        <div style={{ padding: '2rem' }}>
            <h1>Liste de Personnes</h1>

            <input
                type="text"
                id={"name"}
                // value={query}
                onChange={(e) => handleSearch(e)}
                placeholder="Ex: PHI"
                style={{ padding: '0.5rem', width: '300px', fontSize: '1rem' }}
            />

            <button id={"searchButton"} onClick={gePersonByName}>Rechercher une personne</button>


            <table border="1" cellPadding="5" style={{ marginTop: '1rem' }}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Prénom</th>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Genre</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {singlePerson != null ? < tr >

                    < td > {singlePerson.id}</td>
                    <td>{singlePerson.name}</td>
                    <td>{singlePerson.lastName}</td>
                    <td>{singlePerson.email}</td>
                    <td>{singlePerson.gender}</td>
                </tr> : listPerson.map((ligne, i)=>(
                    <tr key={i}>
                        < td > {ligne.id}</td>
                        <td>{ligne.name}</td>
                        <td>{ligne.lastName}</td>
                        <td>{ligne.email}</td>
                        <td>{ligne.gender}</td>
                        <td> <button onClick={() => {
                            deleteAPerson(ligne.id)
                        }}>X</button></td>
                    </tr>
                ))


                }


                </tbody>

            </table>
        </div>
    )
        ;
}

export default SearchPersonPage;
