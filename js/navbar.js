var request = new XMLHttpRequest();
request.open('GET', "https://raw.githubusercontent.com/SirAlexBigBrain/GrassBandits/main/navbar.html", false);
request.send();
document.querySelector("body").innerHTML = request.responseText + document.querySelector("body").innerHTML;
