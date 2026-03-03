import React from 'react';
import './ChatInput.css';

/**
 * Componente ChatInput
 */
function ChatInput({ inputText, setInputText, handleSend }) {

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="ms-control-bar">
            {/* Iconos de Emoji y Adjuntos */}
            <i className="bi bi-emoji-smile ms-action-button" title="Emojis"></i>
            <i className="bi bi-paperclip ms-action-button" title="Adjuntar"></i>

            {/* Campo de texto principal */}
            <input
                type="text"
                className="ms-text-field"
                placeholder="Escribe un mensaje"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
            />

            {inputText.trim() ? (
                <i
                    className="bi bi-send-fill ms-action-button ms-submit-button"
                    onClick={handleSend}
                    title="Enviar mensaje"
                ></i>
            ) : (
                <i className="bi bi-mic-fill ms-action-button" title="Nota de voz"></i>
            )}
        </div>
    );
}

export default ChatInput;
