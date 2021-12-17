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

function App() {
  const cart = useSelector((state) => state.cart)
  const [cartItem , setCartItem] = useState([

  ])
  

  console.log(cartItem)

  const client = axios.create({
    url : "http://localhost:5000"
  })

  useEffect(()=> {
 
 fetchCartItems()

  } , [cart])


  const fetchCartItems = () => {
    axios.get('http://localhost:5000/cartItem').then((response) => {
      setCartItem(response.data)
      }).catch((error) => {
        console.log(error)
  })

  setCartItem(cart)

  }




  
  // Delete Task

  const deleteItem = async (id) => {
      await fetch(`http://localhost:5000/cartItem/${id}` ,
      {
        method: 'DELETE'
      })

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
