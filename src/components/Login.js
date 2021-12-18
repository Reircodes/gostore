import React from 'react'
import './Login.css'
import { getAuth,  GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useStateValue } from '../context/StateProvider';
import { actionTypes } from '../context/AppReducer';
import { useSelector , useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice';

const Login = ({signIn}) => {
    // const [dispatch]= useStateValue();
    const dispatch = useDispatch();
    // const customizedMiddleware = getDefaultMiddleware({
    //     serializableCheck: false
    //   })
      

    // const signIn =()=>{
    //     const auth = getAuth();
      
    //     const provider = new GoogleAuthProvider();
    //           signInWithPopup(auth,provider)
    //         .then((result) => {
    //             console.log(result.user)

             
    //     dispatch(addUser({
    //            user: result.user.displayName
    //     }))

    //             // dispatch({
    //             //     type: actionTypes.SET_USER,
    //             //     user:result.user,
    //             // })
    
        
    //         }).catch((error)=>console.log(error))
    //    }
    
       

    return (
        <div className='login' >
           <img  src='https://gostore-be87.kxcdn.com/gostore/wp-content/themes/gostore/images/logo.png'/> 
         <button onClick={signIn} >
             Login
         </button>
         <p>Click to <span>automatically</span> login with gmail</p>
        </div>
    )
}

export default Login
