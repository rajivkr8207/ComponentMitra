import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Main from './Pages/Main'
import Footer from './Components/Footer/Footer'
import LoginSignUP from './Pages/LoginSignUP'
import Cart from './Pages/Cart'
import Profile from './Pages/Profile'
import MyOrder from './Pages/MyOrder'
import Myacount from './Components/Myaccount/Myacount'
import MyOrders from './Components/MyOrders/MyOrders'
import Mywishlist from './Components/Mywishlist/Mywishlist'
import Myaddress from './Components/Myaddress/Myaddress'

import categorydata from './assets/Data/CategoryData'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
const App = () => {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/login' element={<LoginSignUP />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/myorder' element={<MyOrder />} />
          <Route path="mywishlist" element={<Mywishlist />} />
          {/* <Route path="myaccount" element={<Myacount />} /> */}
          <Route path='/profile' element={<Profile />} >
          <Route path="" element={<Navigate to="myaccount" />} />
            <Route path="myaccount" element={<Myacount />} />
            <Route path="mywishlist" element={<Mywishlist />} />
            <Route path="myaddress" element={<Myaddress />} />
            <Route path="myorder" element={<MyOrders />} />
            </Route>
            {categorydata.map((item)=>{
              return(
                <Route path={`${item.name}`} element={<ShopCategory category={item.name} />} />
              )
            })}
            <Route path="product">
            <Route path=":productId" element={<Product />} />
            </Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App