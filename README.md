# Challenge10-ObjectProgramming-Team-Profile-Generator

## Description
The task is to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.


## User Story
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles


## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated


## Installation
You will need to have node ja and inquirer installed to generate your team profile.

## Usage

[Github Page Address](https://github.com/TonyWorldChanger/Challenge10-ObjectProgramming-Team-Profile-Generator)

To verify if the test work you will need to run "npm test". All 4 test should pass, this test is testing all team memebers. To generate your team, you will need to use the "node index.js" command to prompt the app. Once you've entered your information, then you will be able to select which team member you are trying to add next. This will generate a team profile webpage. "Please do an npm i before you run the test."

### Video Link
https://watch.screencastify.com/v/16K9w1eUzSFu4o5055tS


### ScreenShot of Challenge
![Challen10](/dist/Challeng10TeamGenerator.PNG)






## Credits
Joelle DesChatelets YouTube
Cameron Verver TA
Trey Clark Classmate