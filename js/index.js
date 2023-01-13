function adicionarCaracter(number){
    const inputDisplayValue = document.querySelector(".display").value;

    document.querySelector(".display").value = inputDisplayValue + number;
}


function limpaTela(){
    document.querySelector(".display").value = "";
}

function calcular(){
    const inputDisplayValue = document.querySelector(".display").value;

    document.querySelector(".display").value = eval(inputDisplayValue);
}

function inverterNumero(){
    const inputDisplayValue = document.querySelector(".display").value;

    document.querySelector(".display").value = inputDisplayValue * -1;
}