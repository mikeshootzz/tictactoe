let table = document.getElementById('game')
let playerArray = new Array(9)
let mode = colorChange;

let bot = document.getElementById('bot');
function generateBoard(size){
    let counter = 0;
    for (let i = 0; i < size; i++){
        let tr = document.createElement('tr');
        for (let j = 0; j < size; j++){
            let td = document.createElement('td');
            td.id = `${counter}`;
            td.setAttribute("onclick", `colorChange(${counter})`);
            tr.appendChild(td);
            counter++;
        }
        table.appendChild(tr);
    }
    bot.style.display = 'none';
    human.style.display = 'none';
}

let human = document.getElementById('human');
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



let player = "X";

let playerdiv = document.getElementById('player');
function currentPlayer(){
    playerdiv.innerHTML = `Player: ${player}`;
}

function colorChange(id){
    if (playerArray[id] !== undefined){
        alert("This spot is already full");
    }
    else if (player === "X"){
        //currentPlayer();
        player = "O"
        let td = document.getElementById(`${id}`).innerHTML = player;
        playerArray[id] = player;
        player = "X";
        ai()
    }
    // else if (player == "O"){
    //     currentPlayer();
    //     player = "X"
    //     // let td = document.getElementById(`${id}`).innerHTML = player;
    //     // playerArray[id] = player;
    //     ai();
    // }

    if (playerArray[0] === "X" || playerArray[0] === "O"){
        if (playerArray[0] === playerArray[1] && playerArray[1] === playerArray[2]){
            alert(`Player ${playerArray[1]} won!`);
            window.location.reload();
        }
    }
    if (playerArray[5] === "X" || playerArray[5] === "O"){
        if (playerArray[3] === playerArray[4] && playerArray[4] === playerArray[5]){
            alert(`Player ${playerArray[3]} won!`);
            window.location.reload();
        }
    }
    if (playerArray[7] === "X" || playerArray[7] === "O"){
        if (playerArray[6] === playerArray[7] && playerArray[7] === playerArray[8]){
            alert(`Player ${playerArray[6]} won!`);
            window.location.reload();
        }
    }
    if (playerArray[3] === "X" || playerArray[3] === "O"){
        if (playerArray[0] === playerArray[3] && playerArray[3] === playerArray[6]){
            alert(`Player ${playerArray[0]} won!`);
            window.location.reload();
        }
    }
    if (playerArray[1] === "X" || playerArray[1] === "O"){
        if (playerArray[1] === playerArray[4] && playerArray[4] === playerArray[7]){
            alert(`Player ${playerArray[1]} won!`);
            window.location.reload();
        }
    }
    if (playerArray[8] === "X" || playerArray[8] === "O"){
        if (playerArray[2] === playerArray[5] && playerArray[5] === playerArray[8]){
            alert(`Player ${playerArray[2]} won!`);
            window.location.reload();
        }
    }
    if (playerArray[4] === "X" || playerArray[4] === "O"){
        if (playerArray[0] === playerArray[4] && playerArray[4] === playerArray[8]){
            alert(`Player ${playerArray[4]} won!`);
            window.location.reload();
        }
    }
    if (playerArray[2] === "X" || playerArray[2] === "O"){
        if (playerArray[2] === playerArray[4] && playerArray[4] === playerArray[6]){
            alert(`Player ${playerArray[2]} won!`);
            window.location.reload();
        }
    }
    //Checks if the array doesn't contain undefined (!)
    if (!playerArray.includes(undefined)){
        alert("Draw");
        window.location.reload();
    }
}

function againstHuman(id){
    if (playerArray[id] !== undefined){
        alert("This spot is already full");
    }
    else if (player === "X"){
        currentPlayer();
        player = "O"
        let td = document.getElementById(`${id}`).innerHTML = player;
        playerArray[id] = player;
    }
    else if (player === "O"){
        currentPlayer();
        player = "X"
        let td = document.getElementById(`${id}`).innerHTML = player;
        playerArray[id] = player;
    }

    if (playerArray[0] === "X" || playerArray[0] === "O"){
        if (playerArray[0] === playerArray[1] && playerArray[1] === playerArray[2]){
            alert(`Player ${playerArray[1]} won!`);
            window.location.reload();
        }
    }
    if (playerArray[5] === "X" || playerArray[5] === "O"){
        if (playerArray[3] === playerArray[4] && playerArray[4] === playerArray[5]){
            alert(`Player ${playerArray[3]} won!`);
            window.location.reload();
        }
    }
    if (playerArray[7] === "X" || playerArray[7] === "O"){
        if (playerArray[6] === playerArray[7] && playerArray[7] === playerArray[8]){
            alert(`Player ${playerArray[6]} won!`);
            window.location.reload();
        }
    }
    if (playerArray[3] === "X" || playerArray[3] === "O"){
        if (playerArray[0] === playerArray[3] && playerArray[3] === playerArray[6]){
            alert(`Player ${playerArray[0]} won!`);
            window.location.reload();
        }
    }
    if (playerArray[1] === "X" || playerArray[1] === "O"){
        if (playerArray[1] === playerArray[4] && playerArray[4] === playerArray[7]){
            alert(`Player ${playerArray[1]} won!`);
            window.location.reload();
        }
    }
    if (playerArray[8] === "X" || playerArray[8] === "O"){
        if (playerArray[2] === playerArray[5] && playerArray[5] === playerArray[8]){
            alert(`Player ${playerArray[2]} won!`);
            window.location.reload();
        }
    }
    if (playerArray[4] === "X" || playerArray[4] === "O"){
        if (playerArray[0] === playerArray[4] && playerArray[4] === playerArray[8]){
            alert(`Player ${playerArray[4]} won!`);
            window.location.reload();
        }
    }
    if (playerArray[2] === "X" || playerArray[2] === "O"){
        if (playerArray[2] === playerArray[4] && playerArray[4] === playerArray[6]){
            alert(`Player ${playerArray[2]} won!`);
            window.location.reload();
        }
    }
    //Checks if the array doesn't contain undefined (!)
    if (!playerArray.includes(undefined)){
        alert("Draw");
        window.location.reload();
    }
}