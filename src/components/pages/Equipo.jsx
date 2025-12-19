import React, { useMemo } from 'react';
import '../../App.css';
import { useTranslation } from 'react-i18next';
import { equipoData } from '../../data/dataEquipo'; // Importamos los datos
import Footer from '../Footer.jsx'; 
import TeamMemberCard from '../TeamMemberCard.jsx'; // 🚨 NUEVA IMPORTACIÓN

// Función utilitaria para agrupar los miembros del equipo por su rol
const groupTeamByRole = (data) => {
    // Definimos el orden deseado
    const orderedRoles = ['CEO', 'Instructor', 'Administrador'];
    
    // Agrupamos dinámicamente
    const groups = data.reduce((acc, member) => {
        const role = member.rol || 'Otros'; // Usar 'Otros' si el rol no está definido
        if (!acc[role]) {
            acc[role] = [];
        }
        acc[role].push(member);
        return acc;
    }, {});
    
    // Devolvemos el arreglo en el orden deseado
    return orderedRoles.filter(role => groups[role])
                       .map(role => ({ role, members: groups[role] }));
};

export default function Equipo() {
    const { t } = useTranslation();

    // Agrupamos los datos. useMemo previene que el cálculo se repita innecesariamente.
    const groupedTeam = useMemo(() => groupTeamByRole(equipoData), []);

    return (
        <>
            <div className='page-container'>
                <h1 className='equipo'>{t('page_titles.team')}</h1>
                
                <div className='team-sections-container'>
                    {groupedTeam.map(({ role, members }) => (
                        <section key={role} className='team-section'>
                            
                            {/* Título de la sección (ej: Instructores) */}
                            <h2 className='team-role-heading'>{t(`team.roles.${role.toLowerCase().replace(' ', '_')}`)}</h2>
                            
                            <div className='team-members-grid'>
                                {/* Mapear y renderizar las tarjetas */}
                                {members.map(member => (
                                    <TeamMemberCard key={member.id} member={member} />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}