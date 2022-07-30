



var item1 = prompt("type the first thing to save")
var item2 = prompt("type the second thing to save")
var saveItems = {
    thing1: item1,
    thing2: item2
  }



function saveStuff() {
  // get value of input box
  // var item1 = initialsEl.value.trim();

  // make sure value wasn't empty
  // if (item1 !== "") {
    // get saved scores from localstorage, or if not any, set to empty array
    var saveArr =
      JSON.parse(window.localStorage.getItem("savedArray")) || [];

    // format new score object for current user
   var saveItems = {
      thing1: item1,
      thing2: item2
    }

    // save to localstorage
    saveArr.push(saveItems);
    window.localStorage.setItem("savedArray", JSON.stringify(saveArr));

    // // redirect to next page
    // window.location.href = "highscores.html";
  //}
}


function displayStuff() {
  var saveArr =
    JSON.parse(window.localStorage.getItem("savedArray")) || [];
  
    // sort highscores by score property in descending order
  // highscores.sort(function(a, b) {
  //   return b.score - a.score;
  // });

  saveArr.forEach(function (savedThing) {
    var savedEl = document.createElement("li")
    savedEl.textContent = savedThing.thing1 + ' _ ' + savedThing.thing2;

    //display on page

    var item1El = document.getElementById("item1");
    item1El.appendChild(savedEl);
  })
  
}
displayStuff()
saveStuff()

