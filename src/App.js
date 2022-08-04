//import logo from './logo.svg';
//import './App.css';

import { Routes, Route, Link } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { NotFound } from './pages/NotFound';

function App() {
  return (
   <>
      <header>
   <a href="/">Home</a>
   <a href="/posts">Blog</a>
   <a href="/about">About</a>
      </header>

      <div>
        <h1>Let's go</h1>
        
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      </>
  );
}

export default App;
