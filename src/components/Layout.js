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

        <footer className="container">Blog 2022</footer>
        </>
    )
}

export {Layout}