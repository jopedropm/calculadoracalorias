const btn = document.querySelector("#calcular");
const btnReset = document.querySelector("#reset");

btn.addEventListener("click", function (e) {
    e.preventDefault(); //nao redefine a pagina ao clicar
    const tmb = function generos() {
        const genero = document.querySelector('input[name="genero"]:checked').value;
        const idade = document.querySelector("#idade").value;
        const altura = document.querySelector("#altura").value;
        const peso = document.querySelector("#peso").value;
        if (genero == 'homem') {
            return (10*peso)+(6.25*altura)-(5*idade)+5;
        } else if (genero == 'mulher') {
            return (10*peso)+(6.25*altura)-(5*idade)-161;
        }
    }
    const gastoTotal = function graus(){
        const grau = document.querySelector('option:checked').value;
        if (grau === 'Sedentário') {
            return tmb() * 1.2;
        } else if (grau === 'Pouco ativo') {
            return tmb() * 1.35;
        }else if (grau === 'Moderadamente ativo') {
            return tmb() * 1.45;
        } else if (grau === 'Muito ativo') {
            return tmb() * 1.6;
        } else if (grau === 'Extremamente ativo') {
            return tmb() * 1.75;
        }
    }
    document.getElementById("resposta").innerHTML ="Você gasta em média: " + gastoTotal().toFixed(0) + "kcal" + "<br>Parado sem se mexer você gasta: " + tmb().toFixed(0) + "kcal";
})
btnReset.addEventListener ("click", function() {
    window.location.reload();
})