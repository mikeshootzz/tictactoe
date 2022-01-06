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
function ai(){
    let corrector = false;
    let position = Math.floor(Math.random() * 10);
    while (!corrector){
        position = Math.floor(Math.random() * 10);
        if (playerArray[position] === undefined){
            corrector = true;
        }
    }
    let td = document.getElementById(`${position}`).innerHTML = player;
    playerArray[position] = player;
}