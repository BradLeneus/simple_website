import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function TrendingPage(){
  const para = useParams();
  const id = para.id;

  const [listSeries,setListSeries] = useState([]);

  const loadAllSeries = async () =>{
    const path = "http://localhost:8182/person/tendence";
    const result = await axios.get(path);
    setListSeries(result.data);
  };

  useEffect(() => { loadAllSeries(); }, [listSeries]);


  const card  = {border:"1px solid #e5e7eb",borderRadius:12,overflow:"hidden",boxShadow:"0 6px 14px rgba(0,0,0,.06)"};
  const body  = {padding:12};
  const foot  = {display:"flex",justifyContent:"space-between",alignItems:"center",gap:8,padding:10,borderTop:"1px solid #eef2f7",background:"#fafcff"};

  return (
    <div className="container" style={{padding:"16px 10px"}}>
      <div className="row gap-2" style={{display:"flex",flexWrap:"wrap",gap:12}}>
        {listSeries.map((ligne, i) => (
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
        ))}
      </div>
    </div>
  );
}

export default TrendingPage;
