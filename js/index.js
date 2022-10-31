// Função Map 

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var num = numeros.map(function(valor) {
    return valor * 2;
});

//console.log(num);

var funcionarios = [
    {nome: "Lucas", idade: 25},
    {nome: "Luan", idade: 22},
    {nome: "Nair", idade: 61},
    {nome: "Maria", idade: 25},
];

var nomes = funcionarios.map(pessoa => pessoa.nome);
//console.log(nomes);



//Função reduce (serve para somar/subtrair/multiplicar valores de um array)

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var total = numeros.reduce(function(total, numero){
    return total + numero;
}, 0); //esse '0' é o valor que cai no parâmetro "total"

//console.log(total)



//função forEach

var numeros = [10, 20, 30, 40, 50, 60];

//for
//for(let valor of numeros) {
//    console.log(valor);
//}


//forEach
numeros.forEach(valor => console.log(valor));

total = 0;
numeros.forEach(valor => {
    total += valor;
});

console.log(total);

numeros.forEach(function(valor, indice, array) {
    console.log(array[indice]);
})