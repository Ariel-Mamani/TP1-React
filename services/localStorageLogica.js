/* guardo este archivo en una carpeta llamada services porque definimos un pequeño servicio de utilidades para manejar el localStorage de manera más organizada y reutilizable. */

/* puedo usarlo para:
- guardar la lista de películas/series
- separar por usuario (aunque sean ficticios)
- Mantener los datos entre recargas de la página
*/

/* nombre clave bajo el cual se va a guardar 
todo el contenido en localStorage (clave única) */
const LOCAL_STORAGE_KEY = 'movieData';
/* como en localStorage todos los datos se guardan como par clave:valor, 
en este caso movieData sería la clave general de la app */

// guardo los datos:
// Esta función guarda la info de un usuario específico (por ejemplo, películas que agregó).
export const saveData = (data, username = "defaultUser") => {
    const currentData = getAllData(); //obtenemos todos los datos actuales del localStorage
    currentData[username] = data; //sobreescribimos los datos de este usuario
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentData)); //guardamos los datos en el localStorage de nuevo
}

/* 
si no se pasa ningún username, se usa "defaultUser" por defecto.
al guardar, se actualiza el objeto completo en localStorage, no solo los datos del usuario actual (para no perder los datos guardados)
*/

// obtener los datos de un usuario:
export const getData = (username = "defaultUser") => {
const allData = getAllData(); //obtenemos todos los datos actuales del localStorage
return allData[username] || []; //si no existe el usuario, devolvemos un array vacío

}

// obtener todos los datos guardados:
export const getAllData = () => {
    const dataStored = localStorage.getItem(LOCAL_STORAGE_KEY); //obtenemos los datos guardados en localStorage
    return dataStored ? JSON.parse(dataStored) : {}; //si no hay datos, devolvemos un objeto vacío  
}

/* ejemplo de datos en localStorage:

{
  "defaultUser": [
    {
      "titulo": "Inception",
      "director": "Nolan",
      "rating": 5
    }
  ],
  "usuario2": [
    {
      "titulo": "Breaking Bad",
      "tipo": "serie"
    }
  ]
}


*/