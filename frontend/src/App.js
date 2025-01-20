// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthComponent from './components/AuthComponent';
import Dashboard from './components/Dashboard';
import QRCodeScannerComponent from './components/QRCodeScanner';
import ExportButton from './components/ExportButton';
<<<<<<< HEAD
import FormEvent from './components/FormEvent'; // exemplu
=======
import FormEvent from './components/FormEvent';
>>>>>>> 526c1d07f0cd91fb53d1c31af4db4de1b64d6df3

function App() {
  const [authToken, setAuthToken] = useState(null);

  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route
          path="/"
          element={<AuthComponent setAuthToken={setAuthToken} />}
        />
        <Route
          path="/dashboard"
          element={
            authToken ? <Dashboard /> : <AuthComponent setAuthToken={setAuthToken} />
          }
        />
        <Route
          path="/scan-qr"
          element={
            authToken ? (
              <QRCodeScannerComponent />
            ) : (
              <AuthComponent setAuthToken={setAuthToken} />
            )
          }
        />
        <Route
          path="/export/:evenimentId"
          element={
            authToken ? (
              <ExportButton evenimentId={1} />
            ) : (
              <AuthComponent setAuthToken={setAuthToken} />
            )
          }
        />
        <Route
          path="/add-event"
          element={
            authToken ? (
              <FormEvent />
            ) : (
              <AuthComponent setAuthToken={setAuthToken} />
            )
          }
        />
=======
        <Route path="/" element={<AuthComponent setAuthToken={setAuthToken} />} />
        <Route path="/dashboard" element={authToken ? <Dashboard /> : <AuthComponent setAuthToken={setAuthToken} />} />
        <Route path="/scan-qr" element={authToken ? <QRCodeScannerComponent /> : <AuthComponent setAuthToken={setAuthToken} />} />
        <Route path="/export/:evenimentId" element={authToken ? <ExportButton evenimentId={1} /> : <AuthComponent setAuthToken={setAuthToken} />} />
        <Route path="/add-event" element={authToken ? <FormEvent /> : <AuthComponent setAuthToken={setAuthToken} />} />
>>>>>>> 526c1d07f0cd91fb53d1c31af4db4de1b64d6df3
      </Routes>
    </Router>
  );
}

export default App;
