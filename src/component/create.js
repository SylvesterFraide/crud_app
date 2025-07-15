import React, { useState } from 'react'
import { Data } from './data';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const Create = () => {

    //making usestate for setting and fetching a value in jsx
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    //using usenavigate for redirecting to pages
    let history = useNavigate();

    //function for creating a post/entry
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent reload

        const ids = uuid(); // creating unique id
        let  uni = ids.slice(0, 8) //slicing unique id

        //fetching a value from usestate and pushing to javascript object
        let a = name, b = age;
        if (name == '' || age == '') {
            alert('invalid input');
            return;
        }
            Data.push({id:uni, Name: a, Age: b});

            //redirecting to home page after creating done
            history('/');
    };

  return (
    <div>Create</div>
  )
}

export default Create;