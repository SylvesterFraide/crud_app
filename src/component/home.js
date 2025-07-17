import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Data } from './data';

const Home = () => {
  let history = useNavigate();

  //function to set the id, name, and age in local storage
  function setID(id, name, age) {
    localStorage.setItem("id", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
  }

  //function to delete to delete an entry
  function deleted(id) {
    let index = Data
    .map(function (e) {
      return e.id;
    }) 
    .indexOf(id); 

    //deleting the entry with the specific index
    Data.splice(index, 1);

    //redirecting to the same page to re-render
    history("/");
  }

  return (
    <div className='home'>
      <h1>User Management</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            Data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.Name}</td>
                  <td>{item.Age}</td>
                  <td>
                    <Link  to= {'/edit'}>
                      <button onClick={() => setID(item.id, item.Name, item.Age )}>
          
                        Update
                      </button>
                    </Link>

                    <button onClick={() => deleted(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div className='create-user'>
        <Link to={"/create"}>
          <button>
            Create New User
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home;