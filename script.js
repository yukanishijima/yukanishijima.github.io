const cards = [
  {
    title: "Book Search App",
    github: "https://github.com/yukanishijima/react-book-search",
    link: "https://for-book-lovers.herokuapp.com",
    image: "bookMe.png",
    stack: "React.js / MongoDB  /  Node.js / Express / Socket.IO / JavaScript / API / Material.UI / CSS / HTML / Heroku / UI",
    description: "Developed a book search web application with Google Books API which uses React lifecycle method to display a search result and allows users to save a book to MongoDB using Mongoose.",
  },
  {
    title: "Teibi",
    github: "",
    link: "https://teibi.ca",
    image: "teibi.png",
    stack: "React.js / MongoDB / Node.js / Express / Socket.IO / Passport.js / Leaflet.js / JavaScript / API / Material.UI / CSS / HTML / Wireframing / UI / UX",
    description: "Developed an app which gives a list of ideal meetup locations in the halfway point between 2 users. Used Socket.IO to update user activities and implement a chat feature. MongoDB and Passport.js enable the app to give users options to sign in. Team project.",
  },
  // {
  //   title: "Eat Da Burger",
  //   github: "https://github.com/yukanishijima/eat-da-burger",
  //   link: "https://intense-island-52740.herokuapp.com",
  //   image: "eatDaBurger.png",
  //   stack: "MySQL | Node.js | Express | Handlebars.js | JavaScript | jQuery | Bootstrap | CSS | HTML | Heroku",
  //   description: "Developed a simple restaurant app that lets users to order a burger. The app can save, update and delete orders using CRUD operations with MySQL.",
  // },
  {
    title: "Lee Lab",
    github: "",
    link: "https://norman-lee.com",
    image: "lee-lab.png",
    stack: "jQuery / PHP / CSS / HTML / Wireframing / UI / UX",
    description: "Designed, developed and launched a fully-responsive site from the ground-up for a Neural Systems and Behavior Research Lab at St. Olaf College in Minnesota, which contains research subjects, team members, publications, and lab news. Deployed as WordPress original theme using PHP.",
  },
  {
    title: "Giphy Thing",
    github: "https://github.com/yukanishijima/giphy-API",
    link: "https://yukanishijima.github.io/giphy-API/",
    image: "giphyThing.png",
    stack: "JavaScript / jQuery / API / CSS / HTML",
    description: "This is a lighthearted Gif search app using Giphy APL to display gifs of Hallywood stars. The app lets users to create their own gif generating buttons.",
  },
  {
    title: "Batmen",
    github: "https://github.com/yukanishijima/Project_2/tree/template",
    link: "http://polar-hollows-00844.herokuapp.com/",
    image: "batmen.png",
    stack: "JavaScript / Node.js / Express / MySQL / API / Leaflet.js / SASS / CSS / HTML / Heroku",
    description: "Developed a search engine for personal setting establishments that have been inspected by Toronto Public Health (BodySafe). Users can serach for an establishment and find their inspection history on a map. Team project.",
  },
  {
    title: "Hidamari Photography",
    github: "",
    link: "https://hidamariphotography.com",
    image: "hidamari.png",
    stack: "PHP / CSS / HTML / Wireframing / UI / UX",
    description: "Designed, developed and launched a portfolio site for a local photographer. Built all animations purely with CSS3 from scratch. Deployed as WordPress original theme using PHP.",
  },
  // {
  //   title: "Friend Finder",
  //   github: "https://github.com/yukanishijima/friend-finder",
  //   link: "https://pacific-cove-73996.herokuapp.com/",
  //   image: "friendFinder.png",
  //   stack: "JavaScript / jQuery / Node.js / Express / API / Bootstrap / CSS / HTML / Heroku",
  //   description: "Developed a simple compatibility-based friend pairing app. Created a server-side APIs to handle GET and POST requests.",
  // },
  // {
  //   title: "Halloween Clicky",
  //   github: "https://github.com/yukanishijima/clicky-game/",
  //   link: "https://yukanishijima.github.io/clicky-game",
  //   image: "clickyGame.png",
  //   stack: "React.js / JavaScript / Node.js / Express / API / Bootstrap / CSS / HTML",
  //   description: "Developed a Halloween themed memory game using Creat React App. ",
  // },
  // {
  //   title: "Crystal Collector",
  //   github: "https://github.com/yukanishijima/crystal-collector",
  //   link: "https://yukanishijima.github.io/crystal-collector/",
  //   image: "crystalCollector.png",
  //   stack: "JavaScript / jQuery / CSS  HTML",
  //   description: "",
  // },
  // {
  //   title: "Coffee Trivia",
  //   github: "https://github.com/yukanishijima/trivia-game/",
  //   link: "https://yukanishijima.github.io/trivia-game",
  //   image: "coffeeTrivia.png",
  //   stack: "JavaScript / jQuery / CSS / HTML",
  //   description: "This is a lighthearted trivia game for all coffee lovers :) Fully-responsive across all devices.",
  // },
];

// generate cards
function generteCard() {
  const cardContainer = document.querySelector(".card-container");
  let aTag;

  cardContainer.innerHTML = cards.map(el => {
    if (el.github !== "") {
      aTag = `<a href="${el.github}" target="_blank"><i class="fab fa-github-square"></i></a>`;
    } else {
      aTag = "";
    }

    return `<div class="col-12 px-2">
              <div class="my-card showCard row align-items-end">

                <div class="col-12 col-md-6">
                  <a href="${el.link}" target="_blank">
                    <img src="images/${el.image}" alt="website" class="site-img">
                  </a>
                </div>

                <div class="col-12 col-md-6">
                  <div class="my-card-title">
                    <h2>${el.title}</h2>
                    ${aTag}
                  </div>
                  <p class="card-p">${el.stack}</p>
                  <p class="card-p">${el.description}</p>
                </div>

              </div>
            </div>
    `}).join("");
};


// animation - showCard
function showCard() {

  var element = document.getElementsByClassName('showCard');
  // cancel if there's no such element
  if (!element) return;

  // var showTiming = window.innerHeight > 768 ? 600 : 100;
  var showTiming = window.innerHeight > 600 ? 100 : 100;

  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;

  for (var i = 0; i < element.length; i++) {
    var elemClientRect = element[i].getBoundingClientRect();
    var elemY = scrollY + elemClientRect.top;

    if (scrollY + windowH - showTiming > elemY) {
      // if (windowH > elemClientRect.top - scrollY) {
      element[i].classList.add('isShow');

      //　once it goes back to top, remove isShow class
    } else if (scrollY + windowH < elemY) {
      element[i].classList.remove('isShow');
    }
  }
}

generteCard();
showCard();
window.addEventListener('scroll', showCard);