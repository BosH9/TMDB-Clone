
var data;
var secure_base_url = "https://image.tmdb.org/t/p/";
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let ele = document.getElementById('trendingimages');
        document.getElementById('loading').classList.add("loading");
        data = (JSON.parse(this.responseText));

        let ul = document.createElement('ul');
        let li;
        let img;
        for (let res of data.results) {
            li = document.createElement('li');
            img = document.createElement('img');
            img.src = secure_base_url + 'w154/' + res.poster_path;
            li.appendChild(img);
            ul.appendChild(li);
        }
        ele.appendChild(ul);
    }
}
xhr.open('GET', 'https://api.themoviedb.org/3/trending/all/day?api_key=95151cae44d96379291d89bb6a8894e1', true);
xhr.send();
