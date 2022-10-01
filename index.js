var firstRandomNum = Math.floor(Math.random() * 6) + 1

var firstDiceImage = 'images/dice' + firstRandomNum + '.png';

document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);

var secondRandomNum = Math.floor(Math.random() * 6) + 1

var secondDiceImage = 'images/dice' + secondRandomNum + '.png';

document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

if (firstRandomNum > secondRandomNum){
    document.querySelector('h1').innerHTML = 'The Winner is User 1'
}else if (firstRandomNum < secondRandomNum){
    document.querySelector('h1').innerHTML = 'The Winner is User 2'
}else{
    document.querySelector('h1').innerHTML = 'It is a draw'
}