import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from './UserContext';

function Chat() {
  const { roomName } = useParams();
  const { user } = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const fetchMessages = () => {
    fetch(`http://localhost:9000/messages/${roomName}`)
      .then(res => res.json())
      .then(setMessages)
      .catch(err => console.error('Failed to fetch messages:', err));
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 3000);
    return () => clearInterval(interval);
  }, [roomName]);

  const sendMessage = async () => {
    if (!text.trim()) return;
    await fetch('http://localhost:9000/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ room: roomName, user: user.email, text })
    });
    setText('');
    fetchMessages();
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>💬 Chat Room: {roomName}</h2>
      <div style={chatBoxStyle}>
        {messages.length === 0 ? (
          <p style={{ color: 'gray', textAlign: 'center' }}>No messages yet...</p>
        ) : (
          messages.map(msg => (
            <div key={msg._id} style={messageStyle(user && msg.user === user?.email)}>
              <strong>{msg.user}:</strong> {msg.text}
            </div>
          ))
        )}
      </div>

      {user && (
        <div style={inputContainerStyle}>
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Type your message..."
            style={inputStyle}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button onClick={sendMessage} style={buttonStyle}>Send</button>
        </div>
      )}
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
  marginBottom: '1rem',
  textAlign: 'center'
};

const chatBoxStyle = {
  height: '300px',
  overflowY: 'auto',
  padding: '1rem',
  borderRadius: '10px',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  marginBottom: '1rem'
};

const messageStyle = (isCurrentUser) => ({
  marginBottom: '0.75rem',
  textAlign: isCurrentUser ? 'right' : 'left',
  padding: '0.5rem 1rem',
  borderRadius: '12px',
  backgroundColor: isCurrentUser ? '#48cae4' : '#adb5bd',
  color: '#000',
  display: 'inline-block',
  maxWidth: '80%'
});

const inputContainerStyle = {
  display: 'flex',
  gap: '1rem'
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
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  fontWeight: 'bold',
  cursor: 'pointer'
};

export default Chat;

