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

| Behavior                                              |   Input example   |  Output example |
|-------------------------------------------------------|:-----------------:|:---------------:|
|  get input from user | user takes quiz | 'dominate', 'convert', 'helmet', 'supernatural', 'lactose-intolerance'|
| user input is matched against hard coded villain attributes to determine tendency | 'dominate', 'convert', 'helmet', 'supernatural', 'lactose-intolerance' | 'skeletor' |

## Setup/Installation Requirements

* _Clone this application at https://github.com/dlauby/i-villain.git_
* _Locate index.html file within to-do-list directory_
* _Open index.html in preferred browser_
* _Play_

_Only a web browser is necessary to operate_

## Known Bugs

_There are no known present at this time._

## Support and contact details

_Please contact me at ccbpeden@warpmail.net if you have any questions or are interested in contributing._

## Technologies Used

* _JavaScript/jQuery_
* _Bootstrap_

### License

*MIT*

Copyright (c) 2017 **_Charles Peden, Sarah Leahy, Andrew Devlin, Dan Laubey_**
