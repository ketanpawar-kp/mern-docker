import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

function RoomList() {
  const [rooms, setRooms] = useState([]);
  const [roomName, setRoomName] = useState('');
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:9000/rooms')
      .then(res => res.json())
      .then(setRooms);
  }, []);

  const createRoom = async () => {
    if (!roomName.trim()) return;
    const res = await fetch('http://localhost:9000/rooms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: roomName })
    });
    const newRoom = await res.json();
    setRooms([...rooms, newRoom]);
    setRoomName('');
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>🏠 Available Chat Rooms</h2>

      {user && (
        <div style={inputContainerStyle}>
          <input
            value={roomName}
            onChange={e => setRoomName(e.target.value)}
            placeholder="New Room Name"
            style={inputStyle}
          />
          <button onClick={createRoom} style={buttonStyle}>Create</button>
        </div>
      )}

      <ul style={listStyle}>
        {rooms.map(room => (
          <li key={room._id} style={listItemStyle}>
            <button onClick={() => navigate(`/chat/${room.name}`)} style={roomButtonStyle}>
              💬 {room.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const containerStyle = {
  maxWidth: '600px',
  margin: '2rem auto',
  padding: '1.5rem',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '16px',
  color: 'white',
  boxShadow: '0 6px 18px rgba(0, 0, 0, 0.2)'
};

const headingStyle = {
  textAlign: 'center',
  marginBottom: '1.5rem'
};

const inputContainerStyle = {
  display: 'flex',
  gap: '1rem',
  marginBottom: '2rem'
};

const inputStyle = {
  flex: 1,
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  border: 'none',
  outline: 'none',
  fontSize: '1rem'
};

const buttonStyle = {
  padding: '0.75rem 1.25rem',
  backgroundColor: '#00b4d8',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontWeight: 'bold',
  cursor: 'pointer'
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0
};

const listItemStyle = {
  marginBottom: '1rem'
};

const roomButtonStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  fontSize: '1rem',
  backgroundColor: '#48cae4',
  color: 'black',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  textAlign: 'left'
};

export default RoomList;

