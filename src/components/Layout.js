import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
        <header>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
        </header>

        <main className="container">
            <Outlet />
        </main>

        <div class="app-copyright">
  Copyright © 2022 <span>My blog</span>
  </div>
        </>
    )
}

export {Layout}