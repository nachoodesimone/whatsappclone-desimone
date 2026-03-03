import React from 'react';
import './ChatView.css';
import MessageList from '../MessageList/MessageList';
import ChatInput from '../ChatInput/ChatInput';

/**
 * Componente ChatView (Panel de Chat)
 */
function ChatView({ selectedChat, messages, chatDate, inputText, setInputText, handleSend, onBack, isGroup }) {
    return (
        <div className="ms-chat-area">
            {/* Encabezado del chat seleccionado */}
            <div className="ms-chat-header">
                <div className="ms-user-meta">
                    {/* Botón para volver atrás (Solo visible en móviles) */}
                    <button className="ms-return-icon" onClick={onBack}>
                        <i className="bi bi-arrow-left"></i>
                    </button>
                    <div className="ms-circle-img">
                        <img
                            src={selectedChat.avatar || `https://i.pravatar.cc/150?u=${selectedChat.id}`}
                            alt={selectedChat.name}
                            width="100%"
                        />
                    </div>
                    <div className="ms-current-title">{selectedChat.name}</div>
                </div>

                <div className="ms-header-buttons">
                    <i className="bi bi-search" title="Buscar mensaje"></i>
                    <i className="bi bi-three-dots-vertical" title="Más opciones"></i>
                </div>
            </div>

            {/* Lista de Mensajes: Muestra la burbuja de cada mensaje */}
            <MessageList messages={messages} isGroup={isGroup} chatDate={chatDate} />

            {/* Entrada de Chat: El input inferior para escribir */}
            <ChatInput
                inputText={inputText}
                setInputText={setInputText}
                handleSend={handleSend}
            />
        </div>
    );
}

export default ChatView;
