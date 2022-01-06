
// function bestMove() {
// //AI to make its turn
//     let bestScore = -Infinity;
//     let bestMove;
//     for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//             //is the spot available?
//
//         }
//     }
// }
//
// function minimax(board, depth, isMaximizing){
//
// }

//i mean.... it works i guess
<<<<<<< HEAD
function ai(){
    //stops game from freezing
    if (playerArray.includes(undefined)){
        let corrector = false;
        // array = 9 positions, number from 0 to 8
        let position = Math.floor(Math.random() * 9);
        while (!corrector){
            position = Math.floor(Math.random() * 9);
            if (!playerArray[position]){
                console.log("Player Array position" + playerArray[position]);
                corrector = true;
            }
=======
function ai(player){
    let corrector = false;
    let position = Math.floor(Math.random() * 10);
    while (!corrector){
        position = Math.floor(Math.random() * 10);
        if (playerArray[position] === undefined){
            corrector = true;
>>>>>>> randombot
        }
        let td = document.getElementById(`${position}`).innerHTML = player;
        playerArray[position] = player;
        player = "O";
    }
<<<<<<< HEAD
=======
    let td = document.getElementById(`${position}`).innerHTML = "X";
    playerArray[position] = player;
>>>>>>> randombot
}