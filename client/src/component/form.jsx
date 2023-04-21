import React, { useState, createContext } from "react";
import axios from "axios";
import { Data } from "./dataStudent";
import { api } from "./api";

export const studentContext = React.createContext({});

export function From() {
  const [input, setInput] = useState({});
  const [fullName , setFullName] = useState("")
  const [age , setAge] = useState("")
  const [qualification , setQualification] = useState("")
  const [email, setEmail] = useState("")
  const [phone , setPhone] = useState("")

  const obj = {
    fullName: fullName,
    age:age,
    qualification: qualification,
    email :email,
    phone : phone
  }
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/student", obj)
      .then((res) => {
        setInput(res.data.data);
        window.alert("successfully create");
        
      })
      .catch((error) => {
        console.log(error);
       
      });
      setAge("")
      setEmail("")
      setPhone("")
      setFullName("")
      setQualification("")
      
  }

  return (
    <studentContext.Provider value={{ input }}>
      <div className="">
        <div className="container col-6 shadow p-4 rounded">
          <h1>fill all details</h1>
          <hr></hr>
          <form onSubmit={handleSubmit }  >
            <div className="form-group mt-3">
              <label htmlFor="" className="form-label">
                FullName
              </label>
              <input
                type="text"
                required
              
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}

                className="form-control"
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="" className="form-label">
                Age
              </label>
              <input
                type="Number"
                required
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                className="form-control"
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="" className="form-label">
                Qualification
              </label>
              <input
                type="text"
                required
                value={qualification}
                onChange={(e) => {
                  setQualification(e.target.value);
                }}
                className="form-control"
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="" className="form-label">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="form-control"
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="" className="form-label">
               phone
              </label>
              <input
                type="Number"
                required
                value={phone}
                onChange={(e)=>{
                  setPhone(e.target.value)
                }}
                className="form-control"
              />
            </div>

            <div className="form-group mt-3">
              <input
                type="submit"
                required
                className="form-control btn btn-success"
              />
            </div>
          </form>
        </div>
        <Data value={input} />
      </div>
    </studentContext.Provider>
  );
}
