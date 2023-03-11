// Const com valores mutáveis 


// Const descreve uma variável que nao pode ser reatribuída (com o operador de atribuição =). Depois de criá-la, nao podemos fazer algo assim

// const nome = 'luiz';
// nome =  'joão'; // Erro Assignment to constant variable.

/* Porém, existe uma diferença entre variável e valor. 
Variáveis são como um apelido para um valor, uma espécie de alias para mencionar algum
valor salvo na memória.

Já valores são os dados que realmente ficam salvos na memoria e sustentam determinado tipo.
Alguns tipos de  valores são imutáveis, como number, string, boolean, undefined, null, symbol e bigint(os primitivos são imutáveis). Outros tipos são mutáveis, como arrays e objetos (Objetos em geral são mutáveis, com exceção de null).

Valores mutáveis geralmente são estruturas de dados mais complexas que sustentam outros valores ou comportamentos internamente, como é o caso do array, que pode ser composto por vários tipos de dados.

Quando usamos const com tipos primitivos, esse valor nunca mais poderá ser alterado. Nesse caso, além de const nao permitir reatribuição, o valor também é imutavel ( consequentemente, nunca podemos alterar essa constante).

Já quando usamos const com valores mutáveis( como arrays e objetos), a variável continua sendo constante, porém os valores dentro do objeto poderão ser alterados. Isso acontece porque quando alteramos um valor interno de um objeto, nao ocorre a reatribuição da variavel com sinal de atribuição = (a variável contiunua apontando para o mesmo local na memória), apenas a alteração de um valor interno do mesmo objeto.

Por este motivo, pode-se usar const com objetos mutáveis e ainda assim alterar seus valores internos. A única coisa que não vamos conseguir fazer é reatribuir o valor da variavel.

Exemplos:

isso PODE:

const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]
 

Isso NÃO pode 

const array = [1, 2, 3, 4, 5];
array = 'Legal'; // Assignment to constant variable. */