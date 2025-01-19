import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  // Funcție care apelează un endpoint de test (sau un endpoint existent, ex. /api/evenimente)
  const testServer = () => {
    fetch('http://127.0.0.1:3001/api/evenimente') 
      .then((res) => res.json())
      .then((data) => {
        // În data vei avea lista de evenimente returnată de backend
        setMessage('Am primit date de la server: ' + JSON.stringify(data));
      })
      .catch((err) => {
        setMessage('Eroare la fetch: ' + err.message);
      });
  };

  return (
    <div style={{ padding: '1em' }}>
      <h1>Testare conexiune Frontend-Backend</h1>

      <button onClick={testServer} style={{ fontSize: '1rem', padding: '0.5em' }}>
        Testează serverul
      </button>

      <div style={{ marginTop: '1em', whiteSpace: 'pre-wrap' }}>
        {message}
      </div>
    </div>
  );
}

export default App;
