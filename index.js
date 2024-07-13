var randomNumber1 = (Math.floor(Math.random()*6)+1) ;

var randomImg = "./images/"+"dice"+randomNumber1+".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImg);

var randomNumber2 = (Math.floor(Math.random()*6)+1) ;

var randomImg2 = "./images/"+"dice"+randomNumber2+".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImg2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = "🚩 Player1 wins!!";
}
else if(randomNumber1 === randomNumber2){
    document.querySelector("h2").innerHTML = "Draw!!";
}
else{
    document.querySelector("h2").innerHTML = "Player2 wins!!🚩";
}