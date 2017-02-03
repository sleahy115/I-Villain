# _I-Villain!_

#### _Quiz and Game where the user identifies with and then plays as a villain._

#### By _**Charles Peden, Sarah Leahy, Dan Lauby, Andrew Devlin**_

## Description

_This application assigns you a villain identity based upon the results of a quiz.  Then you choose a villain and fight a pregenerated hero._

## User Story
User completes a five question quiz, the answers of which determine which villain they are assigned. Next, the villain fights against an assigned hero. Further options are offered after the fight.

| Behavior                                              |   Input example   |  Output example |
|-------------------------------------------------------|:-----------------:|:---------------:|
| Determine villain from inputs | 'dominate', 'torture', 'underwear'  | Skeletor |
| User is shown characteristics of villain assigned by quiz | Skeletor  | 'dominate', 'torture', 'underwear', 'supernatural', 'bubble-gum'|
| Villain is randomly assigned a hero to fight against  | Skeletor | Glinda the Good |  
| Villain chooses a stat (strength, wits, speed) to challenge opponent on  | wits  | |  
| Battle is determined by chosen stat and random number generator |  Hero Wits = 3, Villain Wits = 3, Hero RNG = .03245, Villain RNG = .134352 | Villain Wins! |
||Hero Strength = 1, Villain Strength = 4, Hero RNG = .4287, Villain RNG = .932 | Villain Wins! |
| User  given several options to continue game play listed below|
| Option 1. user has option to fight again with different attribute  | Strength | Villain Wins! |
| Option 2. user has option to fight against different hero from list | Mr. Incredible | Darth Vader vs. Mr. Incredible |
| Option 3. user has option to retake quiz to get different villain | destroy | Bellatrix LeStrange |
| Option 4. user has option to choose hero opponent by quiz | dragons | Daenerys |
| If option 4. is chosen then the hero selected in the quiz is inserted into existing battle format | Daenerys | Bellatrix vs. Daenerys |
| Game can be played infinitely |

## Specifications

| Behavior                                              |   Outcome   |
|-------------------------------------------------------|:-----------------:|   
| User takes quiz.| User values are used to determine a villain.|
| User values are matched against preset values for the villains in the game.| [dominate, kill, helmet, supernatural, chocolate]|
| User is assigned villain based on the highest number of matching attributes | User inputs matches three attributes of Darth Vader, Darth Vader is output.|
|The user's assigned villain is assigned a hero "nemesis." | A hero is randomly assigned from the hero array.|
|User chooses an attribute to fight the assigned nemesis. The options are speed, strength, and wits. | Each hero and villain have assigned strength, speed, and wits values.|
|Villain attribute compared to hero attribute| Hero strength = 3, villain strength = 4.|
|A random number between 0-1 is assigned to both attributes to prevent a tie and keep the game dynamic.| Hero RNG = .0345, villain strength RNG = .1245|
|A winner is determined.| Hero strength + hero RNG vs villain strength + villain RNG|
|The winner is output and the user has several options to continue the game.| 1.Play as a different villain. 2. Choose another hero to battle. 3. Battle the same hero using a different attribute. 4. Take a quiz to determine which hero you are.|
|If option 1 is chosen...| User is taken back to the main page to retake the villain quiz.|
|If option 2 is chosen...| User is presented with a list of heroes, once one has been selected the user is returned to the battle screen to choose an attribute.|
|If option 3 is chosen...| User is returned to the battle page and is able to select a different attribute.|
|If option 4 is chosen...| User is taken to a new quiz page and is assigned a hero using the same process as the villain selection. Then the user is able to pit their assigned hero against their assigned villain using the battle page.|
|The game continues through all of the steps as many times as the user wishes. There is no defined end to the game.|



## Setup/Installation Requirements

* _The game can be accessed at sleahy115.github.io/I-Villain_
* _Clone repository from github._
* _Locate index.html file within to-do-list directory_
* _Open index.html in preferred browser_
* _Play_

_Only a web browser is necessary to operate_

## Known Bugs

_There are no known present at this time._

## Support and contact details

_Please contact sleahy115@gmail.com or ccbpeden@warpmail.net  if you have any questions or are interested in contributing._

## Technologies Used

* _JavaScript/jQuery_
* _Bootstrap_

### License

*MIT*

Copyright (c) 2017 **_Charles Peden, Sarah Leahy, Andrew Devlin, Dan Laubey_**
