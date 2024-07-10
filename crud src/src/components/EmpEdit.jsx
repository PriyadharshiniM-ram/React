import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Styles from "./emp.module.css"
import { toast } from 'react-toastify';
const EmpEdit = () => {
  const {empid} = useParams();
  

useEffect(()=>{
  fetch("http://localhost:8000/users/"+empid).then((res)=>res.json())
.then(data=>{
  // console.log(data);
  setUsername(data.name);
  setEmail(data.email);
  setPhone(data.phone);
  setIsActive(data.isActive)
})
.catch((err)=>console.log(err))
},[]);
const [name,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [isActive,setIsActive]=useState(false);
    const navigate = useNavigate();

    let handleSubmit= e=>{
      e.preventDefault();
      let payload= {name , email , phone , isActive};
     fetch("http://localhost:8000/users/"+empid,{
      method:"PUT",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(payload)
     }).then(()=>{
      toast.success("user updated successfully");
      navigate("/")
     }).catch(()=>toast.error("user not updated"))
      
  }
  return (
    <div className={Styles.formBlock}>
        <h1>Update User</h1>
     <form onSubmit={handleSubmit}>
        <div className={Styles.formgroup}>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='enter name'
            value={name}
            onChange={e=>setUsername(e.target.value)}
            />
        </div>
        <div className={Styles.formgroup}>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='enter email'
            value={email}
            onChange={e=>setEmail(e.target.value)} />
        </div>
        <div className={Styles.formgroup}>
            <label htmlFor="">Phone No</label>
            <input type="tel" placeholder='enter Phone number'
            value={phone}
            onChange={e=>setPhone(e.target.value)} />
        </div>
        <div className={Styles.formgroup}>
           
            <input type="checkbox" placeholder='enter name'
            value={isActive}
            onChange={e=>setIsActive(e.target.checked)}
            />
            <span id={Styles.isactive}>isActive</span>
        </div>
        <div className={Styles.formgroup}>
            <input type="submit" value='Update'/>
        </div>
        <div className={Styles.navigateBack}>
            <Link to='/'>Go Back</Link>
        </div>
     </form>
    </div>
  )
}

export default EmpEdit
