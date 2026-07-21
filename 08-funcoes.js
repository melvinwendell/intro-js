// uma função é um bloco de código reutilizável
// executa uma tarefa especifica
// funções são chamadas/invocadas 

/*

function nomeDaFuncao(){
  // código da função  
}

*/

// 1 - criando a função
function saudacao() {
    document.body.innerHTML = "Olá, bem vindo(a)"
}

// 2 - para a função funcionar/executar, precisamos chama-la/invocar
saudacao()


// função com parametros
function cumprimento(nomeDoUsuario) {
    // o sinal de + está sendo usado para concatenar(unir/juntar) o texto de boas vindas com o texto de parametro nome
    document.body.innerHTML ="Olá, bem vindo(a) " + nomeDoUsuario
}

// chamando/invocanto uma função com o parÂmetro 
cumprimento("Melvin")


// exemplo de uma aplicação 
let user = true
if (user === true) {
  cumprimento("Melvin")  
} else {
    document.body.innerHTML = "Credenciais inválidas"
}


/* outros exemplos de funções com parametros */
function soma(a, b) {
    document.body.innerHTML = a + b
} 

soma(8, 20) // 8 + 20 = 28
soma("Olá ", "Melvin") // "Olá" + "Melvin" = "Olá Melvin"


/* Exemplo de função com retorno e validação de dados */
function multiplicar(a, b){
    // verifica se o valor do parametro A foi informado
    if(a === undefined) {
        document.body.innerHTML = "Por favor, digite o valor do numero A"
        return
    }

    // verifica se o valor do parametro B foi informado 
    if(b === undefined) {
        document.body.innerHTML = "Por favor, digite o valor do numero B"
        return    
    }

    // typeof = é um operador do JavaScript que serve para DESCOBRIR O TIPO DE UM  VALOR OU UMA VARIÀVEL
    // o operador !== avalia se o elemento é difirente do tipo e valor
    if(typeof a !== "number") {
      document.body.innerHTML = "O valor precisa ser um número"
      return
    }

    if(typeof b !== "number") {
        document.body.innerHTML = "O valor de B precisa ser um número"
        return
    }

    // Number = é uma função usada para coverter valores para número 
    // isNaN = é uma função que serve para verificar se o valor é NaN(not a Number)
    if(Number.isNaN(a)){
        document.body.innerHTML = "Numero inválido"
    }

    if(Number.isNaN(b)){
        document.body.innerHTML = "Numero inválido"
    }

     // "O resultado da multiplicação entre" + a + "e" + b + "é igual a" + (a + b)
     // `` = Template literals
    document.body.innerHTML = `O resultado da multiplicação entre ${a} e ${b} é igual a ${a * b}`

     }

// multiplicar(a = 5, b = 2) // 5 * 2 = 10
// multiplicar(5, 2) // 5 * 2 = 10
multiplicar(a = 8, b = 7) // 5 * 2 = 10

