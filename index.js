function outcome() {

    //RECUPERA VALOR DO INPUT
    let num1 = Number(document.getElementById('num-one').value);
    let num2 = Number(document.getElementById('num-two').value);
    let total = 0;
    //console.log(num1);
    //console.log(num2);

    //RECUPERA O CHECK E FAZ O CALCULO
    
    if (document.getElementById('box1').checked) {
        // +
        total = num1 + num2;
        document.getElementById('resultArea').innerHTML = 'Result : ' + String(total);
    } else if (document.getElementById('box2').checked) {
        // -
        total = num1 - num2;
        document.getElementById('resultArea').innerHTML = 'Result : ' + String(total);
    } else if (document.getElementById('box3').checked) {
        // *
        total = num1 * num2;
        document.getElementById('resultArea').innerHTML = 'Result : ' + String(total);
    } else if (document.getElementById('box4').checked) {
        if (num2 == 0) {
            // divisão por zero
            document.getElementById('resultArea').innerHTML = 'Não existe divisão por 0';
        } else {
            // diferente de 0
            total = num1 / num2;
            document.getElementById('resultArea').innerHTML = 'Result : ' + String(total);
        }
    }

    //limpar os inputs
    limparCampo();
}

//limpar os campos do input que o suuario colocar quando calcular
function limparCampo() {
    document.getElementById('num-one').value = '';
    document.getElementById('num-two').value = '';
}