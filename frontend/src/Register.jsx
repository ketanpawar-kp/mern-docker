import { useState, useContext } from 'react';
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleRegister = async () => {
    const res = await fetch('http://localhost:9000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, image })
    });

    if (res.ok) {
      const data = await res.json();
      login(data);
      navigate('/');
    } else {
      alert("Registration failed!");
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>📝 Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={inputStyle}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Profile Image URL"
        value={image}
        onChange={e => setImage(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleRegister} style={buttonStyle}>
        Register
      </button>
    </div>
  );
}

const containerStyle = {
  maxWidth: '400px',
  margin: '0 auto',
  padding: '2rem',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '16px',
  boxShadow: '0 6px 18px rgba(0,0,0,0.2)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const headingStyle = {
  marginBottom: '1.5rem',
  color: '#fff'
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  marginBottom: '1rem',
  borderRadius: '8px',
  border: 'none',
  outline: 'none',
  fontSize: '1rem'
};

const buttonStyle = {
  padding: '0.75rem 1.5rem',
  fontSize: '1rem',
  backgroundColor: '#00b4d8',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background 0.3s ease'
};

export default Register;

