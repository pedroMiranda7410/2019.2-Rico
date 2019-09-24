#Metodologia Utilizada

Baseado no **modelo Kano** e no **Desdobramento da Função Qualidade (QFD)** o grupo preocupou-se em levantar os requisitos categorizando-os de acordo com a satisfação de um stakeholder.
Na imagem abaixo podemos ver três categorias, categoria de requisitos surpresa, esperados e óbvios.  
    
![Satisfação do Stackholder](../img/satisfacao_stackholder.png)  
*Imagem 1: categorização dos requisitos a seta a esquerda simboliza o grau de satisfação do stakeholder.*

+ **Requitos Esperados:** São requisitos fundamentais no sistema, deve-se entender o que foi pedido. Se esses requisitos estiverem no sistema, deixarão o stakeholder satisfeito, pois o sistema propõe o que foi pedido.
+ **Requisitos Surpresa:** São aqueles requisitos que o stakeholder não solicitou, mas você como engenheiro de requisitos estudou muito bem a ideia, deve-se aprender a achar, e propôs além dos requisitos esperados, deixando o stakeholder mais satisfeito ainda.
+ **Requisitos Óbvios:** São aqueles requisitos óbvios para o stakeholder, mas para quem irá desenvolver não. Se não entregarmos esses requisitos causará muita insatisfação ao cliente.

A partir dos conceitos apresentados, o grupo procurou realizar as seguintes técnicas para elicitar requisitos da melhor forma possível. A imagem abaixo retrata as técnicas utilizadas.  

![Tecnicas](../img/tecnicas.png)  
*Imagem 2:Técnicas utilizadas*

Para os requisitos surpresas utilizamos técnicas que necessitam amplamente da criatividade, como brainstorm e a técnica dos 6 chapéus.
Já nos requisitos esperados, tentamos fazer a melhor entrevista possível, passando pelo método da observação e aprendizagem. Contando com o auxílio de questionário e utilizando também a técnica de análise de protocolo.  
Em relação aos requisitos óbvios, utilizamos documentos e comparamos com outras aplicações para levantar conceitos básicos acerca do mundo dos investimentos.

#Requisitos Surpresa

##Técnica dos 6 chapéus

A técnica dos seis chapéus, desenvolvida por Edward de Bono, é uma ferramenta de comunicação e raciocínio muito eficaz. Graças a ela, vemos nossas realidades pessoais a partir de diversos ângulos e perspectivas, aplicando por sua vez o pensamento lateral.

![6 chapeus](../img/seis_chapeus.png)  

O grupo se reuniu, a cada etapa um chapéu era colocado a mesa, o resultado foi, a problemática foi propor novas funcionalidades.  

###Chapéu Branco  
* (Pedro) Investimento;
* (Tiago) Receber dinheiro em cima de Investimento de renda fixa;
* (Pedro) Receber dinheiro em cima de Investimento de renda variável;
* (Daniel) Plataforma intermediadora de investimentos;
* (Lucas M.) Taxa de corretagem.
* (Daniel) Fazer com que usuário e instituições financeiras lucrem.
* (Lucas L.) Excelente experiência de usuário;

###Chapéu Preto
* (Daniel) O usuário pode perder dinheiro;
* (Tiago) Como as instituições que vendem ações de renda fixa vão ganhar dinheiro;
* (Pedro) O usuário que não tiver mínima noção de investimento não se sentirá confortável.
* (Lucas M.) Garantir para os usuário que a aplicação é confiável.

###Chapéu Amarelo
* (Luís) O usuário pode ganhar dinheiro;
* (Luís) Possuir uma equipe de investidores para mostrar o andamento do mercado.
* (Lucas M.) Garantir que a plataforma seja mobile e web.

###Chapéu Verde
* (Pedro) Pagar uma taxa para as instituições em cima das ações e ganhar dinheiro;
* (Daniel) Criar um aplicativo para auxiliar sobre investimentos 

###Chapéu Vermelho
* (Tiago) Ganhar Dinheiro;
* (Pedro) Aprender a investir;
* (Lucas M.) Facilidade em investir;

###Chapéu Azul
* (Daniel) Proporcionar um simulador de investimentos;
* (Lucas M.) Proporcionar que o usuário aprenda sobre investimento;
* (Lucas L.) Proporcionar segurança por meio de digital;
* (Daniel) Proporcionar uma experiência de usuário;
* (Tiago) Indicação de investimento realizado por analistas;

##Brainstorming

O brainstorm é uma técnica bastante conhecida no levantamento de requisitos, o significado literal de brainstorm é “tempestade de ideias” que se refere a uma maneira de deixar fluir pensamentos sem julgamentos entre uma equipe.
A equipe utilizou a técnica do brainstorming para levantar os requisitos  surpresa e também ao longo das reuniões para ouvir as opiniões de cada membro. Para organizar as ideias e direcionar as opiniões levantadas, levantamos perguntas chave feita por um possível usuário em torno da ideia de comprar investimentos através de um aplicativo mobile, sempre nos direcionando no sentido de encontrar novidades que surpreendam o usuário.

###Como posso saber quais são os investimentos mais adequados para o meu perfil de investidor ?

* **Lucas Leite:** Seria interessante categorizar os investimentos por meio de etiquetas ou cores. Dessa forma o usuário saberia sempre que fosse comprar um novo investimento, se aquele investimento é adequado para seu perfil ou não , a etiqueta ou a cor chamaria sua atenção.

* **Daniel Sousa:** Poderiam existir informações no dashboard inicial indicando os melhores tipos e categorias de investimento para um determinado perfil de investidor, contendo também as informações do porquê comprar determinado investimento e seu custo-benefício.

* **Luis Bruno:** As opções recomendadas poderiam aparecer em uma lista de “Recomendados” para o usuário, que pode ir direto nessa lista e selecionar o investimento que deseja fazer.

* **Lucas Medeiros:** Dentro da filtragem de investimentos poderia ter um filtro por recomendação que, quando selecionado, apareciam apenas os investimentos mais adequados para o usuário naquela lista.

###Como posso avaliar melhor o risco na realização de determinado investimento ?

* **Lucas Leite**: Poderia haver um indicador de riscos semelhante a um termômetro, onde os níveis mais altos desse “termômetro” indicariam um risco maior de se realizar o investimento, estando esse indicador sempre ao lado de cada cada opção de investimento.
* **Daniel Sousa**: Dados em formato de gráfico indicando os períodos de maior risco e quanto de dinheiro foi perdido/ganho por outros investidores.
* **Luis Bruno**:  Os investimentos de maior risco poderiam ser indicados com uma etiqueta e então poderia clicar na etiqueta para obter mais informações. Uma tabela pode ser mostrada com o histórico de variação daquela ação mostrando o porquê de ser de alto risco.
* **Lucas Medeiros**: O usuário poderia contar com um acervo de informações providas por outros investidores mais experientes, como opiniões, comentários e relatos acerca de cada investimento feito, dessa maneira os dados providos por usuários mais experientes ajudariam aqueles que estão começando a tomar uma decisão mais acertada.

###Requisitos Surpresa Levantados

1. Proporcionar um simulador de investimentos
2. Proporcionar que o usuário aprenda sobre investimento
3. Proporcionar segurança por meio de digital
4. Proporcionar uma experiência de usuário
5. Indicação de investimento realizado por analistas
6. Informar o risco do investimento por meio de categorias
7. Filtrar uma lista de investimentos por categorias, risco, rentabilidade e valor
8. Indicar a porcentagem de variação do valor do investimento no dia
9. Atualizar de forma constante o valor do investimento, de maneira que o usuário veja a variação em tempo real
10. Prover informações para o usuário sobre como determinado investimento variou seu valor ao longo dos últimos dias
11. Dar a possibilidade pro usuário selecionar seus investimentos favoritos, os colocando em uma lista disponibilizada para o usuário


#Requisitos Esperados

##Observação

A técnica de observação, como o próprio nome sugere, consiste em observar o problema e tentar entendê-lo, visitando o local em foco com a finalidade de observação do mesmo. Permitindo assim, coletar informações de acordo com o cotidiano das operações e execução dos processos diários do local.  

![Observacao](../img/observacao.jpg) 

O integrante Pedro Miranda passou um tempo observando uma empresa de Fonoaudiologia. Acompanhou de perto o dia a dia dentro do ambiente empresarial, obtendo dados financeiros, assim como, experiências interpessoais.

###Ambientde Observação

A observação foi realizada em uma clínica fonoaudiológica, dentro do Centro Médico Júlio Adnet em brasília, constituído por equipes focadas em fonoaudiologia, atendimento ao cliente, setor de finanças e gestão.

![Julio Adnet](../img/julio_adnet.jpeg)  

###Observando e levantando requisitos

Pedro visitou a clínica e fixou-se no setor de finanças, observando o dia a dia dos especialistas. Tiago, um dos líderes da clínica e amigo pessoal de Pedro,  foi o responsável por realizarmos com sucesso essa técnica. Durante o processo Pedro reuniu as seguintes informações.

1. O dinheiro que entra na empresa, a receita bruta, é investido através de uma corretora. 
2. O que é usado para pagamento de funcionários, impostos, despesas em geral retira-se da aplicação, pois são aplicações com um dia de crédito na conta, se retirarmos o dinheiro hoje, amanhã já está na conta, esse processo chama-se D1. 
3. Os investimentos feitos são de renda fixa, divididos entre pós fixados, investimentos atrelados a taxa de juros, e pré fixados, investimentos que trazem um bom retorno no cenário da queda de juros da taxa SELIC.
4. Deve-se ser uma aplicação conservadora porque a empresa não pode ter nada de risco, o patrimônio não pode diminuir, apenas aumentar.

##Análise de Protocolo

Para realizarmos a análise de protocolo do Rico foram separadas duas pessoas: Lucas e Bruno, onde uma das pessoas (Bruno) se coloca no papel de usuário da aplicação após efetuar um cadastro bem sucedido e desejar realizar algum tipo de investimento. A outra pessoa (Lucas), registra os passos realizados por Bruno para posteriormente levantar os tópicos de requisitos enumerados. A seguir temos o registro da narração do usuário:  
“Eu já possuo uma conta no aplicativo, insiro somente meu usuario e minha senha, que possui uma segurança semelhante à de senha bancária. A primeira tela que me deparo após logar apresenta uma visão geral e um dashboard com os gráficos mostrando o resumo dos meus investimentos e variadas opções de investimentos. Como o meu perfil de investidor é conservador, procuro pelos investimentos de renda fixa ou tesouro direto, que são recomendados à mim pelo aplicativo.”  
“Após escolher pelos investimentos de tesouro direto me deparo com diversas opções de investimento mostrando os atributos de cada um: rentabilidade, vencimento e valor mínimo. Escolho uma das opções clicando no ícone do carrinho de compras e me deparo com um formulário de confirmação onde coloco valor, quantidade, senha e a data agendada para efetuar a compra e confirmo o agendamento da compra clicando em comprar, que só possível porque já realizei transferência de saldo para minha conta da Rico.”  
“Depois de clicar em comprar é exibida uma mensagem indicando que o agendamento foi realizado com sucesso, em seguida sou redirecionado para uma página com um quadro de acompanhamento do meu investimento, onde é apresentado o status, protocolo, emissão e valor da compra realizada.”  
“Visando atualizar o meu perfil de investidor para visualizar e ser notificado com os investimentos mais adequados para mim clico na opção Perfil de Investidor na aba do usuário presente no menu superior e então sou redirecionado para um formulário onde respondo uma série de perguntas a respeito do meu engajamento nos variados tipos de  investimentos incluindo valores que possivelmente serão gastos futuramente, após o preenchimento do formulário confirmo a senha da minha conta para que o Rico registre os dados e me direcione sempre para os investimentos mais adequados para mim.”  


###Requisitos Esperados Levantados

1. Fazer com que o usuário possa investir seus fundos de maneira eficiente e segura.
2. O sistema deve ficar sempre online para que transferências sejam feitas.
3. O usuário deve ser capaz de criar uma nova conta com os dados da sua conta bancária, CPF e comprovante de residência.
4. O usuário deve ser capaz de logar utilizando o seu nome de usuário e uma senha definida por ele no momento do cadastro.
5. O Rico deve apresentar para o usuário os dados dos investimentos já realizados.
6. O usuário deve ser capaz de escolher dentre várias opções e tipos de investimento.
7. O usuário deve poder agendar a data que deseja para comprar os investimentos/ações.
8. O usuário deve ser capaz de visualizar o retorno dos seus investimentos.  

#Requisitos Óbvios

Para o levantamento dos requistos óbvios é necessário identificar quais são os pontos mínimos e básicos para uma plicação nesse segmento. Para isso foram usados outros aplicativos da área para definir quais são os pontos em comum deste setor, além disso foram pesquisadas normas nacionais que regulam aplicações que atuam neste nicho.

###Requisitos Óbvios Levantados

1. Visualização do saldo
2. Receber e realizar transferências (apenas para CPF do usuário)
3. Histórico de transações
4. Visualização do histórico de rentabilidade em gráfico de linha
5. Visualização da distribuição dos rendimentos em gráfico de pizza
6. Perfil do usuário
7. Alteração de senha
8. Área para ajuda
9. Definir perfil do investidor
10. Segurança ao guardar os dados do usuário
11. Aplicação deve ser eficiente no que diz respeito ao seu desempenho e velocidade na hora de executar as funcionalidades
