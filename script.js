//getting the table from the HTML
let table = document.getElementById('game')
//creating an array to keep track of the player position
let playerArray = new Array(9)
//the bot button from the HTML
let bot = document.getElementById('bot');
//generates the board
function generateBoard(size){
    //creating a counter to give each td an id from 0 to 8
    let counter = 0;
    for (let i = 0; i < size; i++){
        //creating the table rows
        let tr = document.createElement('tr');
        for (let j = 0; j < size; j++){
            //creating the tds
            let td = document.createElement('td');
            //giving the td the id from the variable "counter"
            td.id = `${counter}`;
            //giving the td the attributes "onclick", which runs the function "colorChange" and passes the value of the counter
            td.setAttribute("onclick", `colorChange(${counter})`);
            //adds the table data as a child element to the table row
            tr.appendChild(td);
            counter++;
        }
        //adds the table row to the table
        table.appendChild(tr);
    }
    //hides the selection buttons from the user
    bot.style.display = 'none';
    human.style.display = 'none';
}
//imports the human button from the HTML
let human = document.getElementById('human');
//generates the same board as before but with the on click now runs the function againstHuman
function generateBoardHuman(size){
    let counter2 = 0;
    for (let i = 0; i < size; i++){
        let tr = document.createElement('tr');
        for (let j = 0; j < size; j++){
            let td = document.createElement('td');
            td.id = `${counter2}`;
            td.setAttribute("onclick", `againstHuman(${counter2})`);
            tr.appendChild(td);
            counter2++;
        }
        table.appendChild(tr);
    }
    human.style.display = 'none';
    bot.style.display = 'none';
}

//the player is set as X
let player = "X";
//importing the current player display
let playerdiv = document.getElementById('player');
function currentPlayer(){
    //writing the current player into the div
    playerdiv.innerHTML = `Player: ${player}`;
}

function winnerChecking(){
    //checks if the corresponding array position is empty
    //and then checks if the three corresponding spots match up
    //if they do, a winner message is displayed

    if (playerArray[0] !== undefined){
        if (playerArray[0] === playerArray[1] && playerArray[1] === playerArray[2]){
            alert(`Player ${playerArray[1]} won!`);
            return true;
        }
    }
    if (playerArray[5] !== undefined){
        if (playerArray[3] === playerArray[4] && playerArray[4] === playerArray[5]){
            alert(`Player ${playerArray[3]} won!`);
            return true;
        }
    }
    if (playerArray[7] !== undefined){
        if (playerArray[6] === playerArray[7] && playerArray[7] === playerArray[8]){
            alert(`Player ${playerArray[6]} won!`);
            return true;
        }
    }
    if (playerArray[3] !== undefined){
        if (playerArray[0] === playerArray[3] && playerArray[3] === playerArray[6]){
            alert(`Player ${playerArray[0]} won!`);
            return true;
        }
    }
    if (playerArray[1] !== undefined){
        if (playerArray[1] === playerArray[4] && playerArray[4] === playerArray[7]){
            alert(`Player ${playerArray[1]} won!`);
            return true;
        }
    }
    if (playerArray[8] !== undefined){
        if (playerArray[2] === playerArray[5] && playerArray[5] === playerArray[8]){
            alert(`Player ${playerArray[2]} won!`);
            return true;
        }
    }
    if (playerArray[4] !== undefined){
        if (playerArray[0] === playerArray[4] && playerArray[4] === playerArray[8]){
            alert(`Player ${playerArray[4]} won!`);
            return true;
        }
    }
    if (playerArray[2] !== undefined){
        if (playerArray[2] === playerArray[4] && playerArray[4] === playerArray[6]){
            alert(`Player ${playerArray[2]} won!`);
            return true
        }
    }
    //Checks if the array doesn't contain undefined (!)
    if (!playerArray.includes(undefined)){
        alert("Draw");
        return true;
    }
}


//declaring the function for the computer player
function colorChange(id){
    //check if the spot the player has chosen already holds a value
    if (playerArray[id] !== undefined){
        alert("This spot is already full");
    }
    //check if the current player is X
    else if (player === "X"){
        //the player is set to O
        player = "O"
        //the current player is written into the clicked td
        let td = document.getElementById(`${id}`).innerHTML = player;
        //The player is written into the player array to keep track of the move
        playerArray[id] = player;
        //the player is set to X
        player = "X";
        //the ai function is called
        ai()
    }
    winnerChecking();
}

//declaring the function for the human player
function againstHuman(id){
    //check if the spot the player has chosen already holds a value
    if (playerArray[id] !== undefined){
        alert("This spot is already full");
    }
    //check if the current player is X
    else if (player === "X"){
        //the current player display is updated by calling the function
        currentPlayer();
        //the player is set to O
        player = "O"
        //the current player is written into the clicked td
        let td = document.getElementById(`${id}`).innerHTML = player;
        //The player is written into the player array to keep track of the move
        playerArray[id] = player;
    }
    //check if the current player is O
    else if (player === "O"){
        //the current player display is updated by calling the function
        currentPlayer();
        //the player is set to X
        player = "X"
        //the current player is written into the clicked td
        let td = document.getElementById(`${id}`).innerHTML = player;
        //The player is written into the player array to keep track of the move
        playerArray[id] = player;
    }
    winnerChecking();
}