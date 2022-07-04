
<div style="text-align:center">
    <h3>Galdi</h3>
 <h2>VISÃO DO PRODUTO E PROJETO</h2>

 <p>Versão 0.6</p>
</div>

## Histórico de Revisão

|Data| Versão | Descrição | Autor|
|----|----|----|----|
|27/06/2022 | 0.1 | Criação do documento | [Ciro Costa](https://github.com/ciro-c)|
|29/06/2022 | 0.2 | Atualização do documento | [Ciro Costa](https://github.com/ciro-c)|
|29/06/2022 | 0.3 | Atualização dos documentos | [Giulia Alcantara](https://github.com/alcantaragiubs)|
|29/06/2022 | 0.4 | Atualização das tecnologias | [Guilherme França](https://github.com/GuiDib)|
|30/06/2022 | 0.5 | Adicionada abordagem de software | [Bruna Lima](https://github.com/libruna)|
|30/06/2022 | 0.6 | Atualização das atividades | [Samuel Sato](https://github.com/samuel-sato)|
|04/06/2022 | 0.7 | Atualização das atividades | [Samuel Sato](https://github.com/samuel-sato)|

## Sumário

 - [VISÃO GERAL DO PRODUTO](#visão-geral-do-produto)
    - 1.1 Declaração de Posição do Produto 
    - 1.2 Objetivos do Produto 
    - 1.3 Tecnologias a Serem Utilizadas 
 - [VISÃO GERAL DO PROJETO](#visão-geral-do-projeto)
    - 2.1 Organização do Projeto 
    - 2.2 Planejamento das Fases e/ou Iterações do Projeto 
    - 2.3 Matriz de Comunicação 
    - 2.4 Gerenciamento de Riscos 
    - 2.5 Critérios de Replanejamento 
 - [ABORDAGEM DE DESENVOLVIMENTO DE SOFTWARE](#abordagem-de-desenvolvimento-de-software)
    - 3.1 Metodologia
    - 3.2 Processo e procedimentos
 - [PROCESSO DE ENGENHARIA DE REQUISITOS](#processo-de-engenharia-de-requisitos) 
    - 4.1 Elicitação de Requisitos 
    - 4.2 Análise de Requisitos 
    - 4.3 Documentação de Requisitos 
    - 4.4 Verificação e Validação de Requisitos 
    - 4.5 Gerenciamento de Requisitos 
 - [LIÇÕES APRENDIDAS](#lições-aprendidas)
 - [REFERÊNCIAS BIBLIOGRÁFICAS](#referências-bibliográficas) 

## VISÃO GERAL DO PRODUTO 

### 1.1 Declaração de Posição do Produto 

 <!-- O Galdi (Gestão de Alunos e Didáticos) é um produto que visa gestão de clientes e alunos. A diferença entre o Galdi e outros softwares de gestão como o Pipefy é que o Galdi é focado em négocios voltados para o setor de educação. Tendo como cliente principal instituições de ensino particulares. O principal atrativo do Galdi é a pouca necessidade de customização em relação a outros CRM. -->
  O Galdi (Gestão de Alunos e Didáticos) é um produto que visa gestão de alunos envolvidos na área da saúde. A diferença entre o Galdi e outros softwares de gestão como o da [datalogica](http://datalogica.net/site2/) é que o Galdi é focado em négocios voltados para o setor de educação da área da sáude. Tendo como cliente principal instituições de ensino particulares. O principal atrativo do Galdi é a pouca necessidade de customização em relação a outros softwares de gestão, que, normalmente, não apresentam esse foco nessa área.Além de ter custo baixo de aquisição.

   | | |
   |--|--|
   |Para| Jovens e adultos que mexem com sistemas de gerencia|
   |Quem| Deseja agilidade com processos envolvendo a área da saúde |
   |O Galdi|é um sistema de gestão de alunos na área da saúde|
   |Que| tem custo baixo de aquisição |
   |Ao contrário do |[datalogica](http://datalogica.net/site2/)|
   | Nosso produto |necessita de pouca customização por ser focado para essa área|

### 1.2 Objetivos do Produto 

 <!-- O principal objetivo do Galdi é facilitar a gestão de clientes com a gerência de alunos da instituição centralizando os esforços. -->

 O principal objetivo do Galdi é facilitar a gestão de alunos, da área da saúde, da instituição reduzindo os esforços de gestão e aumentar a fidelidade dos dados.
### 1.3 Tecnologias a Serem Utilizadas 

   - [TypeScript](https://www.typescriptlang.org/)
   - [NestJS](https://nestjs.com/)
   - [NextJS](https://nextjs.org/)
   - [MySQL](https://www.mysql.com/)
   - [Figma](https://www.figma.com/)

## VISÃO GERAL DO PROJETO 
### 2.1 Organização do Projeto 

|Papel|Atribuições| Responsavel |Participantes|
|--|--|--|--|
|Desenvolvedor|Codificar o produto,testes e realizar refatoração| Samuel | Bruna, Giulia, Guilherme|
|Analista de Qualidade|Garantir a qualidade das entregas e se cumprem a ideia proposta| Ciro | Laura, Nicolas|
|Dono do Produto | Atualizar o escopo e validar entregas| Laura | Nicolas, Ciro |
|Mestre do Scrum | Delegar tarefas, duração sprint e sprint review | Nicolas | Ciro, Laura|

### 2.2 Planejamento das Fases e/ou Iterações do Projeto 

|Sprint|Entrega|Início|Fim|
|--|--|--|--|
|1|Definição do produto|20/06/2022|30/06/2022|

### 2.3 Matriz de Comunicação 

A comunicação se dara principalmente por meio da plataforma WhatsApp.
Reuniões serão feitas no Discord, ou Google meets.

|Descrição|Envolvidos|Periodicidade|Produtos Gerados
|--|--|--|--|
|Sprint Review| Equipe Projeto e Cliente | Semanalmente | Relatório Sprint Review|
|Daily | Equipe Projeto | Diariamente | Ata da Reunião |
|Comunicar situação do projeto| Equipe Projeto e Professor| Aproximadamente 21 dias | Apresentação|

### 2.4 Gerenciamento de Riscos 

### 2.5 Critérios de Replanejamento

 - Alteração significativa nas regras de negocio do produto ou de escopo.
 - Desistência de um membro da equipe do projeto.
 - 2 sprints seguidas com tarefas atrasadas, indicação de processos errados.
 - 3 sprints com requisitos repetidos, indicação de requisitos errados.

## ABORDAGEM DE DESENVOLVIMENTO DE SOFTWARE 
### 3.1 Metodologia

Baseado na proposta do Sommerville (2018), foi respondido um conjunto de questões de naturezas distintas para definir a abordagem que melhor se encaixasse ao projeto e time.

- Questões técnicas:

   - <b>Qual é o tamanho do sistema que está sendo desenvolvido?</b> É um software de médio porte.<br>
   
   - <b>Que tipo de sistema está sendo desenvolvido?</b> Aplicação Web.<br>
   
   - <b>O sistema está sujeito a controle externo?</b> Sim, o sistema será consumido pela instituição de ensino.

- Questões humanas:

   - <b>Qual é o nível de competência dos projetistas e programadores do time de desenvolvimento?</b> Os integrantes possuem nível básico-intermediário.<br>
   
   - <b>Como está organizado o time de desenvolvimento?</b> Os desenvolvedores estão dividos entre o front-end e o back-end da aplicação.<br>
   
   - <b>Quais são as tecnologias disponíveis para apoiar o desenvolvimento do sistema?</b> A princípio o Github para versionamento e Trello para gerenciar o fluxo de atividades.

- Questões organizacionais:

   - <b>É importante ter uma especificação e um projeto (design) bem detalhados antes de passar para a implementação - talvez por motivos contratuais?</b> Como será utilizada uma metodologia de design orientado a função, não tem necessidade de ser bem definido antes da implementação.
   
   - <b>É realista uma estratégia de entrega incremental, na qual o software é entregue aos clientes ou outros stakeholders e um rápido feedback é obtido?</b> Por conta da proximidade do Product Owner(PO) com o cliente e a equipe de desenvolvimento, é realista.<br>
   
   - <b>Os representantes do cliente estarão disponíveis e dispostos a participar do time de desenvolvimento?</b> Sim, uma vez que o representante faz parte da equipe.
   
   - <b>Existem questões culturais que possam afetar o desenvolvimento do sistema?</b> Não.<br>

Considerando os resultados obtidos e as necessidades da equipe de priorizar a flexibilidade e o desenvolvimento iterativo, a metodologia ágil foi escolhida. Assim, a abordagem SCRUM foi adotada como ciclo de vida e processo de desenvolvimento baseado no XP (Extreme programming) pelos seguintes motivos: 

- O feedback contínuo do cliente e os requisitos que são construídos junto com o software permitem que qualquer mudança necessária seja feita sem prejudicar o desenvolvimento da aplicação.

- Realização controle das atividades da sprint de forma eficiente


### 3.2 Processo e procedimentos

| Disciplina |Atividade| Método | Ferramenta | Responsável | Entrega |
|----|----|----|----|----|----|
|Analise/Design| Definir a arquitetura | Design Orientado a função | Figma | Responsável |entrega|
|Analise/Design| Prototipação de Baixa Fidelidade | Metáforas e Modelos Conceituais | Figma | Responsável |Protótipo de página|
|Construção| Definição de user story | User story | Trello | Responsável | Backlog sprint |
|Construção| Criação do banco de dados | Modelagem de dados | Lucidchart | Responsável |Banco de Dados|
|Construção| Desenvovimento backend | Método | VScode | Responsável |entrega|
|Construção| Desenvovimento Frontend | Método | VScode | Responsável |Interface gráfica|
|Teste| Criar cenários de teste para verificar se todos os requisitos foram atendidos com sucesso e corrigir possíveis falhas | Testes unitários | Jest | Responsável |entrega|

## PROCESSO DE ENGENHARIA DE REQUISITOS 

Abordagem escolhida foi a abordagem agil, tendo em vista a necessidade do cliente e do time.

### 4.1 Elicitação de Requisitos 

|Atividade|Método|Ferramenta|
|----|----|----|
|Análise do problema e necessidade do cliente| Entrevista aberta com cliente | google meets |

### 4.2 Análise de Requisitos 

|Atividade|Método|Ferramenta|
|----|----|----|
|Organização e agrupamento de requisitos| Reunião da equipe | Discord ou google meets |
|Discussão viabilidade dos requisitos| Reunião com cliente | google meets |

### 4.3 Documentação de Requisitos 

|Atividade|Método|Ferramenta|
|----|----|----|
|Documentação dos requisitos no backlog do projeto| Construção de histórias de usuário | Github e discord |

### 4.4 Verificação e Validação de Requisitos 

|Atividade|Método|Ferramenta|
|----|----|----|
| Refinar os requisitos do que foi feito com o cliente | Walkthrough | google meets |

### 4.5 Gerenciamento de Requisitos 

|Atividade|Método|Ferramenta|
|----|----|----|
|Planejamento Sprint| Reunião | Discord ou google meets|

## LIÇÕES APRENDIDAS 
 <!-- ### 5.1 Unidade 1 
 ### 5.1.1 MDS 
 ### 5.1.2 Requisitos 
 ### 5.1.3 MDS-Requisitos 
 ### 5.2 Unidade 2 
 ### 5.2.1 MDS 
 ### 5.2.2 Requisitos 
 ### 5.2.3 MDS-Requisitos 
 ### 5.3 Unidade 3 
 ### 5.3.1 MDS 
 ### 5.3.2 Requisitos 
 ### 5.3.3 MDS-Requisitos 
 ### 5.4 Unidade 4 
 ### 5.4.1 MDS 
 ### 5.4.2 Requisitos 
 ### 5.4.3 MDS-Requisitos  -->

## REFERÊNCIAS BIBLIOGRÁFICAS 
