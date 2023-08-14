import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { PostUsers } from '../Redux/Action';
import {toast} from 'react-toastify'

const Addusers =() =>{
const[userdetails , setUserdetails] = useState({
  id:"",
  name:"",
  phone:"",
  email:"", 
  Role:"",
});
const dispatch=useDispatch();
const navigate = useNavigate();

const handilsubmit=(e)=>{
  dispatch(PostUsers(userdetails))
   
navigate('/users')
alert("saved successfully");
toast("user added successfully")
}
 const Changehandler=(e)=>{

  setUserdetails({...userdetails, [e.target.name]:e.target.value})
 }



  return (
    <div className='row'>
        
        <div className='offset-lg-3 col-lg-6'>
            <form  action="" className='container' onSubmit={handilsubmit}>
                <div className='card' style={{"textAlign":"left"}}>
                    <div className='card-title'>
                        <h2>Employee Create</h2>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>ID</label>
                                    <input  disabled="disabled" className='form-control'/>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Name</label>
                                    <input   name="name"onChange={Changehandler} className='form-control'/>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Email</label>
                                    <input  name="email" onChange={Changehandler} className='form-control'/>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Phone</label>
                                    <input   name="phone" onChange={Changehandler} className='form-control'/>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Role</label>
                                    <input   name="Role" onChange={Changehandler} className='form-control'/>
                                </div>
                            </div>
                          
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                <button className='btn btn-success' type="submit">Save</button>
                                <Link to="/" className='btn btn-danger' >Back</Link>
                                   </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Addusers;