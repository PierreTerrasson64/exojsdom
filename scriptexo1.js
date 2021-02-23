
let btn = document.querySelector("button");
let page = document.querySelector("html");
let tableau = ["pomme", "poire", "banane", "fraise", "cerise"];
let c;

function randomInt(range){
    return Math.floor(Math.random()*Math.floor(range));
}

btn.addEventListener("click", function (){
    let text = document.getElementById("word");
    afficherMot(text);
    page.style.backgroundColor = "red";
})

function afficherMot(text){
    clearInterval(c);
    c = setInterval(function(){
        text.innerHTML = tableau[randomInt(5)];
    }, 5000);
}
