// Villain constructor
function Villain(name, img, strength, speed, wits, motive, victory, costume, powers, iceCream) {
  this.villainName = name;
  this.img = img;
  this.strength = strength;
  this.speed = speed;
  this.wits = wits;
  this.motive = motive;
  this.victory = victory;
  this.costume = costume;
  this.powers = powers;
  this.iceCream = iceCream;
}

// Hero constructor
function Hero(name, img, strength, speed, wits) {
  this.heroName = name;
  this.img = img;
  this.strength = strength;
  this.speed = speed;
  this.wits = wits;
}


var darthVader = new Villain('Darth Vader', 'img/darth-vader.jpg', 4, 2, 3, 'dominate', 'convert', 'helmet', 'supernatural', 'lactose-intolerance');
var alienQueen = new Villain('Alien Queen', 'img/alien.jpg', 5, 4, 1, 'dominate', 'kill', 'body', 'physical', 'strawberry');
var bellatrix = new Villain('Bellatrix LeStrange', 'img/bellatrix-the-strange.jpg', 3, 4, 3, 'chaos', 'torture', 'cape', 'supernatural', 'mint-chip');
var whiteWitch = new Villain('White Witch', 'img/whitewitch.jpg', 4, 2, 4, 'dominate', 'kill', 'cape', 'supernatural', 'vanilla');
var skeletor = new Villain('Skeletor', 'img/skelator.jpg', 4, 2, 1, 'dominate', 'torture', 'underwear', 'supernatural', 'bubble-gum');
var sauron = new Villain('Sauron', 'img/the-eye-of-sauron.jpg', 5, 1, 5, 'dominate', 'convert', 'body', 'supernatural', 'chunky-monkey');
var terminator = new Villain('Terminator', 'img/terminator.jpg', 5, 4, 1, 'dominate', 'kill', 'body', 'mechanical', 'rocky-road');
var gru = new Villain('Gru', 'img/Gru.jpg', 2, 2, 5, 'dominate', 'convert', 'black', 'mechanical', 'chocolate');
var goblinKing = new Villain('Goblin King', 'img/goblin-king.jpg', 3, 3, 4, 'dominate', 'convert', 'cape', 'suernatural', 'pistachio');
var khan = new Villain('Khan', 'img/khan.jpeg', 4, 4, 4, 'merciful', 'convert', 'body', 'physical', 'strawberry-sorbet');
var loki = new Villain('Loki', 'img/loki.png', 2, 3, 5, 'chaos', 'kill', 'helmet', 'supernatural', 'cherry-garcia');

var hermione = new Hero('Hermione', 'img/hermione.jpg', 2, 4, 5);
var mrIncredible = new Hero('Mr. Incredible', 'img/mr-incredible.jpg', 5, 4, 2);
var glenda = new Hero('Glenda the Good Witch', 'img/glinda-the-good-witch.jpg', 2, 4, 4);
var batman = new Hero('Batman', 'img/batman.jpg', 4, 3, 4);
var daenerys = new Hero('Daenerys', 'img/daenerys.jpg', 2, 2, 4);
var roadRunner = new Hero('Road Runner', 'img/roadrunner.png', 1, 5, 4);
var dudleyDoRight = new Hero('Dudley Do Right', 'img/dudley-do-right.jpg', 3, 4, 1);
var superMario = new Hero('Super Mario', 'img/Super-Mario.jpg', 4, 4, 2);
var docBrown = new Hero('Doc Brown', 'img/doc-brown.jpg', 2, 5, 5);
var professorX = new Hero('Professor X', 'img/prof-x.jpg', 5, 1, 5);


// User Logic
Villain.prototype.villainProfile = function() {
  var profile = '';
  profile += "<img src='" + this.img + "' alt='image of '" + this.villainName + "'";
  profile += "<h1>";
  profile += this.villainName;
  profile += "</h1>";
  profile += "<ul>";
  profile += "<li>I like to: " + this.motive + "</li>";
  profile += "<li>In my free time I enjoy: " + this.victory + "</li>";
  profile += "<li>Wardrobe: " + this.costume + "</li>";
  profile += "<li>I have " + this.powers + " powers!!!</li>";
  profile += "<li>I like to reward my self with " + this.iceCream + " ice cream after a day of EVIL...</li>";
  $(".villain-profile").append(profile);
}

Villain.prototype.villainDisplay = function() {
  var profile = '';
  profile += "<img src='" + this.img + "' alt='image of '" + this.villainName + "'";
  profile += "<h1>";
  profile += this.villainName;
  profile += "</h1>";
  $(".display-villain").append(profile);
}

Hero.prototype.heroDisplay = function() {
  var profile = '';
  profile += "<img src='" + this.img + "' alt='image of '" + this.heroName + "'";
  profile += "<h1>";
  profile += this.heroName;
  profile += "</h1>";
  $(".display-hero").append(profile);
}






// $(function(){
//   $("form#villain-questions").submit(function(event){
//     event.preventDefault();
//   var motiveInput = $("input#motive").val();
//   var victoryInput = $("input#victory").val();
//   var costumeInput = $("input#costume").val();
//   var powersInput = $("input#powers").val();
//   var iceCreamInput = $("input#iceCream").val();
//
//
//   var answersArray = [];
//   var tendencyArray = [];
//   answersArray.push(motiveInput, victoryInput, costumeInput, powersInput, iceCreamInput);
//   for(var i = 0; i < answersArray.length; i ++){
//     for (var j = 0;  j < "villainsArray.length", j++)
//     if (answersArray[i] === "villainsArray[j]."){
//       tendencyArrah.push(villainsArray[j].villainName)
//     }
//   }
//
// function villainsArray =
//
//   });
// });
