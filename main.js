var state = 0

function myFunction () {
    if (state == 0) {
document.getElementById("Head").style.color="red";
document.body.style.backgroundColor= "black";
document.getElementById("Main").src= "images/badguy.png";
document.getElementById("Gif").src= "images/Vanilla-0.9s-280px.gif";
document.getElementById("Music").src= "audio/New_Little_Sky-Evening_Glow.mp3";
state = 1;
} else {
document.getElementById("Head").style.color= "black";
document.body.style.backgroundColor= "white"
document.getElementById("Main").src= "images/niceguy.jpeg";
document.getElementById("Gif").src= "images/Vanilla-4.8s-280px.gif";
document.getElementById("Music").src= "audio/The_Tudor_Consort_-_10_-_Amen.mp3";
state = 0
}
}
