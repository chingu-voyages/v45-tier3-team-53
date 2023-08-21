import { useEffect, useState, ReactElement } from 'react';
import './App.css';
import React from 'react';
import { useReactiveVar } from "@apollo/client";
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { userState } from './GlobalState';
import axios from 'axios';
import LandingPage from './components/pages/LandingPage';
import SignInPopUp from './components/popup/SignIn';
import SignUpPopUp from './components/popup/SignUp';
import MainTripDashboard from './components/pages/MainTripDashboard';

axios.defaults.withCredentials = true;

const ProtectedRoute = ({children} : {children:ReactElement}) => {
  const user = useReactiveVar(userState);

  if(!user){
    return <Navigate to="/" />;
  }
  return children;
}

function App() {
  const user = useReactiveVar(userState);
  const [apiComplete, setApiComplete] = React.useState<boolean>(user ? true : false);

  useEffect(()=> {
    if(!user) {
      axios
        .get(`http://localhost:8080/dashboard-controller`)
        .then((res)=>{
          userState(res.data);
          setApiComplete(true);
        })
        .catch((err)=>{
          console.log(err);
          setApiComplete(true);
        })
    }
  })

  if(!apiComplete) {
    return null;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignInPopUp />} />
        <Route path="/sign-up" element={<SignUpPopUp />} />
        <Route path="/" element={user ? <Navigate to="/trips" /> : <LandingPage />} />
        <Route
          path ="/trips"
          element={
            <ProtectedRoute>
              <MainTripDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>    
  )
}

export default App
