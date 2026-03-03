import React, { createContext, useState, useContext } from 'react';

// Creamos el Contexto para los datos del usuario y el tema
const UserContext = createContext();

// Proveedor del Contexto
export const UserProvider = ({ children }) => {
    // Datos del perfil del usuario (Estado Global)
    const [user, setUser] = useState({
        name: 'Nacho González',
        avatar: '/avatars/bmw_profile.png',
        status: 'Tomando unos mates 🧉'
    });

    // Tema de la aplicación (claro/oscuro)
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prev => {
            const newTheme = prev === 'light' ? 'dark' : 'light';
            if (newTheme === 'dark') {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
            return newTheme;
        });
    };

    const updateProfile = (newData) => {
        setUser(prev => ({ ...prev, ...newData }));
    };

    return (
        <UserContext.Provider value={{ user, theme, toggleTheme, updateProfile }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook personalizado para usar el contexto con facilidad
export const useUser = () => useContext(UserContext);
