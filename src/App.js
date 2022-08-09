//import logo from './logo.svg';
//import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import  firebase  from './firebase'

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { NotFound } from './pages/NotFound';
import { Layout } from './components/Layout'
import { DynamicPage } from './pages/DynamicPage'
import { Login } from './pages/Login'
import { Private } from './pages/Private'
import { RequireAuth } from 'hok/RequireAuth';
import  { ProviderAuth } from  './hok/ProviderAuth'
import { Authentication } from 'pages/Authentication';
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
    <ProviderAuth> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={user ? <Home user={user} /> : <Authentication/>} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<DynamicPage />} />
          <Route path="login" element={<Login />} />
          <Route path="blog/private" element={
            <RequireAuth>
              <Private />
            </RequireAuth>
          } />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      </ProviderAuth>

    </>
  );
}

export default App;
