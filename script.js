    var Text = document.querySelector(".test");


    var myF = function () {
        Text.innerText = "Ваша сумма отправлена";
        Text.style.fontSize = "20px";
        Text.style.color = "aqua";
    };

    Text.addEventListener("click", myF);

