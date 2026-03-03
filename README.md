# WhatsApp Web Clone - Trabajo Práctico de React

Este proyecto es un clon simplificado de la interfaz de WhatsApp Web, desarrollado como parte de un trabajo práctico de React. Implementa funcionalidades clave como navegación entre pantallas, gestión de estado global, temas claro/oscuro y diseño responsivo adaptado a múltiples dispositivos.

## 🚀 Desafío Elegido
El desafío seleccionado fue el **Desarrollo de una Aplicación de Chat (Clone de WhatsApp)**. El objetivo principal era replicar la complejidad de una interfaz de mensajería, manejando listas de chats, vistas dinámicas de mensajes, navegación por perfiles y formularios de edición de datos de usuario.

## 🛠️ Librerías Usadas
- **React**: Biblioteca principal para la construcción de la interfaz.
- **React Router DOM (v7)**: Gestión de rutas y parámetros de búsqueda.
- **Bootstrap Icons**: Iconografía moderna para botones y menús.
- **Vite**: Herramienta de construcción para un desarrollo rápido y eficiente.

## 💡 Requisitos Implementados
- **Vercel Deployment**: Configurado para funcionar perfectamente en entornos de hosting estático.
- **Navegación**: Inmplementada con `react-router-dom` con al menos 3 páginas (`/`, `/home`, `/profile`).
- **Estados y Contexto**: Uso constante de `useState` para el flujo local y `useContext` para el estado global (usuario y tema).
- **Parámetros de Búsqueda**: Uso de `useSearchParams` en la pantalla de perfil para alternar entre los modos de visualización y edición (`?edit=true`).
- **Formularios**: Incluye formularios en el inicio de sesión y en la edición de perfil, con validación básica y manejo de estado controlado.
- **Responsividad**: Diseño adaptable desde 320px (móviles pequeños) hasta 2000px (monitores ultra-wide). En móviles, el panel lateral y el chat se alternan automáticamente.
- **Accesibilidad**: Paleta de colores contrastada siguiendo las recomendaciones de diseño accesible (sin letras claras sobre fondos claros).

## ⚠️ Dificultades Presentadas
- **Transición Móvil**: Gestionar el estado de qué panel (lista o chat) debe ser visible en pantallas pequeñas requirió un ajuste fino en las clases de CSS y el estado de React.
- **Patrones de Diseño**: Mantener la estética de WhatsApp (como el patrón de fondo del chat) sin sobrecargar la UI y asegurando que las burbujas de mensajes fueran legibles en ambos temas (claro/oscuro).

## 🛠️ Cómo correr el proyecto localmente
1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar las dependencias.
3. Ejecutar `npm run dev` para iniciar el servidor de desarrollo.
4. Abrir [http://localhost:5173/](http://localhost:5173/) en tu navegador.
