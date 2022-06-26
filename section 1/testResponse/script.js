//fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=cea924180544dde5b612be105dafb515&units=imperial")
//api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={number of days you want to return, optional}&appid={API key}

//movie api 'https://api.themoviedb.org/3/movie/550?api_key=7867d8493e7c99e3016603c487b28046'
function testFetch() {
  fetch(
  'https://api.openweathermap.org/data/2.5/weather?q=London&appid=cea924180544dde5b612be105dafb515&units=imperial'
    )
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        console.log(data, "hard coded weather object")
     
    });
}

testFetch()


    // fetch(
    // 'https://api.themoviedb.org/3/movie/550?api_key=7867d8493e7c99e3016603c487b28046')
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (data) {

    //     for (let i = 0; i < result.length; i++) {
    //         const movieTitle = result[i];
    //         console.log(movieTitle)
    //     }
    //     console.log(response)
    //     console.log(data.result[0])
        
    //     console.log(response, "cat fact api");

    //     var catFactContainerEL = document.querySelector("#catFact-container");

    //     var catFact = document.createElement('fact');

    //     catFact.innerText = response.fact;

    //     catFactContainerEL.appendChild(catFact);
    // });

//     var repoList = document.querySelector('ul');
// var fetchButton = document.getElementById('fetch-button');

function getApi() {
  // Replace `octocat` with anyone else's GitHub username
  var requestUrl = 'https://api.themoviedb.org/3/movie/550?api_key=7867d8493e7c99e3016603c487b28046';

  fetch(requestUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      for (var i = 0; i < data.length; i++) {
          var listItem = data[i].title;
        //  document.createElement('li');
        // listItem.textContent = data[i].title;
        //   repoList.appendChild(listItem);
          
          console.log(listItem, "list item")
      }
    });
}
getApi()
// fetchButton.addEventListener('click', getApi);
