import { NavLink, Outlet } from 'react-router-dom';

//const setActive = ({isActive}) => ({color: isActive ?'var(--color-active)' : 'white'})
const Layout = () => {
    return (
        <>
        <header>
            <NavLink to="/" style={({isActive}) => ({color: isActive ? 'var(--color-active)' : 'white' })}>Home</NavLink>
            <NavLink to="/blog" style={({isActive}) => ({color: isActive ? 'var(--color-active)' : 'white' })}>Blog</NavLink>
            <NavLink to="/about"style={({isActive}) => ({color: isActive ? 'var(--color-active)' : 'white' })} >About</NavLink>
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