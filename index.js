var randomNumber1=Math.floor(Math.random()*5)+1;
var randomNumber2=Math.floor(Math.random()*5)+1;
var pic=["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];
document.querySelector("img.img1").setAttribute("src",pic[randomNumber1]);
document.querySelector("img.img2").setAttribute("src",pic[randomNumber2]);
if (randomNumber1===randomNumber2)
{
    document.querySelector("h1").innerHTML="Draw!";
}
else if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
