import React, { useEffect, useRef } from 'react';
import './MessageList.css';
import Message from '../Message/Message';

/**
 * Componente MessageList
 */
function MessageList({ messages, isGroup, chatDate }) {
    const listRef = useRef(null);

    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollTop = listRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="ms-thread-view" ref={listRef}>
            {/* Divisor de fecha al principio del chat */}
            {chatDate && (
                <div className="ms-date-divider">
                    <span>{chatDate}</span>
                </div>
            )}
            {messages.map(msg => (
                <Message
                    key={msg.id}
                    text={msg.text}
                    time={msg.time}
                    type={msg.type}
                    sender={msg.sender}
                    isGroup={isGroup}
                    status={msg.status}
                />
            ))}
        </div>
    );
}

export default MessageList;
