import 'react';
import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function LoginPage() {
  const navigate  = useNavigate();
  const [person, setPerson] = useState({ email:"", password:"" });

  const changement = (e) =>{
    console.log(e.target.name + " : " + e.target.value);
    setPerson({...person, [e.target.name]: e.target.value});
  };


  const login = async () => {
    try {
      const { data } = await axios.post("http://localhost:8182/auth/login", {
        email: person.email,
        password: person.password
      });

      if (data?.token) {
        localStorage.setItem("token", data.token); 
        navigate("/");
      } else {
        alert("Identifiants invalides");
      }
    } catch (error) {
      console.error("Erreur de connexion:", error);
      alert("Erreur de connexion");
    }
  };

  const submitNewPerson = (e) => {
    e.preventDefault();
    login();
  };
  /**
 * Formulaire inspiré d’un composant Uiverse.io (style & markup).
 * Lien : https://uiverse.io/Yaya12085/short-turtle-53
 * Auteur du style utilisé : Yaya12085
 * (J’ai juste adapté les classes pour React, la logique métier reste la nôtre.)
 */


  return (
    <div className="login-scope" style={{minHeight:"100vh",display:"grid",placeItems:"center",background:"#f7f8fa",padding:24}}>
      <style>{`
        .login-scope .form{display:flex;flex-direction:column;gap:10px;max-width:350px;background:#fff;padding:20px;border-radius:20px;position:relative}
        .login-scope .title{font-size:28px;color:royalblue;font-weight:600;letter-spacing:-1px;position:relative;display:flex;align-items:center;padding-left:30px}
        .login-scope .title::before,.login-scope .title::after{position:absolute;content:"";height:16px;width:16px;border-radius:50%;left:0;background:royalblue}
        .login-scope .title::before{width:18px;height:18px}
        .login-scope .title::after{width:18px;height:18px;animation:pulse 1s linear infinite}
        .login-scope .message{color:rgba(88,87,87,.82);font-size:14px}
        .login-scope .form label{position:relative}
        .login-scope .input{width:100%;padding:10px 10px 20px;border:1px solid rgba(105,105,105,.4);border-radius:10px;outline:0}
        .login-scope .input+span{position:absolute;left:10px;top:15px;color:grey;font-size:.9em;transition:.3s}
        .login-scope .input:placeholder-shown+span{top:15px;font-size:.9em}
        .login-scope .input:focus+span,.login-scope .input:valid+span{top:30px;font-size:.7em;font-weight:600}
        .login-scope .input:valid+span{color:green}
        .login-scope .submit{border:none;background:royalblue;padding:10px;border-radius:10px;color:#fff;font-size:16px;cursor:pointer;transition:.3s}
        .login-scope .submit:hover{background:rgb(56,90,194)}
        @keyframes pulse{from{transform:scale(.9);opacity:1}to{transform:scale(1.8);opacity:0}}
      `}</style>

      <form className="form" onSubmit={submitNewPerson} method="post">
        <p className="title">Login</p>
        <p className="message">Welcome back! Please sign in.</p>

        <label>
          <input required type="email" name="email" className="input" placeholder="" onChange={changement}/>
          <span>Email</span>
        </label>

        <label>
          <input required type="password" name="password" className="input" placeholder="" onChange={changement}/>
          <span>Password</span>
        </label>

        <button id="btnSignUp" type="submit" className="submit">Sign in</button>
      </form>
    </div>
  );
}

export default LoginPage;
