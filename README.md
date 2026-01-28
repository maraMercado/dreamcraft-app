# 🚀 Dreamcraft App

**Dreamcraft App** es una aplicación móvil multiplataforma creada con **React Native y Expo** que permite a usuarios (en particular audiencia infantil) diseñar escenas e historias personalizadas utilizando interfaces intuitivas de *drag and drop* y generación de contenido con inteligencia artificial.

Integra autenticación de usuarios, almacenamiento persistente de contenido y consumo inteligente de APIs para generar historias únicas basadas en las elecciones del usuario.

---

## 📱 Descripción del proyecto

Los usuarios pueden:

- **Crear imágenes de escenas** eligiendo personajes, fondos y elementos mediante una interfaz de *drag and drop*.  
- **Personalizar historias** antes de generarlas, eligiendo género (terror, aventuras, romance, etc.), edad objetivo, longitud deseada, nombre del protagonista, etc.  
- **Generar historias con IA** basadas en las preferencias seleccionadas y en la imagen creada gracias al consumo de una API externa.  
- **Iniciar sesión mediante OAuth** para que cada usuario tenga su propio espacio y contenido.  
- **Guardar historias** y acceder a ellas en futuras sesiones, posible mediante Firebase.

---

## 🧠 Tecnologías utilizadas

Se combinan las tecnologías:

- **React Native & Expo** como base de desarrollo multiplataforma (Android, iOS y web).
- **Firebase Authentication** para manejo de inicio de sesión con OAuth. 
- **Firebase Database (Firestore)** para almacenamiento y gestión de historias de usuario.
- **Consumo de API externa (Groq)** para la generación de contenido narrativo con inteligencia artificial.
- **Librerías y utilidades** para interfaces de usuario, manejo de estado y solicitudes HTTP.
