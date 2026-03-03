import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';
import './Sidebar.css';
import ChatList from '../ChatList/ChatList';

/**
 * Componente Sidebar (Barra Lateral)
 */
function Sidebar({ chats, onSelectChat }) {
    const { user, theme, toggleTheme } = useUser();
    const [searchTerm, setSearchTerm] = useState('');

    // Filtrar los chats según el término de búsqueda
    const filteredChats = chats.filter(chat =>
        chat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="ms-panel-left">
            {/* Encabezado del Sidebar */}
            <div className="ms-panel-top">
                <Link to="/profile" className="ms-profile-trigger" title="Ver perfil">
                    <div className="ms-circle-img">
                        <img src={user.avatar} alt={user.name} width="100%" />
                    </div>
                </Link>
                <div className="ms-top-actions">
                    <div
                        className={`ms-theme-toggle-container ${theme === 'dark' ? 'ms-dark-mode' : ''}`}
                        onClick={toggleTheme}
                        title={theme === 'light' ? 'Pasar a Modo Oscuro' : 'Pasar a Modo Claro'}
                    >
                        <div className="ms-theme-toggle-bar">
                            <div className="ms-theme-toggle-circle">
                                <i className={`bi ${theme === 'light' ? 'bi-moon-stars-fill' : 'bi-sun-fill'}`}></i>
                            </div>
                        </div>
                    </div>
                    <i className="bi bi-three-dots-vertical" title="Más opciones"></i>
                </div>
            </div>

            {/* Contenedor de Búsqueda Mejorado */}
            <div className="ms-filter-row">
                <div className="ms-search-container">
                    <i className="bi bi-search"></i>
                    <input
                        type="text"
                        className="ms-filter-input"
                        placeholder="Busca un chat o inicia uno nuevo"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <ChatList chats={filteredChats} onSelectChat={onSelectChat} />
        </div>
    );
}

export default Sidebar;
