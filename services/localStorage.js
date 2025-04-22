// archivo para almacenar datos previos de peliculas

const peliculas = {
    0:{
      id: "1a8f7a11-bc23-4d48-a61c-2c1b888a1234",
      titulo: "Interstellar",
      director: "Christopher Nolan",
      año: "2014",
      genero: "Ciencia ficcion",
      tipo: "Película",
      image: "../public/img2.jpg",
      visto: null,
      rating: '5'
    },
    1:{
      id: "2b3f9e72-d3ee-411b-9cde-4e1f6fcb5678",
      titulo: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      año: "1999",
      genero: "Ciencia ficcion",
      tipo: "Película",
      image: "../public/matrix.jpg",
      visto: null,
      rating: '5'
      
    },
    2:{
      id: "3c7d8f82-08ae-49e6-9a41-90c3caa98765",
      titulo: "Inception",
      director: "Christopher Nolan",
      año: "2010",
      genero: "Ciencia ficcion",
      tipo: "Película",
      image: "../public/Inception.jpg",
      visto: null,
      rating: '5'
    },
    3:{
      id: "4df0c935-f0b5-4b34-8d12-6a7a331155aa",
      titulo: "Black Mirror",
      director: "Charlie Brooker",
      año: "2011",
      genero: "Ciencia ficcion",
      tipo: "Serie",
      image: "../public/Black_Mirror.jpg",
      visto: null,
      rating: '4'
    },
    4:{
      id: "5eaaf8b0-9c77-41aa-9e28-5ccaa0144444",
      titulo: "The Office",
      director: "Greg Daniels",
      año: "2005",
      genero: "Comedia",
      tipo: "Serie",
      image: "../public/theoffice.jpg",
      visto: null,
      rating: '5'
    },
    5:{
      id: "6fe09ab1-822c-4d5d-a03b-12edc74a3567",
      titulo: "Hereditary",
      director: "Ari Aster",
      año: "2018",
      genero: "Terror",
      tipo: "Película",
      image: "../public/hereditary.jpg",
      visto: null,
      rating: '4'
    },
    6:{
      id: "7abc1f03-4a2b-4ef1-9c2e-d60e34a955cb",
      titulo: "Parasite",
      director: "Bong Joon-ho",
      año: "2019",
      genero: "Drama",
      tipo: "Película",
      image: "../public/parasite.jpeg",
      visto: null,
      rating: '5'
    },
    7:{
      id: "8d92aee5-dfc3-498d-ae83-998de0a400f9",
      titulo: "Stranger Things",
      director: "The Duffer Brothers",
      año: "2016",
      genero: "Ciencia ficcion",
      tipo: "Serie",
      image: "../public/Stranger_Things.png",
      visto: null,
      rating: '5'
    },
    8:{
      id: "9e3b2cfa-2905-4e22-97fb-b72d9325123d",
      titulo: "The Godfather",
      director: "Francis Ford Coppola",
      año: "1972",
      genero: "Drama",
      tipo: "Película",
      image: "../public/the-godfather.jpg",
      visto: null,
      rating: '5'
    },
    9:{
      id: "10f57c3d-98d4-41f4-9b60-9bfa9801fbe1",
      titulo: "Get Out",
      director: "Jordan Peele",
      año: "2017",
      genero: "Terror",
      tipo: "Película",
      image: "../public/getout.jpg",
      visto: null,
      rating: '4'
    }
}

// verificamos si ya hay datos en localStorage O si el arreglo está vacío
const peliculasGuardadas = localStorage.getItem("peliculas");
if (!peliculasGuardadas || JSON.parse(peliculasGuardadas).length === 0) {
  // Si no hay nada, cargamos las películas por defecto
  localStorage.setItem("peliculas", JSON.stringify(peliculas)); 
}


// localStorage.setItem("peliculas", JSON.stringify(peliculas));
// localStorage.setItem("peliculas", JSON.stringify(Object.values(peliculas)));
// console.log(localStorage.getItem("peliculas"));