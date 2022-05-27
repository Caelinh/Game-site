let firstName = prompt("What is your name?");



function askName(){
   if(firstName){
       document.write(firstName)
   } else {
        while (!firstName){
            firstName= prompt("please try your name again")
        }
        document.write(firstName)
   }
}

let cChoice = prompt("Pick one: Red, Blue, Black");
let userChoice = cChoice.toLowerCase();

while (userChoice != "red" && userChoice != "blue" && userChoice != "black") {
    cChoice = prompt("Please try again...Red, Blue or Black");
    userChoice = cChoice.toLowerCase();
}

function red(){
   if (userChoice == "red") {
       document.write("Nice color choice!");
   }
}
function blue(){
    if (userChoice == "blue") {
        document.write("Nice color choice!");
    }
 }
function black(){
    if (userChoice == "black") {
        document.write("Nice color choice!");
    }
 }

function name(){
    document.write(firstName);
}


function review() {
    let stars = prompt("How many stars would you rate my site? 1-5") 
    for (let i = 1; i <= stars; i++){
        document.write("<img style='height:20px;width:20px' src='star.png' />")
}
}

function displayStars() {
    document.write(theStars);
}