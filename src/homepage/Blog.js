import { useEffect } from 'react';
import {useLocation} from 'react-router-dom'

function Blog(props) {

    const location = useLocation();

    useEffect(() => {
        console.log(props.location)
    }, [location])

    return (<h1>Blog</h1>)
}

export default Blog;