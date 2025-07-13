import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './UserContext';
import Register from './Register';
import Login from './Login';
import RoomList from './RoomList';
import Chat from './Chat';

function App() {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1f1c2c, #928dab)',
      color: 'white',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '960px',
        margin: '0 auto',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '16px',
        padding: '2rem',
        boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{ marginBottom: '1.5rem' }}>🚀 Slack Clone</h1>
        <nav style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          <Link to="/" style={navLinkStyle}>Home</Link>
          <Link to="/register" style={navLinkStyle}>Register</Link>
          <Link to="/login" style={navLinkStyle}>Login</Link>
          {user && (
            <button onClick={handleLogout} style={logoutBtnStyle}>Logout</button>
          )}
        </nav>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat/:roomName" element={<Chat />} />
          <Route path="/" element={<RoomList />} />
        </Routes>
      </div>
    </div>
  );
}

const navLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  transition: 'background 0.3s ease',
  backgroundColor: 'rgba(255, 255, 255, 0.1)'
};

const logoutBtnStyle = {
  padding: '0.5rem 1rem',
  backgroundColor: '#e63946',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background 0.3s ease'
};

export default App;

