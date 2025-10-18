import React, {useEffect, useState} from "react";
import axios from "axios";

function PageHistory(){
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [listSeries, setListSeries] = useState([]);

  useEffect(() => { fetchUser(); }, []);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) { alert("veuillez vous connecter"); setError("Aucun token trouvé — connecte-toi d'abord."); return; }
      const me = await axios.get("http://localhost:8182/auth/me", { headers:{ Authorization:`Bearer ${token}` }});
      setUser(me.data);
      await loadAllSeries(me.data.id, token);
    } catch (err) { console.error(err); setError("Non connecté ou token invalide"); }
  };

  const loadAllSeries = async (id, token) => {
    const url = `http://localhost:8182/history/${id}`;
    const res = await axios.get(url, { headers:{ Authorization:`Bearer ${token}` }});
    setListSeries(Array.isArray(res.data) ? res.data : []);
  };

 
  const card  = {border:"1px solid #e5e7eb",borderRadius:12,overflow:"hidden",boxShadow:"0 6px 14px rgba(0,0,0,.06)"};
  const body  = {padding:12};
  const foot  = {display:"flex",justifyContent:"space-between",alignItems:"center",gap:8,padding:10,borderTop:"1px solid #eef2f7",background:"#fafcff"};

  if (error) return <div className="container" style={{padding:16,color:"#b91c1c"}}>{error}</div>;

  return (
    <div className="container" style={{padding:"16px 10px"}}>
      <div className="row gap-2" style={{display:"flex",flexWrap:"wrap",gap:12}}>
        {listSeries.length === 0 ? (
          <div style={{padding:16,color:"#6b7280"}}>Aucune série dans l’historique.</div>
        ) : (
          listSeries.map((ligne,i)=>(
            <div className="card col-2" style={{...card,flex:"1 1 220px",maxWidth:260}} key={i}>
              <div className="card-body" style={body}>
                <h5 className="card-title" style={{margin:0,marginBottom:6,fontSize:16,fontWeight:700}}>
                  Titre: {ligne.title}
                </h5>
                <p className="card-text" style={{margin:"4px 0"}}>Genre: {ligne.genre}</p>
                <p style={{margin:"4px 0"}}>Nombre d'épisodes: {ligne.episodesNumber}</p>
              </div>
              <div className="card-footer" style={foot}>
                <small className="text-body-secondary" style={{color:"#64748b"}}>Note: {ligne.rating}</small>
                
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default PageHistory;
