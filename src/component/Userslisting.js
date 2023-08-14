import React, { useEffect } from 'react'
import { FeatchUserList, RemoveUser } from '../Redux/Action'
import { connect } from 'react-redux'
import axios from "axios"
import {Link,useNavigate} from 'react-router-dom'
import {toast} from "react-toastify"
 const Userslisting = (props)=> {
  useEffect(()=>{
props.loaduser();
  },[])
  const removeid=(code)=>{
    // axios.delete('http://localhost:3000/employee/'+ id, {
      if (window.confirm("Do you want to remove")){

        props.removeuser(code);
        props.loaduser();
        toast.success('user removed successfully')
      }
    // })
   
  }
//   const navigate = useNavigate();
//   const useredit = (id)=>{
//     navigate("/users/edit/"+id)
// }
  return (
   props.user.loading?<div><h2>Loading...</h2></div>:
   props.user.errmessage?<div><h2>{props.user.errmessage}</h2></div>:
    <div>
      <Link to="users/add" className='btn btn-success'>AddUser(+)</Link>
    <table class="table caption-top">
  {/* <caption>List of users</caption> */}
  <thead className='table-dark'>
    <tr>
      <th scope="col">Index</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Role</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
{props.user.userlist && props.user.userlist.map (item =>
 <tr key={item.id}>
 {/* <th scope="row">1</th> */}
 <td>{item.id}</td>
 <td>{item.name}</td>
 <td>{item.phone}</td>
 <td>{item.email}</td>
 <td>{item.Role}</td>
 <td >

  <button  onClick={()=>{removeid(item.id)}}>Delete</button> 
  <Link to ={`/users/edit/${item.id}`} className='btn btn-success'>Edit</Link>
     {/* <a onClick={()=>{useredit(item.id)}}  className='btn btn-success'>Edit</a> */}
    
  </td>
 

</tr>

)}
</tbody>
</table>
     </div>
  )
}
const mapStateToProps=(state)=>{
return{
  user:state.user
}
}
const mapDispatchToProps=(dispatch)=>{
  return{
   loaduser:() => dispatch(FeatchUserList()),
   removeuser:(code)=>dispatch(RemoveUser(code))

   }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps) (Userslisting);