import React, { useState } from 'react';
import './Politicas.css';
import Footer from '../Footer';

function Politicas() {
  const [activeSection, setActiveSection] = useState('cancelacion');

  const sections = {
    cancelacion: {
      title: 'Política de Cancelación y Reembolsos',
      content: (
        <div className='politicas-content'>
          <h3>En FELO DIVERS entendemos que pueden surgir imprevistos y queremos ser claros respecto a las condiciones de cancelación:</h3>
          
          <h4>Cancelaciones realizadas por el cliente</h4>
          <ul>
            <li><strong>Con más de 90 días de antelación:</strong> reembolso del 80 % del valor total (se retiene un 20 % por gastos administrativos).</li>
            <li><strong>Entre 89 y 30 días antes del viaje:</strong> reembolso del 50 %.</li>
            <li><strong>Menos de 30 días antes:</strong> no habrá reembolso.</li>
          </ul>
          
          <p>En viajes nacionales, si cancelas hasta 30 días antes, puedes solicitar un bono equivalente al 70 % del valor pagado, válido por 12 meses.</p>
          <p>En viajes internacionales, este bono aplica solo si cancelas con más de 45 días de anticipación.</p>
          
          <h4>Cancelaciones realizadas por FELO DIVERS</h4>
          <p>Si debemos cancelar por condiciones climáticas, fuerza mayor o motivos de seguridad, ofreceremos tres opciones:</p>
          <ol>
            <li>Reembolso total</li>
            <li>Reprogramación en nueva fecha</li>
            <li>Bono equivalente al 100 %, válido por 12 meses</li>
          </ol>
          
          <h4>Consideraciones adicionales</h4>
          <ul>
            <li>Los gastos de vuelos, hoteles u otros servicios adquiridos de manera independiente por el cliente no están cubiertos por nuestra política de reembolso.</li>
            <li>Si el cliente no cumple con los requisitos médicos o de certificación al momento de la actividad, no habrá reembolso.</li>
          </ul>
        </div>
      )
    },
    terminos: {
      title: 'Términos y Condiciones Generales',
      content: (
        <div className='politicas-content'>
          <p>Al reservar o participar en cualquier actividad con FELO DIVERS, aceptas los siguientes términos:</p>
          
          <ul>
            <li><strong>Uso responsable de nuestros servicios:</strong> todas las actividades se deben realizar siguiendo las instrucciones de nuestros instructores y guías.</li>
            <li><strong>Disponibilidad y precios:</strong> nos reservamos el derecho de actualizar precios, horarios o itinerarios sin previo aviso. En caso de cambios, siempre buscaremos una solución justa para el cliente.</li>
            <li><strong>Reservas:</strong> se confirman mediante un depósito del 50 % o el pago completo según la actividad.</li>
            <li><strong>Equipo:</strong> si alquilas equipo de buceo, eres responsable de su buen uso. En caso de pérdida o daño, se aplicará un cargo proporcional al valor del equipo.</li>
            <li><strong>Derecho de admisión:</strong> podemos rechazar la participación de cualquier persona que ponga en riesgo su seguridad o la del grupo.</li>
            <li><strong>Legislación aplicable:</strong> estos términos se rigen por las leyes de Colombia, y cualquier disputa será resuelta bajo su jurisdicción.</li>
          </ul>
        </div>
      )
    },
    privacidad: {
      title: 'Política de Privacidad y Tratamiento de Datos Personales',
      content: (
        <div className='politicas-content'>
          <p>En FELO DIVERS valoramos tu confianza.</p>
          
          <h4>Qué datos recolectamos</h4>
          <p>Nombre, número de identificación, contacto, información de salud relevante para el buceo, certificaciones y preferencias de viaje.</p>
          
          <h4>Para qué los usamos</h4>
          <ul>
            <li>Gestionar reservas y pagos</li>
            <li>Cumplir requisitos de seguridad</li>
            <li>Emitir seguros de viaje o pólizas</li>
            <li>Enviarte información sobre próximas salidas o promociones (solo si lo autorizas)</li>
          </ul>
          
          <h4>Con quién los compartimos</h4>
          <p>Únicamente con aseguradoras, entidades regulatorias o proveedores relacionados con la actividad contratada.</p>
          
          <h4>Tus derechos</h4>
          <p>Puedes acceder, rectificar o solicitar la eliminación de tus datos en cualquier momento escribiendo a nuestro correo de contacto.</p>
          
          <h4>Tiempo de conservación</h4>
          <p>Guardamos la información solo mientras sea necesaria para fines administrativos o legales.</p>
        </div>
      )
    },
    cookies: {
      title: 'Política de Cookies',
      content: (
        <div className='politicas-content'>
          <p>Nuestro sitio web utiliza cookies para mejorar tu experiencia:</p>
          
          <ul>
            <li><strong>Cookies necesarias:</strong> permiten la navegación y reservas en línea.</li>
            <li><strong>Cookies analíticas:</strong> nos ayudan a entender cómo usas nuestro sitio para mejorarlo.</li>
            <li><strong>Cookies de marketing:</strong> solo se activan si las aceptas, para mostrarte información relevante sobre nuestros servicios.</li>
          </ul>
          
          <p>Puedes aceptar, rechazar o administrar el uso de cookies desde tu navegador.</p>
        </div>
      )
    },
    seguridad: {
      title: 'Seguridad, Seguros y Responsabilidades',
      content: (
        <div className='politicas-content'>
          <ul>
            <li>Para participar en nuestras actividades debes contar con una certificación de buceo válida (mínimo Open Water) o realizar un programa de iniciación con nosotros.</li>
            <li>Todos los participantes deben completar un formulario médico antes de bucear. Si existe alguna condición médica, deberás presentar un certificado de aptitud firmado por un médico.</li>
            <li>Recomendamos contar con un seguro de viaje y buceo que cubra emergencias médicas y evacuación.</li>
            <li>La práctica del buceo implica riesgos inherentes. Al reservar, reconoces y aceptas dichos riesgos, comprometiéndote a seguir las indicaciones de nuestros instructores en todo momento.</li>
          </ul>
        </div>
      )
    },
    pagos: {
      title: 'Plan de Pagos',
      content: (
        <div className='politicas-content'>
          <p>Con el fin de facilitar la inversión en tu experiencia de buceo, ofrecemos la posibilidad de pagar en 4 cuotas mensuales, siempre dentro de los primeros 5 días de cada mes.</p>
          
          <h4>Condiciones Generales</h4>
          <ul>
            <li>La primera cuota debe ser abonada al momento de confirmar la reserva.</li>
            <li>El no pago en las fechas estipuladas puede implicar la suspensión temporal de la reserva hasta que se regularice el pago.</li>
            <li>Todos los pagos deben realizarse mediante los métodos aceptados por FELO DIVERS (transferencia bancaria, tarjeta de crédito/débito o efectivo en oficina).</li>
            <li>El valor total del programa debe estar 100 % pagado antes del inicio de la actividad.</li>
          </ul>
          
          <h4>Ejemplo de Cronograma de Pagos (para una salida programada en junio 2025)</h4>
          <ul>
            <li><strong>Primera cuota (Reserva):</strong> hasta el 5 de marzo 2025 → 25 % del valor total</li>
            <li><strong>Segunda cuota:</strong> hasta el 5 de abril 2025 → 25 % del valor total</li>
            <li><strong>Tercera cuota:</strong> hasta el 5 de mayo 2025 → 25 % del valor total</li>
            <li><strong>Cuarta cuota (Pago final):</strong> hasta el 5 de junio 2025 → 25 % del valor total</li>
          </ul>
          
          <h4>Notas Importantes</h4>
          <ul>
            <li>En caso de cancelación, aplicarán nuestras políticas de reembolso vigentes.</li>
            <li>Si el cliente no completa los pagos en el calendario establecido, la reserva podría considerarse anulada sin derecho a devolución (según las políticas de cancelación).</li>
            <li>Una vez realizado cada pago, se enviará comprobante electrónico al correo registrado.</li>
          </ul>
        </div>
      )
    }
  };

  return (
    <>
      <div className='politicas-page'>
        <div className='politicas-hero'>
          <h1>Políticas y Términos</h1>
          <p>Información importante sobre nuestros servicios</p>
        </div>

        <div className='politicas-container'>
          <aside className='politicas-sidebar'>
            <nav className='politicas-nav'>
              {Object.keys(sections).map((key) => (
                <button
                  key={key}
                  className={`politicas-nav-button ${activeSection === key ? 'active' : ''}`}
                  onClick={() => setActiveSection(key)}
                >
                  {sections[key].title}
                </button>
              ))}
            </nav>
          </aside>

          <main className='politicas-main'>
            <div className='politicas-section'>
              <h2>{sections[activeSection].title}</h2>
              {sections[activeSection].content}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Politicas;
