import { useEffect, useState } from 'react';
import axios from "axios";
// import { searchPeople } from './utils/search';

function App() {
const [listPerson,setListPerson] = useState([]);

const  loadAllPersons = async () =>{
  const result = await  axios.get("http://localhost:8182/person/getAll");
  setListPerson(result.data);
}


  useEffect(() => {
     loadAllPersons()
  }, [listPerson]);

  /*const handleSearch = (e) => {
    const input = e.target.value;
    setQuery(input);

    if (db) {
      const results = searchPeople(db, input);
      setRows(results);
    }
  };*/

    /*const  createPerson () =>{
        axios.post(`http://localhost:8182/person/${name}/${lastName}/${email}/${gender}`);
    }*/


  return (
    <div style={{ padding: '2rem' }}>
      <h1>Recherche dans la base de personnes dans les fichiers csv</h1>

      <input
        type="text"
        // value={query}
        // onChange={handleSearch}
        placeholder="Ex: PHI"
        style={{ padding: '0.5rem', width: '300px', fontSize: '1rem' }}
      />

        <button id={"searchButton"}>Rechercher une personne</button>

      <table border="1" cellPadding="5" style={{ marginTop: '1rem' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {listPerson.map((line,i) => (
            <tr key={i}>
              <td>{line.id}</td>
              <td>{line.name}</td>
              <td>{line.lastName}</td>
              <td>{line.email}</td>
              <td>{line.gender}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default App;
