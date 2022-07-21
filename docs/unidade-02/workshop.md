
## WorkShop: Testes Unitários com Jest

## Integrantes
  - Bruna Lima
  - Giulia Alcantara
  - Guilherme França
  - Samuel Sato

## Testes Unitários

<h4>Definição</h4>

  - O teste unitário consiste em verificar o comportamento das menores unidades em uma aplicação.
  - Funcionalmente, pode ser um conjunto de classes intimamente relacionadas. Como um "Cervo" e suas classes de suporte "Cabeça", "Rabo" e "Movimento".

<h4>Funcionamento</h4>

  - Os teste unitários precisam funcionar isoladamente
  - Todo o conjunto de teste unitários de uma aplicação precisa funcionar em minutos, de preferência em segundos.
  - Se um código de teste fizer E/S(Entrada, Saída) ou acessar qualquer coisa fora do processo, não é um teste unitário, e sim um teste de integração.

<h4>Benefícios</h4>

  - Economia de tempo.
  - Facilidade de detecção de bugs e erros.
  - Feedback instantâneo da implementação

## Jest
Jest é um delicioso JavaScript Testing Framework com foco na simplicidade.

<h2>Instalação</h2>
<h4>Pré-requisitos</h4>
  - NodeJs
  
<h4>Comandos</h4>

Escolha o seu gerenciador de pacotes: NPM | YARN

*Nos exemplos utilizamos o NPM*

- Instale o Jest
```sh
npm install --save-dev jest
```

- Adicione o *Jest* no arquivo package.json:
```sh
{
  "scripts": {
    "test": "jest"
  }
}
```
- Para executar os testes:
```sh
npm run test
```

<h2>Matchers</h2>
<h2>Mocks</h2>

Utilizamos mock quando desajamos simular o comportamento real de uma função/objeto para desenvolver testes na unidade a ser testada.

<h2>Links</h2>
  
- [Slides da apresentação](https://github.com/mdsreq-fga-unb/2022.1-Meio-a-Meio/blob/main/docs/unidade-02/material/apresenta%C3%A7%C3%A3o.pdf)

<h2>Referências bibliográficas</h2>

- [Documentação do Jest](https://jestjs.io/docs/getting-started)
- [Vídeo sobre testes unitários](/reunioes-cliente/Reunioes)
- [Explicação sobre mocks](https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c)
