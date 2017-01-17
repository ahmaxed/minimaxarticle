// initilizing some variables

// this is the board flattened and filled with some values to easier asses the Artificial Inteligence.
var board = ["P","C","C","P",4 ,5 ,6 ,"C","P"];
/*
lets visualize the above game state

X | O | O
---------
X |   |  
---------
  | X | O
*/

// human player
var huPlayer = "P";

// computer Player
var aiPlayer = "C";
var plus = 0;
var min = 0;

// how many times the minimax function has run
var iter = 0;
var aialgor = minimax(board, aiPlayer);
console.log(aialgor);
console.log(iter);

function minimax(reboard, player){
  iter++;
  let array = avail(reboard);
  if (winning(reboard, huPlayer)){
    min++;
     return {score:-10};
  }
	else if (winning(reboard, aiPlayer)){
    plus++;
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
    /*
      console.log("array: " + array);
      console.log("reboard: " + reboard);
      console.log("i: " + i);
      */
    if (player == aiPlayer){
      var g = minimax(reboard, huPlayer);
      //console.log("minimax: "+g);
      move.score = g.score;
      //console.log("move score" + move.score);
    }
    else{
      var g = minimax(reboard, aiPlayer);
      //console.log("minimax: "+g);
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
	//console.log("hello");
  return moves[bestMove]; 
}

//available spots
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