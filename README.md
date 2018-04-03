# Estudando Typescript
![TypeScript](https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png)

Estou aprendendo essa "nova" linguagem e tenho como objetivo criar esse
documento que vai servir como um guia de estudo para quem quer começar a estudar
o __typescript__. Vou colocar alguns conceitos da linguagem e links que eu achar
interessantes.

## O que é Typescript?
_Typescript_ é uma linguagem de script desenvolvida pela nossa querida Microsoft.
Para explicar de uma forma bem simples, o _Typescript_ adiciona os conceitos de
orientação a objetos no _Javascript_ assim como as linguagens de back-end _Java_
e *C#*.

O _Typescript_ possui um transpilador que transforma o seu código __typescript__
em __javascript__, mas você deve estar se perguntando o porque usar POO em _Javascript_,
bom, se você está com essa duvida é porque tem dificuldade com a orientação a
objetos. Se você trabalha como dev sabe que o código _Javascript_ ao longo do
tempo acaba virando um monstro, com a POO a ideia é reduzir ao máximo esse problema.

## Existe algum pré-requisito?
Pelo que venho estudando até o momento acho interessante que você possua um certo conhecimento sobre _Javascript_, não precisa ser um ninja, mas é legar ter noção do _Javascript_ (quando eu digo _javascript_ é _javascript_ __puro__ :thumbsup:). Outro conhecimento importante para utilizar o _Typescript_ é possuir os conceitos de __orientação a objetos__ bem sólidos.

## Instalação
Pra inicio de conversa você vai precisar instalar o [Node.js](https://nodejs.org).
Após instalado vamos precisar usar o _NPM_ para instalar o _Typescript_ com o
seguinte comando:

```
npm install -g typescript
```

## Variáveis
Para a criação de variáveis utilizamos a seguinte sintaxe:

``` typescript
let nomeDaVariavel: tipo = valor;
```

A primeira diferença que encontramos entre o _Javascript_ e o _Typescript_ é o uso da palavra __let__. O mais importante não é saber o que é uma determinada função e sim o porque dela existir. No _Javascript_ usamos a palavra __var__ para indicar que estamos criando uma variável, porém no _javascript_ não é possível definir o escopo da variável, ou seja, a variável se torna global com a __let__ esse problema é resolvido, a seguir um exemplo:

``` javascript
var boolean = true;

if (boolean) {
  var numero = 2;
}

console.log(numero); // valor = 2
                    // o valor deveria ser undefined
                    // pois foi definida dentro do escopo do IF
                    // e não no escopo global.
```

### Tipos
Com o _Typescript_ é possível definir o tipo de valor para as variáveis, os tipos disponíveis são:

* __string__: Valor do tipo texto.
* __number__: Valores do tipo numerico como __int__, __double__ e __float__.
* __boolean__: Valores booleanos __true__ e __false__.
* __Any__: Para valores de qualquer tipo seja ele _string_, _number_ ou _boolean_.

### Arrays
Para definir arrays no _typescript_ usamos a seguinte sintaxe:
``` typescript
let nomeDoArray: tipo [] = valores;

  // OU

let nomeDoArray: Array<tipo> = valores;

  // Um exemplo com valores reais

let numeros : number [] = [1,2,3,4,5];

  // OU

let numeros : Array <number> = [1,2,3,4,5];
```

### Tuplas
Tupla é um termo acadêmico para o que conhecemos como linhas no banco de dados, para simplificar ainda mais vamos considerar que uma tupla é um array de tamanho definido, onde cada posição do array podemos definir um tipo de dado a ser acrescentado, por exemplo:

``` typescript
let nomeDatupla: [tipo, tipo, ...];

// Para um exemplo real vou criar uma tupla de representa uma pessoa com os
// seguintes dados: nome (string), idade (number) e status (boolean)

let pessoa: [string, number, boolean];

// a seguir inserimos os dados
pessoa = ['fulano',25,false];
```

### Enum
Para quem conhece __Java__ e **C#** já está familiarizado com os enum. Para quem não conhece, enum é um tipo de dados que podemos criar assim como as classes, porém com enum podemos configurar um série de constantes, ou seja, valores que não podem ser alterados.

``` typescript
enum Direcao {
  cima      = 1,
  baixo     = 2,
  esquerda  = 3,
  direita   = 4,
}

console.log(Direcao.esquerda) // resultado = 3
```
### Funções
Para criar funções no _typescript_ não é muito diferente do que em outras linguagens veja um exemplo abaixo:

``` typescript
nomeDaFuncao(param1 : tipo, param2: tipo, ...) : tipoDeRetorno {
  // seu código
}

// um exemplo real de uma função que soma dois números
soma (numero1: number, numero2: number) : number {
  return numero1 + numero2;
}
```

## Classes
Classes são tipos especiais de dados que podemos criar, por exemplo:

``` typescript
class Carro {
    cor: string;
    ano: number;
}

let fusca = new Carro(); // agora podemos usar um novo tipo de variável
```

## Interfaces
Interfaces são "classes" onde é possível definir quais os comportamentos devem ser implementados em uma classe, ou seja, definimos que a classe deve ter um determinado comportamento, mas não definimos como deve ser executado esse comportamento. Essas definições de como deve ser executada fica no momento da implementação da classe.

``` typescript
interface IAnimal {
    mover():void; // Toda classe que implementar a interface deve possuir o método mover();
}

class Cachorro implements IAnimal {
    mover() : void {
      // a classe que implementa a interface é que escrevemos o comportamento.
      console.log("O cachorro está se movendo");
    }
}

class Gato implements IAnimal {
    mover() : void {
      console.log("O gato está se movendo")
    }
}
```

Como citado anteriormente, com a interface podemos definir os comportamentos da classe ao implementar nossa interface. Com o _Typescript_ podemos definir também atributos seja ele obrigatório ou não, por exemplo:

```typescript
interface IAnimal {
    nome: string; // atributo obrigatório
    idade?: number; // atributo não obrigatório
}
```

Detalhando o exemplo acima, toda classe que implementa a nossa interface _IAnimal_ deve possuir (obrigatório) o atributo __nome__, mas não é necessário possuir o atributo __idade__.

Além de poder criar parâmetros não obrigatórios é possível criar "constantes" onde atribuímos o valor na instancia do objeto e esse valor não poderá ser alterado. Para criar esse atributo utiliza-se a palavra chave __readonly__.

```typescript
  interface NomeDaInterface {
      readonly nomeDaVariavel : tipo;
  }
```
