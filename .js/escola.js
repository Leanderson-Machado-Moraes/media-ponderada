
const nome = document.getElementById("nome")
const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")
const n3 = document.getElementById("n3")
const med = document.getElementById("me")
const botao = document.getElementById("b1")



botao.addEventListener('click', () => {
    let n = nome.value;
    let num1 = Number(n1.value);
    let num2 = Number(n2.value);
    let num3 = Number(n3.value);
    let m = Number(med.value);
    let mf = (num1 + num2 * 2 + num3 * 3 + m) / 7;
    


    alert(` ${n} 
 você tirou nota 1: ${num1}
 nota 2: ${num2} 
 nota 3: ${num3}
 Média de exercícios: ${m}
 Média final: ${mf.toFixed(1)}`);

});