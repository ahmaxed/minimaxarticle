# minimaxarticle

this repo is dedicated to writing a medium article about the minimax algorithm for the freecodecamp community

##Intro

If you have stuglled with implementing an AI for your tic tac toe game, this read is for you.
but Rather than focusing on the user interface and the entirety of the game logic, let us dedicate this article to the minimax algorithm itself. this article will showcase a simple minimax algorithm implimentation in javascript that once given the tic tac toe board can tell you which move will result in the best outcome.

the 0 sum game

what is minimax

we are not making a tic tac toe rather focusing on the AI merely

like a professional chess player, this algorithm tries see a few steps ahead and puts itself in the opponents shoe in order to evaluate the best possible move. In fact, it considers all possible senarios and assign a positive value to the moves resulting to its win and a negative value resulting in the oponents' win. it keeps playing ahaed untill it reaches a tie, a win or a lose. When a win state is reached the ai will assign an arbitrary positive number (+10), an arbitrary negative number (-10) for a lose state and 0 for a tie. At the same time, the algorithm evaluates the moves that to a terminal state based on whose turn it is to play. it will choose the maximum score when it is the ai's turn to play and choose the minimum score when it is the human player's turn.


 let us go through an example to clarify. Consider this state of the game where human player is O and the computer is X. Given this state, the minimax will go through every possible state to determine the best outcome.

1.

2.

3.

4.

5.

6.

7.

8.

9.
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
