import axios from "axios"
import {FAIL_REQUEST, GET_USER_LIST, MAKE_REQUEST, DELETE_USER, ADD_USERS, UPDATE_USER, GET_USER_OBJ} from "./ActionType"
export const makeRequest = ()=>{
    return{
        type:MAKE_REQUEST
    }
}
export const failRequest = (err)=>{
    return{
        type:FAIL_REQUEST,
        payload:err
    }
}
export const getUserList = (data)=>{
    return{
        type:GET_USER_LIST ,
        payload:data
    }
}
export const deleteuser =()=>{
    return{
        type:DELETE_USER,
        
    }
}
export const addUsers = (users)=>{
    console.log(users)
    return{
        type: ADD_USERS,
        payload:users
        
        
    }
}

export const updateUser=()=>{
    return{
        type:UPDATE_USER,
    }
}

export const getUserobj=(data)=>{
    console.log(data)
    return{
        type:GET_USER_OBJ,
        payload:data
    }
}


export const FeatchUserList =()=>{
    return(dispatch)=>{
   dispatch(makeRequest)
   //setTimeout(()=>{
 axios.get('http://localhost:3000/employee').then(res=>{
    const userlist=res.data;
    dispatch(getUserList(userlist));
   }).catch(err=>{
    dispatch(failRequest(err.mesage))
   })
//},2000)
    }
}

export const RemoveUser = (code)=>{
return(dispatch)=>{
    dispatch(makeRequest)
    axios.delete("http://localhost:3000/employee/" + code ).then(res=>{
        dispatch(deleteuser());
    }).catch(err=>{
        dispatch(failRequest(err.mesage))
    })
}
}

export const PostUsers =(data)=>{
    return(dispatch)=>{
   dispatch(makeRequest)
   //setTimeout(()=>{
 axios.post('http://localhost:3000/employee' ,data).then(res=>{
    const userlist=res.data;
    dispatch(addUsers(userlist));
   }).catch(err=>{
    dispatch(failRequest(err.mesage))
   })
//},2000)
    }
}


export const PutUsers =(data,code)=>{
    console.log(data)
    return(dispatch)=>{
   dispatch(makeRequest)
   //setTimeout(()=>{
 axios.put('http://localhost:3000/employee/'+code,data).then(res=>{
   // const userlist=res.data;
    dispatch(updateUser());
   // toast.success("user updated successfully")
   }).catch(err=>{
    dispatch(failRequest(err.mesage))
   })
//},2000)
    }
}


export const FetchUserobj =(code)=>{
    console.log(code)
    return(dispatch)=>{
   dispatch(makeRequest)
   //setTimeout(()=>{
 axios.get(`http://localhost:3000/employee/${code}`).then(res=>{
    const userlist=res.data;
    console.log(userlist)
    dispatch(getUserobj(userlist));
   }).catch(err=>{
    dispatch(failRequest(err.mesage))
   })
//},2000)
    }
}