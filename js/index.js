// initilizing some variables
// in total "iterations: 549946" iterations on an empty board
//"iterations: 59705" if played second

// this is the board flattened and filled with some values to easier asses the Artificial Inteligence.
var origBoard = ["P",1 ,"C","C",4 ,"C", 6 ,"P","P"];

//var board = ["P",1 ,2,3,4 ,5, 6 ,7,8];
/*
lets visualize the above game state

                                   O |   | X
                                   ---------
                                   X |   | X
                                   ---------
                                     | O | O

                             //       ||        \\

                O | X | X          O |   | X        O |   | X
                ---------          ---------        ---------
                X |   | X          X | X | X        X |   | X
                ---------          ---------        ---------
                  | O | O            | O | O        X | O | O

              //          \\                     //          \\

        O | X | X          O | X | X        O | O | X       O |   | X
        ---------          ---------        ---------       ---------
        X | O | X          X |   | X        X |   | X       X | O | X
        ---------          ---------        ---------       ---------
          | O | O          O | O | O        X | O | O       X | O | O

                                        //

                                   O | O | X
                                   ---------
                                   X | X | X
                                   ---------
                                   O | O | O

*/

// human
var huPlayer = "P";
// computer
var coPlayer = "C";

// how many times the minimax function has run
var iter = 0;

// finding the ultimate play on the game that favors the computer
var bestSpot = minimax(origBoard, coPlayer);

//loging the results
console.log("index: " + bestSpot.index);
console.log("iterations: " + iter);

// the main minimax function
function minimax(newBoard, player){
  //console.log(newBoard);
  iter++;

  //available spots
  let availSpots = filterAvail(newBoard);
  console.log("empty: " + availSpots);
  if (winning(newBoard, huPlayer)){
     return {score:-10};
  }
	else if (winning(newBoard, coPlayer)){
    return {score:10};
	}
  else if (availSpots.length === 0){
  	return {score:0};
  }

  var moves = [];
  for (var i = 0; i < availSpots.length; i++){
    var move = {};
  	move.index = newBoard[availSpots[i]];

// need to work on a copy of the board;
    newBoard[availSpots[i]] = player;
    if (player == coPlayer){
      var result = minimax(newBoard, huPlayer);
      move.score = result.score;
    }
    else{
      var result = minimax(newBoard, coPlayer);
      move.score = result.score;
    }
    newBoard[availSpots[i]] = move.index;
    moves.push(move);
  }

  var bestMove;
  if(player === coPlayer){
    var bestScore = -10000;
    for(var i = 0; i < moves.length; i++){
      if(moves[i].score > bestScore){
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }else{
    var bestScore = 10000;
    for(var i = 0; i < moves.length; i++){
      if(moves[i].score < bestScore){
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }
  return moves[bestMove];
}

// returns the available spots on the board
function filterAvail(board){
  return  board.filter(s => s != "P" && s != "C");
}

// winning combinations using the board indexies for instace the first win could be 3 xes in a row
function winning(board, player){
 if (
        (board[0] == player && board[1] == player && board[2] == player) ||
        (board[3] == player && board[4] == player && board[5] == player) ||
        (board[6] == player && board[7] == player && board[8] == player) ||
        (board[0] == player && board[3] == player && board[6] == player) ||
        (board[1] == player && board[4] == player && board[7] == player) ||
        (board[2] == player && board[5] == player && board[8] == player) ||
        (board[0] == player && board[4] == player && board[8] == player) ||
        (board[2] == player && board[4] == player && board[6] == player)
        ) {
        return true;
    } else {
        return false;
    }
}
