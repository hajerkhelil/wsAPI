
import React, {useEffect, useState} from 'react'
import axios  from "axios"
import User from './User';

 function Users() {
const [users, setUsers]=  useState([])
const [error, setError]=  useState(false)

    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch((err)=> setError(true));       
    }, []);

    return (
        <div>
            {users.map((user) => ( <User  user={user} ></User>))}
        </div>
    ); 
};

export default Users