import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import React from 'react';
import { useReactiveVar } from "@apollo/client";
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { userState } from './GlobalState';
import axios from 'axios';

axios.defaults.withCredentials = true;

const ProtectedRoute = ({children}) => {
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
      // need get call from server
        // .get(`http://localhost:5173/tripplanner/logInUser`)
        .then((res)=>{
          userState(res.data);
          setApiComplete(true);
        })
        .catch((err)=>{
          log(err);
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
        <Route path="/" element={user ? <Navigate to="/:firstName/trips" /> : <LandingPage />} />
        <Route
          path ="/:firstName/trips"
          element={
            <ProtectedRoute>
              {/* <MainTripDashboard /> */}
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>    
  )
}

export default App
