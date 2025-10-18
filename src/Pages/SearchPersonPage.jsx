import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SearchPersonPage() {
  const [listPerson, setListPerson] = useState([]);
  const [singlePerson, setSinglePerson] = useState(null);
  const navitage = useNavigate();

  const loadAllPersons = async () => {
    const result = await axios.get("http://localhost:8182/person/getAll");
    setListPerson(result.data);
  };

  useEffect(() => { loadAllPersons(); }, [listPerson]); 

  const gePersonByName = async () => {
    const name = document.getElementById("name").value;
    const result = await axios.get(`http://localhost:8182/person/search/${name}`);
    if (result.data.id > 0) {
      console.log(result.data);
      setSinglePerson(result.data);
      setListPerson(); 
    }
  };

  const consultHistory = (id) => navitage("/history/" + id);
  const consultReco = (id) => navitage("/reco/" + id);
  const deleteAPerson = (id) => {
    axios.delete(`http://localhost:8182/person/deleteById/${id}`).catch(console.log);
    console.log("delete Person with id " + id);
  };
  const handleSearch = (e) => { if (e.target.value === "") setSinglePerson(null); };

  const box = { maxWidth: 1000, margin: "24px auto", padding: 16, background: "#fff", border: "1px solid #e5e7eb", borderRadius: 8 };
  const th  = { textAlign: "left", padding: "8px 10px", background: "#f9fafb", borderBottom: "1px solid #e5e7eb" };
  const td  = { padding: "8px 10px", borderBottom: "1px solid #f1f5f9" };


  const btnBase = { padding: "6px 10px", borderRadius: 6, border: "1px solid", cursor: "pointer", fontWeight: 600, color: "#fff" };
  const btnPrimary = { ...btnBase, background: "#3b82f6", borderColor: "#3b82f6" }; 
  const btnNeutral = { ...btnBase, background: "#6b7280", borderColor: "#6b7280" }; 
  const btnAccent  = { ...btnBase, background: "#10b981", borderColor: "#10b981" }; 
  const btnDanger  = { ...btnBase, background: "#ef4444", borderColor: "#ef4444" }; 
  return (
    <div style={{ padding: 16, background: "#f7f8fa", minHeight: "100vh", fontFamily: "system-ui, Arial" }}>
      <div style={box}>
        <h2 style={{ margin: 0, marginBottom: 12 }}>Liste de Personnes</h2>

        <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
          <input
            id="name"
            type="text"
            placeholder="Ex: PHI"
            onChange={handleSearch}
            style={{ height: 36, padding: "0 10px", border: "1px solid #d1d5db", borderRadius: 6, width: 260, color: "#111827" }}
          />
          <button id="searchButton" type="button" onClick={gePersonByName} style={btnPrimary}>
            Rechercher une personne
          </button>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 760 }}>
            <thead>
              <tr>
                {["ID","Prénom","Nom","Email","Genre","History","Trending","Delete"].map(h => <th key={h} style={th}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {singlePerson != null ? (
                <tr>
                  <td style={td}>{singlePerson.id}</td>
                  <td style={td}>{singlePerson.name}</td>
                  <td style={td}>{singlePerson.lastName}</td>
                  <td style={td}>{singlePerson.email}</td>
                  <td style={td}>{singlePerson.gender}</td>
                  <td style={td}>
                    <button type="button" style={btnNeutral} onClick={() => alert("admin requis")}>
                      Consult History
                    </button>
                  </td>
                  <td style={td}>
                    <button type="button" style={btnAccent} onClick={() => consultReco(singlePerson.id)}>
                      Recommendation
                    </button>
                  </td>
                  <td style={td}>
                    <button type="button" style={btnDanger} onClick={() => deleteAPerson(singlePerson.id)}>
                      X
                    </button>
                  </td>
                </tr>
              ) : (
                listPerson.map((p, i) => (
                  <tr key={i}>
                    <td style={td}>{p.id}</td>
                    <td style={td}>{p.name}</td>
                    <td style={td}>{p.lastName}</td>
                    <td style={td}>{p.email}</td>
                    <td style={td}>{p.gender}</td>
                    <td style={td}>
                      <button type="button" style={btnNeutral} onClick={() => alert("admin requis")}>
                        Consult History
                      </button>
                    </td>
                    <td style={td}>
                      <button type="button" style={btnAccent} onClick={() => consultReco(p.id)}>
                        Recommendation
                      </button>
                    </td>
                    <td style={td}>
                      <button type="button" style={btnDanger} onClick={() => deleteAPerson(p.id)}>
                        X
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SearchPersonPage;
