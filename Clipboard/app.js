var input = document.querySelector("#input");
var btn = document.querySelector(".btn");
btn.onclick = function(){
    input.select();
    document.execCommand('copy');
    alert("coppied");
}