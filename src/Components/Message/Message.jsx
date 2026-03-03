import React from 'react';
import './Message.css';

/**
 * Componente Message (Burbuja de mensaje)
 */
function Message({ text, time, type, sender, isGroup, status }) {
    // Mapeamos el tipo a las nuevas clases de dirección
    const directionClass = type === 'sent' ? 'dir-right' : 'dir-left';

    // Lista de colores para los nombres en los grupos (estilo WhatsApp)
    const senderColors = [
        '#e542a3', '#05af53', '#1f7aec', '#e01a1a',
        '#9c27b0', '#ff9800', '#795548', '#009688'
    ];

    // Función simple para obtener un color consistente basado en el nombre
    const getSenderColor = (name) => {
        if (!name) return senderColors[0];
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        const index = Math.abs(hash) % senderColors.length;
        return senderColors[index];
    };

    // Función para renderizar el icono de estado (visto/no visto)
    const renderStatusIcon = () => {
        if (type !== 'sent') return null;

        switch (status) {
            case 'read':
                return <i className="bi bi-check-all ms-status-read"></i>;
            case 'delivered':
                return <i className="bi bi-check-all"></i>;
            case 'sent':
            default:
                return <i className="bi bi-check"></i>;
        }
    };

    return (
        <div className={`ms-msg-row ${directionClass}`}>
            <div className={`ms-msg-box ${directionClass}`}>
                {isGroup && type === 'received' && (
                    <span
                        className="ms-msg-user"
                        style={{ color: getSenderColor(sender) }}
                    >
                        {sender}
                    </span>
                )}
                <span className="ms-msg-text">{text}</span>
                <div className="ms-msg-meta">
                    <span className="ms-msg-time">{time}</span>
                    {renderStatusIcon()}
                </div>
            </div>
        </div>
    );
}

export default Message;
