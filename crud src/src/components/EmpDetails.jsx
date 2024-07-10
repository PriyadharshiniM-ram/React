import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const EmpDetails = () => {
  const {empid} = useParams();
  const [users , setUsers]=useState({});
  console.log(users)
  useEffect(()=>{
    fetch("http://localhost:8000/users/"+empid)
    .then(res=>res.json())
    .then(data=>{
        // console.log(data)
        setUsers(data)
    })
    .catch(err=>console.log(err))
},[]);
  return (
    <div>
      <h1>{users.name}</h1>
      <h2>{users.email}</h2>
      <h2>{users.phone}</h2>
      <h2>{users.isActive ? "Active":"inActive"}</h2>

      <Link to='/'>Back to Home</Link>
    </div>
  )
}

export default EmpDetails
