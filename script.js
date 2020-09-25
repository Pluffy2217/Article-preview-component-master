var share = document.querySelector('.share-options');
var triangle = document.querySelector('.triangle');
var svg = document.querySelector(".share-icon");
var btn = document.querySelector(".share");


document.querySelector('.share').addEventListener('click',function() {
    if (share.style.display === "none") {   
        share.style.display = "flex";
        triangle.style.display = "block";
        svg.setAttribute("src","images/share2.svg");
        btn.style.backgroundColor = "hsl(218, 18%, 52%)";
        svg.style.backgroundColor = "hsl(218, 18%, 52%)";
    }
    else {
        share.style.display = "none";
        triangle.style.display = "none";
        svg.setAttribute("src","images/icon-share.svg");
        btn.style.backgroundColor = "hsl(210, 46%, 95%)";
        svg.style.backgroundColor = "hsl(210, 46%, 95%)";
    }
});