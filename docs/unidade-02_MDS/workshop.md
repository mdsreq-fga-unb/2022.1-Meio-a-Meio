<h1 align="center"> WorkShop: Testes Unitários com Jest </h1>


<p align="center">
<img src="https://images.velog.io/images/seongkyun/post/89f3edd8-c776-47c6-97cb-c616a2bb3f40/1_Q26gw-kNzOXUqZKRr04T-g.png"/>
</p>

## Integrantes
  - `Bruna Lima`
  - `Giulia Alcantara`
  - `Guilherme França`
  - `Samuel Sato`

## Testes Unitários

<h3 align="center">Definição</h3>

  - O teste unitário consiste em verificar o comportamento das menores unidades em uma aplicação.
  - Funcionalmente, pode ser um conjunto de classes intimamente relacionadas. Como um "Cervo" e suas classes de suporte "Cabeça", "Rabo" e "Movimento".

<h3 align="center">Funcionamento</h3>

  - Os teste unitários precisam funcionar isoladamente
  - Todo o conjunto de teste unitários de uma aplicação precisa funcionar em minutos, de preferência em segundos.
  - Se um código de teste fizer E/S(Entrada, Saída) ou acessar qualquer coisa fora do processo, não é um teste unitário, e sim um teste de integração.

<h3 align="center">Benefícios</h3>

  - Economia de tempo.
  - Facilidade de detecção de bugs e erros.
  - Feedback instantâneo da implementação

## Jest
Jest é um delicioso JavaScript Testing Framework com foco na simplicidade.

<h3 align="center">Instalação</h3>
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

  - São comparativos para se testar valores diferentes;


  - Sempre se deve usar o "matcher" que corresponde mais precisamente para o que você deseja que seu código faça;
  
  <h3 align="center">Comuns</h3>
  
    - A maneira mais simples para testar um valor
    
        Exemplo:
        
          toBe = testa a igualdade exata entre dois objetos; 
          toEqual = recursivamente verifica cada campo de um objeto ou array; 
          not.toBe = oposto ao toBe - o metodo ".not" testa o oposto de qualquer matcher
          
  <h3 align="center">Verdade</h3>
  
    - Quando se precisa distinguir as definições, sem querer tratá-las de forma diferente
    
    
        Exemplo:
        
          toBeNull = corresponde a apenas null;
          toBeUndefined = corresponde a apenas undefined;
          toBeDefined = é o oposto de toBeUndefined;
          toBeTruthy = combina com qualquer coisa que uma instrução if trata como verdadeiro;
          toBeFalsy = combina com qualquer coisa que uma instrução if trata como falso;
          
  <h3 align="center">Números</h3>
  
    - A maioria das formas de comparar números têm "matcher" equivalentes
    
    - obs: toBe e toEqual são equivalentes para números, mas, para igualdade de ponto flutuante, usa-se toBeCloseTo em vez de toEqual, porque não se quer que um teste dependa de um pequeno erro de arredondamento.
    
        Exemplo:
        
          toBeGreaterThan = maior que;
          toBeGreaterThanOrEqual = maior ou igual que;
          toBeLessThan = menor que;
          toBeLessThanOrEqual = menor ou igual que;
         
  <h3 align="center">Strings</h3>
  
    - toMatch = verifica strings contra expressões regulares;
    
  <h3 align="center">Arrays e Iteráveis</h3>
  
    - toContain = verifica se um array ou iterável contém um item específico;
    
  <h3 align="center">Exceções</h3>
  
    - toThrow = testa se uma determinada função lança um erro quando é chamada;


<h2>Códigos Assíncronos</h2>  

  - Operações assíncronas: Operações executadas “por baixo dos panos”, ou seja, permitem que o código principal possa continuar sendo executado sem precisar esperar que elas terminem;

  - Quando se tiver o código que é executado de forma assíncrona, o Jest precisa saber quando o código que está testando for concluído, antes que possa passar para outro teste.

  - Todos os seguintes tópicos, no fim das contas, descrevem o mesmo trecho de código só que de maneiras diferentes de se escrevê-los: async/await e callbacks são formas alternativas às promises, já .resolves e .rejects são formas diferentes do then de escrever promises.

  <h3 align="center">Promise</h3>
  
    - Como a tradução diz: uma promessa. Garante que o seu código assíncrono vai retornar alguma coisa no final - seja sucesso, que está pendente ou uma falha. Quando relacionado ao Jest, retorne uma promise do seu teste, e o Jest vai esperar essa promise ser resolvida. Se a promessa for rejeitada, o teste irá falhar.
    
  <h3 align="center">.resolves/.rejects</h3>
  
    - São matchers de Promises alternativos ao then com o mesmo intuito básico, sendo o .resolves para quando o Jest aguardar a promessa se resolver (falhando imediatamente se for rejeitada); e o .rejects, funcionando de forma analogica ao resolves, para quando o Jest aguardar que a promessa seja rejeitada (falando imediatamente se for cumprida).
    
  <h3 align="center">Async/Await</h3>
  
    - São alternativas práticas e simples da lógica das Promises nos testes. Sendo que, com elas, basta declarar “async” na frente da função passada para teste e await quando a execução da função for esperada.
    
      - obs: podem ser combinados com os resolves e rejects.
    
  <h3 align="center">Callbacks</h3>
  
    - Também conhecida como função de retorno, é uma função ou URL que é executada quando algum evento acontece ou depois que algum código chega ao estado desejado. Já relacionado ao Jest, é usada quando não se opta por uma Promise numa função assíncrona (usar exemplo de fetchData como na descrição - no lugar de retornar uma Promise, como then, usar callback()).
    
      - O problema das callbacks: se apenas chamá-la dentro do teste, ele vai finalizar assim que fetchData for completa. Pra corrigir isso, use a callback“done”, porque ai o Jest vai ficar esperando ela aparecer antes de terminar o teste - se o done não for chamado, o teste irá falhar com timeout.


<h2>Mocks</h2>

  - Utiliza-se mock quando desajamos simular o comportamento real de uma função/objeto para desenvolver testes na unidade a ser testada.
 
  - Em português: função de simulação
  - São objetos que simulam o comportamento de objetos reais de forma controlada.
  - Permitem que se teste os links entre códigos, apagando a implementação real de uma função, capturando chamadas para a função.
  - Existem duas maneiras de simular funções: Seja criando uma função simulada para usar no código de teste, ou escrevendo uma simulação manual para sobrescrever uma dependência de módulo.
  - Todas as funções de simulação (.mock) possuem esta especial propriedade .mock, que é onde os dados sobre como a função a qual foi chamada são mantidos.
  - Funções mock também podem ser usadas para injetar valores de teste no código durante um teste.

<h2>Coding Dojo</h2>
Para a dinâmica foram formadas duplas compostas de um piloto e um copiloto, cada dupla tinha 2 minutos para resolver o teste unitário de uma determinada função, caso não conseguisse terminar a implementação, a próxima dupla continuava.

O objetivo dos exercícios foi demonstrar como era simples começar a construir testes unitários com o Jest, por isso foram desenvolvidas funções simples, para facilitar a implementação dos testes.

<h2>Links</h2>
  
- [Slides da apresentação](https://github.com/mdsreq-fga-unb/2022.1-Meio-a-Meio/blob/main/docs/unidade-02_MDS/material/apresenta%C3%A7%C3%A3o.pdf)
- [Código dos exemplos e desafios do Coding Dojo](./Example)

<h2>Referências bibliográficas</h2>

- [Documentação do Jest](https://jestjs.io/docs/getting-started)
- [Vídeo sobre testes unitários](https://www.youtube.com/watch?v=MQs8_KIj_PU&t=556s)
- [Explicação sobre mocks](https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c)
