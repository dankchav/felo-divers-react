import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams, Link } from 'react-router-dom';
import Footer from '../Footer.jsx';
import '../../App.css';
import './SearchResults.css'; 

// ==================================================
// 1. IMPORTAR TODOS LOS DATOS
// Asegúrate de que estas rutas sean correctas para tu estructura de carpetas
// ==================================================
import { campamentosData } from '../../data/dataCampamentos';
import { viajesData } from '../../data/dataViajes'; 
import { experienciasData } from '../../data/dataExperiencias'; // 🚨 NUEVA IMPORTACIÓN
import { certificacionesData } from '../../data/dataCertificaciones'; // 🚨 NUEVA IMPORTACIÓN


// Función utilitaria para remover tildes y convertir a minúsculas (para búsqueda robusta)
const normalizeString = (str) => {
    if (!str) return '';
    return str
        .normalize("NFD") 
        .replace(/[\u0300-\u036f]/g, "") 
        .toLowerCase();
};

// ==================================================
// 2. ACTUALIZAR getAllItems PARA INCLUIR TODOS LOS SERVICIOS
// ==================================================
const getAllItems = () => {
    // Es crucial que el campo 'type' sea único y coincida con el segmento de la URL
    return [
        ...campamentosData.map(item => ({ ...item, type: 'Campamento', pathSegment: 'campamentos' })),
        ...viajesData.map(item => ({ ...item, type: 'Viaje', pathSegment: 'viajes' })),
        ...experienciasData.map(item => ({ ...item, type: 'Experiencia', pathSegment: 'experiencias' })), // 🚨 NUEVO
        ...certificacionesData.map(item => ({ ...item, type: 'Certificación', pathSegment: 'certificaciones' })), // 🚨 NUEVO
    ];
};

function SearchResults() {
    const { t, i18n } = useTranslation();
    const [searchParams] = useSearchParams();
    
    const query = searchParams.get('query') || '';
    
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    // Función para realizar la búsqueda (utiliza la normalización mejorada)
    const performSearch = (searchTerm, lang) => {
        if (!searchTerm) {
            setResults([]);
            setLoading(false);
            return;
        }

        const allItems = getAllItems();
        const normalizedQuery = normalizeString(searchTerm);

        if (!normalizedQuery) {
            setResults([]);
            setLoading(false);
            return;
        }

        const filtered = allItems.filter(item => {
            
            // Asumiendo tu estructura de datos:
            const title = item.titulo || item[`titulo_${lang}`] || '';
            const description = item.descripcion || item[`descripcion_${lang}`] || '';
            
            // Normalización para la búsqueda
            const normalizedTitle = normalizeString(title);
            const normalizedDescription = normalizeString(description);

            return (
                normalizedTitle.includes(normalizedQuery) ||
                normalizedDescription.includes(normalizedQuery)
            );
        });

        setResults(filtered);
        setLoading(false);
    };

    useEffect(() => {
        setLoading(true);
        performSearch(query, i18n.language);
    }, [query, i18n.language]);


    const renderResults = () => {
        if (loading) {
            return <p>{t('auth.loading')}</p>;
        }

        if (results.length === 0) {
            return (
                <div className='search-no-results'>
                    <p>
                        {t('search.no_results')} <strong>"{query}"</strong>
                    </p>
                    <i className='fas fa-exclamation-circle' />
                </div>
            );
        }

        return (
            <div className='search-results-list'>
                {results.map((item) => (
                    <div key={item.id + item.type} className='search-result-item'>
                        <img src={item.imagenUrl} alt={item.titulo} className='result-image' />
                        <div className='result-info'>
                            <h2>{item.titulo}</h2>
                            <p className='result-type'>[{item.type}]</p>
                            <p className='result-description'>{item.descripcion.substring(0, 150)}...</p>
                            
                            {/* 🚨 LÓGICA DE ENLACE ACTUALIZADA PARA TODOS LOS TIPOS 🚨 */}
                            <Link 
                                // Usamos el pathSegment definido en getAllItems para construir la URL
                                to={`/${item.pathSegment}/${item.id}`} 
                                className='btn--small'
                            >
                                {t('nav.view_details')}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            <div className='search-container'>
                <h1 className='search-title'>
                    {t('search.title')} 
                    <span className='search-query-term'> "{query}"</span>
                </h1>
                {renderResults()}
            </div>
            <Footer />
        </>
    );
}

export default SearchResults;