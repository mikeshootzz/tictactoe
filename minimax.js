//I originally wanted to implement a minimax algorithm but that didn't really work out, but maybe it'll follow :)

//creating a function for the computer Player
function ai(){
    //checking if the board has an empty spot
    if (playerArray.includes(undefined)){
        //declaring a boolean variable
        let corrector = false;
        //generating a random number for the position of the computer player
        let position = Math.floor(Math.random() * 9);
        while (!corrector){
            //while the "corrector" isn't true, a new random number is generated
            position = Math.floor(Math.random() * 9);
            if (playerArray[position] === undefined){
                //if the random number represents an empty field, the corrector is set to "true" to exit the loop
                corrector = true;
            }
        }
        //writes the "player" variable into the corresponding td
        let td = document.getElementById(`${position}`).innerHTML = player;
        //keeps track of the position by writing the position into the playerArray
        playerArray[position] = player;
    }
}