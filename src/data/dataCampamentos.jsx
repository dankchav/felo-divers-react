// Exportamos un array de objetos. Cada objeto es un "registro" o un campamento.
export const campamentosData = [
    {
        id: 'camp-001',
        titulo: 'Campamento de buceo PADI - Open Water Diver',
        descripcion: 'Tu experiencia como buzo comienza aquí. Descubre las fechas de nuestros campamentos PADI Open Water Diver y sumérgete en una experiencia única en San Andrés.',
        imagenUrl: 'https://res.cloudinary.com/felodivers/image/upload/v1767801442/felo-divers/imagenes/img03_eiflms.png',
        precio: '$5.500.000 COP',
        etiqueta: 'Campamentos',
        slug: 'open-water-diver',
        contenidoCompleto: {
            descripcionCompleta: 'Este campamento está creado para quienes sueñan con descubrir el mundo submarino desde cero. En San Andrés aprenderás a bucear de la mano de instructores expertos, vivirás la calidez de la cultura raizal, te certificarás como Open Water Diver PADI y formarás parte de una comunidad que protege y ama el océano.',
            calendario: [
                'Ene 14 – Ene 19',
                'Ene 28 – Feb 02',
                'Feb 11 – Feb 16',
                'Mar 04 – Mar 09',
                'Mar 25 – Mar 30',
                'Abr 01 – Abr 06',
                'Abr 15 – Abr 20',
                'Abr 29 – May 04',
                'May 20 – May 25',
                'Jun 03 – Jun 08',
                'Jun 24 – Jun 29'
            ],
            incluye: [
                'Sesión de Apnea',
                'Alojamiento en la casa de Felo Divers (5 noches, 6 días – acomodación múltiple)',
                'Alimentación (5 desayunos, 5 almuerzos, 4 cenas)',
                'Transporte Aeropuerto-Hotel-Aeropuerto',
                'Transporte actividades de Buceo',
                'Equipo de buceo',
                'Souvenir',
                'Seguro de buceo',
                'Fotos y Videos',
                'Actividades y Experiencias de buceo',
                'Snacks durante las jornadas de buceo',
                'Acompañamiento de instructores PADI',
                'Material de estudio Digital PADI',
                'Certificado Open Water Diver'
            ],
            noIncluye: [
                'Tiquetes aéreos Origen – SAI – Origen',
                'Propinas y servicios no especificados en el plan',
                'Tarjeta de turismo',
                'Tours no especificados en el plan',
                'Transporte interno'
            ],
            itinerario: [
                {
                    dia: 1,
                    titulo: 'LLEGADA',
                    actividades: [
                        'Llegada al aeropuerto',
                        '12:00 p.m. Almuerzo de bienvenida',
                        '3:00 p.m. Sesión de apnea',
                        '7:00 p.m. Cena'
                    ]
                },
                {
                    dia: 2,
                    titulo: 'AGUAS CONFINADAS',
                    actividades: [
                        '7:30 a.m. Desayuno',
                        '9:00 a.m. Sesión de Aguas Confinadas I',
                        '1:00 p.m. Almuerzo Grupal',
                        '3:00 p.m. Sesión de Aguas Confinadas II',
                        '7:00 p.m. Cena'
                    ]
                },
                {
                    dia: 3,
                    titulo: 'BUCEO EN AGUAS ABIERTAS I',
                    actividades: [
                        '7:30 a.m. Desayuno',
                        '8:30 a.m. Buceo en Aguas Abiertas I',
                        '10:00 a.m. Snack',
                        '11:00 a.m. Buceo en Aguas Abiertas II',
                        '1:00 p.m. Almuerzo Grupal',
                        'Tarde Libre',
                        '7:00 p.m. Cena'
                    ]
                },
                {
                    dia: 4,
                    titulo: 'BUCEO EN AGUAS ABIERTAS II',
                    actividades: [
                        '7:30 a.m. Desayuno',
                        '8:30 a.m. Buceo en Aguas Abiertas III',
                        '10:00 a.m. Snack',
                        '11:00 a.m. Buceo en Aguas Abiertas IV',
                        '1:00 p.m. Almuerzo Grupal',
                        'Tarde Libre',
                        '7:00 p.m. Asado con Felo'
                    ]
                },
                {
                    dia: 5,
                    titulo: 'BUCEO RECREATIVO',
                    actividades: [
                        '7:30 a.m. Desayuno',
                        '8:30 a.m. Buceo Recreativo I',
                        '10:00 a.m. Snack',
                        '11:00 a.m. Buceo Recreativo II',
                        '1:00 p.m. Almuerzo Grupal',
                        'Tarde Libre',
                        '7:00 p.m. Cena Especial'
                    ]
                },
                {
                    dia: 6,
                    titulo: 'SALIDA',
                    actividades: [
                        '7:30 a.m. Desayuno',
                        'Fin de la experiencia salida aeropuerto'
                    ]
                }
            ],
            planPagos: [
                {
                    dias: '30 días antes',
                    descripcion: 'Pago único de $ 5.500.000 COP'
                },
                {
                    dias: '60 días antes',
                    descripcion: '2 pagos de $ 2.750.000 COP'
                },
                {
                    dias: '90 días antes',
                    descripcion: '2 pagos de $ 1.830.000 COP + 1 pago de $ 1.840.000 COP'
                },
                {
                    dias: '120 días antes',
                    descripcion: '4 pagos de $ 1.375.000 COP'
                }
            ]
        }
    },
    {
        id: 'camp-002',
        titulo: 'Campamento de buceo PADI - Advanced Open Water Diver',
        descripcion: 'Lleva tu buceo al siguiente nivel. Explora las fechas de nuestros campamentos PADI Advanced Open Water Diver y vive nuevas aventuras bajo el mar en San Andrés.',
        imagenUrl: 'https://res.cloudinary.com/felodivers/image/upload/v1767801443/felo-divers/imagenes/img04_hajmmb.png',
        precio: '$5.500.000 COP',
        etiqueta: 'Campamentos',
        slug: 'advanced-open-water-diver',
        contenidoCompleto: {
            descripcionCompleta: 'Para buzos certificados que desean expandir sus habilidades y explorar escenarios de buceo más desafiantes. Este campamento te permite especializarte en técnicas avanzadas, buceo profundo y navegación submarina, bajo la guía de nuestros instructores expertos PADI.',
            calendario: [
                'Ene 14 – Ene 19',
                'Ene 28 – Feb 02',
                'Feb 11 – Feb 16',
                'Mar 04 – Mar 09',
                'Mar 25 – Mar 30',
                'Abr 01 – Abr 06',
                'Abr 15 – Abr 20',
                'Abr 29 – May 04',
                'May 20 – May 25',
                'Jun 03 – Jun 08',
                'Jun 24 – Jun 29'
            ],
            incluye: [
                'Sesión de Apnea',
                'Alojamiento en la casa de Felo Divers (5 noches, 6 días – acomodación múltiple)',
                'Alimentación (5 desayunos, 5 almuerzos, 4 cenas)',
                'Transporte Aeropuerto-Hotel-Aeropuerto',
                'Transporte actividades de Buceo',
                'Equipo de buceo profesional',
                'Souvenir exclusivo Advanced',
                'Seguro de buceo premium',
                'Fotos y Videos en 4K',
                'Actividades especializadas de buceo',
                'Snacks y refrescos durante jornadas',
                'Acompañamiento de instructores PADI certificados',
                'Material de estudio Digital PADI Advanced',
                'Certificado Advanced Open Water Diver'
            ],
            noIncluye: [
                'Tiquetes aéreos Origen – SAI – Origen',
                'Propinas y servicios no especificados en el plan',
                'Tarjeta de turismo',
                'Tours no especificados en el plan',
                'Equipo técnico especializado adicional'
            ],
            itinerario: [
                {
                    dia: 1,
                    titulo: 'LLEGADA Y ORIENTACIÓN',
                    actividades: [
                        'Llegada al aeropuerto',
                        '12:00 p.m. Almuerzo de bienvenida',
                        '3:00 p.m. Sesión de evaluación de habilidades',
                        '7:00 p.m. Cena y sesión informativa'
                    ]
                },
                {
                    dia: 2,
                    titulo: 'BUCEO PROFUNDO',
                    actividades: [
                        '7:30 a.m. Desayuno',
                        '9:00 a.m. Buceo Profundo - Inmersión I',
                        '1:00 p.m. Almuerzo Grupal',
                        '3:00 p.m. Buceo Profundo - Inmersión II',
                        '7:00 p.m. Cena y debriefing'
                    ]
                },
                {
                    dia: 3,
                    titulo: 'NAVEGACIÓN SUBMARINA',
                    actividades: [
                        '7:30 a.m. Desayuno',
                        '8:30 a.m. Buceo de Navegación - Inmersión I',
                        '10:00 a.m. Snack',
                        '11:00 a.m. Buceo de Navegación - Inmersión II',
                        '1:00 p.m. Almuerzo Grupal',
                        'Tarde Libre - Exploración',
                        '7:00 p.m. Cena'
                    ]
                },
                {
                    dia: 4,
                    titulo: 'BUCEO ESPECIALIZADO',
                    actividades: [
                        '7:30 a.m. Desayuno',
                        '8:30 a.m. Buceo Especializado - Inmersión I',
                        '10:00 a.m. Snack',
                        '11:00 a.m. Buceo Especializado - Inmersión II',
                        '1:00 p.m. Almuerzo Grupal',
                        'Tarde Libre',
                        '7:00 p.m. Asado con Felo y equipo'
                    ]
                },
                {
                    dia: 5,
                    titulo: 'EXPEDICIÓN AVANZADA',
                    actividades: [
                        '7:30 a.m. Desayuno',
                        '8:30 a.m. Expedición Avanzada - Inmersión I',
                        '10:00 a.m. Snack',
                        '11:00 a.m. Expedición Avanzada - Inmersión II',
                        '1:00 p.m. Almuerzo Grupal',
                        'Tarde Libre',
                        '7:00 p.m. Cena Especial de Graduación'
                    ]
                },
                {
                    dia: 6,
                    titulo: 'SALIDA',
                    actividades: [
                        '7:30 a.m. Desayuno',
                        'Entrega de certificados',
                        'Fin de la experiencia salida aeropuerto'
                    ]
                }
            ],
            planPagos: [
                {
                    dias: '30 días antes',
                    descripcion: 'Pago único de $ 5.500.000 COP'
                },
                {
                    dias: '60 días antes',
                    descripcion: '2 pagos de $ 2.750.000 COP'
                },
                {
                    dias: '90 días antes',
                    descripcion: '2 pagos de $ 1.830.000 COP + 1 pago de $ 1.840.000 COP'
                },
                {
                    dias: '120 días antes',
                    descripcion: '4 pagos de $ 1.375.000 COP'
                }
            ]
        }
    },
    {
        id: 'camp-003',
        titulo: 'Campamento de buceo PADI - FUNDIVE',
        descripcion: 'Más que buceo, una aventura. Combina inmersiones recreativas con paisajes caribeños y momentos inolvidables en San Andrés.',
        imagenUrl: 'https://res.cloudinary.com/felodivers/image/upload/v1767801445/felo-divers/imagenes/img05_knnzyh.png',
        precio: '$5.500.000 COP',
        etiqueta: 'Campamentos',
        slug: 'fundive',
        contenidoCompleto: {
            descripcionCompleta: 'Una experiencia única que combina certificación de buceo con aventuras y diversión en el paraíso caribeño de San Andrés. FUNdive es perfecto para aquellos que quieren aprender a bucear mientras disfrutan de la cultura local, actividades acuáticas variadas y momentos memorables con un grupo de compañeros y instructores apasionados.',
            calendario: [
                'Ene 14 – Ene 19',
                'Ene 28 – Feb 02',
                'Feb 11 – Feb 16',
                'Mar 04 – Mar 09',
                'Mar 25 – Mar 30',
                'Abr 01 – Abr 06',
                'Abr 15 – Abr 20',
                'Abr 29 – May 04',
                'May 20 – May 25',
                'Jun 03 – Jun 08',
                'Jun 24 – Jun 29'
            ],
            incluye: [
                'Sesión de Apnea',
                'Alojamiento en la casa de Felo Divers (5 noches, 6 días – acomodación múltiple)',
                'Alimentación completa (5 desayunos, 5 almuerzos, 4 cenas)',
                'Transporte Aeropuerto-Hotel-Aeropuerto',
                'Transporte a todas las actividades',
                'Equipo de buceo completo',
                'Salida a isla privada',
                'Seguro de buceo',
                'Fotos y Videos profesionales',
                'Actividades recreativas variadas'
            ],
            noIncluye: [
                'Tiquetes aéreos Origen – SAI – Origen',
                'Propinas y servicios no especificados',
                'Tarjeta de turismo',
                'Excursiones adicionales no incluidas',
                'Bebidas alcohólicas personales'
            ],
            itinerario: [
                {
                    dia: 1,
                    titulo: 'BIENVENIDA AL PARAÍSO',
                    actividades: [
                        'Llegada y traslado al hotel',
                        '12:00 p.m. Almuerzo de bienvenida',
                        '2:00 p.m. Tour por la isla',
                        '4:00 p.m. Conocer el grupo y equipo',
                        '7:00 p.m. Cena con vista al mar'
                    ]
                },
                {
                    dia: 2,
                    titulo: 'PRIMEROS PASOS BAJO AGUA',
                    actividades: [
                        '7:30 a.m. Desayuno caribeño',
                        '9:00 a.m. Clase teórica y sesión en piscina',
                        '1:00 p.m. Almuerzo típico raizal',
                        '3:00 p.m. Primera inmersión en aguas claras',
                        '7:00 p.m. Cena y fogata en la playa'
                    ]
                },
                {
                    dia: 3,
                    titulo: 'EXPLORANDO EL ARRECIFE',
                    actividades: [
                        '7:30 a.m. Desayuno con frutas tropicales',
                        '8:30 a.m. Buceo en Arrecife de Coral',
                        '10:00 a.m. Snack en la playa',
                        '11:00 a.m. Snorkel en laguna turquesa',
                        '1:00 p.m. Almuerzo Grupal',
                        'Tarde Libre - Playa y actividades opcionales',
                        '7:00 p.m. Cena'
                    ]
                },
                {
                    dia: 4,
                    titulo: 'AVENTURA COMPLETA',
                    actividades: [
                        '7:30 a.m. Desayuno',
                        '8:30 a.m. Buceo Profundo y Navegación',
                        '10:00 a.m. Snack',
                        '11:00 a.m. Segundo buceo exploratorio',
                        '1:00 p.m. Almuerzo Grupal',
                        'Tarde Libre - Masaje en la playa o relajación',
                        '7:00 p.m. Asado tradicional raizal'
                    ]
                },
                {
                    dia: 5,
                    titulo: 'INMERSIÓN FINAL Y FIESTA',
                    actividades: [
                        '7:30 a.m. Desayuno',
                        '8:30 a.m. Buceo recreativo final',
                        '10:00 a.m. Snack',
                        '11:00 a.m. Práctica de certificación',
                        '1:00 p.m. Almuerzo Grupal',
                        'Tarde Libre - Último baño y recuerdos',
                        '7:00 p.m. Cena de Gala de Graduación y Celebración'
                    ]
                },
                {
                    dia: 6,
                    titulo: 'REGRESO CON NUEVAS ALAS',
                    actividades: [
                        '7:30 a.m. Desayuno de despedida',
                        'Entrega de certificados',
                        'Despedida del equipo',
                        'Traslado al aeropuerto'
                    ]
                }
            ],
            planPagos: [
                {
                    dias: '30 días antes',
                    descripcion: 'Pago único de $ 5.500.000 COP'
                },
                {
                    dias: '60 días antes',
                    descripcion: '2 pagos de $ 2.750.000 COP'
                },
                {
                    dias: '90 días antes',
                    descripcion: '2 pagos de $ 1.830.000 COP + 1 pago de $ 1.840.000 COP'
                },
                {
                    dias: '120 días antes',
                    descripcion: '4 pagos de $ 1.375.000 COP'
                }
            ]
        }
    },
    // ... agrega todos tus campamentos aquí ...
];