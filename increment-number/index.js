let number = 0;
const button = document.querySelector("#increment");
const result = document.querySelector("#result");
button.addEventListener("click", function(){
    number++;
    result.textContent = number;
});
