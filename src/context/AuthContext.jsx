import React, { createContext, useContext, useState, useEffect } from 'react';

// ======================================
// 1. CREACIÓN DEL CONTEXTO
// ======================================
// Inicializado como null. El Provider (Proveedor) establecerá el valor real.
const AuthContext = createContext(null);

// ======================================
// 2. HOOK PERSONALIZADO
// ======================================
// Facilita el consumo del contexto en cualquier componente.
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    // Esto asegura que useAuth solo se use dentro de AuthProvider.
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

// ======================================
// 3. PROVEEDOR DEL CONTEXTO
// ======================================
// Mantiene el estado de autenticación y proporciona las funciones.
export const AuthProvider = ({ children }) => {
  
  // 💡 Inicialización: Intenta leer el token guardado en el LocalStorage
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('userToken') || null);
  const [loading, setLoading] = useState(true); // Para manejar el tiempo de carga/verificación inicial

  // Efecto para verificar la sesión al cargar la app
  useEffect(() => {
    if (token) {
      // Si hay un token, asumimos (por ahora) que hay una sesión activa.
      // En una aplicación real, se haría una llamada a la API aquí (e.g., /api/me)
      // para validar el token y obtener los datos completos del usuario.
      
      // Simulación de datos del usuario
      setUser({ email: 'usuario@activo.com', name: 'Usuario' }); 
    }
    setLoading(false);
  }, [token]);

  // Función para Iniciar Sesión (llamada desde LoginForm)
  const login = (newToken, userData) => {
    // 1. Actualizar estados
    setToken(newToken);
    setUser(userData);
    
    // 2. Persistir (guardar) el token para que persista al recargar el navegador
    localStorage.setItem('userToken', newToken);
  };

  // Función para Cerrar Sesión (llamada desde Navbar)
  const logout = () => {
    // 1. Limpiar estados
    setToken(null);
    setUser(null);
    
    // 2. Limpiar almacenamiento local
    localStorage.removeItem('userToken');
  };
  
  // Valores que se expondrán a través del contexto
  const value = {
    user,
    token,
    isLoggedIn: !!token, // True si existe un token
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {/* ⚠️ Opcional: Mostrar un loader mientras el contexto verifica el token */}
      {loading ? <div>Cargando sesión...</div> : children} 
    </AuthContext.Provider>
  );
};