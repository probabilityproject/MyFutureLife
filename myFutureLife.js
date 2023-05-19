var revealComputerScience = false;
var revealEngineer = false;
var revealThirtyYears = true;
// Sets up the variables for the animation

let computerProgrammerElement = document.getElementById('computerProgrammer');
let engineerElement = document.getElementById('engineer');
let thirtyYearsElement = document.getElementById('thirtyYearsText');
let computerProgrammerCareerPicture = document.getElementById('computer-programmer-picture');
let engineerCareerPicture = document.getElementById('engineer-picture');
let apartment = document.getElementById('studioApartment');
// Sets up the variables to reveal the text

var computerScienceLife = [
    '<strong style="font-family:roboto">College</strong>',
    '<br>',
    'After graduating from AR, I went to Caltech for my Computer Science degree. The courses there were quite challenging, each requiring an',
    ' extensive amount of work in and out of class. I loved each of the professors I had though. Each one of them was incredibly helpful and I',
    ' learned a lot from them. I also got a lot of networking opportunities with a bunch of local tech businesses in the area. The actual course load',
    ' was really heavy so I didn\'t get a lot of free time. When I did have freetime, I enjoyed venturing into the nearby forest or exploring more of',
    ' Pasadena and LA. Besides academics, I enjoyed participating in the Cheese Society and Caltech Y which helped out around the community',
    ' through various environmental projects and studies. I was also holding down a part-time job at a small bakery to help pay off some of my',
    ' college debt. During my stay, I lived in the dorms with a couple of different roommates. In my second year when I was a Sophomore, I met',
    ' my roommate, now friend, Griffin. He\'s a fellow computer science major. We both helped each other out quite a lot with our different',
    ' assignments over the years. A few years later, I graduated from Caltech with my bachelor\'s degree and returned for my master\'s!',
    '<br>',
    '<br>',
    '<strong style="font-family:roboto">Work</strong>',
    '<br>',
    'I soon began looking for a programming job. Luckily, since I live in Pasadena, there are a lot of job opportunities available to me. I managed',
    ' to easily find a job at a company working on artificial intelligence. The job pays about $105k yearly with a lot of growth potential. Every day I',
    ' commute to work in my used 2012 Volkswagen CC Lux Plus that I bought from a local dealership for about $5,700. It\'s not very impressive,',
    ' but it gets the job done and it\s in pretty good condition for the price. I\'m pretty content with my current job and coworkers, but I\'m still on',
    ' the lookout for other jobs that might pay better. At times the job can be quite stressful, especially when nearing a deadline. I\'ve definitely',
    ' spent a few nights in my office working on the projects that need to get done. Of course the job itself requires me to sit at a desk for most of',
    ' the time, so I make sure to take breaks and stretch every once in a while. It certainly feels great getting to work on projects and writing lines',
    ' of code that you know will help benefit other people.',
    '<br>',
    '<br>',
    '<strong style="font-family:roboto">Living</strong>',
    '<br>',
    'Currently, I live in a small 600 sq.ft. studio apartment by myself. The rent is fairly expensive at around $2,500 per month. The apartment',
    ' consists of a bedroom, a bathroom, a kitchen, and a small living room. It\'s really cozy and a nice place to have a few friends over on occasion.',
    ' Eventually, I plan on moving north in order to buy a small house in the suburbs worth about $200k. In order to afford that I\'ll definitely need',
    ' to take out a home loan. However, right now I\'m still paying off the $17k I still have in student loan debt. Along with all the other expenses,',
    ' my money is pretty tight at the moment, but I\'m putting around $500 in my 401k for when I retire and whatever I can into my savings. It',
    ' definitely helps out that my health insurance is largely covered by my employer. It also helps that I largely cook dinner at home by myself. I',
    ' eat out about once a month on average. Sometimes if I\'m feeling especially hungry, I doordash a bit of food to my work or apartment.',
    '<br>',
    '<br>'
    ];

var engineerLife = [
    '<strong style="font-family:roboto">College</strong>',
    '<br>',
    'After graduating from high school at AR, I went to Caltech to get a master\'s degree in Engineering. A few short years later, I was done and earned my bachelor\'s then master\'s degree! I stayed in the dorms for the duration of my time at Caltech. Over the years I had quite a few interesting roommates. The courses at Caltech were also very interesting but very intense. Overall though, I did thoroughly enjoy my time at Caltech. Before I wasn\'t sure what kind of engineering I wanted to settle on, but I decided to become a mechanical engineer. I even managed to snag a paid internship to gain some work experience alongside my studies. I\'m still saddled with student debt at the moment, but I hope to have it all paid off within the next 5 years. Caltech was a thoroughly enjoyable experience, and I\'m very glad I got the chance to go there.',
    '<br>',
    '<br>',
    '<strong style="font-family:roboto">Work</strong>',
    '<br>',
    'I immediately began working as a mechanical engineer. Fortunately enough, there were a lot of different jobs for me to do down in Pasadena. It wasn\'t very difficult to find someone to hire me. At the company I currently work at, I make about $94k per year. I love the work I\'m doing right now. Every day I get to work with various machines like engines and cooling systems to optimize and improve them. There\'s always something new to do every day which keeps every day really fascinating. I don\'t currently own a car. Instead, I commute via the various public transport services offered in the area. Whenever I feel like visiting up north again, I usually just take an uber or rent a car.',
    '<br>',
    '<br>',
    '<strong style="font-family:roboto">Living</strong>',
    '<br>',
    'I currently live in a small apartment, but I plan on moving north one day in order to buy a small house and start a family. The rent is pretty expensive at around $2,500 per month. It\'s fairly cramped, but it\'s really cozy too. I often wish that I had a bigger apartment though. At the moment, it\'s quite unfeasible down south as the housing market is incredibly expensive. When I buy a house, I\'m heavily considering moving north to Oregon or Washington for the more affordable prices.',
    '<br>'
    ];

var thirtyYearsScenarios = [
    '<h3><strong>Computer Programmer</strong></h3>',
    '<p style="margin-left:10px">I work remotely as a computer programmer for Guerilla Games. My salary is about $145k per year. I live with my wife and 15 year old kid in a suburban house just outside of San Francisco. When I\'m not working, I enjoy reading or taking my kid out camping. A huge bonus of San Francisco is the frequent concerts that I often go to. On the side, I\'m also working on an indie game as a passion project. One day I hope to be able to leave my job in order to work full-time on game development though at the moment it is very unfeasible. I upgraded my car quite a few times over the years, and now I drive a Toyota hybrid which cost me about $40,000. It\'s a pretty nice car. Our house cost about $350k which we\'re still paying off to this day. I have a decent amount of money invested into stocks like Coca Cola, Hersheys, and Amazon to help out when I retire along with my 401k which I invest about $25k into each year.</p>',
    '<br>',
    '<h3><strong>Engineer</strong></h3>',
    '<p style="margin-left:10px">After a while, I decided to move up north to Oregon.  For a few years before we moved, I worked for NASA on some of their space rovers. Now however, I work as a mechanical engineer for Intel. They pay me about $120k per year. I was able to afford a new Honda for around $50k. Together with my wife and kid, we live in a $200k house which we\'re still paying the mortgage for. I enjoy tinkering with various parts in my workshop I have setup in the garage. I find it really fun to build various little toys for my kid. I\'ve also taken a keen interest in building Rube Goldberg machines. In my spare time, I\'m also learning how to play the trumpet and guitar. Life has been quite nice so far, and I can\'t wait to retire in a decade and a half. I hope to live in a suburban house with a lot of land so I can grow an orchard along with a bunch of different flowers.</p>',
    '<br>'
    ];
// Sets up the global variables for the text

let computerScienceAnimation = false;
let engineerAnimation = false;
let thirtyYearsAnimation = true;
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
    computerProgrammerCareerPicture.innerHTML = '<img src="computerScienceBuilding.jpg" style="vertical-align:middle;width:100px;height:auto;">';
    apartment.innerHTML = '<img src="pasadenaApartment.png" style="vertical-align:middle;width:100px;height:auto;">';
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
                setTimeout(computerSciencePrintLine, 25);
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
    
    apartment.innerHTML = ''
    computerProgrammerCareerPicture.innerHTML = '';
    engineerCareerPicture.innerHTML = '<img src="engineerBuilding.jpg" style="vertical-align:middle;width:100px;height:auto;">';
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

function startThirtyYearsAnimation() {
  if (revealThirtyYears === true) {
    let thirtyYearsLineReveal = 0;
    function thirtyYearsPrintLine() {
      thirtyYearsAnimation = true;
      if (thirtyYearsLineReveal < thirtyYearsScenarios.length) {
        thirtyYearsElement.innerHTML += thirtyYearsScenarios[thirtyYearsLineReveal];
        thirtyYearsLineReveal++;
        setTimeout(thirtyYearsPrintLine, 100);
      } else {
        thirtyYearsAnimation = false;
      };
    };
    thirtyYearsPrintLine();
    };
};
// Reveals the Text for the thirty years page
