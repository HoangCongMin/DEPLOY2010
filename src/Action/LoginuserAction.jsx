import {LOG_IN_REQUEST,LOG_OUT,LOG_IN_SUCCESS} from'../Constant/Constant'


// export const Flogin=(email,password)=> async(dispatch)=>{
//     try {
//         const res= await axios.post('http://localhost:5000/users/login',{email,password})
//     dispatch({
//         type:LOG_IN,
//         payload:res.data
//     })
//     console.log(res.data)
//     } catch (error) {
//         console.log(error);
//     }

    
// }

export const Flogin=(email,password)=>{
     return{
        type:LOG_IN_REQUEST,
        payload:{email,password}
     }
}

export const FloginSuccess=(payload)=>{
     return{
        type:LOG_IN_SUCCESS,
        payload
     }
}


export const Logout=(data)=>{
    return{
       type:LOG_OUT,
       payload:data
    }
}

