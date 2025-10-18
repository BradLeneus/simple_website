import 'react';
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePerson() {
  const navigate = useNavigate();

  const [person, setPerson] = useState({
    username: "",
    lastName: "",
    email: "",
    gender: "",
    password: "",
  });

  const changement = (e) => {
    console.log(e.target.name + " : " + e.target.value);
    setPerson({ ...person, [e.target.name]: e.target.value });
  };


  const createPerson = () => {
    const payload = {
      name: person.username,
      lastName: person.lastName,
      email: person.email,
      gender: person.gender,
      password: person.password,
    };
    axios.post("http://localhost:8182/person/signUp", payload)
      .then(() => { })
      .catch((error) => { console.log(error); });
  };

  const submitNewPerson = (e) => {
    e.preventDefault();
    createPerson();
    console.log("created");
    navigate("/");
  };

  /**
 * Formulaire inspiré d’un composant Uiverse.io (style & markup).
 * Lien : https://uiverse.io/Yaya12085/short-turtle-53
 * Auteur du style utilisé : Yaya12085
 * (J’ai juste adapté les classes pour React, la logique métier reste la nôtre.)
 */


  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#f7f8fa", padding: 24 }}>
      {/* CSS Uiverse scoped */}
      <style>{`
        .reg-scope .form{display:flex;flex-direction:column;gap:10px;max-width:350px;background:#fff;padding:20px;border-radius:20px;position:relative}
        .reg-scope .title{font-size:28px;color:royalblue;font-weight:600;letter-spacing:-1px;position:relative;display:flex;align-items:center;padding-left:30px}
        .reg-scope .title::before,.reg-scope .title::after{position:absolute;content:"";height:16px;width:16px;border-radius:50%;left:0;background:royalblue}
        .reg-scope .title::before{width:18px;height:18px}
        .reg-scope .title::after{width:18px;height:18px;animation:pulse 1s linear infinite}
        .reg-scope .message,.reg-scope .signin{color:rgba(88,87,87,.822);font-size:14px}
        .reg-scope .signin{text-align:center}
        .reg-scope .signin a{color:royalblue}
        .reg-scope .signin a:hover{text-decoration:underline royalblue}
        .reg-scope .flex{display:flex;width:100%;gap:6px}
        .reg-scope .form label{position:relative;flex:1}
        .reg-scope .form .input{width:100%;padding:10px 10px 20px;border:1px solid rgba(105,105,105,.397);border-radius:10px;outline:0}
        .reg-scope .form .input+span{position:absolute;left:10px;top:15px;color:grey;font-size:.9em;cursor:text;transition:.3s ease}
        .reg-scope .form .input:placeholder-shown+span{top:15px;font-size:.9em}
        .reg-scope .form .input:focus+span,.reg-scope .form .input:valid+span{top:30px;font-size:.7em;font-weight:600}
        .reg-scope .form .input:valid+span{color:green}
        .reg-scope .submit{border:none;outline:none;background:royalblue;padding:10px;border-radius:10px;color:#fff;font-size:16px;transition:.3s;cursor:pointer}
        .reg-scope .submit:hover{background:rgb(56,90,194)}
        @keyframes pulse{from{transform:scale(.9);opacity:1}to{transform:scale(1.8);opacity:0}}
      `}</style>

      <div className="reg-scope">
        <form className="form" onSubmit={submitNewPerson} method="post">
          <p className="title">Register</p>
          <p className="message">Signup now and get full access to our app.</p>

          <div className="flex">
            <label>
              <input
                required
                type="text"
                name="username"
                className="input"
                placeholder=""
                onChange={changement}
              />
              <span>Firstname (Username)</span>
            </label>

            <label>
              <input
                required
                type="text"
                name="lastName"
                className="input"
                placeholder=""
                onChange={changement}
              />
              <span>Lastname</span>
            </label>
          </div>

          <label>
            <input
              required
              type="email"
              name="email"
              className="input"
              placeholder=""
              onChange={changement}
            />
            <span>Email</span>
          </label>

          <label>
            <input
              required
              type="text"
              name="gender"
              className="input"
              placeholder=""
              onChange={changement}
            />
            <span>Gender</span>
          </label>

          <label>
            <input
              required
              type="password"
              name="password"
              className="input"
              placeholder=""
              onChange={changement}
            />
            <span>Password</span>
          </label>

          <button id="btnSignUp" type="submit" className="submit">Submit</button>

          <p className="signin">
            Already have an account? <a href="#">Signin</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default CreatePerson;
