const API_KEY = "a119a7940d9f7ea0fc20d45abebf46f8";

const shows = [
  "Alice in Borderland",
  "All of Us Are Dead",
  "American Horror Story",
  "Chernobyl",
  "Dark",
  "From",
  "Money Heist",
  "Mr. Robot",
  "Parasyte: The Grey",
  "Severance",
  "Squid Game",
  "Sweet Home",
  "The Haunting of Hill House",
  "The Walking Dead",
  "The Walking Dead: The Ones Who Live",
  "Z Nation"
];

const grid = document.getElementById("grid");

shows.forEach(show => {
  fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(show)}`)
    .then(response => response.json())
    .then(data => {
      if (!data.results.length) return;

      const poster = "https://image.tmdb.org/t/p/w500" + data.results[0].poster_path;

      grid.innerHTML += `
        <div class="card">
          <img src="${poster}" alt="${show}">
        </div>
      `;
    });
});
