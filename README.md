[![Build Status](https://travis-ci.com/caio000/learn-typescript.svg?branch=master)](https://travis-ci.com/caio000/learn-typescript)
![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)


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

## Configuração
O passo seguinte é criar o arquivo de configuração do nosso projeto. Para criar o arquivo de configuração utilize o seguinte comando no terminal:

```
tsc --init
```

Com esse comando será gerado um arquivo __tsconfig.json__ com varias opções de configurações disponíveis para o nosso projeto. Para saber mais sobre essas configurações acesse a  [documentação](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) do _Typescript_. A seguir o meu arquivo __tsconfig.json__ com as configurações que estou utilizando para esse projeto, apenas um adendo para a opção _outDir_ onde estou especificando o diretório onde será gerado os arquivos __JS__.

```json
{
  "compilerOptions": {
    "target": "es2018",
    "module": "commonjs",
    "allowJs": true,
    "checkJs": true,
    "outDir": "./dist",
    "removeComments": true,
    "strict": true,
  }
}

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

#### Callback
Segundo o glossário da [Mozilla](https://developer.mozilla.org/pt-BR/docs/Glossario/Callback_function) as funções _callback_ são funções que são passadas como parâmetros de outras funções, por exemplo.

```typescript
class Calculator {
  SUM = (num1: number, num2: number) => num1 + num2;
  MULTIPLY = (num1: number, num2: number) => num1 * num2;

  calculate(num1: number, num2: number, callback: (num1: number, num2: number) => number) : number {
    return callback(num1, num2);
  }
}
```

No exemplo acima foi criado uma classe _Calculator_ (Calculadora) com uma função _calculate_ (calcular) que recebe como parâmetros dois números e uma função que representa a operação que será executada pela calculadora.

```typescript
const calculator = new app.Calculator();
const result = calculator.calculate(2, 2, calculator.SUM);
console.log(result); // resultado: 4
```

## Classes
Classes são tipos especiais de dados que podemos criar. Como o _typescript_ utiliza os conceitos de __POO__, podemos utilizar __herança__, __polimorfismo__ e __encapsulamento__. Abaixo um pequeno exemplo:

``` typescript
export abstract class Veiculo {
    private readonly _id: number;

    constructor(id: number) {
      this._id = id;
    }

    get id () : number {
      return this._id;
    }

    public abstract mover() : void;
}

export class Carro extends Veiculo {

  private _cor: string;
  private _ano: number;

  constructor(id: number, cor:string, ano: number) {
    super(id);
    this._ano = ano;
    this._cor = cor;
  }

  public toString = function () : string {
    return '['+this._id+','+this._cor+','+this._ano+']';
  }

  mover() : void {
    console.log('O carro está se movendo');
  }

}

let carro = new Carro(10,'vermelho',2015);
console.log(carro.toString());

carro.mover();
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

## Tipos Genéricos
No TypeScript podemos utilizar tipos genéricos na assinaturas de classes e métodos. Mais conhecidos como _Generic Type_, os tipos genéricos são utilizados em situações em que não sabemos o tipo de dado que a função ira receber, mas mesmo assim queremos utilizar a função criada. Abaixo o exemplo de uma função utilizando tipos genéricos.

```typescript
public reverseList = function<T>(list:Array<T>) : Array<T> {

  let reversedList: Array<T> = [];

  for (let i = list.length - 1; i >= 0; i--) {
    reversedList.push(list[i]);
  }

  return reversedList;
}
```

Para utilizar os tipos genéricos é utilizado a uma letra em maiúsculo (nesse caso a letra T) dentro do sinais de maior e menor ( __<__ __>__). Em nosso exemplo, estamos falando que a função vai receber um parâmetro chamado _list_ que é um array de tipo genérico, ou seja, vamos receber uma lista em que não sabemos o tipo dessa lista, por exemplo, podemos receber uma lista de valores do tipo _number_, _string_ ou até mesmo uma lista de objetos. No retorno utilizamos o tipo genérico, pois assim podemos garantir que a lista retornada será do mesmo tipo da lista que foi passado como parâmetro.

## Eventos
Como estamos falando de _javascript_ não podemos esquecer dos famosos _eventos_ que utilizamos para colocar mais "frescuras" em nossos projetos. Para trabalharmos com eventos em _typescript_ não é diferente da forma em que criamos em _javascript_.

```typescript
class MyEvent {

  protected element: HTMLElement;

  constructor (elementId: string, event: string) {
    this.element = <HTMLElement> document.getElementById(elementId);
    this.element.addEventListener(event, this.run);
  }

  run() : void {
    // do something
  }
}
```

No exemplo acima temos uma simples classe que vai nos ajudar a entender como podemos trabalhar com eventos em _typescript_, primeiro temos um atributo _element_ que é o elemento que vai receber o evento que estamos criando, em seguida temos o construtor que recebe o _id_ do elemento e o nome do evento que vamos utilizar e a função _run_ que vai executar as ações que vamos criar.

Para quem já conhece _javascript_ sabe o que estamos fazendo dentro do construtor, mas para quem não conhece vou explicar de forma simples. Primeiro vamos pegar o elemento que vai receber o nosso evento.

```typescript
  this.element = <HTMLElement> document.getElementById(elementId);
```

Agora que já temos o nosso elemento vamos atribuir o evento e a função de deve ser executada quando o evento for disparado que nesse caso e a função _run_, enão todos os comandos que escrevemos dentro dessa função é o que será executado quando o evento for disparado.

```typescript
  this.element.addEventListener(event, this.run);
```

## Asynchronous JavaScript and XML
Asynchronous JavaScript and XML ou mais conhecido como AJAX é uma técnica que nos permite criar aplicações mais interativas, com ele podemos fazer requisições ao servidor web para buscar e enviar informações.

Abaixo um exemplo de uma classe criada para fazermos as requisições _ajax_. Primeiro temos o atributo __READY_STATUS_CODE__ e atribuimos o valor 4 (quatro), ou seja, os dados de resposta da requisição estão prontos para nossa aplicação.

Temos a função __isCompleted__ que verifica se a nossa requisição está pronta para ser utilizada. Por último a principal função __httpCatch__ que recebe a _URL_ a qual vamos acessar para buscar ou enviar informações para o servidor e uma função _callback_ que será executada ao final de requisição. Para ver o arquivo original [clique aqui](js/Ajax.ts).

```typescript
class Ajax {
    private READY_STATUS_CODE : number;

    constructor() {
      this.READY_STATUS_CODE = 4;
    }

    private isCompleted (req: XMLHttpRequest) {
      return req.readyState === this.READY_STATUS_CODE;
    }

    public httpCatch(url: string, callback: (status: number, response: string) => any) : void {
      let req = new XMLHttpRequest();

      req.onreadystatechange = () => {
        let finished = this.isCompleted(req);
        if (finished) {
          callback(req.status, req.responseText);
        }
      }

      req.open("GET", url, true);
      req.send();
    }

}
```

## Exceções
Em _javascript_ é possível lançar __exceptions__ (exceções), ou como é chamado na própria linguagem __Error__. Uma das boas praticas é a criação das nossas próprias classes de erros, por exemplo:

```typescript
class StringNotValidError implements Error {
  name: string = 'StringNotValidError';

  constructor (public message: string) {
      console.log(`Error: ${message}`);
  }
}
```

No exemplo acima foi criada a classe __StringNotValidError__ e que implementa a interface __Error__, e com a implementação dessa interface devemos criar os atributos _name_ e _message_. O atributo _name_ é definido o nome da classe criada e _message_ a mensagem que queremos retornar no momento do erro.

Um exemplo para lançar nossa classe de erro.
```TypeScript
let num1 = 'teste';

if (isNaN(num1)) {
  throw new NotANumberError(`${ num1 } is not a number`);
}
```
