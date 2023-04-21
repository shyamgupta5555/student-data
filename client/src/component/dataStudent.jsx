import React, { useEffect, useState ,useContext } from "react";
import axios from "axios";
import { studentContext } from "./form";

export function Data() {
  const [allDetails, setDetails] = useState([]);

const {input } = useContext(studentContext)

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/student")
      .then((res) => {
        console.log(res.data.data);
        setDetails(res.data.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, [input]);

  return (
    <div className="mt-5">
      <table>
        <thead style={{"color" : "white" , backgroundColor : "green"}}>
          <tr>
            <th>fullName</th>
            <th>age</th>
            <th>phone</th>
            <th>email</th>
            <th>qualification</th>
          </tr>
        </thead>
        <tbody>
          {allDetails.map((user, index) => {
            return (
              <tr>
                <td>{user.fullName}</td>
                <td>{user.age}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.qualification}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
