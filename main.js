let moviesList = document.querySelector('.moviesList'),
API_KEY = '3bf3e15',
page = localStorage.getItem('page'),
movie = localStorage.getItem('movieName'),
poisk = document.querySelector('.poisk'),
search = document.querySelector('.search'),
pageBtn = document.querySelectorAll('#pageBtn'),
form = document.querySelector('.form')


search.value = localStorage.getItem('movieName')

function validationPage(){
  for(let pageNum of pageBtn){
    fetch(`http://www.omdbapi.com/?s=${movie}&page=${+pageNum.innerHTML}&apikey=${API_KEY}`)
    .then(res=> res.json())
    .then(data=> {
      // console.log(data);

      if(data.Response == 'False'){
        pageNum.style.display = 'none'

      }
    })
  }
}

validationPage()

fetch(`http://www.omdbapi.com/?s=${movie}&page=${page}&apikey=${API_KEY}`)
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
.catch(err=>{
  let error = document.createElement('h1')

  error.innerHTML = 'Sorry movie not found'
  moviesList.appendChild(error)

})

function paginationPage (e) {
  localStorage.setItem('page', e.innerHTML)
}


poisk.addEventListener('click', ()=>{
  if(localStorage.getItem('movieName') != search.value){
    localStorage.setItem('page', 1)
  }
  else{
    localStorage.setItem('page', e.innerHTML)
  }

  

  localStorage.setItem('movieName', search.value)
})