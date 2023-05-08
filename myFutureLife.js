var computerScienceLife = [
    "Computer Science Picture",
    "Computer Science Text"
    ];
var engineerLife = [
    "Engineer Picture",
    "Engineer Text"
    ];
var revealComputerScience = false;
var revealEngineer = false;

let computerScienceButton = document.getElementById('situation-one')

computerScienceButton.addEventListener("click" evt => {

    let firstButton = document.getElementById('computer-programmer')
    firstButton.innerHTML = '<img src="images/blankprogrammer.jpg">';
    revealComputerScience = true
    revealEngineer = false

});
// Reveals the life as a computer programmer portion

let engineerLifeButton = document.getElementById('situation-two')
    
engineerLifeButton.addEventListener("click" evt => {

    let secondButton = document.getElementById('engineer')
    secondButton.innerHTML = '<img src="images/blankengineer.jpg">'
    revealComputerScience = false
    revealEngineer = true
});
// Reveals the life as an engineer portion