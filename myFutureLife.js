let computerScienceBuilding = document.getElementById("computerProgrammerPicture");

var computerScienceLife = [
    computerScienceBuilding,
    "I graduated from Caltech with a masters in Computer Science! After graduating, I immediately began looking for a programming",
    "job. Luckily, since I live in Pasadena, there are a lot of job opportunities available to me. I live in a small studio apartment by",
    "myself, and I plan on moving north eventually in order to buy a small house."
    ];

var engineerLife = [
    "Engineer Picture",
    "I graduated from Caltech with a masters in Engineering!"
    ];

var revealComputerScience = false;
var revealEngineer = false;
// Sets up the global variables

let computerScienceButton = document.getElementById("situation-one");
computerScienceButton.addEventListener("click", firstButton);

function firstButton() {
    computerScienceBuilding.innerHTML = '<img src="images/computerScienceBuilding.jpg">'
    document.getElementById("computerProgrammer").innerHTML = computerScienceLife;
    document.getElementById("engineer").innerHTML = "";
    revealComputerScience = true;
    revealEngineer = false;
    
    //if revealComputerScience = true {
      //  while (i < 10);
        //computerScienceLife = i;
        //i++;
    //};
};
// Reveals the life as a computer programmer portion

let engineerLifeButton = document.getElementById("situation-two");
engineerLifeButton.addEventListener("click", secondButton);

function secondButton() {
    document.getElementById("engineer").innerHTML = engineerLife;
    document.getElementById("computerProgrammer").innerHTML = "";
    revealComputerScience = false;
    revealEngineer = true;
    
    //if revealEngineer = true {
    //    while (i < 10);
      //  engineerLife += i;
        //i++;
  //  };
};
// Reveals the life as an engineer portion
    
