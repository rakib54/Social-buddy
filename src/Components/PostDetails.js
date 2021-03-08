import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from './Comments';

const PostDetails = () => {
    const {pid} = useParams()
    const [details ,setDetails] = useState({})
    const [comments ,setComments] = useState([])

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${pid}`)
        .then(res =>res.json())
        .then(data => setDetails(data))
    },[])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${pid}`)
        .then(res =>res.json())
        .then(data => setComments(data))
    },[])
    return (
        <div>
            <h1>This is details{pid}</h1>
            <h3>UserPosted :{details.id}</h3>
            <h3>UserPosted :{details.title}</h3>
            <h3>UserPosted :{details.body}</h3>
            <p>Total Comments :{comments.length}</p>
            {
                comments.map(cm => <Comments comment ={cm}></Comments>)
            }
        </div>
    );
};

export default PostDetails;