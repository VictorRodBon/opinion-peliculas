# 🎬 Gestión de Opiniones de Películas – Angular

Este proyecto permite a los usuarios visualizar, crear y gestionar opiniones sobre películas. Cada opinión incluye una puntuación, una descripción y referencias al usuario y la película correspondiente. Está desarrollado con Angular en el frontend y Node.js + MongoDB en el backend.

---

## 🚀 Características principales

- Visualización de usuarios y sus valoraciones
- Creación de opiniones con puntuación y comentario
- Listado de películas favoritas por usuario
- [Integración con backend Express y MongoDB](https://github.com/VictorRodBon/basedatos-mongo)
- Interfaz modular con componentes reutilizables
- Validación de formularios y control de errores



---

## 🧰 Tecnologías utilizadas

| Tecnología     | Rol                           |
|----------------|-------------------------------|
| Angular        | Frontend SPA                  |
| TypeScript     | Tipado estático y modularidad |
| Node.js        | Backend y servidor API        |
| Express        | Framework de rutas REST       |
| MongoDB        | Base de datos NoSQL           |
| Mongoose       | ODM para MongoDB              |

---

## 📦 Instalación

### Backend

```bash
cd backend
npm install
node app.js
```
---
## APARTADOS

### Programación
[X] Dashboard peliculas
[X] Dashboard opiniones

[X] Login
[X] Registro

[X] Conexión con base de datos MongoDB y Express

[X] Crear nueva película
[ ] Modificar Pelicula

[X] Añadir opinion pelicula

---
### Diseño
[X] Dashboard peliculas
[X] Dashboard opiniones

[X] Login
[X] Registro

[X] Crear nueva película
[ ] Modificar Pelicula

[ ] Añadir opinion pelicula -> si es posible, utilizar Events and readonly ratings 


## AÑADIR 2ª PARTE
    - Añadir otro servidor
    - Añadir perfiles de usuario
    - Animación en parte usuario
    - Gráficos para dashboard administrador
    - Utilizar LocalStorage
    - Modificar Backend para que al eliminar una película se borren las opiniones
    - Modificar Backend para que al eliminar un usuario las opiniones no se borren pero que en la perte del usuario salga: '[usuariono encontrado]'
    ---
    - Agregar integración con api de google para el login




PARTE SEGUNDA (FINAL DE CURSO)

    RAs INVOLUCRADOS:

        RA2 (25%)
        RA3 (25%)
        RA4 (25%)
        RA5 (25%)
    Si al menos se ha realizado toda la parte obligatoria la nota será de un 5
    La parte servidora deberá cumplir las siguientes características:
        [X]Sera una API
        []Debe permitir el CRUD de usuarios y de los dos tipos de objetos utilizando una base de datos -> falta modificar
        [X]Debe utilizar un ORM/ODM
        [X]Debe validar y sanitizar los campos de entrada
        [X]Debe permitir la gestión de sesión con token o con cookie o con cookie/token
        [X]Debe haber al menos dos tipos de usuarios: normal y admin
        []OPCIONAL:
            [X]Debe realizar logging de las operaciones más importantes.
            [X]Debe utilizar criptografía para almacenar las contraseñas.
            []Permitir subir archivos de imágenes y mostrarlas.
            []Realizar una prueba unitaria.
    La parte cliente deberá realizar:
        [X]Control de errores
        [X]Comunicación entre componentes con @Input/@Output o con servicios
        []Carrito.
        [X]Comunicación entre componentes con el uso de señales (por ejemplo al contratar/descontratar que el número de productos del carrito se actualice)
        [X]Gestión de sesión y del perfil (el del perfil admin debe tener acceso a la parte de la aplicación que permite gestionar todas las tablas de la aplicación)
        []OPCIONAL:
            [X]Animaciones
            [X]Gráficos
            []Realizar una prueba unitaria con karma y jasmine
