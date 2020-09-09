import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import './Post.scss';

function Post(props) {
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com${props.location.pathname}`)
            .then((response) => {
                setPost(response.data);
            }).catch((error) => {
                console.log(error);
            })

        axios.get(`https://jsonplaceholder.typicode.com${props.location.pathname}/comments`)
            .then((response) => {
                setComments(response.data);
            }).catch((error) => {
                console.log(error);
            })
    }, []);

    return (<>
        <div className="post">
            <div className="post-title">{post.id}. {post.title}</div>
            <div>{post.body}</div>
        </div>
        <div>
            {comments.map((item) => <div className="post-comments">
                <div><span>Name:</span> {item.name}</div>
                <div><span>Email:</span> {item.email}</div>
                <div><span>Comment:</span> {item.body}</div>
            </div>
            )}
        </div>
    </>)
}

export default withRouter(Post);