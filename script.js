document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("btnSortear");

    btn.addEventListener("click", function(e) {

        
        const circle = document.createElement("span");

        const size = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = circle.style.height = size + "px";
        circle.style.left = e.offsetX - size / 2 + "px";
        circle.style.top = e.offsetY - size / 2 + "px";

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 600);

        
        getFilmeseSeries();
    });

    async function getFilmeseSeries() {
        try {
            if (navigator.vibrate) {
                navigator.vibrate(200);
            }

            const div = document.getElementById("filmesSeries");
            div.style.display = "block";
            div.innerHTML = "Carregando... ⏳";

            const response = await fetch("https://api.tvmaze.com/search/shows?q=star");
            const data = await response.json();

            const sorteio = data[Math.floor(Math.random() * data.length)];
            const serie = sorteio.show;

            const resumoLimpo = serie.summary.replace(/<[^>]*>/g, '');

            
            document.body.style.setProperty("--bg", `url(${serie.image?.original})`);

            div.innerHTML = `
                <h3>${serie.name}</h3>
                <img src="${serie.image?.medium}">
                <p>${resumoLimpo}</p>
            `;

        } catch (err) {
            console.log(err);
        }
    }

});