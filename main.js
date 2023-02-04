let moviesList = document.querySelector('.moviesList')


fetch(`http://www.omdbapi.com/?s=Ip Man&page=1&apikey=3bf3e15`)
.then(res=> res.json())
.then(data=> {
    for(let movie of data.Search){
      let title = document.createElement('h3'),
      card = document.createElement('div'),
      img = document.createElement('img'),
      year = document.createElement('span')

      card.classList.add('card')
      img.classList.add('img')
      title.classList.add('title')
      year.classList.add('h3')

      img.src = movie.Poster
      title.innerHTML = movie.Title
      year.innerHTML = movie.Year
      card.appendChild(img)
      card.appendChild(title)
      card.appendChild(year)
      moviesList.appendChild(card)
    }
})