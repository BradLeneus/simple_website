import 'react';
import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
//import {useNavigate} from "react-router-dom";




function CreatePerson() {

    const navigate  = useNavigate();

    const [person, setPerson] = useState({
            username:"",
            lastName:"",
            email:"",
            gender:"",
            password:"",

        }


    );

    const changement = (e) =>{
        console.log("" + e.target.name + " : " + e.target.value)
        setPerson({...person, [e.target.name]:e.target.value})
    }

  //  const navigate = useNavigate();


  /*  const isUsernameAlreadyTaken = async (name) =>{
        let text = document.getElementById("labelTakenUsername")
        const result = await axios.get(`http://localhost:8586/Customer/getByName/${name}`)

        if(!result.data){
            createCustomer()
            text.className = "invisible"
        }
        else {

            text.className = "visible"

        }
    }*/
    const createPerson = () => {
        axios.post("http://localhost:8182/auth/register", person)
            .then(() =>{

            }).catch((error) =>{
            console.log(error)
        })
    }

    const submitNewPerson = (e) =>{
        e.preventDefault()

        createPerson()
        console.log("created")
        navigate("/")

    }
    return (
        <div>

            <div className="container inscription mt-5">
                <div className="row justify-content-lg-start">
                    <div className="">
                        <h2 className="mb-4" id={"h2SignUp"}>Sign Up </h2>
                        <form className="form-detail" onSubmit={(e) => submitNewPerson(e)} method="post">
                            <div className="mb-3">

                                <label htmlFor="firstname" className="form-label text-start d-block"
                                       style={{color: "white"}}>name</label>
                                <input type="text" name="name" className="form-control" id="firstname"
                                       placeholder="Username"
                                       required
                                       onChange={(e) => changement(e)}
                                />
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="lastname" className="form-label text-start d-block"
                                       style={{color: "white"}}>lastName</label>
                                <input type="text" name="lastName" className="form-control" id="lastname"
                                       placeholder="lastName"
                                       required
                                       onChange={(e) => changement(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label text-start d-block"
                                       style={{color: "white"}}>Email</label>
                                <input type="email" name="email" className="form-control" id="email"
                                       placeholder="Enter your email"
                                       required
                                       onChange={(e) => changement(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="gender" className="form-label text-start d-block"
                                       style={{color: "white"}}>Gender</label>
                                <input type="text" name="gender" className="form-control" id="gender"
                                       placeholder="Enter your gender"
                                       required
                                       onChange={(e) => changement(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label text-start d-block"
                                       style={{color: "white"}}>Gender</label>
                                <input type="text" name="password" className="form-control" id="password"
                                       placeholder="Enter your password"
                                       required
                                       onChange={(e) => changement(e)}
                                />
                            </div>
                            <button id="btnSignUp" type="submit" className="btn btn-primary">Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CreatePerson;