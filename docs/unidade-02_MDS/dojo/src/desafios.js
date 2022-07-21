// Funções para os desafios do coding dojo

// 01. Calcula média de 3 notas com pesos
function media(nota1, nota2, nota3) {
    soma = (nota1 * 2) + (nota2 * 3) + (nota3 * 5);
    return (soma/10);
}

// 02. Calcula a área de um circulo
function areaCirculo(raio) {
    PI = 3.14159;
    return (PI * (raio * raio));
}

// 03. Verifica se uma palavra existe dentro de uma frase
function encontraSubstring(frase, palavra) {
    result = frase.indexOf(palavra) > -1;
    return result;
}

// 04. Lista de compras
const listaDeCompras = [
    'ovos',
    'leite',
    'feijao',
    'arroz'
];

module.exports = { media, areaCirculo, encontraSubstring, listaDeCompras };