import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutUserAsync, selectLoggedInUser } from '../features/Authentication/AuthSlice';
import { Navigate } from 'react-router-dom';


export default function LogoutPage() {
    const user = useSelector(selectLoggedInUser);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(LogoutUserAsync)
    })
  return (
     <>
       {!user && <Navigate to='/login' replace={true}></Navigate>}
     </>   
  ) 
} 

