/**
 Milissa McClelland
 3/7/2015
 Goal1: Assignment: Duel1
 */

// create self-executing function
(function(){
    //logs "FIGHT!!! to the console
    console.log("FIGHT!!!");

    //creates var for player one name and assigns it a value
    var playerOneName = "Spiderman";
    //creates var for player two name and assigns it a value
    var playerTwoName = "Batman";

    //creates var for player one damage and assigns it a value
    var player1Damage = 20;
    //creates var for player two damage and assigns it a value
    var player2Damage = 20;

    //creates a var for player one health and assigns it a value
    var playerOneHealth = 100;
    //creates a var for player two health and assigns it a value
    var playerTwoHealth = 100;

    //initiate round
    var round=0;

    //create function for fight
    function fight(){
        //alert user of round one start
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
        //
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random() * (player1Damage-minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random() * (player2Damage-minDamage2) + minDamage2);

            //inflict damage
            playerOneHealth -= f1;
            playerTwoHealth -= f2;
            //logs each players name and health
            console.log(playerOneName + ": "+ playerOneHealth + " " + playerTwoName + ":" + playerTwoHealth);

            //check for victor
            var result = winnerCheck();
            //logs to console the results of winnerCheck
            console.log(result);
            //if else statement for determining weather to go another round if "no winner" or to end if winner/both die
            if (result==="no winner")
            {
                //increases the round number
                round++;
                //alerts user of what round is now over
                alert(playerOneName + ":" + playerOneHealth + "  *ROUND " + round + " OVER" + "*  "+ playerTwoName + ":" + playerTwoHealth);
                //plays alert to user showing the result of the winnerCheck
            } else{
                alert(result);
                //break out of function
                break;
            };

        };
    };

    //create function to check if there is a winner or if they both died
    function winnerCheck(){
        var result="no winner";
        //if both players health are below 1 they both die
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die";
            //if player one health is greater than 1 then they WIN
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
            //if player two health is greater than 1 then they WIN
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"
        };
        //returns result of winnerCheck to var result
        return result;
    };

    //program starts here
    fight();

})();