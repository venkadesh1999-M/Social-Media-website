import { useEffect, useState } from 'react';
import api from '../api';

export default function Feed(){
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('/posts').then(res => setPosts(res.data)).catch(console.error);
  }, []);

  return (
    <div className="container">
      <h2>Feed</h2>
      {posts.map(p => (
        <div className="post" key={p._id}>
          <h4>{p.userName}</h4>
          <p>{p.text}</p>
          <small>{new Date(p.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}
