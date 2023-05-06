import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Users() {
    // const [data, setUsers] = useState([]);
   
    // useEffect(() => {
    //     getAllUsers ();
    // }, []);

    // const getAllUsers  = async () => {
    //     let result = await fetch('http://localhost:3001/users/getAll');
    //     result = await result.json();
    //     setUsers(result);
    // }
   
    const [user, setUser] = useState([]);
    useEffect(() => {
    fetch ("http://localhost:3001/users/getAll")
        .then((res) => res.json())
        .then((res) => {
          console.log(res.data);
          setUser(res.data);
        });
    }, []);

    return (
        <div className='product-list'>
            <h1>Users </h1>
            <ul>
                <li>ID</li>
                <li>role</li>
                <li>userName</li>
                <li>firstName</li>
                <li>lastName</li>
                <li>email</li>
               
            </ul>
            {
                user.map((item,index)=>
                <ul key={item.id}>
                <li>{index+1}</li>
                <li>{item.role}</li>
                <li>{item.userName}</li>
                <li>{item.firstName}</li>
                <li>{item.lastName}</li>
                <li>{item.email}</li>
             
                 
            </ul>
                )
            }
            
        </div>
    )
}

export default Users
