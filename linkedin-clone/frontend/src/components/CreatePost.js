import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

export default function CreatePost(){
  const [text,setText]=useState('');
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const userName = localStorage.getItem('name');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await api.post('/posts', { userId, userName, text });
      alert('Post created');
      navigate('/feed');
    }catch(err){
      console.error(err);
      alert('Create post failed');
    }
  };

  return (
    <div className="container">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea placeholder="What's on your mind?" rows="4" value={text} onChange={e=>setText(e.target.value)} required />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
