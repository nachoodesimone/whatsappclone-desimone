import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginScreen.css';

/**
 * LoginScreen - Pantalla de inicio de sesión estilo WhatsApp
 */
function LoginScreen() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Cargamos al instante sin validación
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigate('/home');
        }, 300);
    };

    return (
        <div className="ms-login-container">
            {/* Franja superior verde */}
            <div className="ms-login-banner"></div>

            {/* Tarjeta de login centrada */}
            <div className="ms-login-card">
                <div className="ms-login-logo">
                    <i className="bi bi-whatsapp"></i>
                    <h1>Messenger Web</h1>
                </div>

                <div className="ms-login-instruction">
                    Accede a tus chats de forma rápida y segura.
                </div>

                <form className="ms-login-form" onSubmit={handleLogin}>
                    <div className="ms-login-input-group">
                        <label>Nombre de usuario</label>
                        <input
                            type="text"
                            name="username"
                            className="ms-login-input"
                            placeholder="Escribe tu usuario..."
                            value={credentials.username}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </div>

                    <div className="ms-login-input-group">
                        <label>Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            className="ms-login-input"
                            placeholder="Tu contraseña secreta"
                            value={credentials.password}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="ms-login-btn"
                    >
                        INICIAR SESIÓN
                    </button>

                    <div className="ms-login-footer">
                        © {new Date().getFullYear()} Messenger Web Clone
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginScreen;
