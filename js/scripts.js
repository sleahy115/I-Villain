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

var answersArray = [];
var villainOutput;
var hero;

var tendencyTest = function(){
  var highTendency = 0;
  var villainTendency = "";

  for (var i = 0; i < villainsArray.length; i++){
    var tempTendency = 0;
    if (answersArray[0] === villainsArray[i].motive){
      tempTendency ++
    };
    if (answersArray[1] === villainsArray[i].victory){
      tempTendency ++
    };
    if (answersArray[2] === villainsArray[i].costume){
      tempTendency ++
    };
    if (answersArray[3] === villainsArray[i].powers){
      tempTendency ++
    };
    if (answersArray[4] === villainsArray[i].iceCream){
      tempTendency ++
    };
    if (tempTendency > highTendency){
      villainTendency = villainsArray[i].villainName;
      highTendency = tempTendency;
    };
  };
  for(var j = 0; j<villainsArray.length; j++){
    if (villainTendency === villainsArray[j].villainName){
      return villainsArray[j];
    };
  };
};

var darthVader = new Villain('Darth Vader', 'img/darth-vader.jpg', 4, 2, 3, 'dominate', 'convert', 'helmet', 'supernatural', 'lactose-intolerance');
var alienQueen = new Villain('Alien Queen', 'img/alien.jpg', 5, 4, 1, 'dominate', 'kill', 'body', 'physical', 'strawberry');
var bellatrix = new Villain('Bellatrix LeStrange', 'img/bellatrix-the-strange.jpg', 3, 4, 3, 'chaos', 'torture', 'cape', 'supernatural', 'mint-chip');
var whiteWitch = new Villain('White Witch', 'img/whitewitch.jpg', 4, 2, 4, 'dominate', 'kill', 'cape', 'supernatural', 'vanilla');
var skeletor = new Villain('Skeletor', 'img/skelator.jpg', 4, 2, 1, 'dominate', 'torture', 'underwear', 'supernatural', 'bubble-gum');
var sauron = new Villain('Sauron', 'img/the-eye-of-sauron.jpg', 5, 1, 5, 'destroy', 'convert', 'body', 'supernatural', 'chunky-monkey');
var terminator = new Villain('Terminator', 'img/terminator.jpg', 5, 4, 1, 'dominate', 'kill', 'body', 'mechanical', 'rocky-road');
var gru = new Villain('Gru', 'img/Gru.jpg', 2, 2, 5, 'dominate', 'convert', 'black', 'mechanical', 'chocolate');
var goblinKing = new Villain('Goblin King', 'img/goblin-king.jpg', 3, 3, 4, 'dominate', 'convert', 'cape', 'suernatural', 'pistachio');
var khan = new Villain('Khan', 'img/khan.jpeg', 4, 4, 4, 'destroy', 'convert', 'body', 'physical', 'strawberry-sorbet');
var loki = new Villain('Loki', 'img/loki.png', 2, 3, 5, 'destroy', 'kill', 'helmet', 'supernatural', 'cherry-garcia');

var villainsArray = [];
villainsArray.push(darthVader, alienQueen, bellatrix, whiteWitch, skeletor, sauron, terminator, gru, goblinKing, khan, loki)

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

var heroArray = [];

heroArray.push(hermione, mrIncredible, glenda, batman, daenerys, roadRunner, dudleyDoRight, superMario, docBrown, professorX);

// User Logic
Villain.prototype.villainProfile = function() {
  var profile = '';
  profile += '<h1 id="heading">';
  profile += this.villainName;
  profile += "</h1>";
  profile += "<img src='" + this.img + "' class='animated rotateIn' alt='image of '" + this.villainName + "'" ;
  profile += "<ul>";
  profile += "<li >I like to: " + this.motive + "</li>";
  profile += "<li>In my free time I enjoy: " + this.victory + "</li>";
  profile += "<li>Wardrobe: " + this.costume + "</li>";
  profile += "<li>I have " + this.powers + " powers!!!</li>";
  profile += "<li>I like to reward my self with " + this.iceCream + " ice cream after a day of EVIL...</li></ul>";
  $(".villain-profile").append(profile);
}


Villain.prototype.villainDisplay = function() {
  var profile = '';
  profile += "<img src='" + this.img + "' class='animated slideInLeft' alt='image of '" + this.villainName + "'";
  profile += "<h1>";
  profile += this.villainName;
  profile += "</h1>";
  $(".display-villain").append(profile);
}

Hero.prototype.heroDisplay = function() {
  var profile = '';
  profile += "<img src='" + this.img + "' class='animated slideInRight' alt='image of '" + this.heroName + "'";
  profile += "<h1>";
  profile += this.heroName;
  profile += "</h1>";
  $(".display-hero").append(profile);
}

Villain.prototype.villainVictory = function(input) {
  var profile = '';
  profile += "<h1>Victory Is Yours, " + this.villainName + "!</h2>";
  profile += "<img src='" + this.img + "' alt='image of '" + this.villainName + "'";
  profile += "<br><h2>";
  profile += "In a battle of " + input + ", you have crushed your foe.";
  profile += "</h2>";
  $(".victory-display").append(profile);
}

Hero.prototype.heroVictory = function(input) {
  var profile = '';
  profile += "<h1>A painful defeat by " + this.heroName + ", you pathetic scum!</h2>";
  profile += "<img src='" + this.img + "' alt='image of '" + this.heroName + "'";
  profile += "<br><h2>";
  profile += "In a battle of " + input + ", you have been crushed!";
  profile += "</h2>";
  $(".victory-display").append(profile);
}

chooseOpponent = function() {
  for (var i = 0; i<heroArray.length; i++) {
    var profile = '';
    profile += "<img src='" + heroArray[i].img + "' alt='image of '" + heroArray[i].heroName + "'>";
    profile += "<button class='click-opponent' id='click-opponent" + [i] + "'' type='button' value='" + heroArray[i].heroName + "'>" + heroArray[i].heroName + "</button>";
    var placementString = ".choose-opponent" + [i];
    $(placementString).empty();
    $(placementString).append(profile);
  };
};

heroFinder = function(opponent){
  if (opponent) {
    console.log("opponent is already set to " + opponent)
    for(var i= 0; i<heroArray.length; i++) {
      if (opponent === heroArray[i].heroName) {
        hero = heroArray[i];
      }
    }
  }
  else {
    console.log("opponent is not yet set.")
    var finderRNG = Math.floor(Math.random() * 10);
    hero = heroArray[finderRNG]};
    $(".display-hero").empty();
    hero.heroDisplay();
    var villain = villainOutput;
    $(".display-villain").empty();
    villain.villainDisplay();
  };

  battleFinder = function(testType){
          var villain = villainOutput;
          var heroRNG = Math.random();
          var villainRNG = Math.random();
      if (testType === "strength"){
        var heroStrength = hero.strength + heroRNG;
        var villainStrength = villain.strength + villainRNG;
        console.log("heroSt = " + heroStrength + " villSt " + villainStrength);
          if (heroStrength > villainStrength){
            hero.heroVictory(testType);
          } else {
            villain.villainVictory(testType);
          };
      } else if (testType === "wits"){
          var heroWits = hero.wits + heroRNG;
          var villainWits = villain.wits + villainRNG;
          console.log("herow = " + heroWits + " villw " + villainWits);
          if (heroWits > villainWits){
            hero.heroVictory(testType);
          } else {
            villain.villainVictory(testType);
          };
      } else if (testType === "speed"){
        var heroSpeed = hero.speed + heroRNG;
        var villainSpeed = villain.speed + villainRNG;

          if (heroSpeed > villainSpeed){
            hero.heroVictory(testType);
          } else {
            villain.villainVictory(testType);
          };
      };
  };

$(function(){
  $("form#villain-questions").submit(function(event){
    event.preventDefault();
  var motiveInput = $("#motive").val();
  var victoryInput = $("#victory").val();
  var costumeInput = $("#costume").val();
  var powersInput = $("#powers").val();
  var iceCreamInput = $("#iceCream").val();
  answersArray.push(motiveInput, victoryInput, costumeInput, powersInput, iceCreamInput);
  villainOutput = tendencyTest();
  console.log([villainOutput]);
  $("#stage-one").hide();
  $("#stage-two").show();
  $("#meet-foe").show();


  villainOutput.villainProfile();

  });

  $("#meet-foe").click(function(event){
    $("#stage-two").hide();
    $("#stage-three").show();
    heroFinder();
  });

  $("#fight-button").click(function(event){
    var testInput = $("input:radio[name=skillTest]:checked").val();
    console.log(testInput);
    $("#stage-three").hide();
    $("#stage-four").show();
    battleFinder(testInput);

  });

  $("#pick-opponent").click(function(){
    chooseOpponent();
    for (var i = 0; i < heroArray.length; i++) {
      var buttonid = "#click-opponent" + [i];
      console.log(buttonid);
      $(buttonid).click(function(){
        console.log("the value of what you're clicking is " + $(this).val())
        var opponent = $(this).val();
        $("#stage-five").hide();
        $("#stage-three").show();
        heroFinder(opponent);
      });
    };
  });

});
