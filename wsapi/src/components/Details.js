
import React , {useEffect, useState} from 'react'
import {useParams} from "react-router"
import { axios } from 'axios';

function Details() {

    let {id}= useParams()
    const [User, setUser]=useState({});
    const [Loading, setLoading]=useState(true);

    useEffect(() => {
       axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then (res => {
          setUser(res.data); 
          setLoading(false);
        })

      .catch((err) => console.log(err));
    }, [])
    return (
        <div>

            {
              Loading ? 'wait for the id to load' :
           
          <div> <h1> {User.address.street} </h1>
          <h1> {User.email} </h1> </div>
            }
        </div>
    )
}

export default Details
