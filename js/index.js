// initilizing some variables
// in total "iterations: 549946" iterations on an empty board
//"iterations: 59705" if played second

// this is the board flattened and filled with some values to easier asses the Artificial Inteligence.
var board = ["P",1 ,"C","C",4 ,"C", 6 ,"P","P"];

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

// human player
var huPlayer = "P";

// computer Player
var aiPlayer = "C";

// how many times the minimax function has run
var iter = 0;


var results = minimax(board, aiPlayer);

//loging the results
console.log("index: " + results.index);
console.log("iterations: " + iter);


// the main minimax function
function minimax(reboard, player){
  //console.log(reboard);
  iter++;
  let array = avail(reboard);
  if (winning(reboard, huPlayer)){
     return {score:-10};
  }
	else if (winning(reboard, aiPlayer)){
    return {score:10};
	}
  else if (array.length === 0){
  	return {score:0};
  }

  var moves = [];
  for (var i = 0; i < array.length; i++){
    var move = {};
  	move.index = reboard[array[i]];

// need to work on a copy of the board;
    reboard[array[i]] = player;
    if (player == aiPlayer){
      var g = minimax(reboard, huPlayer);

      move.score = g.score;
    }
    else{
      var g = minimax(reboard, aiPlayer);
      move.score = g.score;
    }
    reboard[array[i]] = move.index;
    moves.push(move);
  }

  var bestMove;
  if(player === aiPlayer){
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

//available spots on the board
function avail(reboard){
  return reboard.filter(s => s != "P" && s != "C");
}

// winning combinations
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
