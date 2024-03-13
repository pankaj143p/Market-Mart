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
// import Signup from './features/Authentication/Components/SignUp';
import CartPage from './Pages/CartPage';
import Checkout from './Pages/CheckOutPage';
import ProductDetailPage from './Pages/ProductDetailsPage';
import Protected from './features/Authentication/Components/Protected';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/Authentication/AuthSlice';
import { fetchItemsByUserIdAsync } from './features/Cart/CartSlice';
import ProductList from './features/Product_List/ProductList';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Protected>
        <Home></Home>
      </Protected>
    ),
  },
  {
    path:'/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/signup',
    element: <SignupPage></SignupPage>
  },
  {
    path: '/cart',
    element: (
      <Protected>
        <CartPage></CartPage>
      </Protected>
    ),
  },
  {
     path: '/checkout',
     element: <Checkout></Checkout>
  },
  {
    path: '/product-detail/:id',
    element: (
      <Protected>
        <ProductDetailPage></ProductDetailPage>
      </Protected>
    ),
  },
 
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(()=>{
    if(user){
      dispatch(fetchItemsByUserIdAsync(user.id))
    }
  },[dispatch, user])

  return (
    <div className="App">
      {/* <Home></Home> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;