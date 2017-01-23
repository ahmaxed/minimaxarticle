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

//

In the ai's though process maximixes


## the explain

check all possible states

how many states are initially there

move down the tree to show an example


## the code
helper functions

what the function will get and what will it output


## conclusion
