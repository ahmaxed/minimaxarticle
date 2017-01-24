# minimaxarticle

this repo is dedicated to writing a medium article about the minimax algorithm for the freecodecamp community

##Intro

If you have stuglled with implementing an AI for your tic tac toe game, this read is for you.
but Rather than focusing on the user interface and the entirety of the game logic, let us dedicate this article to the minimax algorithm itself. this article will showcase a simple minimax algorithm implimentation in javascript that once given the tic tac toe board can tell you which move will result in the best outcome.

the 0 sum game

what is minimax

we are not making a tic tac toe rather focusing on the AI merely

like a professional chess player, this algorithm tries see a few steps ahead and puts itself in the opponents shoe in order to evaluate the best possible move. In fact, it considers all possible senarios and assign a positive value to the moves resulting to its win and a negative value resulting in the oponents' win. it keeps playing ahaed untill it reaches a tie, a win or a lose. When a win state is reached the ai will assign an arbitrary positive number (+10), an arbitrary negative number (-10) for a lose state and 0 for a tie. At the same time, the algorithm evaluates the moves that to a terminal state based on whose turn it is to play. it will choose the maximum score when it is the ai's turn to play and choose the minimum score when it is the human player's turn.


For instance, consider this state of the game in the following figure where the human player is O and the computer is X. Given this state, the minimax will go through every possible state recursively to determine the best outcome. let's follow the algorithm iteration by iteration to understand the logic behind it

1.On the first iteration, current state of the game (board) of the game and the ai player is fed to the algorithm so it know which player it should optimize the results for. Since the game has not reached an end state, the algorithm proceeds by evaluating every move it can make. then it moves the X to the first empty spot it finds and calls itself with the board that has a new move and the human player as arguments

2.on the second iteration, the algorithm is in 1 level deep into the recursion and starts by checking for end states but it cannot find any, then it lists empty spots for the human player and places O in the first spot it finds and calls the minimax algorithm with the last human move in the board and aiplayer as arguments

3.Finally minimax reaches a terminal states that leads to the wining of the human player. therfore, it assigns the score of -10 to this move and returns it.

4.Since on the second iteration found two empty spots, therefore on the 4th iteration of minimax is  called on the other possible move that result in the score of -10 which is also retuned.

here the 1 iteration of the minimax algorithm goes through the scores returned from the 2nd level. since was the O move lead to the result, the algorithm tries to minimize the score by choosing the lowest one. however, since both of the scores are identical, it picks the first one and assigns it up to the move of the second iteration.

5.on the 5th iteration, the algorithm explores the second possible spot for X which results in a win.

6.then it moves to the last possible spot for the x to take place in level 1.

7.Since placing the X to the lower left side of the board does not result in a terminal state, the algorithm places O in the first empty space it finds.

8.since the move from the 7the iteration did not reuslt in a terminal state, the algorithm digs to the 3rd level looking for one. by placing X in the middle, the ai player wins wich earns a 10 score for this move and this score gets returned.

9.on the second level the board resulting from the 7th iteration has another empty spots that the algorithm evaluates to -10.

the 6 iteration has to choose between two different scores. the score that was sent up from the 8iteration (10) and the and the rerult from the 9th iteration (-10), since it is the turn for the O in the 2nd level, the algorithm chooses -10 and push it upwards.


Now all of the three moves at the first level have values, -10, 10, -10, but because it is X's turn the algorithm returns the highest score along with its index.

in this senario moving the x to the middle results in the best outcome. :)

Now that we are a bit familiar with minimax's though process, it's time to dive into code, but before we should define some functions to help us along the line. we need a function that looks for winning combinations and returns true if it finds one, and a function that give us the available spots in the board. those functions could be defined like the following.

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

 First it would place the  

Also we need to define some variables, first let us set the AI player to X and human player to O.


then let flatten the tic tac toe board us define as an array with 9 items for the ease of use.
Since we would like to work on specific state of the game such as illustrated in the figure above let us define the board with the X and Y moves already in it.

var origBoard = ["O",1 ,"X","X",4 ,"X", 6 ,"O","O"];

Also let us keep track of the minimax's iteration by defining the ieration variable;
var iteration = 0;

Now let's dive into the good parts by defining the minimax function with two arguments newboard and player. the name newboard was chosen because everytime minimax iteraties it uses a different state to evaluate the results. the first think that we need to do is to increase the iteration variable by one and get the emptyspots in the newboard and set them to a variable.

// the main minimax function
function minimax(newBoard, player){
  //console.log(newBoard);
  iteration++;

  //available spots
  var availSpots = filterAvail(newBoard);

  now that we have that set up let us check for terminal states and returning a value accordingly. if O wins we should return -10, if X wins return 10 and if the length of the emptyspots array is 0 meaning nobody has won and there is no more room the play return 0.

  // checks for the terminal states such as win, lose, and tie and returning a value accordingly
  if (winning(newBoard, huPlayer)){
     return {score:-10};
  }
	else if (winning(newBoard, aiPlayer)){
    return {score:10};
	}
  else if (availSpots.length === 0){
  	return {score:0};
  }

Next we need to collect the the data we get from each empty spot in order to be evaluated later on. therfore we should create an empty moves array and loop over the empty spots. for each spot we need to collect the information regarding it's index and score. that is accmoplished by making an object called move. we set the index number of the empty spot that was stored as a number in the original board to the value of the score key of the newly defined move object. we set the empty spot on the newboard to the current player's sign.then we apply minimax algorithm withe the other player and store the object resulted from it in a score key of the move object. this is where the recursion happen. so if the minimax function does not find a terminal state it keep going deeper and deepr into the game by countinuing to play in its thought process untill it reaches a terminal state which it returns one lever up. as we see in the next part of the function in each level it will evaluate the best move and send it as an object upwards. now let us emplement the comparision functionality.

Finally the minimax algorithm needs to evaluate the best move in the moves object. this is the minimax part of the algorithm. so it should choose the best case senario when it is the ai is playing and the worst case when human is playig. therefore if it is the ai player's turn it sets a variable to a very low number to start with and then loop over the moves, if a move has a higher score that that variable, it's object gets stored. in case there are moves with similar score, only the first one will be stored. and vise versa for the human player's moves evaluation. and then of course return the result

// if it is the computer's turn loop over the moves and choose the move with the highest score
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

// else loop over the moves and choose the move with the lowest score
    var bestScore = 10000;
    for(var i = 0; i < moves.length; i++){
      if(moves[i].score < bestScore){
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  // return the chosen move (object) from the array to the higher depth
    return moves[bestMove];
  }

once it is all done, let's celebrate by seeing the algorithm in action. by calling it with the original board and the ai player and check how many iterations it will take to find the solution and the index of where X needs to go.

  that is it for the minimax funciton. :) you can find the find the above algorithm in github and codepen. play around with different boards and check the results in the console.


For a more detailed explenation of the minimax code we could go over the details line by line to see how it will behave given a specific board.

For example let's imagine the minimax was called with the following board.   
 ["O",1 ,"X","X",4 ,"X", 6 ,"O","O"];

 let us follow along the figure but this time thoruhg our code.

FIGURE#################################

1.On the first iteration, current state of the game (board) of the game and the ai player is fed to the algorithm so it know which player it should optimize the results for. Since the game has not reached an end state, the algorithm proceeds by evaluating every move it can make. then it moves the X to the first empty spot it finds and calls itself with the board that has a new move and the human player as arguments

2.on the second iteration, the algorithm is in 1 level deep into the recursion and starts by checking for end states but it cannot find any, then it lists empty spots for the human player and places O in the first spot it finds and calls the minimax algorithm with the last human move in the board and aiplayer as arguments

3.Finally minimax reaches a terminal states that leads to the wining of the human player. therfore, it assigns the score of -10 to this move and returns it.

4.Since on the second iteration found two empty spots, therefore on the 4th iteration of minimax is  called on the other possible move that result in the score of -10 which is also retuned.

here the 1 iteration of the minimax algorithm goes through the scores returned from the 2nd level. since was the O move lead to the result, the algorithm tries to minimize the score by choosing the lowest one. however, since both of the scores are identical, it picks the first one and assigns it up to the move of the second iteration.

5.on the 5th iteration, the algorithm explores the second possible spot for X which results in a win.

6.then it moves to the last possible spot for the x to take place in level 1.

7.Since placing the X to the lower left side of the board does not result in a terminal state, the algorithm places O in the first empty space it finds.

8.since the move from the 7the iteration did not reuslt in a terminal state, the algorithm digs to the 3rd level looking for one. by placing X in the middle, the ai player wins wich earns a 10 score for this move and this score gets returned.

9.on the second level the board resulting from the 7th iteration has another empty spots that the algorithm evaluates to -10.

the 6 iteration has to choose between two different scores. the score that was sent up from the 8iteration (10) and the and the rerult from the 9th iteration (-10), since it is the turn for the O in the 2nd level, the algorithm chooses -10 and push it upwards.


Now all of the three moves at the first level have values, -10, 10, -10, but because it is X's turn the algorithm returns the highest score along with its index.
