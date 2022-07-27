
<div style="text-align:center">
    <h3>Galdi</h3>
 <h2>Requisitos</h2>

 <p>Versão 0.2</p>
</div>

## Histórico de Revisão

|Data| Versão | Descrição | Autor|
|----|----|----|----|
|27/06/2022 | 0.1 | Criação do documento | [Ciro Costa](https://github.com/ciro-c)|
|29/06/2022 | 0.2 | Atualização do documento | [Nicolas Roberto](https://github.com/Nicolas-Roberto/)|

## Sumário

 - [Escopo do produto](#escopo-do-produto)
    - 1.1 Requisitos Funcionais
    - 1.2 Requisitos Não-funcionais 
    - 1.3 Mínimo Produto Viável (MVP)
    - 1.4 Backlog do Produto

## Escopo do produto

### Requisitos Funcionais

|  N°  |           Requisitos Funcionais           |
|:----:|:-----------------------------------------:|
|  RF1 | Deverá ser possível cadastrar administrador |
|  RF2 | Deverá ser possível cadastrar de alunos  |
|  RF3 | Deverá ser possível alterar de informações dos alunos  |
|  RF4 | Deverá ser possível cadastrar professores  |
|  RF5 | Deverá ser possível alterar informações dos professores  |
|  RF6 | Deverá ser possível cadastrar cursos  |
|  RF7 | Deverá ser possível cadastrar disciplinas  |
|  RF8 | Deverá ser possível cadastrar sub-disciplinas  |
|  RF9 | Deverá ser possível cadastrar disciplinas especiais  |
|  RF10 | Deverá ser possível cadastrar turmas em disciplina   |
|  RF11 | Deverá ser possível cadastrar calendário escolar   |
|  RF12 |   Deverá ser possível cadastrar contrarto relacionado ao curso |
|  RF13 |   Deverá ser possível acessar o sistema por login e senha |
|  RF14 |   Deverá ser possível gerar ficha de matrícula |
|  RF15 |   Deverá ser possível visualizar informações dos alunos |
|  RF16 |   Deverá ser possível visualizar informações dos cursos |
|  RF17 |   Deverá ser possível visualizar informações das disciplinas |
|  RF18 |   Deverá ser possível visualizar informações das sub-disciplinas |
|  RF19 |   Deverá ser possível visualizar informações das disciplinas especiais |
|  RF20 |   Deverá ser possível visualizar informações dos professores |
|  RF21 |   Deverá ser possível visualizar turmas |
|  RF22 |   Deverá ser possível visualizar calendário escolaro |
|  RF23 |   Deverá ser possível solicitar matrícula em estágio |
|  RF24 |   Deverá ser possível matricular aluno em estágio |
|  RF25 |   Deverá ser possível cadastrar diário de aula |
|  RF26 |   Deverá ser possível visualizar diário de aula |
|  RF27 |   Deverá ser possível armazenar provas de alunos |
|  RF28 |   Deverá ser possível visualizar provas de alunos |
|  RF29 |   Deverá ser possível armazenar notas de alunos |
|  RF30 |   Deverá ser possível visualizar notas de alunos |
|  RF31 |   Deverá ser possível armazenar lista de presença em aula |
|  RF32 |   Deverá ser possível visualizar lista de presença em aula |
|  RF33 |   Deverá ser possível armazenar registro de abono |
|  RF34 |   Deverá ser possível visualizar registro de abono |
|  RF35 |   Deverá ser possível gerar relatório de aula |


### Requisitos Não-funcionais

| Classificação  | Requisitos Não-funcionais                                          | Prioridade |
|----------------|--------------------------------------------------------------------|------------|
| Implementação  | O sistema deve ser documentada através do GitPages                                 | Alta       |
| Implementação  | O sistema deve ser desenvolvido em NextJS                                          | Alta       |
| Implementação  | O versionamento do app deve ser feito pelo GitHub                                  | Alta       |
| Funcionalidade | O sistema deve ser capaz de apurar automaticamente resultado acadêmico dos alunos  | Alta       |
| Funcionalidade | O sistema deve ser capaz de guardar contratos relacionados ao aluno                | Alta       |
| Funcionalidade | O sistema deve ser capaz de fazer rematrícula automática de alunos                 | Média      |
| Funcionalidade | O sistema deve ser capaz de realizar aproveitamento de disciplina                  | Média      |


### Mínimo Produto Viável (MVP)

[Link Canvas MVP 1]()

### Backlog do Produto

Este backlog foi produzido de acordo com a abordagem ágil e seguindo a perspectiva do SAFe, na qual uma função geral é classificada como “épico”. Desse épico derivam as “features”, que são como divisões de funcionalidades menores ainda, as histórias de usuário.

|            Épico            |            Feature           |  ID |                                                         História de usuário                                                        | Prioridade |
|:---------------------------:|:----------------------------:|:---:|:----------------------------------------------------------------------------------------------------------------------------------:|:----------:|
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM1 |               O administrador deve ser capaz cadastrar outros administradores.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM2 |               O administrador deve ser capaz cadastrar informações dos alunos ( matricula, idade….).               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM3 |               O administrador deve ser capaz de alterar informações dos alunos.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM4 |               O administrador deve ser capaz de cadastrar informações dos professores.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM5 |               O administrador deve ser capaz de cadastrar cursos.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM6 |               O administrador deve ser capaz de cadastrar disciplinas.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM7 |               O administrador deve ser capaz de cadastrar disciplinas em cursos.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM8 |               O administrador deve ser capaz de cadastrar sub-disciplinas.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM9 |               O administrador deve ser capaz de cadastrar disciplinas especiais.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM10 |               O administrador deve ser capaz de criar turmas das disciplinas.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM11 |               O administrador deve ser capaz de cadastrar o calendário escolar.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM12 |               O administrador deve ser capaz de cadastrar eventos do calendário escolar.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM13 |               O administrador deve ser capaz de cadastrar contratos relacionados ao curso.               |    Alta    |
| Gerenciamento Acadêmico | Funções gerais | FG1 |               O usuário deve ser capaz de acessar o sistema por login e senha.               |    Alta    |
| Gerenciamento Acadêmico | Funções gerais | FG2 |               O usuário deve ser capaz de gerar ficha de matrícula.               |    Alta    |
| Gerenciamento Acadêmico | Funções gerais | FG3 |               O usuário deve ser capaz de visualizar informações dos alunos.               |    Alta    |
| Gerenciamento Acadêmico | Funções geraisr | FG4 |               O usuário deve ser capaz de visualizar informações dos cursos.               |    Alta    |
| Gerenciamento Acadêmico | Funções gerais | FG5 |               O usuário deve ser capaz de visualizar informações das disciplinas.               |    Alta    |
| Gerenciamento Acadêmico | Funções gerais | FG6 |               O usuário deve ser capaz de visualizar informações das sub-disciplinas.               |    Alta    |
| Gerenciamento Acadêmico | Funções gerais | FG7 |               O usuário deve ser capaz de visualizar informações das disciplinas especiais.               |    Alta    |
| Gerenciamento Acadêmico | Funções gerais | FG8 |               O usuário deve ser capaz de visualizar das turmas.               |    Alta    |
| Gerenciamento Acadêmico | Funções gerais | FG9 |               O usuário deve ser capaz de visualizar calendário escolar.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao aluno | FA1 |               O aluno deve ser capaz de gerar seu histórico escolar.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao aluno | FA2 |               O aluno deve ser capaz de gerar atestado de matrícula.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao aluno | FA3 |               O aluno deve ser capaz de gerar sua ficha de aluno.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao aluno | FA4 |               O aluno deve ser capaz de gerar seu boletim.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao aluno | FA7 |               O aluno deve ser capaz de solicitar matrícula em estágios.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP1 |               O professor deve ser capaz de alterar suas informações.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP2 |               O professor deve ser capaz de visualizar suas informações.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP3 |               O professor deve ser capaz de cadastrar diário de aula.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP4 |               O professor deve ser capaz de visualizar informações dos diários de aula.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP5 |               O professor deve ser capaz de armazenar provas de alunos utilizadas em aula.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP6 |               O professor deve ser capaz de visualizar provas guardadas.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP7 |               O professor deve ser capaz de armazenar notas de atividades dos alunos.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP8 |               O professor deve ser capaz de visualizar notas de atividades dos alunos.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP9 |               O professor deve ser capaz de armazenar notas de provas dos alunos.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP10 |               O professor deve ser capaz de visualizar notas de provas dos alunos.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP11 |               O professor deve ser capaz de gerar lista de presença em aula.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP12 |               O professor deve ser capaz de visualizar lista de presença em aula.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP13 |               O professor deve ser capaz de armazenar lista de presença em aula.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP14 |               O professor deve ser capaz de gerar abonos para falta em aula.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP15 |               O professor deve ser capaz de visualizar abonos para falta em aula.               |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP16 |               O professor deve ser capaz de gerar relatórios de aula.               |    Alta    |


#### Legenda:
- Alta - Funcionalidade básica e essencial para o sistema
- Média - Funcionalidade importante mas não essencial
- Baixa - Funcionalidade desejável e complementar ao sistema
- FGM - Função para administrador
- FG - Funções gerais
- FB - Função para professor
- FA - Função para aluno
