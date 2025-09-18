import { useEffect, useState } from 'react';
import axios from "axios";
// import { searchPeople } from './utils/search';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import SearchPersonPage from "./Pages/SearchPersonPage.jsx";
import NavbarPage from "./Pages/NavbarPage.jsx";
import CreatePerson from "./CreatePerson.jsx";
import SeriesCatalog from "./Pages/SeriesCatalog.jsx";
import PageHistory from "./Pages/PageHistory.jsx";
import TrendingPage from "./Pages/TrendingPage.jsx";

function App() {
 return (
     <BrowserRouter>
         <div>
             <NavbarPage/>
             <div>
                 <Routes>
                    <Route path="/" element={<SearchPersonPage/>}/>
                     <Route path="SignUp" element={<CreatePerson/>}/>
                     <Route path={"series"} element={<SeriesCatalog/>}/>
                     <Route path={"history/:id"} element={<PageHistory/>}/>
                     <Route path={"trending/:id"} element={<TrendingPage/>}/>
                 </Routes>
             </div>

         </div>

     </BrowserRouter>

 )
}

export default App;
