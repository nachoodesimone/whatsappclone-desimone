import React from 'react';
import './ChatItem.css';

/**
 * Componente ChatItem
 */
function ChatItem({ chat, onClick }) {
    return (
        <div className="ms-row-item" onClick={onClick}>
            {/* Avatar del contacto */}
            <div className="ms-avatar-wrap">
                <img
                    src={chat.avatar || `https://i.pravatar.cc/150?u=${chat.id}`}
                    alt={chat.name}
                    width="100%"
                />
            </div>

            {/* Información del chat: Nombre y último mensaje */}
            <div className="ms-row-details">
                <div className="ms-row-header">
                    <div className="ms-row-name">{chat.name}</div>
                    <div className="ms-row-time">{chat.time}</div>
                </div>
                <div className="ms-row-preview">
                    {chat.lastMessage}
                </div>
            </div>
        </div>
    );
}

export default ChatItem;
