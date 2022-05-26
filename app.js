
let rNum = Math.floor(Math.random()*3);


function askName(){
    let firstName = prompt ("What is your name?") ;
    
    if (firstName) {
        document.write("Hello " + firstName + "!");
    } else if(!firstName) {
        firstName = prompt("Please enter your name");
        document.write("Hello " + firstName + "!");
    } 
    }


function picChooser() {
    if (rNum==1){
        const game1 = "https://cdna.artstation.com/p/assets/images/images/043/897/516/large/seed-seven-twodots-seedseven-eldenring-1.jpg?1638544010"
        return game1
    }
}
