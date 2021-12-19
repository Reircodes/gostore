import './App.css';
import Home from './components/Home';
import BlogPage from './components/BlogPage';
import Shop from './components/Shop';
import Cart from './components/Cart';
import React , {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Post from './components/Post';
import { useSelector } from 'react-redux';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Login from './components/Login';
import db from './firebase'
import { collection,getDoc } from 'firebase/firestore/lite'
import { useDispatch } from 'react-redux';
import { addUser } from './redux/userSlice';
import {  getDocs } from 'firebase/firestore/lite';
import { doc,  deleteDoc  } from "firebase/firestore/lite";
import { useStateValue } from './context/StateProvider';
import { getAuth,  GoogleAuthProvider, signInWithPopup } from "firebase/auth";


function App() {
               
  AOS.init();
  const cart = useSelector((state) => state.cart)
  const user = useSelector((state) => state.user)
  const [cartItem , setCartItem] = useState([ ])
  const [userName , setUserName] = useState(null)



  const dispatch = useDispatch();



  useEffect(()=> {
  async function getPosts() {
      const postsCol=collection(db, 'cartItem');
      const postSnapshot=await getDocs(postsCol);

      setCartItem(postSnapshot.docs.map(doc => ({cart:doc.data() , id : doc.id })))
        

  }
  getPosts();
  } , [cart])



      const signIn =()=>{
        
        const auth = getAuth();
      
        const provider = new GoogleAuthProvider();
              signInWithPopup(auth,provider)
            .then((result) => {
            


              const name =  result.user.displayName;
             
            //   dispatch(addUser({
            //      user: name ,
    
            // }))

            
              setUserName(name)
 

           
              
            }).catch((error)=>alert('Your connection is slow : Please Reload'))
       }
    

  
  // Delete Task

   async function deleteItem (id) {

       setCartItem(cartItem.filter((item) => item.id !== id
      ))
      var ref = doc(db,'cartItem',id);



      const docSnap = await getDoc(ref)

      console.log(docSnap)

          
      if(docSnap.exists()){
        await deleteDoc(ref).then(()=> console.log('Success')).catch((err) => {
          console.log('Unsuccesful Operation')
        })

      }else{
        console.log('Doc does not exist')
      }


   

  }

  



  return (
    <>
    {!userName ? (<Login signIn={signIn}/>)
    : (
      <>
      <BrowserRouter>
      <Header cartItem={cartItem}/>
      <div className="App">
        <Routes>
     <Route path='/' element={<Home/>} /> 
     <Route path='blogpage' element={<BlogPage/> } />
     <Route path='shop' element={<Shop
      /> } />
     <Route path='cart' element={<Cart 
     cartItem={cartItem} 
     deleteItem={deleteItem}/> } />
  
     <Route path='/blogpage/:id' element={<Post/>} />
  
    
       </Routes>
      </div>
  
      </BrowserRouter>
  
      <Footer/>
      </>
    )

    } 
   
   

    </>
  );
}

export default App;
