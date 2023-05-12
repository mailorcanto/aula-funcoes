//EXERCÍCIOS AULA FUNÇÕES

/*
//Exercício 1. Crie uma função que imprima no console a frase “Olá Mundo!”

function helloWorld() {

    console.log("Olá Mundo!");

}

helloWorld();
*/

/*
//Exercício 2. Crie uma função que receba por parâmetro um nome e imprima no console a mensagem: `Olá ${nome}`
           //● Invoque esta função passando 3 argumentos (nomes) diferentes

function nome (nome){
    nome = prompt('Digite um nome');
    console.log(`Olá ${nome}`);
} 

nome(),nome(),nome();
*/

/*
//Exercício 3. Crie uma função que receba dois números e retorne a soma entre eles
           //● Guarde o retorno dessa função em uma variável e imprima no console

function soma(n1, n2){
    n1 = Number(prompt('Digite um número:'));
    n2 = Number(prompt('Digite outro número:'))
    return n1 + n2;
}
var resultado = soma();
console.log('A soma dos valores digitados é: '+resultado);
*/

/*
//Exercício 3 (forma alternativa)
function soma(n1, n2){
    const somar = n1 + n2; 
    console.log('A soma dos valores digitados é de: '+somar);//retornando a mensagem com a soma dentro da função
}
soma((Number(prompt('Digite um número:'))),(Number(prompt('Digite outro número')))); //pedindo para digitar os números na chamada da função
*/

/*
//Exercício 4. Crie uma função que: ● Receba um array de números;
                                  //● Retorne um novo array com dois elementos:
                                  //● o último e o primeiro número do array recebido divididos por dois.

array = [30, 60, 90, 120, 150]

function filtrarArray (numeros){ //receber um array significa puxar um array que está fora da função
 
    primeiroN = array[0] / 2;
    segundoN = array[array.length -1] / 2; //pegando o último elemento do array através do length, -1 para igualar aos índices do array
    novoArray = [primeiroN,segundoN]; 
    return console.log(novoArray);
}

filtrarArray (array); //recebendo um array de números 
*/

/*
//Exercício 5. ● Refaça o exercício 2 com a sintaxe de expressão de função
             //● Refaça o exercício 3 com a sintaxe de Arrow Function

//Ex 2:
const digitarNome = function(nome){
    nome = prompt('Digite um nome');
    console.log(`Olá ${nome}`);
    return nome; //para retornar os nomes para as variáveis nome1, nome2 e nome3
} 

const nome1 = digitarNome();
const nome2 = digitarNome();
const nome3 = digitarNome();
console.log(nome1, nome2, nome3);


//Ex 3:
const soma = (n1, n2) => {
    n1 = Number(prompt('Digite um número:'));
    n2 = Number(prompt('Digite outro número:'))
    return n1 + n2;
}
var resultado = soma();
console.log('A soma dos valores digitados é: '+resultado);
*/


//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

/*
//1. Leia o código abaixo:


function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

//a) O que vai ser impresso no console? = As multiplicações de 2 e 10 por 5
//b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)?
//O que apareceria no console?  = A função seria executada as duas vezes mas os cálculos não seriam mostrados
*/

/*
//2. Leia o código abaixo:

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//a. Explique o que essa função faz e qual é sua utilidade = a função transforma um texto recebido para letras minúsculas e verifica se contém a palavra cenoura

//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
    //i.   `Eu gosto de cenoura` = true
    //ii.  `CENOURA é bom pra vista` = true
    //iii. `Cenouras crescem na terra` = true (???)
    */


//EXERCÍCIOS DE ESCRITA DE CÓDIGO

/*
//1. Escreva as funções explicadas abaixo:

//a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

//"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

//Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
//Lembrando que a função não possui entradas, apenas imprime essa mensagem.

//b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), 
//a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

//Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

function mensagem (){

    console.log("Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.");

}

function dadosPessoa (nome, idade, cidade, profissao){
    nome = prompt('Digite seu nome:');
    idade = Number(prompt('Digite sua idade:'));
    cidade = prompt('Digite sua cidade:');
    profissao = prompt('Digite sua profissão:');
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
}

console.log(dadosPessoa());
*/


//2. 2. Escreva as funções explicadas abaixo:
    
//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
    
//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
    
//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
    
//d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

/*
//função a:
function soma(n1, n2){
    n1 = Number(prompt('Digite primeiro número:'));
    n2 = Number(prompt('Digite segundo número:'));
    var somar = n1 + n2;
    return somar;
}
console.log('A soma dos valores é:',soma());
*/

/*
//função b:
function booleano (n1, n2){
    n1 = Number(prompt('Digite primeiro número:'));
    n2 = Number(prompt('Digite segundo número:'));
    var bool = n1 >= n2;
    return bool;
}
console.log('Primeiro número é maior ou igual ao segundo? ',booleano());
*/

/*
//função c:
function par (n1, n2){
    n1 = Number(prompt('Digite um número:'));
    var bool = n1 % 2 == 0;
    return bool;
}
console.log('O número é par?',par());
*/

/*
//função d:
function string (frase){
    frase = prompt('Digite uma frase:');
    return console.log(frase.length+' - '+frase.toUpperCase());
}

string();
*/

/*
//3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e 
  // chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

//Números inseridos: 30 e 3
//Soma: 33
//Diferença: 27
//Multiplicação: 90
//Divisão: 10

function somar (v1, v2){
    return v1 + v2;
}

function subtrair (v1, v2){
    return v1 - v2;
}

function multiplicar (v1,v2){
    return v1 * v2;
}

function dividir (v1, v2){
    return v1 / v2;
}
var n1 = Number(prompt('Digite primeiro número:'));
var n2 = Number(prompt('Digite segundo número:'));


console.log(`Números inseridos: ${n1} e ${n2} \nSoma: ${somar(n1,n2)}\nSubtração: ${subtrair(n1,n2)}\nMultiplicação: ${multiplicar(n1,n2)}\nDivisão: ${dividir(n1,n2)}`)
*/

//DESAFIOS

/*
//1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de 
//invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções
    
//a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro
    
//b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** ???
//Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo

var retornarValores = (funcao) => {
    return console.log(funcao);
}

var receberValores = (v1, v2) => {
    return v1 + v2;
}

retornarValores(receberValores(10,20));

*/

/*
//2.Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. 
//Retorne este valor, invoque a função e imprima o resultado no console. 

function teorema (){
    c1 = Number(prompt('Digite primeiro cateto:')); 
    c2 = Number(prompt('Digite segundo cateto:')); 
    h = Math.pow(c1, 2) + Math.pow(c2, 2); //A função Math.pow() retorna a base elevada ao expoente power, ou seja, baseexpoente. 'Math.pow(base, expoente)'
    h = Math.sqrt(h);//A função Math.sqrt() retorna a raiz quadrada de um número. 'Math.sqrt(x)'
    return h;
}
console.log(teorema());
*/
