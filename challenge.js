
var scores, roundScore, activePlayer, dice1, dice2;

scores = [0], [0];
roundScore = 0;
activePlayer = 0;
init();

document.querySelector('.btn-roll').addEventListener('click' , function(){
    if(gamePlaying){
        dice1 = Math.floor(Math.random()*6)+1;
        dice2 = Math.floor(Math.random()*6)+1;
        diceBlock();
        document.getElementById('dice1').src='starter/dice-'+dice1+'.png';
        document.getElementById('dice2').src='starter/dice-'+dice2+'.png';
        if(dice1 !== 1 && dice2 !== 1){
            roundScore += dice1 + dice2;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        }else{
            nextPlayer();
        }
    }

});

document.querySelector('.btn-hold').addEventListener('click' , function(){
    if(gamePlaying){
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        var winningScore;

        if(input){
            winningScore = input;
        }else{
            winningScore = 20;
        }

        if(scores[activePlayer] >= winningScore) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner!!';
            diceNone();
            document.querySelector('.player-' +activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' +activePlayer + '-panel').classList.remove('active');
            document.getElementById('current-' + activePlayer).textContent = 0;
            gamePlaying = false;
        }else{
            nextPlayer();
        }
    }
})

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = roundScore;
    document.getElementById('current-1').textContent = roundScore;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    diceNone();
}

function init(){    
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    diceNone();
}

function diceBlock(){
    document.getElementById('dice1').style.display = 'block';
    document.getElementById('dice2').style.display = 'block';
}
function diceNone(){
    document.getElementById('dice1').style.display = 'none';
    document.getElementById('dice2').style.display = 'none';
}
// Game End