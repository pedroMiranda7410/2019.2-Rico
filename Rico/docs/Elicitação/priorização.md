#MOSCOW

O MoSCoW é uma técnica de priorização de requisitos, onde todos os requisitos são analisados e, a cada um é mensurado um grau de importância, dado por uma letra das 4 palavras que compõem o MoSCoW:  

* Must: são as funcionalidades mais importantes do projeto, aquelas que mais agregam valor e que, sem elas, o projeto não pode ser entregue.
* Should: funcionalidades que também são importantes, mas não necessárias para entrega (pelo menos inicialmente).
* Could: funcionalidades desejáveis, que agregam valor ao produto e melhoram a experiência com o cliente.
* Would: todas as funcionalidades que não serão desenvolvidas no momento pois não agregam valor ao produto.  

Essa técnica será utilizada para checar a importância de cada requisito levantado da aplicação Rico. A metodologia utilizada para o levantamento de priorização de requisitos é análoga à técnica de Planning poker onde cada integrante dá um valor à um requisito e então é comparado com o valor de prioridade dos outros membros da equipe. O valor do requisito é definido quando todos os integrantes da equipe entram em consenso.

####MoSCoW - Requisitos Funcionais

| Identificador | Descrição                                                                                                                         | Valor  |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------ |
| RF01          | O usuário deve ser capaz de criar uma nova conta com os dados da sua conta bancária, CPF e comprovante de residência              | Must   |
| RF02          | O usuário deve ser capaz de logar utilizando o seu nome de usuário e uma senha definida por ele no momento do cadastro            | Must   |
| RF03          | O Rico deve apresentar para o usuário os dados dos investimentos já realizados                                                    | Should |
| RF04          | O usuário deve ser capaz de escolher dentre várias opções e tipos de investimento                                                 | Must   |
| RF05          | O usuário deve poder agendar a data que deseja para comprar os investimentos/ações                                                | Could  |
| RF06          | O usuário deve ser capaz de visualizar o retorno dos seus investimentos                                                           | Must   |
| RF07          | O usuário deve ser capaz de visualizar o saldo                                                                                    | Must   |
| RF08          | O usuário deve ser capaz de receber e realizar transferências                                                                     | Must   |
| RF09          | O usuário deve ter acesso ao histórico de transações                                                                              | Should |
| RF10          | O usuário deve ter acesso ao histórico de rentabilidade em gráfico de linha                                                       | Should |
| RF11          | O usuário deve ter acesso ao próprio perfil                                                                                       | Must   |
| RF12          | O usuário deve ter acesso à funcionalidade de alterar senha                                                                       | Must   |
| RF13          | O usuário deve ter acesso à àrea de ajuda                                                                                         | Should |
| RF14          | O usuário deve ter acesso ao questionário que define seu perfil de investidor                                                     | Could  |
| RF15          | Proporcionar um simulador de investimentos                                                                                        | Could  |
| RF16          | Proporcionar que o usuário aprenda sobre investimento                                                                             | Could  |
| RF17          | Indicação de investimento realizado por analistas                                                                                 | Could  |
| RF18          | Informar o risco do investimento por meio de categorias                                                                           | Could  |
| RF19          | Filtrar uma lista de investimentos por categorias, risco, rentabilidade e valor                                                   | Should |
| RF20          | Indicar a porcentagem de variação do valor do investimento no dia                                                                 | Should |
| RF21          | Atualizar de forma constante o valor do investimento, de maneira que o usuário veja a variação em tempo real                      | Could  |
| RF22          | Prover informações para o usuário sobre como determinado investimento variou seu valor ao longo dos últimos dias                  | Should |
| RF23          | Dar a possibilidade pro usuário selecionar seus investimentos favoritos, os colocando em uma lista disponibilizada para o usuário | Could  |

####MoSCoW - Requisitos Não Funcionais

| Identificador | Descrição                                                                                                             | Valor  |
| ------------- | --------------------------------------------------------------------------------------------------------------------- | ------ |
| RNF01         | Proporcionar uma boa experiência de usuário                                                                           | Should |
| RNF02         | As funcionalidades devem operar igualmente em todas as plataformas suportadas pela Rico                               | Must   |
| RNF03         | Segurança ao guardar os dados do usuário                                                                              | Must   |
| RNF04         | Aplicação deve ser eficiente no que diz respeito ao seu desempenho e velocidade na hora de executar as funcionalidade | Must   |
| RNF05         | O sistema deve ficar sempre online para que transferências sejam feitas                                               | Must   |

### **Histórico de Revisões**
| Data       | Responsável                                        | Versão | Alteração                    |
| ---------- | -------------------------------------------------- | ------ | ---------------------------- |
| 27/09/2019 | [@lbrunofidelis](https://github.com/lbrunofidelis) | 1      | Adicionando tabela do MoSCoW |
