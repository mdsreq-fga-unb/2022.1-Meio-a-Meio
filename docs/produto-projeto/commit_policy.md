# Politica de Commits

### *Commits* Atômicos
Compartilhe o desenvolvimento em pequenos e concisos *commits*, assim cada *commit* implementa uma funcionalidade.

### *Commits* em inglês
Os padrões de mensagens dos *commits* devem ser feitos em **Inglês** para que o projeto seja mais acessível ao público global.

### Regra 50/70
As mensagens devem conter no máximo 50 caracteres. Caso uma mensagem mais elaborada seja necessária, adicione uma nova linha em branco e descreva melhor o *commit* usando a quantidade de linhas necessária.
Entretanto, cada linha deve respeitar o número máximo de 72 caracteres. Se seu *commit* precisar de mais espaço, ele não é atômico.


# Anatomia do *Commit*
A anatomia do commit deve seguir os seguintes padrões:

### Formato:
```
<tipo>(#número da issue): assunto

<corpo>
...
```

### Assunto

- Máximo de 50 caracteres
- Tipo do escopo deve ser em letra minúscula

Exemplo:

`fix(#13): route correction /login`

`docs(#): this issue doesnt have a number`

Os valores permitidos para `type` são:

  -   `feat`: nova funcionalidade
  -   `style`: formatação genérica no código ou estilo
  -   `refact`: reestruturação do código
  -   `test`: relacionado a testes
  -   `hotfix`: correções
  -   `docs`: relacionado a documentação

### Corpo

Caso seja necessário dar contexto ao *commit* e explicar as razões das mudanças, escreva no corpo do *commit* conforme as seguintes regras:

-   Deve conter a razão da mudança e o que foi modificado.
-   Máximo de 72 caracteres por linha.

Exemplo:

```
refact(#28): change in registration button

The button was not intuitive
```