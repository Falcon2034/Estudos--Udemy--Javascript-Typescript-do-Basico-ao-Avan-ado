const numero = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p> A raiz quadrada do seu numero é  ${Math.sqrt(numero)} <br>
${numero} é inteiro: ${Number.isInteger(numero)} <br>
É NaN: ${isNaN(numero)} <br>
Arrendondado para baixo: ${Math.floor(numero)} <br>
Arrendondado para cima: ${Math.ceil(numero)} <br>
Com duas casas decimais ${numero.toFixed(2)}</p>`;

