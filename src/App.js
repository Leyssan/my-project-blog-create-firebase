//import logo from './logo.svg';
//import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import  firebase  from './firebase'

import { Home } from 'pages/Home';
import { About } from 'pages/About';
import { Blog } from 'pages/Blog';
import { NotFound } from 'pages/NotFound';
import { Layout } from 'components/Layout'
import { DynamicPage } from 'pages/DynamicPage'
import { Authentication } from 'pages/Authentication';
import { BlogPrivate } from 'pages/BlogPrivate'
// "/" === index
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, []) 

  return (
    <>
 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={user ? <Home user={user} /> : <Authentication/>} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<DynamicPage />} />
          <Route path="blog-private" element={user ? <BlogPrivate user={user} /> : <NotFound />} />
          
        
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  

    </>
  );
}

export default App;
