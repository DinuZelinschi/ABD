import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthComponent from './components/AuthComponent';
import Dashboard from './components/Dashboard';
import QRCodeScannerComponent from './components/QRCodeScanner';
import ExportButton from './components/ExportButton';
import FormEvent from './components/FormEvent'; 


function App() {
  const [authToken, setAuthToken] = useState(null);

  return (
    <Router>
      <Routes>
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
      </Routes>
    </Router>
  );
}

export default App;
