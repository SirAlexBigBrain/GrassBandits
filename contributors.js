var data = [];
var avatar = [];
var avatarurl = "";
var url = "https://api.github.com/repos/SirAlexBigBrain/GrassBandits/contributors";
var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    data = JSON.parse(xhr.responseText);
  }
};
xhr.send();
data.forEach((element) => {
  document.getElementById("foot").innerHTML += "<img src=\"" + "\">"
});
