import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import "./Posts.scss";

function Posts(props) {
  const [posts, setPosts] = useState([]);
  const [initialPosts, setInitialPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
        setInitialPosts(response.data);
        setLoading(false);
      }).catch((error) => {
        setError(true);
        setLoading(false);
      })
  }, []);

  useEffect(() => {
    setPosts(initialPosts.filter((item) => item.title.includes(search)));
  }, [search])

  function deletePost(id) {
    setPosts(posts.filter((item) => item.id !== id));
  }

  return (
    <div className="posts">
      {loading ? <div className="posts-loading">
        <div id="loading"></div>
        <div style={{
          fontSize: "20px",
          marginTop: "5px"
        }}>Please wait...</div>
      </div> : <>
          <div className="posts-search">
            <input
              type="text"
              placeholder="Search by title"
              value={search}
              onChange={(event)=> setSearch(event.target.value)}
            />
          </div>
          {posts.map((item) => (
            <div className="post" key={item.id}>
              <div onClick={() => props.history.push(`/posts/${item.id}`)}>
                <div className="post-title">{item.id}. {item.title}</div>
                <div>{item.body}</div>
              </div>
              <button onClick={() => deletePost(item.id)}>Delete post</button>
            </div>))}
        </>}
      {error && <div>Request to server error</div>}
    </div>
  )
}

export default withRouter(Posts);
