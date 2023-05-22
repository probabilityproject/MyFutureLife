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
    '<strong style="font-family:roboto;font-size:20px">College</strong>',
    '<br>',
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
    '<br>',
    '<strong style="font-family:roboto;font-size:20px">Work</strong>',
    '<br>',
    '<br>',
    'I soon began looking for a programming job. Luckily, since I live in Pasadena, there are a lot of job opportunities available to me. I managed',
    ' to easily find a job at a company working on artificial intelligence. The job pays about $105k yearly with a lot of growth potential. Every day I',
    ' commute to work in my used 2012 Volkswagen CC Lux Plus that I bought from a local dealership for about $5,700. It\'s not very impressive,',
    ' but it gets the job done and it\s in pretty good condition for the price. Of course, now that I have it, I have to pay the car insurance for it which',
    ' comes out to $190 per month. I\'m pretty content with my current job and coworkers, but I\'m still on the lookout for other jobs that might',
    ' pay better. At times the job can be quite stressful, especially when nearing a deadline. I\'ve definitely spent a few nights in my office working',
    ' on the projects that need to get done. Of course the job itself requires me to sit at a desk for most of the time, so I make sure to take breaks',
    ' and stretch every once in a while. It certainly feels great getting to work on projects and writing lines of code that you know will help benefit',
    ' other people.',
    '<br>',
    '<br>',
    '<br>',
    '<strong style="font-family:roboto;font-size:20px">Living</strong>',
    '<br>',
    '<br>',
    'Currently, I live in a small 600 sq.ft. studio apartment by myself. The rent is fairly expensive at around $2,500 per month. The apartment',
    ' consists of a bedroom, a bathroom, a kitchen, and a small living room. It\'s really cozy and a nice place to have a few friends over on occasion.',
    ' Eventually, I plan on moving north in order to buy a small house in the suburbs worth about $200k. In order to afford that I\'ll definitely need',
    ' to take out a home loan. However, right now I\'m still paying off the $17k I still have in student loan debt. Along with all the other exp Afterenses,',
    ' my money is pretty tight at the moment, but I\'m putting around $500 in my 401k for when I retire and whatever I can into my savings. It',
    ' definitely helps out that my health insurance is largely covered by my employer. It also helps that I largely cook dinner at home by myself. I',
    ' eat out about once a month on average most of the time with friends. Outside of work, I\'m learning to play the trumpet and guitar.',
    ' Oftentimes, life is stressful, but I\'m really proud of how far I\'ve come!',
    '<br>',
    '<br>'
    ];

var engineerLife = [
    '<strong style="font-family:roboto;font-size:20px">College</strong>',
    '<br>',
    '<br>',
    'After graduating from high school at AR, I went to Caltech to get a master\'s degree in Engineering. A few short years later, I was done and',
    ' earned my bachelor\'s then master\'s degree! I stayed in the dorms for the duration of my time at Caltech. Over the years I had quite a few',
    ' interesting roommates. The courses at Caltech were also very interesting but very intense. Overall though, I did thoroughly enjoy my time at',
    ' Caltech. Before I wasn\'t sure what kind of engineering I wanted to settle on, but I decided to become a mechanical engineer. I even managed',
    ' to snag a paid internship to gain some work experience alongside my studies. Even though the courses were challenging, I still had quite a bit',
    ' of freetime which I used up with my reading and writing. However, after graduating, I\'m still saddled with a bit of student debt, but I hope to',
    ' have it all paid off by the end of next year. I very much enjoyed Caltech! It was a thoroughly challenging yet rewarding experience, and I\'m',
    ' very glad I got the chance to go there.',
    '<br>',
    '<br>',
    '<br>',
    '<strong style="font-family:roboto;font-size:20px">Work</strong>',
    '<br>',
    '<br>',
    'I immediately began looking for a mechanical engineering job opening in the area. Fortunately enough, there were a lot of different jobs for',
    ' me to do down in Pasadena. It definitely helped that I already had a few years of work experience from my internship during college. It',
    ' wasn\'t very difficult to find someone to hire me. At the company I currently work at, Orbital ATK, I make about $104k per year. I love the work',
    ' I\'m doing right now. Every day I get to work with various machines like engines and cooling systems to optimize and improve them. It feels',
    ' really cool to work here knowing the things you design will be used by NASA and other big corporations. There\'s always something new to do',
    ' every day which keeps every day really fascinating. I commute to my job everyday via the various public transport services offered in the',
    ' area. Whenever I feel like visiting up north again, I usually just take an uber or rent a car. Owning a car can be great, but with the',
    ' infrastructure around here, I don\'t really feel the need for one especially since it would require me to pay for car insurance, gas, and other',
    ' maintenance expenses. Sometimes after work, especially after a particularly stressful day, it is quite annoying to take the bus home, but most',
    ' days I manage quite fine. That doesn\'t happen often though because I really love where I\'m working.',
    '<br>',
    '<br>',
    '<br>',
    '<strong style="font-family:roboto;font-size:20px">Living</strong>',
    '<br>',
    '<br>',
    'I currently live in a small apartment, but I plan on moving north one day in order to buy a small house and start a family. The rent is pretty',
    ' expensive at around $2,500 per month. It\'s fairly cramped, but it\'s really cozy too. I often wish that I had a bigger apartment though. At the',
    ' moment, it\'s quite unfeasible down south as the housing market is incredibly expensive, and I don\'t make nearly enough to take out a loan',
    ' within a reasonable timeframe. When I buy a house, I\'m heavily considering moving north to Oregon or Washington for the more affordable',
    ' prices. The area up there looks pretty nice as well. I\'m also considering the possibility of other states as well. Currently though, I\'m pretty',
    ' content with big city apartment life. It\'s got a decent sized kitchen so I often cook the recipes my mother taught me 2 or 3 times a week. It',
    ' helps reduce food costs each month, and it tastes better in my own opinion. I put the money that I save each month into my savings and',
    ' 401k, but about $250 of it goes into health insurance each month. My future prospects are looking up, and I can\'t wait to see where I\'ll be in',
    ' another 15 years!',
    '<br>'
    ];

var thirtyYearsScenarios = [
    '<h3><strong>If I was a Computer Programmer...</strong></h3>',
    'I am now 46 and I work remotely as a computer programmer for Guerilla Games. My salary is about $145k per year. I live with my wife',
    ' and 15 year old kid in a small suburban house just outside of San Francisco. The home cost about $350k which we took out a home loan',
    ' for. We\'re still paying off the loan to this day. My kid attends a local high school, and we like to sneak out of the house together to enjoy',
    ' some of the local concerts on the weekends which is a huge benefit of living near San Francisco. When I\'m not working, I enjoy reading or',
    ' taking my kid out camping. I\'ve also written quite a few stories. I\'m currently working on a book that I hope to one day publish as a',
    ' passion project. On the side, I\'ve also been working on an indie game for quite a few years now. It\'s nearly done, but I always have more',
    ' ideas that I\'d like to add to perfect my game. One day I hope to be able to leave my job in order to work full-time on game development',
    ' though at the moment it is very unfeasible. It\'s been a longtime dream of mine, and I plan to continue working on games even when I',
    ' retire. Over the years, I\'ve replaced my car quite a few times, and now I drive a Toyota hybrid which cost me about $40,000 in total. It\'s a',
    ' pretty nice car; though I don\'t use it for too much outside of transporting my kid and errands. I have a decent amount of money invested',
    ' into stocks like Coca Cola, Hersheys, and Amazon to help out when I retire along with my 401k which I invest about $24k into each year.',
    ' I\'m pretty financially stable at the moment, and I\'m able to live quite happily alongside my family.</p>',
    '<br>',
    '<h3><strong>If I was an Engineer...</strong></h3>',
    'When I was 38, I decided to move up north to Oregon along with my wife and 15 year old. For a few years before we moved, I worked for',
    ' NASA on some of their space rovers. Now however, I\'m 46, and I work as a mechanical engineer for Intel. They pay me about $122k per',
    ' year. I was able to afford a new Honda for around $50k which has been fully paid off. Together with my wife and kid, we live in a $200k',
    ' house which we\'re still paying the mortgage for. I enjoy tinkering with various parts in my workshop I have setup in the garage. I find it',
    ' really fun to build various little toys and machinations for my kid. I\'ve also taken a keen interest in building Rube Goldberg machines',
    ' around the house. In my spare time, I\'m also learning how to play the trumpet and guitar. I also like to devote quite a bit of time to',
    ' reading and writing poetry. Life has been really nice so far, and I can\'t wait to retire in a decade and a half. I hope to live in a suburban',
    ' house with a lot of land so I can grow an orchard along with a bunch of different flowers. I want to live a very peaceful life up here, and',
    ' continue building and drafting designs in my workshop. I really enjoy where my life has taken me, and I have future plans to continue',
    ' developing and learning different skills throughout my life.</p>',
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
    computerProgrammerCareerPicture.innerHTML = '<img src="computerScienceBuilding.jpg">';
    apartment.innerHTML = '<img src="pasadenaApartment.png">';
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
    
    apartment.innerHTML = ''
    computerProgrammerCareerPicture.innerHTML = '';
    engineerCareerPicture.innerHTML = '<img src="engineerBuilding.jpg">';
    apartment.innerHTML = '<img src="pasadenaApartment.png">';
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
        setTimeout(thirtyYearsPrintLine, 50);
      } else {
        thirtyYearsAnimation = false;
      };
    };
    thirtyYearsPrintLine();
    };
};
// Reveals the Text for the thirty years page
