import { useAuth } from '../hook/useAuth';
//import { useNavigate } from 'react-router-dom'

import { useParams,  useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Private = () => {
   const {signout} = useAuth();
  //  const navigate = useNavigate();

 //   return (
  //      <div>
  //          <h1>Welcome </h1>
  //          <button onClick={() => signout(() => navigate('/', {replace: true}))}>Log Out</button>
    //    </div>
 //   )

 const {id} = useParams();
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate()
// backButton = () => navigate(-1)

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
        <button onClick={() => signout(() => navigate('/', {replace: true}))}>Log Out</button>
    </div>
)


}

/*const DynamicPage = () => {
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
                    <Link to={`/blog/${id}/edit`}>Edit this post</Link>
                </>
            )}
            <button onClick={backButton}>Back</button>
        </div>
    )
}*/


export {Private}