let firstName = prompt("What is your name?");



function askName(){
   if(firstName){
       document.write(firstName)
   } else {
        while (!firstName){
            firstName= prompt("please try again")
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
