const API_KEY = "a119a7940d9f7ea0fc20d45abebf46f8";

fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=Mr%20Robot`)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const poster = data.results[0].poster_path;
    console.log("https://image.tmdb.org/t/p/w500" + poster);
  });
