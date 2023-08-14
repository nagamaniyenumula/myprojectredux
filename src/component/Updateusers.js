import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FetchUserobj, PutUsers } from '../Redux/Action';
//import {toast} from 'react-toastify'

const Updateusers =() =>{


const [id, idchange] = useState("");
const [name, namechange] = useState("");
const [phone, phonechange] = useState("");
const [email, emailchange] = useState("");
const [Role, Rolechange] = useState("");
const dispatch=useDispatch();
const navigate = useNavigate();
 console.log(useParams());
 const code=5

const userobj=useSelector((state)=>state.user.userobj)
const handilsubmit=(e)=>{
    e.preventDefault();
    const  userobj = {id, name, email, phone, Role};
    dispatch(PutUsers(userobj));
     navigate('/users')


}
useEffect(()=>{
  dispatch(FetchUserobj(code))
},[])
useEffect(()=>{
  if(userobj ){
    idchange(userobj.id);
    namechange(userobj.name);
    phonechange(userobj.name);
    emailchange(userobj.name);
    Rolechange(userobj.name);
    
  }
},[userobj])

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
                                    {/* <input name="id"  className='form-control' value={code} /> */}
                                    <input  value={id} disabled="disabled" className='form-control'/>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Name</label>
                                    <input    value={name} onChange={e=>namechange(e.target.value)} className='form-control'/>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Email</label>
                                    <input   value={email} onChange={e=>emailchange(e.target.value)} className='form-control'/>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Phone</label>
                                    <input  value={phone} onChange={e=>phonechange(e.target.value)} className='form-control'/>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Role</label>
                                    <input    value={Role} onChange={e=>Rolechange(e.target.value)} className='form-control'/>
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

export default Updateusers;