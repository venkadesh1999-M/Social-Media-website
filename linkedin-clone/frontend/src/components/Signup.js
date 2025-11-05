import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

export default function Signup(){
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try{
      await api.post('/auth/signup',{ name, email, password });
      alert('Signup successful. Please login.');
      navigate('/');
    }catch(err){
      console.error(err);
      alert(err?.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="container">
      <h2>Create account</h2>
      <form onSubmit={handleSignup}>
        <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required />
        <input placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
