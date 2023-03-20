let fromUserInput = document.getElementById("fromUserInput");
let toUserInput = document.getElementById("toUserInput");
let counterText = document.getElementById("counterText");
let startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function() {
    let valueE1 = fromUserInput.value;
    let valueE2 = toUserInput.value;
    if (valueE1 < valueE2) {
        counterText.textContent = valueE1;
        let count = parseInt(valueE1);
        let setInt = setInterval(function(event) {
            count = count + 1;
            counterText.textContent = count;
            if (count >= valueE2) {
                clearInterval(setInt);
            }
        }, 1000);


    }

});