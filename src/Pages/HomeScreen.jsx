import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import ChatView from '../Components/ChatView/ChatView';

/**
 * HomeScreen - Página principal del chat
 */
function HomeScreen() {
    // Datos estáticos de los chats
    const chats = [
        { id: 1, name: "Lionel Messi", lastMessage: "Tú: Sí, ya lo terminé. Te lo paso en un rato.", time: "Hoy", avatar: "/avatars/messi.png" },
        { id: 4, name: "Bizarrap", lastMessage: "Tú: Obvio Biza, contá conmigo!", time: "Hoy", avatar: "/avatars/biza.png" },
        { id: 6, name: "Tini Stoessel", lastMessage: "Tú: Gracias Tini, me sirve un montón.", time: "Hoy", avatar: "/avatars/tini.png" },
        { id: 9, name: "Luck Ra", lastMessage: "Tú: De una, avisame cuando.", time: "Hoy", avatar: "https://unavatar.io/instagram/luckra" },
        { id: 11, name: "María Becerra", lastMessage: "Tú: Dale, ¿a qué hora?", time: "Hoy", avatar: "/avatars/maria.png" },
        { id: 15, name: "Familia de Artistas ❤️", lastMessage: "Tú: Yo también me sumo!", time: "Hoy", avatar: "https://i.pravatar.cc/150?u=artistas15", isGroup: true },
        { id: 2, name: "Lali Espósito", lastMessage: "Tú: Dale, ahí estaré en primera fila!", time: "Ayer", avatar: "/avatars/lali.png" },
        { id: 8, name: "Duki", lastMessage: "Tú: No hay drama, te espero afuera.", time: "Ayer", avatar: "https://unavatar.io/twitter/dukissj" },
        { id: 12, name: "Tiago PZK", lastMessage: "Tú: Recibido, gracias Tiago!", time: "Ayer", avatar: "https://unavatar.io/twitter/tiagopzk" },
        { id: 14, name: "Bad Bunny", lastMessage: "Tú: Tremendo Benito, no lo podía creer.", time: "Ayer", avatar: "https://unavatar.io/twitter/sanbenito" },
        { id: 10, name: "Milo J", lastMessage: "Tú: Genial, después hablamos.", time: "05 de mayo", avatar: "https://unavatar.io/instagram/milo_j" },
        { id: 13, name: "Emilia Mernes", lastMessage: "Tú: ¡Muchas gracias Emi!", time: "12 de abril", avatar: "https://unavatar.io/twitter/emiliamernes_" },
        { id: 7, name: "Nicki Nicole", lastMessage: "Tú: Dale Nicki, cualquier cosa te aviso.", time: "10 de marzo", avatar: "https://unavatar.io/twitter/naiki" },
        { id: 5, name: "Trueno", lastMessage: "Tú: Nooo, todavía no la vi!", time: "22 de febrero", avatar: "https://unavatar.io/twitter/truenopai" },
        { id: 3, name: "Asado de Cantantes", lastMessage: "Tú: Buenísimo muchachos, sale alta zapada.", time: "15 de enero", avatar: "https://i.pravatar.cc/150?u=asado3", isGroup: true }
    ];

    // Estado local para los mensajes de los chats
    const [messages, setMessages] = useState([
        { id: 1, chatId: 1, text: "Hola, ¿cómo estás?", sender: "Lionel Messi (Cantando)", time: "10:30", type: "received" },
        { id: 2, chatId: 1, text: "Todo bien, Lio. ¿Sale ese tema?", sender: "Me", time: "10:32", type: "sent", status: "read" },
        { id: 3, chatId: 1, text: "Che, ¿hiciste el TP de React?", sender: "Lionel Messi (Cantando)", time: "10:35", type: "received" },
        { id: 301, chatId: 1, text: "Sí, ya lo terminé. Te lo paso en un rato.", sender: "Me", time: "10:40", type: "sent", status: "read" },

        { id: 4, chatId: 2, text: "¡Hola! ¿A qué hora nos vemos?", sender: "Lali Espósito", time: "14:20", type: "received" },
        { id: 5, chatId: 2, text: "Nos vemos en el show a las 5", sender: "Lali Espósito", time: "14:25", type: "received" },
        { id: 501, chatId: 2, text: "Dale, ahí estaré en primera fila!", sender: "Me", time: "14:30", type: "sent", status: "read" },

        { id: 6, chatId: 3, text: "¿Quién lleva el vino?", sender: "Calamaro", time: "18:00", type: "received" },
        { id: 7, chatId: 3, text: "Yo llevo el Fernet!", sender: "Duki", time: "18:05", type: "received" },
        { id: 71, chatId: 3, text: "Y yo llevo el carbón", sender: "Trueno", time: "18:10", type: "received" },
        { id: 72, chatId: 3, text: "Buenísimo muchachos, sale alta zapada.", sender: "Me", time: "18:15", type: "sent", status: "read" },

        { id: 8, chatId: 4, text: "Mañana sale esa Session?", sender: "Bizarrap", time: "18:20", type: "received" },
        { id: 801, chatId: 4, text: "Obvio Biza, contá conmigo!", sender: "Me", time: "18:25", type: "sent", status: "read" },

        { id: 9, chatId: 5, text: "Viste mi nueva tira?", sender: "Trueno", time: "15:45", type: "received" },
        { id: 901, chatId: 5, text: "Nooo, todavía no la vi!", sender: "Me", time: "16:00", type: "sent", status: "delivered" },

        { id: 10, chatId: 6, text: "Te paso el contacto de mi manager", sender: "Tini Stoessel", time: "12:10", type: "received" },
        { id: 1001, chatId: 6, text: "Gracias Tini, me sirve un montón.", sender: "Me", time: "12:15", type: "sent", status: "read" },

        { id: 700, chatId: 7, text: "Buenísimo, quedamos para grabar", sender: "Nicki Nicole", time: "09:45", type: "received" },
        { id: 701, chatId: 7, text: "Dale Nicki, cualquier cosa te aviso.", sender: "Me", time: "10:00", type: "sent", status: "read" },

        { id: 800, chatId: 8, text: "Me olvidé las llaves del estudio", sender: "Duki", time: "11:20", type: "received" },
        { id: 801, chatId: 8, text: "No hay drama, te espero afuera.", sender: "Me", time: "11:25", type: "sent", status: "read" },

        { id: 900, chatId: 9, text: "Che, ¿sale ese cuartetazo?", sender: "Luck Ra", time: "14:15", type: "received" },
        { id: 901, chatId: 9, text: "De una, avisame cuando.", sender: "Me", time: "14:20", type: "sent", status: "delivered" },

        { id: 1000, chatId: 10, text: "Ya llegué al estudio", sender: "Milo J", time: "09:00", type: "received" },
        { id: 1001, chatId: 10, text: "Genial, después hablamos.", sender: "Me", time: "09:10", type: "sent", status: "read" },

        { id: 11, chatId: 11, text: "¿Sale merienda en la nena de argentina?", sender: "María Becerra", time: "16:30", type: "received" },
        { id: 1101, chatId: 11, text: "Dale, ¿a qué hora?", sender: "Me", time: "16:45", type: "sent", status: "read" },

        { id: 12, chatId: 12, text: "Te lo mando por drive", sender: "Tiago PZK", time: "17:00", type: "received" },
        { id: 1201, chatId: 12, text: "Recibido, gracias Tiago!", sender: "Me", time: "17:15", type: "sent", status: "delivered" },

        { id: 13, chatId: 13, text: "¡Feliz cumple reina!", sender: "Emilia Mernes", time: "10:00", type: "received" },
        { id: 1301, chatId: 13, text: "¡Muchas gracias Emi!", sender: "Me", time: "10:30", type: "sent", status: "read" },

        { id: 14, chatId: 14, text: "¿Viste el nuevo album?", sender: "Bad Bunny", time: "22:15", type: "received" },
        { id: 1401, chatId: 14, text: "Tremendo Benito, no lo podía creer.", sender: "Me", time: "22:30", type: "sent", status: "read" },

        { id: 15, chatId: 15, text: "¿Vienen a zapar?", sender: "Charly", time: "20:00", type: "received" },
        { id: 151, chatId: 15, text: "Yo voy con Fito", sender: "Bizarrap", time: "20:05", type: "received" },
        { id: 152, chatId: 15, text: "¡Dale! Yo llevo el teclado", sender: "Lali Espósito", time: "20:10", type: "received" },
        { id: 153, chatId: 15, text: "Yo también me sumo!", sender: "Me", time: "20:15", type: "sent", status: "read" }
    ]);

    // Estado del chat seleccionado y control de vista móvil
    const [selectedChat, setSelectedChat] = useState(chats[0]);
    const [isChatSelected, setIsChatSelected] = useState(false); // Para el flujo móvil
    const [inputText, setInputText] = useState("");

    // Función para seleccionar un chat
    const handleSelectChat = (chat) => {
        setSelectedChat(chat);
        setIsChatSelected(true); // Activar vista de chat en móviles
    };

    // Función para volver a la lista (móviles)
    const handleBackToList = () => {
        setIsChatSelected(false);
    };

    // Función para enviar mensaje nuevo
    const handleSend = () => {
        if (!inputText.trim()) return;

        const newMessage = {
            id: Date.now(),
            chatId: selectedChat.id,
            text: inputText,
            sender: "Me",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: "sent",
            status: "sent"
        };

        setMessages([...messages, newMessage]);
        setInputText("");
    };

    // Filtrar los mensajes según el chat seleccionado
    const currentMessages = messages.filter(msg => msg.chatId === selectedChat.id);

    return (
        <div className={`ms-main-layout ${isChatSelected ? 'ms-chat-open' : ''}`}>
            <Sidebar
                chats={chats}
                onSelectChat={handleSelectChat}
            />
            <ChatView
                selectedChat={selectedChat}
                messages={currentMessages}
                chatDate={selectedChat.time}
                inputText={inputText}
                setInputText={setInputText}
                handleSend={handleSend}
                onBack={handleBackToList}
                isGroup={selectedChat.isGroup}
            />
        </div>
    );
}


export default HomeScreen;
