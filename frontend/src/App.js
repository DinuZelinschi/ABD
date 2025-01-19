// import React, { useState } from 'react';

// function App() {
//   const [message, setMessage] = useState('');

//   // Funcție care apelează un endpoint de test (sau un endpoint existent, ex. /api/evenimente)
//   const testServer = () => {
//     fetch('http://127.0.0.1:3001/api/evenimente') 
//       .then((res) => res.json())
//       .then((data) => {
//         // În data vei avea lista de evenimente returnată de backend
//         setMessage('Am primit date de la server: ' + JSON.stringify(data));
//       })
//       .catch((err) => {
//         setMessage('Eroare la fetch: ' + err.message);
//       });
//   };

//   return (
//     <div style={{ padding: '1em' }}>
//       <h1>Testare conexiune Frontend-Backend</h1>

//       <button onClick={testServer} style={{ fontSize: '1rem', padding: '0.5em' }}>
//         Testează serverul
//       </button>

//       <div style={{ marginTop: '1em', whiteSpace: 'pre-wrap' }}>
//         {message}
//       </div>
//     </div>
//   );
// }

// export default App;
// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthComponent from './components/AuthComponent';
import Dashboard from './components/Dashboard';
import QRCodeScannerComponent from './components/QRCodeScanner';
import ExportButton from './components/ExportButton';

function App() {
  const [authToken, setAuthToken] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthComponent setAuthToken={setAuthToken} />} />
        <Route path="/dashboard" element={authToken ? <Dashboard /> : <AuthComponent setAuthToken={setAuthToken} />} />
        <Route path="/scan-qr" element={authToken ? <QRCodeScannerComponent /> : <AuthComponent setAuthToken={setAuthToken} />} />
        <Route path="/export/:evenimentId" element={authToken ? <ExportButton evenimentId={1} /> : <AuthComponent setAuthToken={setAuthToken} />} />
      </Routes>
    </Router>
  );
}

export default App;
