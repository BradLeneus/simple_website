import { useEffect, useState } from 'react';
import axios from "axios";
// import { searchPeople } from './utils/search';

import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import SearchPersonPage from "./Pages/SearchPersonPage.jsx";
import Navbar from "./Pages/Navbar.jsx";
import CreatePerson from "./CreatePerson.jsx";

function App() {
 return (
     <BrowserRouter>
         <div>
             <Navbar/>
             <div>
                 <Routes>
                    <Route path="/" element={<SearchPersonPage/>}/>
                     <Route path="SignUp" element={<CreatePerson/>}/>
                 </Routes>
             </div>

         </div>

     </BrowserRouter>

 )
}

export default App;
