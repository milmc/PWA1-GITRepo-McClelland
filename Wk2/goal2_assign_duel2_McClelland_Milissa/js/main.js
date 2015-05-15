/**
Milissa McClelland
may 14, 2015
 DEVELOP Duel #2
*/

// self-executing function
(function(){
    //logs to console FIGHT!!!
    console.log("FIGHT!!!");

    //player name
    //creates variable for player names and assigns values
   /* var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //player damage
    //creates variable for player DMG and assigns values
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    //creates variable for players health and assigns values
    var playerOneHealth = 100;
    var playerTwoHealth = 100;
*/
    //create var for each fighter and set it to array with name, DMG, and Health
    var fighter1 = ["Spiderman", 20, 100];
    var fighter2 = ["Batman", 20, 100];
    //initiate round
    //creates variable for fight round and assigns value
    var round=0;
    //creates function and names it fight
    function fight(){
        //alerts user to the player names and health
        alert(fighter1[0] +":"+fighter1[2]+"  *START*  "+fighter2 [0]+":"+fighter2[2]);
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            //randomizes DMG per player
            var minDamage1 = fighter1[1] * .5;
            var minDamage2 = fighter2[1] * .5;
            var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2);

            //inflict damage
            //subtracts DMG from players health
            fighter1[2]-=f1;
            fighter2[2]-=f2;
            //logs to console players name and health
            console.log(fighter1[0]+": "+fighter1[2] + " " + fighter2[0]+":"+fighter2[2]);

            //check for victor
            //creates variable for results and sets it to a function
            var result = winnerCheck();
            console.log(result);
            //if statement that determines if there is no winner and goes to the next round if no winner is found
            if (result==="no winner")
            {
                round++;
                alert(fighter1[0]+":"+fighter1[2]+"  *ROUND "+round+" OVER"+"*  "+fighter2[0]+":"+fighter2[2]);
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
        if (fighter1[2]<1 && fighter2[2]<1)
        {
            result = "You Both Die";
            //determines which player has the most health
        } else if(fighter1[2]<1){
            result =fighter2[0]+" WINS!!!"
        } else if (fighter2[2]<1)
        {
            result = fighter1[0]+" WINS!!!"
        };
        //returns the result of the winnerCheck to the variable result
       return result;
    };

    /*******  The program gets started below *******/
    //calls the fight function
    fight();

})();