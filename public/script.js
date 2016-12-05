
var getSchool = function(){

  var inputSearch = document.querySelector("#userInput").value;
  console.log(inputSearch);

  var createArr = document.querySelectorAll("tbody tr");

  var spinnyDiv = document.querySelector(".spinOSU");

  var audio = document.querySelector("audio");

  var image = document.querySelector("img");

  for (var i = 0; i < createArr.length - 1; i++){

    createArr[i].classList.remove("toggled");

    if (createArr[i].children[1].innerText === inputSearch) {
      createArr[i].classList.add("toggled");
    }

  }
  if (inputSearch === "Oklahoma State"){
       spinnyDiv.style.display = "block";
       image.style.display = "block";
       audio.play();
     } else {
       spinnyDiv.style.display = "none";
       image.style.display = "none";
       audio.pause();
     }

 }
