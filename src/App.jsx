import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './Context/UserContext';
import HomeScreen from './Pages/HomeScreen';
import ProfileScreen from './Pages/ProfileScreen';
import LoginScreen from './Pages/LoginScreen';
import './index.css';


/**
 * Componente Principal: App
 * 
 * Configura el Routing y el Context Provider de la aplicación.
 */
function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* Pantalla de inicio de sesión como punto de entrada */}
          <Route path="/" element={<LoginScreen />} />

          {/* Pantalla principal de chats */}
          <Route path="/home" element={<HomeScreen />} />

          {/* Ruta de perfil - Datos del usuario y formulario de edición */}
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
