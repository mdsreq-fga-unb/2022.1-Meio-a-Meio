
<div style="text-align:center">
    <h3>Galdi</h3>
 <h2>Requisitos</h2>

 <p>Versão 0.3</p>
</div>

## Histórico de Revisão

|Data| Versão | Descrição | Autor|
|----|----|----|----|
|27/06/2022 | 0.1 | Criação do documento | [Ciro Costa](https://github.com/ciro-c)|
|27/07/2022 | 0.2 | Atualização do documento | [Nicolas Roberto](https://github.com/Nicolas-Roberto/)|
|29/07/2022 | 0.3 | Atualização do documento | [Nicolas Roberto](https://github.com/Nicolas-Roberto/)|
|16/08/2022 | 0.4 | Atualização do documento | [Nicolas Roberto](https://github.com/Nicolas-Roberto/)|
|17/08/2022 | 0.4 | Adição dos critérios de aceitação | [Nicolas Roberto](https://github.com/Nicolas-Roberto/)|
|23/08/2022 | 0.5 | Atualização do backlog | [Nicolas Roberto](https://github.com/Nicolas-Roberto/)|
|11/09/2022 | 0.6 | Retirada de requisitos | [Laura Pinos](https://github.com/laurapinos/)|
|12/09/2022 | 0.7 | Atualização do backlog | [Nicolas Roberto](https://github.com/Nicolas-Roberto/)|

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
|  RF12 |   Deverá ser possível cadastrar contrato relacionado ao curso |
|  RF13 |   Deverá ser possível acessar o sistema por login e senha |
|  RF14 |   Deverá ser possível gerar ficha de matrícula |
|  RF15 |   Deverá ser possível visualizar informações dos alunos |
|  RF16 |   Deverá ser possível visualizar informações dos cursos |
|  RF17 |   Deverá ser possível visualizar informações das disciplinas |
|  RF18 |   Deverá ser possível visualizar informações das sub-disciplinas |
|  RF19 |   Deverá ser possível visualizar informações das disciplinas especiais |
|  RF20 |   Deverá ser possível visualizar informações dos professores |
|  RF21 |   Deverá ser possível visualizar turmas |
|  RF22 |   Deverá ser possível visualizar calendário escolar |
|  RF23 |   Deverá ser possível solicitar matrícula em estágio |
|  RF24! |   Deverá ser possível matricular aluno em estágio |
|  RF25 |   Deverá ser possível cadastrar diário de aula |
|  RF26 |   Deverá ser possível visualizar diário de aula |
|  RF27 |   Deverá ser possível registrar provas de alunos |
|  RF28 |   Deverá ser possível visualizar provas de alunos |
|  RF29 |   Deverá ser possível registrar notas de alunos |
|  RF30 |   Deverá ser possível visualizar notas de alunos |
|  RF31 |   Deverá ser possível registrar lista de presença em aula |
|  RF32 |   Deverá ser possível visualizar lista de presença em aula |
|  RF33 |   Deverá ser possível registrar registro de abono |
|  RF34 |   Deverá ser possível visualizar registro de abono |
|  RF35 |   Deverá ser possível gerar relatório de aula |


### Requisitos Não-funcionais

| Classificação  | Requisitos Não-funcionais                                          | Prioridade |
|----------------|--------------------------------------------------------------------|------------|
| Usabilidade    | O sistema deve ser documentada através do GitPages                                 | Alta       |
| Implementação  | O sistema deve ser desenvolvido em NextJS                                          | Alta       |
| Implementação  | O versionamento do sistema deve ser feito pelo GitHub                              | Alta       |


### Mínimo Produto Viável (MVP)

[Link Canvas MVP 1](https://miro.com/app/board/uXjVOlmuidc=/)

### Backlog do Produto

Este backlog foi produzido de acordo com a abordagem ágil e seguindo a perspectiva do SAFe, na qual uma função geral é classificada como “épico”. Desse épico derivam as “features”, que são como divisões de funcionalidades menores ainda, as histórias de usuário.

|            Épico            |            Feature           |  ID |             História de usuário         | Criterios de aceitação    | Prioridade |
|:---------------------------:|:----------------------------:|:---:|:----------------------------:|:-------------------------------------------------------------------------:|:----------:|
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM1 |               O administrador deve ser capaz cadastrar outros administradores.        | *Somente administrador pode cadastrar outros administradores |      Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM2 |               O administrador deve ser capaz cadastrar informações dos alunos (matricula, idade….).       | *Somente o administrador pode cadastrar aluno *Não permitir cadastrar pessoas já cadastradas no sistema |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM3 |               O administrador deve ser capaz de alterar informações dos alunos.       | *Todos os campos devem ser preenchidos *Somente o administrador pode editar as informações de um aluno |   Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM4 |               O administrador deve ser capaz de cadastrar informações dos professores.       | *Não deve ser possível cadastrar o mesmo professor mais de uma vez *Somente o administrador pode cadastrar um professor |   Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM5 |               O administrador deve ser capaz de cadastrar cursos.        |*Somente administrador pode cadastrar cursos |   Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM6 |               O administrador deve ser capaz de cadastrar disciplinas.       | *A disciplina não deve existir |   Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM7 |               O administrador deve ser capaz de cadastrar disciplinas em cursos.       |*Somente administrador pode cadastrar disciplinas em cursos |     Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM8 |               O administrador deve ser capaz de cadastrar disciplinas especiais.       | *Somente administrador pode cadastrar disciplinas especiais|    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM9 |               O administrador deve ser capaz de criar turmas das disciplinas.     | *Não deve ser possível cadastrar uma turma existente *Somente o orientador pode cadastrar um nova turma |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM10 |               O administrador deve ser capaz de cadastrar o calendário escolar.         | *Somente administrador pode cadastrar calendário escolar |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM11 |               O administrador deve ser capaz de cadastrar contratos relacionados ao curso.       |*Somente administrador pode cadastrar contratos|   Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM12 |               O administrador deve ser capaz de excluir aluno.       | *O aluno deve existir *Somente o administrador pode excluir o aluno |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM14 |               O administrador deve ser capaz de cadastrar o calendário escolar.         |*Somente administrador pode cadastrar calendario|     Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM15 |               O administrador deve ser capaz de cadastrar contratos relacionados ao curso.       |*Somente administrador pode cadastrar contrato |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM16 |               O administrador deve ser capaz de cadastrar uma turma em disciplina.       | *Não deve ser possível cadastrar uma turma duas vezes em uma mesma disciplina *Somente o orientador pode cadastrar turma em disciplina  |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM17 |               O administrador deve ser capaz de enviar histórico escolar por email.       | *Deve ser possível enviar o histórico apenas para o aluno a quem pertence |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM18 |               O administrador deve ser capaz de enviar o boletim por email.       | *Deve ser possível enviar o boletim apenas para o aluno a quem pertence |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM19 |               O administrador deve ser capaz de excluir turmas.     | *A turma deve existir *Somente o administrador ou orientador pode excluir uma turma de uma disciplina *Turma não pode estar com disciplina em curso |     Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM20 |               O administrador deve ser capaz de excluir turmas das disciplinas.     | *A turma deve existir *Somente o orientador pode excluir uma turma de uma disciplina |     Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM21 |               O administrador deve ser capaz de excluir professor.       | *O professor deve existir *Somento o administrador pode excluir um professor |     Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM22 |               O administrador deve ser capaz de editar informações de professor.       | *O professor deve existir *Somento o administrador pode editar um professor |     Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM23 |               O administrador deve ser capaz de excluir disciplinas.       | *A disciplina deve existir *Somente o administrador pode excluir uma disciplina |     Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM24 |               O administrador deve ser capaz de editar disciplinas.       | *A disciplina deve existir *Somente o administrador pode editar uma disciplina |     Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM25 |               O administrador deve ser capaz de cadastrar turmas.       | *A turma não deve existir *Somente o administrador pode cadastrar uma turma |     Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM26 |               O administrador deve ser capaz de cadastrar um professor em uma turma.       | *O professor deve existir *A turma deve existir *O professor não pode ser cadastrado na mesma disciplina mais de uma vez |     Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM27 |O professor deve ser capaz de editar uma turma.        | *Todos os campos devem ser preenchidos *Somente o administrador pode editar uma turma |      Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM28 |               O administrador deve ser capaz de excluir professor de disciplina.       | *Disciplina não pode estar com status de cursada *Turma não pode estar formada |     Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM29 |               O administrador deve ser capaz de excluir disciplina de uma turma.       | *Disciplina não pode estar em andamento ou cursada *Turma não pode estar formada |     Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM30 |               O administrador deve ser capaz de matricular aluno em curso.       | *O aluno não deve estar matriculado no curso |     Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM31| O administrador deve ser capaz de registrar inadimplência de aluno. |*Somente o administrador pode registrar |     Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao administrador | FGM32| O administrador deve ser capaz de alterar informações dos curso. |*Todos os campos devem ser preenchidos *Somente o administrador pode editar as informações de um curso	 |     Alta    |
| Gerenciamento Acadêmico | Funções gerais | FG1 |  O usuário deve ser capaz de acessar o sistema por login e senha.       |*Deve ser cadastrado inicialmente um usuario |   Alta    |
|Gerenciamento Acadêmico | Funções gerais | FG3 |               O usuário deve ser capaz de visualizar informações dos alunos.| *O aluno deve existir *Deve ser possível ver as informações de aluno em turma|   Alta    |
| Gerenciamento Acadêmico | Funções gerais | FG4 |               O usuário deve ser capaz de visualizar informações dos cursos.        | *Deve estar cadastrado informações     |Alta|
| Gerenciamento Acadêmico | Funções gerais | FG5 |               O usuário deve ser capaz de visualizar informações das disciplinas.      |*Deve estar cadastrado informações de disciplinas|    Alta    |
| Gerenciamento Acadêmico | Funções gerais | FG6 |               O usuário deve ser capaz de visualizar informações das sub-disciplinas.      |*Deve estar cadastrado informações de sub-disciplinas|    Alta    |
| Gerenciamento Acadêmico | Funções gerais | FG7 |               O usuário deve ser capaz de visualizar informações das disciplinas especiais.    |*Deve estar cadastrado informações de disciplinas especiais|   Alta    |
| Gerenciamento Acadêmico | Funções gerais | FG8 |               O usuário deve ser capaz de visualizar das turmas.       |*Deve estar cadastrado informações de turmas existentes|    Alta    |
| Gerenciamento Acadêmico | Funções gerais | FG9 |               O usuário deve ser capaz de visualizar calendário escolar.       |*Deve estar cadastrado informações de calendário|    Alta    |
| Gerenciamento Acadêmico | Funções gerais | FG12 |               O usuário deve ser capaz de excluir um aluno de turma.       | *O aluno deve estar matriculado na disciplina *Somente o administrador ou orientador pode excluir um aluno de turma |     Alta    |
| Gerenciamento Acadêmico | Funções gerais | FG13 |               O usuário deve ser capaz de cadastrar um professor em uma turma.       | *O professor deve existir *O professor não pode ser cadastra em uma turma mais de uma vez *Somente o orientador pode cadastrar o professor em turma |     Alta    |
| Gerenciamento Acadêmico | Funções gerais | FG14 |               O usuário  deve ser capaz de excluir um professor de uma turma.       | *O professor deve existir *Somente o orientador pode excluir o professor de turma |     Alta    |
| Gerenciamento Acadêmico | Funções gerais | FG15 |               O usuário deve ser capaz de visualizar informações de aluno em turma.       | *O aluno deve existir *A turma deve existir |     Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP1 |               O professor deve ser capaz de alterar suas informações.      |*Dever possuir informações cadastradas previamente|   Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP2 |               O professor deve ser capaz de visualizar suas informações.      |*Dever possuir informações cadastradas previamente|    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP3 |               O professor deve ser capaz de cadastrar diário de aula.      |*Dever ser possível cadastradar informações de diário de aula|    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP4 |               O professor deve ser capaz de visualizar informações dos diários de aula.       |*Dever ser cadastrado informações de diário previamente|    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP5 |               O professor deve ser capaz de registrar provas de alunos utilizadas em aula.       |*Dever ser possível registrar provas|    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP6 |               O professor deve ser capaz de visualizar provas guardadas.       |*Dever ser possível registrar provas|    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP7 |               O professor deve ser capaz de registrar notas de provas dos alunos na disciplina.       |*Dever possuir campo para registrar nota para alunos|    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP8 |               O professor deve ser capaz de visualizar notas de provas dos alunos.        |*Dever ser cadastrado notas dos alunos previamente|   Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP9 |               O professor deve ser capaz de gerar lista de presença em aula.       |*Dever ser cadastrado presença previamente|   Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP10 |               O professor deve ser capaz de visualizar lista de presença em aula.      |   *Dever ser cadastrado presença previamente   |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP11 |               O professor deve ser capaz de gerar abonos para falta em aula.        |*Dever ser cadastrado faltas previamente|    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP12 |               O professor deve ser capaz de visualizar abonos para falta em aula.       |*Dever ser cadastrado faltas previamente|    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP13 |               O professor deve ser capaz de gerar relatórios de aula.       |*Dever possuir um relatório cadastrado previamente|    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP14 |               O professor deve ser capaz de cadastrar uma atividade em uma turma.       | *Somente o professor pode cadastrar atividades *Não permitir a criação de duas atividades iguais na mesma turma |    Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP15 |               O professor deve ser capaz de cadastrar uma nota em uma atividade.       | *Somente o professor pode dar nota na atividade *Só pode dar nota para atividades existentes *Só pode dar nota para atividades de alunos que estão na turma |   Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP16 |               O professor deve ser capaz de editar uma turma.        | *A turma deve existir *Somento o orientador pode editar uma turma |      Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP17 |               O professor deve ser capaz de editar uma nota em uma atividade.       | *Deve ser possível colocar apenas valores entre 0 e 10 *Somente o professor pode editar a nota de um aluno |   Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP18 |               O professor deve ser capaz de mudar aluno de turma.       | *Somente o professor pode mudar aluno de turma *A turma deve existir |   Alta    |
| Gerenciamento Acadêmico | Funções relacionadas ao professor | FP19 |               O professor deve ser capaz de cadastrar a lista de presença.       | *Somente o professor cadastrar a lista de presença |   Alta    |


#### Legenda:
- Alta - Funcionalidade básica e essencial para o sistema
- Média - Funcionalidade importante mas não essencial
- Baixa - Funcionalidade desejável e complementar ao sistema
- FGM - Função para administrador
- FG - Funções gerais
- FP - Função para professor
