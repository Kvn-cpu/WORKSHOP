import { getData } from "../modules/getData.js";
import { postData } from "../modules/postData.js";
import { showData } from "../modules/showData.js";

const url = "http://localhost:3000/movies";
const movieContainer = document.getElementById("movieContainer");
const addMovieForm = document.getElementById("addMovieForm");
const searchInput = document.getElementById("searchInput");


let allMovies = [];

const loadMovies = async () => {
  try {
    allMovies = await getData(url);
    showData(allMovies, movieContainer);
  } catch (error) {
    console.error("Failed to load movies:", error);
  }
};


const filterMovies = (query) => {
  const filteredMovies = allMovies.filter(movie =>
    movie.Title.toLowerCase().includes(query.toLowerCase())
  );
  showData(filteredMovies, movieContainer);
};

searchInput.addEventListener("input", (e) => {
  filterMovies(e.target.value);
});


addMovieForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newMovie = {
    id: crypto.randomUUID(),
    Title: document.getElementById("titleInput").value,
    Year: document.getElementById("yearInput").value,
    Value: document.getElementById("valueInput").value,
    Poster: document.getElementById("posterInput").value,
    Description: document.getElementById("descriptionInput").value,
    Type: "movie"
  };

  try {
    await postData(url, newMovie);
    loadMovies(); 
  } catch (error) {
    console.error("Failed to add movie:", error);
  }
});


loadMovies();

