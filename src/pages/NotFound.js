import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            Page not found. Let's go <a href="/">home</a>
            Page not found. Let's go  <Link to="/">home</Link>
        </div>
    )
}
export {NotFound};