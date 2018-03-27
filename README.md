# Estudando Typescript
![TypeScript](https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png)

Estou aprendendo essa "nova" linguagem e tenho como objetivo criar esse
documento que vai servir com um guia de estudo para quem quer começar a estudar
o __typescript__. Vou colocar alguns conceitos da linguagem e links que eu achar
interessantes.

## O que é Typescript?
_Typescript_ é uma linguagem de script desenvolvida pela nossa querida Microsoft.
Para explicar de uma forma bem simples, o _Typescript_ adiciona os conceitos de
orientação a objetos no _Javascript_ assim como as linguagens de back-end _Java_
e *C#*.

O _Typescript_ possui um compilador que transforma o seu código __typescript__
em __javascript__, mas você deve estar se perguntando o porque usar OO em _Javascript_,
bom, se você está com essa duvida é porque tem dificuldade com a orientação a
objetos. Se você trabalha como dev sabe que o código _Javascript_ ao longo do
tempo acaba virando um monstro, com a OO a ideia é reduzir ao máximo esse problema.

## Existe algum pré-requisito?
Pelo que venho estudando aqui o momento acho interessante que você possua um
certo conhecimento sobre _Javascript_, não precisa ser um ninja, mas é legar ter
noção do _Javascript_. Outro conhecimento importante para utilizar o _Typescript_
é possuir os conceitos de __orientação a objetos__ bem sólidos.

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