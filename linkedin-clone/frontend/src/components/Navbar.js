import { Link, useNavigate } from 'react-router-dom';
export default function Navbar(){
  const name = localStorage.getItem('name');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/');
  };
  return (
    <div className="nav">
      <div><strong>AppDost Clone</strong></div>
      <div>
        {name ? (
          <>
            <span style={{marginRight:12}}>Hi, {name}</span>
            <Link to="/create">Create Post</Link>
            <Link to="/feed">Feed</Link>
            <button onClick={logout} style={{marginLeft:12}}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </div>
  );
}
