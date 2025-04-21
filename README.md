# Trabajo Práctico: REACT

## integrantes: 
- **Ariel Mamani** FAI-3607
- **Diego Marchandon** FAI-4886
- **Ignacio Araya** FAI-836

## Descripción del proyecto: 
Construir en React una aplicación que funcione como gestor personal de películas y series.
La aplicación debe permitir al usuario agregar nuevas películas o series, marcarlas como 
vistas, editarlas y eliminarlas (con confirmación). 
Cada ítem debe tener título, director, año, género (usar un select para este campo), rating y 
tipo (película o serie). 
La aplicación debe mostrar dos listas: una con contenido por ver y otra con contenido visto.

>*a. En el archivo readme.md:*  
>*Explicar la función de los siguientes archivos iniciales: index.js,*
>*App.js, index.css y package-json.js.*
1. **index.js:**
Punto de entrada de nuestra aplicación, en donde se renderiza el componente principal `<App/>` dentro del elemento raíz `<div id="root"></div>`.
2. **App.js:**
Componente principal de la aplicación. Actúa como un contenedor que puede tener otros componentes (como el Navbar, rutas, Footer, etc).Donde indicamos los componentes y definimos la lógica principal de nuestra aplicación.
3. **index-css:** 
Archivo de estilos globales de la aplicación. Se suele importar a index.js para aplicar estilos que afectan a toda la app.
4. **package.json:**
es el archivo de configuración del proyecto. Contiene metadatos como su nombre, versión, dependencias y scripts(como start, build, deploy), versión del proyecto y más.
Es fundamental para que npm sepa cómo manejar la aplicación. 


***** lINK AL PROYECTO EN VERCEL ****
https://tp-1-react-o9qx.vercel.app/