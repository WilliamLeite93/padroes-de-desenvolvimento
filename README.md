📘 Design Pattern — Strategy

O Strategy é um padrão de desenvolvimento pertencente ao grupo dos padrões comportamentais, responsáveis por definir como classes e objetos se comportam e se comunicam entre si.

Ele é utilizado quando existe mais de uma forma de realizar uma mesma tarefa, permitindo trocar essas formas de maneira flexível sem depender de vários condicionais como if, else ou switch.

A ideia central é separar cada comportamento em classes independentes, chamadas de estratégias.

🎯 Ideia Principal

Criar uma interface que define o comportamento comum.

Criar uma classe para cada variação desse comportamento.

Trocar a estratégia sempre que necessário, sem alterar o código principal.

🧩 Por que usar Strategy?

O objetivo é manter o código organizado, flexível e coerente com princípios como SOLID.
O Strategy não elimina completamente condicionais, mas garante que eles existam apenas onde realmente fazem sentido (ex.: validação de entrada), sem quebrar boas práticas.

✅ Pontos Fortes

✔️ Reduz blocos repetitivos de if/else

✔️ Comportamentos isolados, limpos e fáceis de testar

✔️ Permite adicionar novas estratégias sem mexer no código existente

✔️ Comportamento pode ser trocado em tempo de execução

⚠️ Pontos Fracos

❌ Aumenta o número de classes

❌ Pode ser “overkill” para casos muito simples

📝 Resumo Final
O Strategy separa o “como fazer” do “quando fazer”, permitindo trocar comportamentos de forma flexível e organizada, sendo assim, ele não serve para remover condicionais por completo do código, mas sim para evitar violações do SOLID e manter o código limpo, extensível e de fácil manutenção.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

📘 Design Pattern — Observer

O Observer é um padrão comportamental utilizado quando um objeto precisa notificar automaticamente outros objetos sempre que o seu estado mudar. Esses “outros objetos” são chamados de observadores (observers), e todos ficam “escutando” o objeto principal, conhecido como subject.

Ele é muito útil quando queremos evitar acoplamento rígido entre classes e permitir que diversas partes do sistema reajam a mudanças sem que o objeto principal precise saber detalhes de quem está ouvindo.

🎯 Ideia Principal

Criar um objeto subject que:

Permite que outros objetos se registrem como observadores.

Notifica automaticamente todos eles quando algo mudar.

Os observadores podem ser adicionados, removidos ou modificados sem alterar o código do subject, mantendo o sistema flexível e extensível.

🧩 Por que usar Observer?

O objetivo é permitir que diferentes componentes reajam a mudanças de estado sem depender de chamadas diretas, if/else ou acoplamento forte.

O subject apenas dispara notificações — ele não precisa saber quem está ouvindo nem o que eles farão com essas informações.

✅ Pontos Fortes

✔️ Promove baixo acoplamento entre classes

✔️ Facilita a extensão — novos observers podem ser adicionados sem alterar nada no subject

✔️ Implementação clara para cenários de eventos, logs e interfaces gráficas

✔️ Ajuda a manter responsabilidade única (SRP), já que o subject não precisa tratar comportamentos externos

⚠️ Pontos Fracos

❌ Pode ficar difícil de rastrear quem está observando quem em sistemas grandes

❌ Muitos observers podem gerar notificações em excesso

❌ Requer atenção para evitar loops de notificações recursivas

📝 Resumo Final

O Observer é um padrão ideal para sistemas baseados em eventos.
Ele separa quem muda (subject) de quem reage à mudança (observers), mantendo o código organizado, escalável e de baixo acoplamento.

Assim, sempre que o estado do subject se altera, todos os observers são automaticamente informados — sem condicionais, sem dependências diretas e com máxima flexibilidade.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

📘 Comparação entre Strategy e Observer — Como funcionam e como se complementam

Embora Strategy e Observer sejam dois padrões comportamentais diferentes, ambos têm o mesmo objetivo geral:
organizar comportamentos, reduzir acoplamento e aumentar a flexibilidade do sistema.
No entanto, cada um resolve problemas distintos dentro de um software.

🔍 1. Quando usar cada padrão?
Strategy — Escolha como um comportamento será executado

Use quando você tem várias maneiras de realizar uma mesma tarefa
(ex.: calcular frete, aplicar descontos, escolher método de autenticação).

A ideia é trocar o comportamento em tempo de execução, como trocar o “motor” de uma função.

👉 Responde à pergunta: “Qual estratégia usar para executar essa ação?”

Observer — Reagir automaticamente a uma mudança

Use quando um objeto deve avisar vários outros sobre alterações de estado
(ex.: saldo atualizado, evento disparado, botão clicado, log gerado).

A ideia é disparar efeitos colaterais organizados e descentralizados.

👉 Responde à pergunta: “Quem deve ser notificado quando algo mudar?”

🔧 2. Tipo de acoplamento
Strategy

Mantém o código principal simples

Substitui if/else por classes de comportamento

Reduz acoplamento entre decisão e implementação

Observer

Mantém o subject isolado

Observadores são independentes entre si

Reduz acoplamento entre quem muda e quem reage

🧠 3. Como eles resolvem problemas diferentes
Padrão	Problema que resolve	Exemplo
Strategy	Escolher o comportamento apropriado	“Qual cálculo aplicar?”
Observer	Propagar mudanças automaticamente	“Alguém precisa saber que o saldo mudou?”
🤝 4. Como eles se complementam

É comum os dois padrões aparecerem juntos em sistemas reais.

Exemplo prático: Sistema bancário

Strategy pode definir como calcular taxas, descontos, juros, validações, etc.

TaxaComum

TaxaPremium

TaxaEstudante

Observer pode avisar automaticamente:

interface gráfica → atualiza saldo na tela

sistema de logs → registra movimentações

sistema de alertas → envia notificação ao usuário

👉 Strategy cuida da lógica interna
Observer cuida das reações externas

Assim:

A conta decide como calcular algo usando Strategy

Depois notifica automaticamente os interessados usando Observer

Resultado:
Um código modular, extensível e altamente organizado.

📝 Resumo Final

Strategy troca o como fazer.

Observer organiza quem reage ao que foi feito.

Juntos, eles criam sistemas limpos, flexíveis e fáceis de manter.

O Strategy controla comportamento interno.
O Observer gerencia efeitos externos.

Por isso os dois padrões não competem — eles se complementam como partes de um mesmo fluxo de lógica bem projetado.
