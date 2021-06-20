let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let ImageSourceRandom = "images/dice" + randomNumber1 + ".png";

let img = document.querySelectorAll("img")[0];
 img.setAttribute("src", ImageSourceRandom );




let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let ImageSourceRandom1 = "images/dice" + randomNumber2 + ".png";

let img2 = document.querySelectorAll("img")[1];
 img2.setAttribute("src", ImageSourceRandom1);




if (randomNumber1 > randomNumber2){

  document.querySelector("h1").innerHTML = "Player 1 wins";



}else if (randomNumber2 > randomNumber1){

  document.querySelector("h1").innerHTML = "Player 2 wins!";

}else{

  document.querySelector("h1").innerHTML = "Draw!";
  
}