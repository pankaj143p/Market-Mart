// import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage';
import PageNotFound from './Pages/404Page';
import OrderSuccessPage from './Pages/orderSuccessPage';
// import userOrders from './features/Authentication/Components/user/userOrders';
import UserOrdersPage from './Pages/userOrderPage';
import UserProfile from './features/user/userComponets/userProfile';
import UserProfilePage from './Pages/userProfilePage';
import { fetchLoggedInUserAsync } from './features/user/userSlice';
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
import Protected from './features/Components/Protected';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/Authentication/AuthSlice';
import { fetchItemsByUserIdAsync } from './features/Cart/CartSlice';
import ProductList from './features/Product_List/ProductList';
import Categories from './features/Categories/Categories';
import ForgetPage from './Pages/ForgetPage';


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
    path: '/categories',
    element: <Categories></Categories>
 },
  {
    path: '/product-detail/:id',
    element: (
      <Protected>
        <ProductDetailPage></ProductDetailPage>
      </Protected>
    ),
  },

  {
    path: '/order-success/:id',
    element: (
      <OrderSuccessPage></OrderSuccessPage>
    ),
  },
  {
    path: '/orders',
    element: (
      <UserOrdersPage></UserOrdersPage>
      // we will add Page later right now using component directly.
      ),
    },
    {
      path: '/profile',
      element: (
        <UserProfilePage></UserProfilePage>
    ),
  },
  {
    path: '*',
    element: (
      <PageNotFound></PageNotFound>
    ),
  },
  {
    path: '/forget',
    element: (
      <ForgetPage></ForgetPage>
    ),
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(()=>{
    if(user){
      dispatch(fetchItemsByUserIdAsync(user.id))
      dispatch(fetchLoggedInUserAsync(user.id))
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