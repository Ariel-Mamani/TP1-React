// archivo para almacenar datos previos de peliculas

const peliculas = {
    0:{
      id: "1a8f7a11-bc23-4d48-a61c-2c1b888a1234",
      titulo: "Interstellar",
      director: "Christopher Nolan",
      año: "2014",
      genero: "Ciencia ficcion",
      tipo: "Película",
      image: "",
      visto: null
    },
    1:{
      id: "2b3f9e72-d3ee-411b-9cde-4e1f6fcb5678",
      titulo: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      año: "1999",
      genero: "Ciencia ficcion",
      tipo: "Película",
      image: "",
      visto: null
    },
    2:{
      id: "3c7d8f82-08ae-49e6-9a41-90c3caa98765",
      titulo: "Inception",
      director: "Christopher Nolan",
      año: "2010",
      genero: "Ciencia ficcion",
      tipo: "Película",
      image: "",
      visto: null
    },
    3:{
      id: "4df0c935-f0b5-4b34-8d12-6a7a331155aa",
      titulo: "Black Mirror",
      director: "Charlie Brooker",
      año: "2011",
      genero: "Ciencia ficcion",
      tipo: "Serie",
      image: "",
      visto: null
    },
    4:{
      id: "5eaaf8b0-9c77-41aa-9e28-5ccaa0144444",
      titulo: "The Office",
      director: "Greg Daniels",
      año: "2005",
      genero: "Comedia",
      tipo: "Serie",
      image: "",
      visto: null
    },
    5:{
      id: "6fe09ab1-822c-4d5d-a03b-12edc74a3567",
      titulo: "Hereditary",
      director: "Ari Aster",
      año: "2018",
      genero: "Terror",
      tipo: "Película",
      image: "",
      visto: null
    },
    6:{
      id: "7abc1f03-4a2b-4ef1-9c2e-d60e34a955cb",
      titulo: "Parasite",
      director: "Bong Joon-ho",
      año: "2019",
      genero: "Drama",
      tipo: "Película",
      image: "",
      visto: null
    },
    7:{
      id: "8d92aee5-dfc3-498d-ae83-998de0a400f9",
      titulo: "Stranger Things",
      director: "The Duffer Brothers",
      año: "2016",
      genero: "Ciencia ficcion",
      tipo: "Serie",
      image: "",
      visto: null
    },
    8:{
      id: "9e3b2cfa-2905-4e22-97fb-b72d9325123d",
      titulo: "The Godfather",
      director: "Francis Ford Coppola",
      año: "1972",
      genero: "Drama",
      tipo: "Película",
      image: "",
      visto: null
    },
    9:{
      id: "10f57c3d-98d4-41f4-9b60-9bfa9801fbe1",
      titulo: "Get Out",
      director: "Jordan Peele",
      año: "2017",
      genero: "Terror",
      tipo: "Película",
      image: "",
      visto: null
    }
}

// localStorage.setItem("peliculas", JSON.stringify(peliculas));
localStorage.setItem("peliculas", JSON.stringify(Object.values(peliculas)));
// console.log(localStorage.getItem("peliculas"));