import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import BlogPage from './components/BlogPage';
import Shop from './components/Shop';
import Cart from './components/Cart';
import React , {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import axios from "axios";
import Post from './components/Post';
import { useSelector } from 'react-redux';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Login from './components/Login';
import db from './firebase'
import { collection,addDoc, getDoc } from 'firebase/firestore/lite'
import {  getDocs } from 'firebase/firestore/lite';
import { doc,  deleteDoc  } from "firebase/firestore/lite";



function App() {
  const cart = useSelector((state) => state.cart)
  const [cartItem , setCartItem] = useState([

  ])
  

  console.log(cartItem)

  useEffect(()=> {
  async function getPosts() {
      const postsCol=collection(db, 'cartItem');
      const postSnapshot=await getDocs(postsCol);

      setCartItem(postSnapshot.docs.map(doc => ({cart:doc.data() , id : doc.id })))
        

  }
  getPosts();
  } , [cart])



  
  // Delete Task

   async function deleteItem (id) {
      // await fetch(`http://localhost:5000/cartItem/${id}` ,
      // {
      //   method: 'DELETE'
      // // })
      // await deleteDoc(doc(db, "cartItem"));

      // db.collection('cartItem').doc(id).delete()
      // const postsCol=collection(db, 'cartItem');

      // await postsCol.docs(id).delete();

      // var docRef = collection(db, "cartItem").doc(id)

      // docRef.delete()

      

      // const postsCol=collection(db, 'cartItem');
      // // await deleteDoc(postsCol , id)
      // db.collection("cartItem").document(id).delete() 

      var ref = doc(db,'cartItem',id);



      const docSnap = await getDoc(ref)

      console.log(docSnap)


      if(docSnap.exists()){
        await deleteDoc(ref).then(()=> console.log('Success')).catch((err) => {
          console.log('Unsuccesful Operation')
        })

      }else{
        console.log('Docc does not exist')
      }

      
// await deleteDoc(doc(db, "cartItem", id));
            

      



      setCartItem(cartItem.filter((item) => item.id !== id
      ))

  }

  // Add To Cart 
  // const addGcaItem = async (item) => {
  //   const res = await fetch('http://localhost:5000/cartItem' , 
  //   {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(item)
  //   })


  //   const data =await res.json()

  //   setCartItem([...cartItem , data])
  // }

  // const addShopItem = async (item) => {
    // const res = await fetch('http://localhost:5000/cartItem' , 
    // {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(item)
    // })

  //   const res = await fetch('http://localhost:5000/cartItem')


  //   const data =await res.json()

  //   setCartItem([...cartItem , data])
  // }


  AOS.init();
const user = null
  return (
    <>
   {/* <Login/> */}
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
  );
}

export default App;
