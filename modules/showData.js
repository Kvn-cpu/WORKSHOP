export const showData = (movies, container) => {
    container.innerHTML = "";
  
    movies.forEach(movie => {
      const { id, Title, Year, Value, Poster, Description } = movie;
  
      const movieDiv = document.createElement("div");
      movieDiv.classList.add("movie");
      movieDiv.setAttribute('id', id);
  
      movieDiv.innerHTML = `
        <img src="${Poster}" alt="${Title}" />
        <div class="movie-info">
          <h3>${Title}</h3>
          <span>${Year}</span>
          <p>${Description}</p>
          <span>Rating: ${Value}</span>
        </div>
      `;
  
      container.appendChild(movieDiv);
    });
  };
  
  
  