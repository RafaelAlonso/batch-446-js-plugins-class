// AJAX GET (omdb)
​
// Colocando a tag <UL> em results
const results = document.getElementById('results');
​
const form = document.getElementById('search-movies');
​
form.addEventListener('submit',(event) => {
​
  event.preventDefault(); // Usado para evitar o comportamento padrão do form que é recarregar a página
​
  const keyword = document.getElementById('keyword').value;
​
  results.innerHTML = ''; // Limpa os resultados anteriores
​
  searchMovies(keyword); // Pesquisa pelo filme
​
});
​
​
const searchMovies = (keyword) => {
​
  const url = `http://www.omdbapi.com/?apikey=adf1f2d7&s=${keyword}` // URL API
​
​
  fetch(url) // Ajax
    .then(response => response.json()) // converte a http response em json
    .then((data)=>{ //data contém os dados da API
​
      // console.log(data.Search);
​
      data.Search.forEach((result)=>{ // Search é um array de objects com os dados dos filmes
        // console.log(result);
​
        // movie é o HTML do <li>
        const movie = `
          <li class='list-inline-item'>
            <p>${result.Title}</p>
            <img src='${result.Poster}' style='height: 200px;'>
          </li>`
​
        results.insertAdjacentHTML('beforeend', movie); // Insere cada <li> dentro do <ul>
​
​
      });
    });
}
