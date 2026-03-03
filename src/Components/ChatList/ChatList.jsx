import React from 'react';
import './ChatList.css';
import ChatItem from '../ChatItem/ChatItem';

/**
 * Componente ChatList
 */
function ChatList({ chats, onSelectChat }) {
    return (
        <div className="ms-convo-container">
            {chats.map(chat => (
                <ChatItem
                    key={chat.id}
                    chat={chat}
                    onClick={() => onSelectChat(chat)}
                />
            ))}
        </div>
    );
}

export default ChatList;
