<<<<<<< HEAD
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
// import SignupPage from './Pages/SignupPage';
import Signup from './features/Authentication/Components/SignUp';
import CartPage from './Pages/CartPage';
import Checkout from './Pages/CheckOutPage';
import ProductDetailPage from './Pages/ProductDetailsPage';
import ProductList from './features/Product_List/ProductList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/signup',
    element: <SignupPage></SignupPage>
  },
  {
    path: '/cart',
    element: <CartPage></CartPage>,
  },
  {
     path: '/checkout',
     element: <Checkout></Checkout>
  },
  {
    path: '/productdetails',
    element:<ProductDetailPage></ProductDetailPage>
  },
 
]);
=======
import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
>>>>>>> c3ecd63e1858507c68dd45e4e6baff0548d5b716

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;