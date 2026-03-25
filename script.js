document.getElementById("btnSortear")
.addEventListener("click", getFilmeseSeries);

async function getFilmeseSeries() {
    try {
        const response = await fetch("https://api.tvmaze.com/search/shows?q=star");
        const data = await response.json();

        const sorteio = data[Math.floor(Math.random() * data.length)];
        const serie = sorteio.show;

        // remove HTML da descrição
        const resumoLimpo = serie.summary.replace(/<[^>]*>/g, '');

        document.getElementById("filmesSeries").innerHTML = `
            <h3>${serie.name}</h3>
            <img src="${serie.image?.medium}" width="200">
            <p>${resumoLimpo}</p>
        `;
    } catch (err) {
        console.log("Erro:", err);
    }
}