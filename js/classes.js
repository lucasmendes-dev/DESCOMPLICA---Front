//OBJETOS 

var pessoa = {
    nome: "Lucas",
    sobrenome: "Mendes"
}

//console.log(pessoa.nome);


var pessoa1 = new Object();

pessoa1.nome = "Angela";
pessoa1.sobrenome = "Silva";

pessoa1.falarNome = function() {
    console.log("Nome é: " + this.nome);
}

//pessoa1.falarNome();


//função pra criar objeto
function criarPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}

var p1 = criarPessoa("Lucas", "Mendes");
var p2 = criarPessoa("Maria", "Russo");

//console.log(p1);




//CLASSES//

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        console.log(this.firstName + " " + this.lastName);
    }
}

const user = new User("Lucas", "Mendes");
user.getFullName();


// -- Herança -- //]

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log("Já está ligado")
            return;
        }
        this,this.ligado = true;
    }
}


class SmartPhone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

var s1 = new SmartPhone("Samsung", "Preto", "M32");
console.log(s1);
s1.ligar();
s1.ligar();
