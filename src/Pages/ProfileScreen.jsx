import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useUser } from '../Context/UserContext';
import './ProfileScreen.css';

/**
 * ProfileScreen - Página del perfil del usuario
 */
function ProfileScreen() {
    // Hooks de navegación y parámetros de búsqueda
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const isEditing = searchParams.get('edit') === 'true';

    // Acceso al estado global del Contexto
    const { user, updateProfile, theme, toggleTheme } = useUser();

    // Estado local para los campos del formulario de edición
    const [formData, setFormData] = useState({
        name: user.name,
        status: user.status
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProfile(formData);
        setSearchParams({});
    };

    return (
        <div className="ms-profile-page">
            <div className="ms-profile-top">
                <button
                    className="ms-btn-icon"
                    onClick={() => navigate('/home')}
                    title="Volver al chat"
                >
                    <i className="bi bi-arrow-left"></i>
                </button>
                <h2>Perfil</h2>
            </div>

            <div className="ms-profile-body">
                <div className="ms-big-avatar">
                    <img src={user.avatar} alt="Mi perfil" />
                </div>

                {!isEditing ? (
                    <div className="ms-info-grid">
                        <section className="ms-info-row">
                            <label>Tu nombre</label>
                            <p>{user.name}</p>
                        </section>
                        <section className="ms-info-row">
                            <label>Mensaje de estado</label>
                            <p className="ms-desc-text">{user.status}</p>
                        </section>
                        <button
                            className="ms-btn-primary"
                            onClick={() => setSearchParams({ edit: 'true' })}
                        >
                            Editar Perfil
                        </button>
                    </div>
                ) : (
                    <form className="ms-setup-form" onSubmit={handleSubmit}>
                        <div className="ms-input-item">
                            <label htmlFor="name-input">Nombre completo</label>
                            <input
                                id="name-input"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="ms-input-item">
                            <label htmlFor="status-input">Mensaje de estado</label>
                            <textarea
                                id="status-input"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                rows="3"
                                required
                            />
                        </div>
                        <div className="ms-form-footer">
                            <button type="submit" className="ms-btn-confirm">Guardar Cambios</button>
                            <button
                                type="button"
                                className="ms-btn-back"
                                onClick={() => setSearchParams({})}
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                )}
            </div>

            <div className="ms-profile-bottom">
                <p>Este es el perfil privado del usuario. Solo tú puedes ver y editar esta información.</p>
            </div>
        </div>
    );
}

export default ProfileScreen;
