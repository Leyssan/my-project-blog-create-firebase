import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const DynamicPage = () => {
    const {id} = useParams();
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate()
const backButton = () => navigate(-1)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [id]);

    return (
        <div>
            {blog && (
                <>
                    <h1>{blog.title}</h1>
                    <p>{blog.body}</p>
                   
                </>
            )}
            <button onClick={backButton}>Back</button>
        </div>
    )
}
export {DynamicPage}