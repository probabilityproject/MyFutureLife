var revealComputerScience = false;
var revealEngineer = false;
// Sets up the variables for the animation

let computerProgrammerElement = document.getElementById('computerProgrammer');
let engineerElement = document.getElementById('engineer');
let computerProgrammerCareerPicture = document.getElementById('computer-programmer-picture')
let engineerCareerPicture = document.getElementById('engineer-picture');
// Sets up the variables to reveal the text

var computerScienceLife = [
    '<strong style="font-family:roboto">College</strong>',
    '<br>',
    'After graduating from AR, I went to Caltech for my Computer Science degree. The courses there were quite challenging, each requiring an extensive amount of work in and out of class. I loved each of the professors I had though. Each one of them was incredibly helpful and I learned a lot from them. I also got a lot of netowrking opportunities with a bunch of local tech businesses in the area. The actual course load was really heavy so I didn\'t get a lot of free time. When I did have freetime, I enjoyed venturing into the nearby forest or exploring more of Pasadena and LA. Besides academics, I enjoyed participating in Caltech Y which helped out around the community through various environmental projects and studies. I was also holding down a part-time job at a small bakery to help pay off some of my college debt. During my stay, I lived in the dorms with a couple of different roommates. In my second year when I was a Sophomore, I met my roommate, now friend, Griffin. He\'s a fellow computer science major. We both helped each other out quite a lot with our different assignments over the years. A few years later, I graduated from Caltech with my bachelor\'s degree and returned for my master\'s!',
    '<br>',
    '<br>',
    '<strong style="font-family:roboto">Work</strong>',
    '<br>',
    'I soon began looking for a programming job. Luckily, since I live in Pasadena, there are a lot of job opportunities available to me. I managed to easily find a job at a company working on artificial intelligence. The job pays about $105k yearly with a lot of growth potential. Every day I commute to work in my used 2012 Volkswagen CC Lux Plus that I bought from a local dealership for about $5,700. It\'s not very impressive, but it gets the job done and it\s in pretty good condition for the price. I\'m pretty content with my current job and coworkers, but I\'m still on the lookout for other jobs that might pay better. At times the job can be quite stressful, especially when nearing a deadline. I\'ve definitely spent a few nights in my office working on the projects that need to get done.',
    '<br>',
    '<br>',
    '<strong style="font-family:roboto">Living</strong>',
    '<br>',
    'Currently, I live in a small 600 sq.ft. studio apartment by myself. The rent is fairly expensive at around $2,500 per month. The apartment consists of a bedroom, a bathroom, a kitchen, and a small living room. It\'s really cozy and a nice place to have a few friends over on occasion. Eventually, I plan on moving north in order to buy a small house in the suburbs worth about $200k. In order to afford that I\'ll definitely need to take out a home loan. However, right now I\'m still paying off the $17k I still have in student loan debt. Along with all the other expenses, my money is pretty tight at the moment, but I\'m putting what I can into my savings and 401k for when I retire. It definitely helps out that my health insurance is largely covered by my employer. It also helps that I largely cook dinner at home by myself. I eat out about once a month on average. Sometimes if I\'m feeling especially hungry, I doordash a bit of food to my work or apartment.',
    '<br>',
    '<br>'
    ];

var engineerLife = [
    '<strong style="font-family:roboto">College</strong>',
    '<br>',
    'After graduating from high school at AR, I went to Caltech to get a master\'s degree in Engineering. A few short years later, I was done and earned my bachelor\'s then master\'s degree!',
    '<br>',
    '<br>',
    '<strong style="font-family:roboto">Work</strong>',
    '<br>',
    'I immediately began working as a mechanical engineer. Fortunately enough, there were a lot of different jobs for me to do down in Pasadena. It wasn\'t very difficult to find someone to hire me.',
    '<br>',
    '<br>',
    '<strong style="font-family:roboto">Living</strong>',
    '<br>',
    'I currently live in a small apartment, but I plan on moving north one day in order to buy a small house and start a family.',
    '<br>'
    ];
// Sets up the global variables for the text

let computerScienceAnimation = false
let engineerAnimation = false
// Sets up the global variables for the animation

let computerScienceButton = document.getElementById('situation-one');
computerScienceButton.addEventListener('click', firstButton);

function firstButton() {
    if (computerScienceAnimation) {
        return;
    };
    if (engineerAnimation) {
        return;
    };
    
    engineerCareerPicture.innerHTML = '';
    computerProgrammerCareerPicture.innerHTML = '<img src="images/computerScienceBuilding.jpg">';
    computerProgrammerElement.innerHTML = '';
    revealComputerScience = true;
    revealEngineer = false;
    let computerBackgroundColor = document.getElementById('backgroundSwitcher');
    computerBackgroundColor.style.backgroundColor = '#313131';

    if (revealComputerScience === true) {
        engineerElement.innerHTML = '';
        let computerScienceLineReveal = 0
        function computerSciencePrintLine() {
            computerScienceAnimation = true;
            if (computerScienceLineReveal < computerScienceLife.length) {
                computerProgrammerElement.innerHTML +=computerScienceLife[computerScienceLineReveal];
                computerScienceLineReveal++
                setTimeout(computerSciencePrintLine, 50);
            } else {
                computerScienceAnimation = false;
            };
        };
        computerSciencePrintLine();
    };
};
// Reveals the life as a computer programmer portion

let engineerLifeButton = document.getElementById('situation-two');
engineerLifeButton.addEventListener('click', secondButton);

function secondButton() {
    if (engineerAnimation) {
        return;
    };
    if (computerScienceAnimation) {
        return;
    };
    
    computerProgrammerCareerPicture.innerHTML = '';
    engineerCareerPicture.innerHTML = '<img src="images/engineerBuilding.jpg">';
    engineerElement.innerHTML = '';
    revealComputerScience = false;
    revealEngineer = true;
    let engineerBackgroundColor = document.getElementById('backgroundSwitcher');
    engineerBackgroundColor.style.backgroundColor = '#323EA2';
    
    if (revealEngineer === true) {
        computerProgrammerElement.innerHTML = '';
        let engineerLineReveal = 0
        function engineerPrintLine() {
            engineerAnimation = true;
            if (engineerLineReveal < engineerLife.length) {
                engineerElement.innerHTML +=engineerLife[engineerLineReveal];
                engineerLineReveal++
                setTimeout(engineerPrintLine, 50);
            } else {
                engineerAnimation = false;
            };
        };
        engineerPrintLine();
    };
};
// Reveals the life as an engineer portion
