class Game
{
	constructor()
  {
  	this._score = 0;
    this._throwCount = 0;
    this._turnScore = 0;
  }
  
	score() 
  {    
  	return this._score;
  }
  
  roll(pins)
  {
  	if(this._throwCount > 0 && 
     	 this._throwCount % 2 == 0)
    {
    	if(this._turnScore == 10) {
      	this._turnScore += (pins*2);
      }  	
      
      this._score += this._turnScore;
      this._turnScore = 0;
    }
    else
    {
	    this._turnScore += pins;
    }
     
	  this._throwCount++;
  }
}

function newGameScoreIs0()
{
	var score = new Game().score();
	console.log(score === 0);
}

function rollOf5ScoreIs5()
{
	var game = new Game();
  game.roll(5);
  console.log(5 === game.score());
}

function spareWith3Pins7PinsAnd5PinsGivesScore20()
{
	var game = new Game();
  game.roll(3);
  game.roll(7);
  game.roll(5);
  
  console.log(game.score() === 20);
}

function spareWith3Pins7PinsAnd6PinsGivesScore22()
{
	var game = new Game();
  game.roll(3);
  game.roll(7);
  game.roll(6);
  
  console.log(game.score() === 22);
}

function game_with_2_4_8_2_6_gives_28()
{
	var game = new Game();
  game.roll(2);
  game.roll(4);
  game.roll(8);
  game.roll(2);
  game.roll(6);
  
  console.log(game.score() === 28);
}


newGameScoreIs0();
rollOf5ScoreIs5();
spareWith3Pins7PinsAnd5PinsGivesScore20();
spareWith3Pins7PinsAnd6PinsGivesScore22();
game_with_2_4_8_2_6_gives_28();