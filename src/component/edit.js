import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Data } from "./data";

const Edit = () => {
  // set and get values from the gsx
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setID] = useState("");

  // navigate with logic in js
  let history = useNavigate();

  // get an index of an entry with an id
  let index = Data.map(function (e) {
    return e.id;
  }).indexOf(id);

  //function for handling the edit and pushing
  // changes of editing or updating
  const handleSubmit = (e) => {
    // preventing from reload
    e.preventDefault();
    if (name == "" || age == "") {
      alert("Invalid input");
      return;
    }

    // getting an index of an array
    let a = Data[index];

    //putting the value from the input
    // textfield and replacing it from
    // existing for updation

    a.Name = name;
    a.Age = age;

    // redirecting to homepage
    history("/");
  };

  //useEffect take care that page
  // will be rendered only once
  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
    setID(localStorage.getItem("id"));
  }, []);

  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />

        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
        />

        {/* handling an onclick event running an edit logic */}
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Update
        </button>

        {/*redireting to main page after editing*/}
        <Link to="/">Home</Link>
      </form>
    </div>
  );
};

export default Edit;
