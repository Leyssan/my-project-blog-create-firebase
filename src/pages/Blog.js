import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom';

const Blog = () => {
    const [blog, setBlog] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams()
const postQuery =  searchParams.get('post') || ''

const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
const query = form.search.value
setSearchParams({post: query})
}

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, []);

    return (
        <div>
            <h1>Author's blog</h1>
            <form autoComplete='off' onSubmit = {handleSubmit}>
                <input type="search" name="search" />
                <button >Search</button>
            </form>
            
            {
                blog.filter(
                    x => x.title.includes(postQuery)
                ).map(x => (
                    <Link key={x.id} to={`/blog/${x.id}`}>
                        <li>{x.title}</li>
                    </Link>
                ))
            }
        </div>
    )
}

export {Blog}