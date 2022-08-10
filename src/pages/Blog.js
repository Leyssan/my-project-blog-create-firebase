import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Blog = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, []);

    return (
        <div>
            <h1>Author's blog</h1>
            <Link to="/blog/private"> Private post </Link>
            {
                blog.map(x => (
                    <Link key={x.id} to={`/blog/${x.id}`}>
                        <li>{x.title}</li>
                    </Link>
                ))
            }
        </div>
    )
}

export {Blog}