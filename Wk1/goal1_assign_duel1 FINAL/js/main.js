/**
 * Duel Fight Game - FINISHED
 * Date: 4/09/13

 Assignment 1
 Part 1/3 of series
*/

// self-executing function
(function(){
    //logs to console FIGHT!!!
    console.log("FIGHT!!!");

    //player name
    //creates variable for player names and assigns values
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //player damage
    //creates variable for player DMG and assigns values
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    //creates variable for players health and assigns values
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //initiate round
    //creates variable for fight round and assigns value
    var round=0;
    //creates function and names it fight
    function fight(){
        //alerts user to the player names and health
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            //randomizes DMG per player
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //inflict damage
            //subtracts DMG from players health
            playerOneHealth-=f1;
            playerTwoHealth-=f2;
            //logs to console players name and health
            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

            //check for victor
            //creates variable for results and sets it to a function
            var result = winnerCheck();
            console.log(result);
            //if statement that determines if there is no winner and goes to the next round if no winner is found
            if (result==="no winner")
            {
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);
            //if winner is found alert user and break from funciton
            } else{
                alert(result);
                break;
            };

          };
    };
    //function created to check for winner
    function winnerCheck(){
        var result="no winner";
        //determines if both players are below 1 HP and runs
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die";
            //determines which player has the most health
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"
        };
        //returns the result of the winnerCheck to the variable result
       return result;
    };

    /*******  The program gets started below *******/
    //calls the fight function
    fight();

})();