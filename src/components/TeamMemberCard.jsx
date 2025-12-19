import React from 'react';
import { useTranslation } from 'react-i18next';
import './TeamMemberCard.css'; // Debes crear este CSS

function TeamMemberCard({ member }) {
    const { t } = useTranslation();

    return (
        <div className='team-member-card'>
            <div className='member-image-container'>
                <img src={member.imagenUrl} alt={member.nombre} className='member-image' />
            </div>
            <div className='member-details'>
                <h3 className='member-name'>{member.nombre}</h3>
                <p className='member-role'>{member.rol}</p>
                
                <p className='member-description'>{member.descripcion}</p>

                {/* Mostrar el número PADI solo si existe */}
                {member.numeroPadi && (
                    <p className='member-padi'>
                        <strong>{t('team.padi_number')}:</strong> {member.numeroPadi}
                    </p>
                )}
            </div>
        </div>
    );
}

export default TeamMemberCard;