import React, { useEffect, useState } from 'react'
import Styles from "./emp.module.css"
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const EmpListing = () => {
    const [users , setUsers]=useState([]);
    // console.log(users)
    const navigate = useNavigate();

    let loadEdit = (id)=>{
        navigate("/employee/edit/"+id)
    }
    // ! http://localhost:8000/users
    useEffect(()=>{
        fetch("http://localhost:8000/users")
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            setUsers(data)
        })
        .catch(err=>console.log(err))
    },[]);
    // !for deleting

    const removeData=id=>{
        fetch("http://localhost:8000/users/"+id , {
            method:"DELETE",
        }).then(()=>{
            toast.success("user deleted successfully")
        }).catch(()=>{
            toast.err("user data not deleted")
        })
    }

    // !single user data
    let loadDetails = id => {
        navigate("/employee/details/"+id)
    }
  return (
    <div className={Styles.empList}>
        <div className={Styles.addUser}>
            <Link to="/employee/create">Add User</Link>
        </div>
      <table>
        <thead>
           <tr>
           <th>Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>Active</th>
            <th>Actions</th>
           </tr>
        </thead>
        <tbody>
            {users.length > 0 && users.map((user,i)=>{
                return(
                    <tr key={i}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.isActive == true? <span style={{color:"green"}}>Active</span>:<span style={{color:"red"}}>inActive</span>}</td>
                        <td className={Styles.actionBtns}>
                            <a href='' onClick={()=>loadEdit(user.id)}>Edit</a>
                            <a href='' onClick={()=>loadDetails(user.id)}>View Details</a>
                            <a href='' onClick={()=>removeData(user.id)}>Delete</a>
                        </td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default EmpListing
