| **Título**  | **Login Pela Digital** |
| ------------- | ------------- |
| **Objetivo**  | Carregar e recuperar informações de uma [conta](#Conta) da rico com base na digital do [usuário](#Usuário)|
| **Contexto** |<p> **Pré-condição:** [usuário](#Usuário) não logado no aplicativo </p><p>**Pós-condição:** [Usuário](#Usuário) logado no aplicativo</p>|
| **Atores** |<p>1. Não Usuário</p><p>2. [usuário](#Usuário)</p><p>3. Sistema</p>|
| **Recursos** |<p>Acesso a internet</p><p> Smartphone com recurso de digital</p>|
| **Episódios** |<p>1. O usuário não cadastrado acessa a Rico</p><p>2. O usuário não cadastrado deve [criar uma conta](#Criar-Uma-Conta)</p><p>3. O usuário deve ter uma conta</p><p>4. O usuário deve ter uma digital cadastrada</p><p>5. O sistema permite o usuário acessar a sua conta</p>|
| **Restrições** |<p>Digital cadastrada</p>|
| **Exceção** |<p>1. Digital não funcionando</p><p>2. A internet para de funcionar no meio da ação</p><p>3. O usuário fechar o aplicativo antes de terminar a ação</p><p>4. O usuário não deve usar o celular de luvas</p>|
 
##  Criar Conta
| **Título**  | **Criar Conta** |
| ------------- | ------------- |
| **Objetivo**  | Criar uma conta bancária com agência e número de conta para realização de depósitos e transferências |
| **Contexto** | <p> **Pré-condição:** [Usuário](#Usuário) não possui [conta]() </p><p>**Pós-condição:**É criado um perfil através do e-mail e da senha do usuário, podendo também conter um login pela digital</p> |
| **Atores** |<p>1. Não Usuário</p><p>2. Usuário</p><p>3. Sistema</p>|
| **Recursos** |<p>Acesso a internet</p><p> Computador desktop ou smartphone</p>|
| **Episódios** |1. O usuário não cadastrado acessa a Rico</p><p>2. O usuário não cadastrado deve [criar uma conta](#Criar-Uma-Conta)</p><p>3. O usuário que já tem uma conta deve logar no sistema</p><p>4. O sistema permite, o usuário que tem uma conta, acessar a sua conta</p><p>5. O sistema deve criar uma conta ao usuário que a solicitou<p/>|
| **Restrições** |<p>Interface agradável para o usuário</p>|
| **Exceção** |<p>O usuário deve ser maior de 18 anos</p>|
 
 
##  Acessar Configurações
| **Título**  | **Acessar Configurações** |
| ------------- | ------------- |
| **Objetivo**  | O [usuário](#Usuário) pode acessar as configurações |
| **Contexto** | <p> **Pré-condição:** Estar logado</p><p>**Pós-condição:** A tela de configurações será exibida</p>  |
| **Atores** | [Usuário](#Usuário) |
| **Recursos** | Acesso a internet |
| **Episódios** | <p>1. O [usuário](#Usuário) abre o aplicativo</p><p>2. O [usuário](#Usuário) vai para aba de perfil</p><p>3. O [usuário](#Usuário) seleciona a opção de configurações</p> |
| **Restrições** | Fluxo interativo |
| **Exceção** | <p>1. A internet parar de funcionar no meio da ação</p><p>2. O [usuário](#Usuário) fechar o aplicativo durante a ação</p> |
 
 
 
##  Investir por Categoria
| **Título**  | **Investir por Categoria** |
| ------------- | ------------- |
| **Objetivo**  | Possibilitar o [usuário](#Usuário) de escolher por categoria o tipo de investimento que quer realizar e, dentro da categoria selecionada, escolher o que comprar |
| **Contexto** | <p> **Pré-condição:** O [usuário](#Usuário) tem uma quantidade de dinheiro para comprar uma ação</p><p>**Pós-condição:**    O [usuário](#Usuário) investe seu dinheiro em alguma ação</p>  |
| **Atores** | <p>1. [Usuário](#Usuário)</p><p>2. Sistema</p> |
| **Recursos** | <p>1. Acesso a internet</p><p>2. Dinheiro necessário depositado na conta</p> |
| **Episódios** | <p>1. O [usuário](#Usuário) acessa sua conta</p><p>2. O [usuário](#Usuário) visualiza sua quantidade de dinheiro X</p><p>3. O [usuário](#Usuário) não quer deixar seu dinheiro parado</p><p>4. O [usuário](#Usuário), por ser [conservador](#Conservador), quer procurar nas categorias os de renda fixa</p><p>5. o [usuário](#Usuário) encontra o que quer comprar e investe seu dinheiro </p> |
| **Restrições** | <p>[usuário](#Usuário) que possui dinheiro na carteira</p><p>[usuário](#Usuário) que não quer deixar o dinheiro parado</p> |
| **Exceção** | <p>1. A internet parar de funcionar no meio da ação</p><p>2. O [usuário](#Usuário) não ter dinheiro suficiente pra comprar determinada ação</p> |


 ##  Depositar na conta da Rico
| **Título**  | **Depositar na conta da Rico** |
| ------------- | ------------- |
| **Objetivo**  | O usuário pode depositar dinheiro do seu banco para a sua conta Rico e investi-lo|
| **Contexto** | <p> **Pré-condição:** Ter uma conta bancária e uma conta na Rico</p><p>**Pós-condição:** o usuário terá o dinheiro na sua conta Rico e poderá investi-lo</p>  |
| **Atores** | [Usuário](#Usuário), Sistema, Banco|
| **Recursos** | Acesso a internet, ter um smartphone ou computador com acesso a internet|
| **Episódios** | <p>1. O [usuário](#Usuário) não possui dinheiro na conta Rico</p><p>2. O [usuário](#Usuário) quer investir e para isso necessita ter dinheiro na conta Rico</p><p>3. O [usuário](#Usuário) realiza uma transferência de um banco para a conta Rico</p> <p>O [usuário](#Usuário) possui dinheiro na conta rico</p> <p>O banco do usuário envia o dinheiro para a conta Rico</p><p>O sistema recebe dinheiro do banco </p>|
| **Restrições** | Fluxo interativo |
| **Exceção** | <p>A internet parar de funcionar no meio da ação</p><p>O [usuário](#Usuário) fechar o aplicativo durante a ação</p><p>O usuário não possui dinheiro</p> <p>Não estar no horário de transferência bancária</p>|


##  Consultar patrimônio
| **Título**  | **Consultar patrimônio** |
| ------------- | ------------- |
| **Objetivo**  | O [usuário](#Usuário) poderá visualizar qual o tamanho do seu [patrimônio](#Patrimônio), ou quantidade de dinheiro depositado + [lucro](#Lucro) de [investimentos](#Investimentos) |
| **Contexto** | <p> **Pré-condição:** O [usuário](#Usuário) estar curioso quanto á seu saldo</p><p>**Pós-condição:** o [usuário](#Usuário) estar com controle sobre seu [patrimônio](#Patrimônio)</p>  |
| **Atores** | [Usuário](#Usuário) |
| **Recursos** | Acesso a internet |
| **Episódios** | <p>1. O [usuário](#Usuário) não lembra quanto de dinheiro tem na sua conta</p><p>2. O [usuário](#Usuário) quer saber quanto ele possui na conta rico</p><p>3. O [usuário](#Usuário) abre o app e efetua seu login</p> <p>O [usuário](#Usuário) visualiza seu saldo existente e fica com controle quanto a sua conta</p> |
| **Restrições** | [Usuários](#Usuário) interessados |
| **Exceção** | <p>A internet parar de funcionar no meio da ação do login</p> |
 
##  Consultar investimentos realizados
| **Título**  | **Consultar investimentos realizados** |
| ------------- | ------------- |
| **Objetivo**  | O [usuário](#Usuário) pode consultar quais investimento foi efetuado por ele e seus, respectivos, rendimentos alcançados |
| **Contexto** | <p> **Pré-condição:** O [usuário](#Usuário) estar curioso quanto seu rendimento</p><p> quais foram todos os investimentos efetuados</p><p>**Pós-condição:** o [usuário](#Usuário) estar no controle sobre seus investimentos e o que teve lucro ou prejuízos</p> |
| **Atores** | [Usuário](#Usuário), Sistema |
| **Recursos** | Acesso a internet |
| **Episódios** | <p>1. O [usuário](#Usuário) está curioso sobre como anda os rendimentos deu seus investimentos</p><p>2. O [usuário](#Usuário) está curioso sobre quais foram todos investimentos realizados pelo app</p><p>3. O [usuário](#Usuário) abre o app e efetua seu login</p><p>4. O [usuário](#Usuário) entra na aba de investimentos</p><p>O [usuário](#Usuário) visualiza investimento por investimento em uma única página</p><p>O [usuário](#Usuário) fica informado quanto a seus investimentos e se sente mais seguro </p> |
| **Restrições** | [Usuários](#Usuário) interessados |
| **Exceção** | <p>A internet parar de funcionar no meio da ação</p> |

##  Refazer Perfil de investidor
| **Título**  | **Refazer Perfil de investidor** |
| ------------- | ------------- |
| **Objetivo**  | O [usuário](#Usuário) pode refazer uma avaliação para descobrir que perfil de investidor ele(a) é |
| **Contexto** | <p> **Pré-condição:**</p><p> O [usuário](#Usuário) não sabe que tipo de investidor ele é.</p><p> O [usuário](#Usuário) não quer saber se seu estilo de investidor se alterou</p><p>**Pós-condição:** O [usuário](#Usuário) estar conformado sobre seu tipo de investidor</p> |
| **Atores** | [Usuário](#Usuário), Sistema |
| **Recursos** | Acesso a internet |
| **Episódios** | <p>1. O [usuário](#Usuário) está curioso para saber quanto á seu perfil de investidor</p><p>2. O [usuário](#Usuário) entra no Sistema e inicia a avalição para saber seu perfil de investidor</p><p>3. O sistema abre um questionário com uma série de perguntas á serem respondidas</p><p>4. O [usuário](#Usuário) responde o questionário para o perfil de investidor</p><p>5. O sistema processa as respostas e retorna com uma resposta dizendo qual o perfil de investidor do [usuário](#Usuário)</p><p>6. O [usuário](#Usuário) fica informado quanto a seu perfil de investidor </p> |
| **Restrições** | [Usuários](#Usuário) interessados |
| **Exceção** | <p>A internet parar de funcionar no meio da ação</p> |

##  Retirar Ação
| **Título**  | **Retirar Ação** |
| ------------- | ------------- |
| **Objetivo**  | O [usuário](#Usuário) pode cancelar ação de efetuar compra de um investimento |
| **Contexto** | <p> **Pré-condição:** O [usuário](#Usuário) investe em uma ação e muda de ideia</p><p>**Pós-condição:** O [usuário](#Usuário) se disfez da possível participação de investimento em tal ação</p> |
| **Atores** | [Usuário](#Usuário), Sistema |
| **Recursos** | Acesso a internet, Ter dinheiro suficiente para comprar alguma ação |
| **Episódios** | <p>1. O [usuário](#Usuário) tem dinheiro para comprar algum investimento</p><p>2. O [usuário](#Usuário), meio indeciso, compra uma ação sem pensar direito</p><p>3. O sistema retorna ao usuário uma mensagem de que a operação de compra será processada</p><p>4. O [usuário](#Usuário) vê que essa compra não irá retornar lucros e quer desfazer da operação</p><p>5. O [usuário](#Usuário) cancela o processamento da operação</p><p>6. O sistema cancela sua operação e retorna uma mensagem de sucesso para o usuário </p> |
| **Restrições** | [Usuários](#Usuário) desatentos |
| **Exceção** | <p>A internet parar de funcionar no meio da ação e não voltar até a operação de compra ser efetuada</p> |

##  Comprar ação
| **Título**  | **Comprar ação** |
| ------------- | ------------- |
| **Objetivo**  | O [usuário](#Usuário) pode comprar uma [ação](#Ações) para investir seu dinheiro |
| **Contexto** | <p> **Pré-condição:** O [usuário](#Usuário) tem dinheiro sem estar sendo utilizado</p><p>**Pós-condição:** O [usuário](#Usuário) deixou seu dinheiro trabalhando pra ele</p> |
| **Atores** | [Usuário](#Usuário), Sistema |
| **Recursos** | Acesso a internet, Ter dinheiro suficiente para comprar alguma ação |
| **Episódios** | <p>1. O [usuário](#Usuário) tem dinheiro para comprar alguma [ação](#Ações)</p><p>2. O [usuário](#Usuário) verifica qual é a [ação](#Ações) ideal para ele comprar e ter seu dinheiro com um maior rendimento anual</p><p>3. O [usuário](#Usuário) encontra a [ação](#Ações) e efetua a compra</p><p>4. O sistema realiza as operações para disponibilidade da compra se comunicando com a instituição e efetuando o pagamento</p><p>5. O [usuário](#Usuário) tem seu dinheiro rendendo, trabalhando sozinho para ele</p> |
| **Restrições** | [Usuários](#Usuário) incomodados com o dinheiro parado |
| **Exceção** | <p>A internet parar de funcionar no meio da ação</p> |

##  Ter a acesso notificação
| **Título**  | **Ter a acesso notificação** |
| ------------- | ------------- |
| **Objetivo**  | O [usuário](#Usuário) recebe notificações quanto as operações do sistema |
| **Contexto** | <p> **Pré-condição:** O [usuário](#Usuário) não sabe o que acontece quanto investe</p><p>**Pós-condição:** O [usuário](#Usuário) fica informado quanto ao processamento do investimento comprado</p> |
| **Atores** | [Usuário](#Usuário), Sistema |
| **Recursos** | Acesso a internet |
| **Episódios** | <p>1. O [Usuário](#Usuário) efetua a compra de um investimento </p><p>2. O sistema recebe a solicitação da compra </p><p>3. O sistema envia um e-mail ao [usuário](#Usuário) de que a compra está sendo processada</p><p>4. O sistema retorna com mais e-mails notificando o [usuário](#Usuário) sobre cada etapa processada</p><p>5.O [usuário](#Usuário) fica informado do que está acontecendo com seu dinheiro</p> |
| **Restrições** | [Usuários](#Usuário) preocupados |
| **Exceção** | <p>A internet parar de funcionar até ter acontecido todas as operações pelo sistema</p> |

##  Consultar minha Conta
| **Título**  | **Consultar minha Conta** |
| ------------- | ------------- |
| **Objetivo**  | O [usuário](#Usuário) pode consultar os dado de sua conta |
| **Contexto** | <p> **Pré-condição:** O usuário não lembra sua conta </p><p>**Pós-condição:** O [usuário](#Usuário) sabe qual sua conta e pode realizar a ação que deseja informando sua conta</p> |
| **Atores** | [Usuário](#Usuário) |
| **Recursos** | Acesso a internet |
| **Episódios** | <p>1. O [usuário](#Usuário) deseja depositar um dinheiro em sua conta da rico porém não lembra os dados de sua conta </p><p>2. O [usuário](#Usuário) entra no sistema </p><p>3. O [usuário](#Usuário) abre a aba sobre sua conta e fica informado </p><p>4. O [usuário](#Usuário) volta ao seu outro banco e efetua a transferência </p> |
| **Restrições** | [Usuários](#Usuário) que não realizam muitas transferências |
| **Exceção** | <p>A internet parar de funcionar durante ação de visualizar dados da conta</p> |

##  Consultar Histórico de termos
| **Título**  | **Consultar Histórico de termos** |
| ------------- | ------------- |
| **Objetivo**  | O [usuário](#Usuário) pode visualizar seu histórico de termos |
| **Contexto** | <p> **Pré-condição:** O [usuário](#Usuário) está curioso quanto a suas compras a termos</p><p>**Pós-condição:** O [usuário](#Usuário) está atualizado sobre suas compras efetuadas </p> |
| **Atores** | [Usuário](#Usuário), Sistema |
| **Recursos** | Acesso a internet |
| **Episódios** | <p>1. O [usuário](#Usuário) quer verificar que compras a termos foram efetuadas </p><p>2. O [usuário](#Usuário) abre o sistema e efetua o login </p><p>3. O [usuário](#Usuário) clica na aba "Ação/Termos" </p><p>4. O [usuário](#Usuário) se informa sobre todas as ações compradas a termos organizadas por data </p> |
| **Restrições** | [Usuários](#Usuário) organizados |
| **Exceção** | <p>A internet parar de funcionar durante ação</p> |

##  Solicitar Atendimento
| **Título**  | **Solicitar Atendimento** |
| ------------- | ------------- |
| **Objetivo**  | O [usuário](#Usuário) pode solicitar atendimentos |
| **Contexto** | <p> **Pré-condição:** O [usuário](#Usuário) está curioso para saber o que está acontecendo</p><p>**Pós-condição:** O [usuário](#Usuário) está saciado e se sentindo seguro com seu dinheiro</p> |
| **Atores** | [Usuário](#Usuário), Equipe Rico |
| **Recursos** | Acesso a internet |
| **Episódios** | <p>1. O [usuário](#Usuário) efetua uma compra de grande valor em uma ação </p><p>2. O [usuário](#Usuário) fica 2 dias sem receber uma resposta </p><p>3. O [usuário](#Usuário),preocupado, entra em contato com a Equipe Rico por meio de um e-mail ou ligação</p><p>4. A Equipe Rico escuta atentamente o que o [usuário](#Usuário) tem a dizer </p><p>5. A Equipe Rico conforta o [usuário](#Usuário) e diz o que está acontecendo</p><p>6. O [usuário](#Usuário) se acalma</p> |
| **Restrições** | [Usuários](#Usuário) iniciantes, [Usuários](#Usuário) preocupados |
| **Exceção** | <p>A internet parar de funcionar durante ação</p><p> Não ter sinal para efetuar uma ligação</p> |

##  Avaliar o App
| **Título**  | **Avaliar o App** |
| ------------- | ------------- |
| **Objetivo**  | O [usuário](#Usuário) deseja avaliar o app |
| **Contexto** | <p> **Pré-condição:** </p><p>O [usuário](#Usuário) gostou muito do sistema e deja avalia-lo</p><p>O [usuário](#Usuário) não gostou do sistema e deseja avalia-lo</p><p>**Pós-condição:** O [usuário](#Usuário) avaliou o sistema </p> |
| **Atores** | [Usuário](#Usuário), Sistema |
| **Recursos** | Acesso a internet |
| **Episódios** | <p>1. O [usuário](#Usuário) está se sentindo muito satisfeito quanto a segurança e outros atributos do sistema </p><p>2. Ao longo que o [usuário](#Usuário) utiliza o sistema, o mesmo gera um popup pedindo para que o sistema seja avaliado em sua tela </p><p>3. O [usuário](#Usuário) clica para avaliar e é redirecionado para a página de avaliação </p><p>4. O [usuário](#Usuário) avalia o sistema </p><p>5. A Equipe Rico recebe um feedback positivo</p> |
| **Restrições** | [Usuário](#Usuário) feliz com o sistema, [Usuário](#Usuário) chateado com o sistema |
| **Exceção** | <p>A internet parar de funcionar durante ação</p> |

##  Solicitar ajuda
| **Título**  | **Solicitar ajuda** |
| ------------- | ------------- |
| **Objetivo**  | O [usuário](#Usuário) sanou algum problema encontrado |
| **Contexto** | <p> **Pré-condição:** O [usuário](#Usuário) está com algum problema</p><p>**Pós-condição:** O [usuário](#Usuário) está isento de problemas</p> |
| **Atores** | [Usuário](#Usuário), Sistema |
| **Recursos** | Acesso a internet ou Acesso á rede telefonica |
| **Episódios** | <p>1. O [usuário](#Usuário) se depara com uma problema no sistema que não consegue solucionar </p><p>2. O [usuário](#Usuário) entra no sistema com o intuito de buscar formas de pedir ajuda </p><p>3. O sistema dá a possibilidade do usuário ter uma conversa online direto com a Equipe Rico, ou com o bot do sistema codificado com inteligência artificial, ou via telefone, ou pelo fórum de dúvidas </p><p>4. O [usuário](#Usuário) escolhe a forma que melhor lhe agrada </p><p>5. O [usuário](#Usuário) tem seu problema resolvido</p> |
| **Restrições** | [Usuários](#Usuário) com problemas |
| **Exceção** | <p>A internet parar de funcionar durante ação</p><p> Não ter sinal para efetuar uma ligação</p> |

##  Obter acesso a informações gerais
| **Título**  | **Obter acesso a informações gerais** |
| ------------- | ------------- |
| **Objetivo**  | O [usuário](#Usuário) pode ficar por dentro do que está acontecendo nos mercados |
| **Contexto** | <p> **Pré-condição:** O [usuário](#Usuário) está desinformado com o que está acontecendo no mercado</p><p>**Pós-condição:** O [usuário](#Usuário) fica informado quanto ao mercado</p> |
| **Atores** | [Usuário](#Usuário) |
| **Recursos** | Acesso a internet |
| **Episódios** | <p> 1. O [usuário](#Usuário) está curioso quanto as rentabilidades do mercado </p><p>2. O [usuário](#Usuário) entra no sistema  </p><p>3. O [usuário](#Usuário) vê a aba "Investimentos", "Análises" e "Destaques da semana" </p><p>4. O [usuário](#Usuário) entra em cada tópico e se informa da situação financeira do mundo </p> |
| **Restrições** | [Usuários](#Usuário) curiosos |
| **Exceção** | <p>A internet parar de funcionar durante ação</p> |

## Conectar-se a um Home Broker
| **Título**  | **Conectar-se a um Home Broker** |
| ------------- | ------------- |
| **Objetivo**  |O usuaŕio deseja se concectar a um Home Broker, um sistema que permite a compra e venda de ações e outros ativos através da internet. Isto é, ele liga o usuário à Bolsa de Valores.|
| **Contexto** |<p> **Pré-condição:** O [usuário](#Usuário) pretende comprar ou vender de ações e outros ativos</p><p>**Pós-condição:**    O [usuário](#Usuário) vende e compra outros ativos</p>|
| **Atores** |<p>1. Usuário</p><p>2. Sistema</p>|
| **Recursos** |Acesso a internet, ter um smartphone ou computador com acesso a internet|
| **Episódios** |<p>O usuário acessa a RICO</p><p>O usuário acessa o Home Broker do sistema</p><p>O usuário decide se quer comprar ou vender ações ou ativos</p>|
| **Restrições** |<p>Fluxo interativo</p><p>Boa experiência de usuário</p>|
| **Exceção** |<p>O usuário não possuir conta na RICO</p><p>A internet parar de funcionar no meio da ação</p><p>O usuário ser menor de idade</p>|


## Participar de Ofertas Públicas
| **Título**  | **O usuário deseja participar de Ofertas Públicas** |
| ------------- | ------------- |
| **Objetivo**  |O usuário deseja participar de uma oferta pública, a mesma ocorre quando uma empresa disponibiliza ao público ações, cotas de um fundo de investimento ou qualquer outro valor mobiliário previsto na regulamentação do mercado de capitais.|
| **Contexto** |<p> **Pré-condição:** O [usuário](#Usuário) pretende participar de uma oferta pública, o mesmo deve ter também uma conta na RICO</p><p>**Pós-condição:** O usuário teŕa a oportunidade de investir em empresas que estão em fase de crescimento e obter bons retornos por isso, ou adquirir cotas de novos fundos.</p>|
| **Atores** |<p>1.Usuário</p><p>2.Empresas</p>|
| **Recursos** |Acesso a internet, ter um smartphone ou computador com acesso a internet|
| **Episódios** |<p>Empresas disponibilizam ao público ações</p><p>O usuário compra ofertas públicas</p>|
| **Restrições** |<p>Fluxo interativo</p><p>Boa experiência de usuário</p>|
| **Exceção** |<p>O usuário não possuir conta na RICO</p><p>A internet parar de funcionar no meio da ação</p><p>O usuário ser menor de idade</p>|


## Redefinir Senha
| **Título**  | **Redefinir Senha** |
| ------------- | ------------- |
| **Objetivo**  |O usário necessita redefir sua senha|
| **Contexto** |<p> **Pré-condição:** O [usuário](#Usuário) deve ter uma conta na RICO</p><p>**Pós-condição:** O usuário redefinirá sua senha</p>|
| **Atores** |<p>1. Usuário</p>2. Sistema</p>|
| **Recursos** |Acesso a internet, ter um smartphone ou computador com acesso a internet|
| **Episódios** |<p>O usuário não sabe sua senha</p><p>O usuário teve seu celular roubado</p><p>O usuário solicita uma redefinição de senha por computador ou pelo celular</p><p>O sistema manda um e-mail com etapas para redefinição de senha</p><p>O usuário escolhe uma nova senha para acessas a RICO</p>|
| **Restrições** |<p>Fluxo interativo</p><p>Boa experiência de usuário</p>|
| **Exceção** |<p>O usuário não possuir conta na RICO</p><p>A internet parar de funcionar no meio da ação</p><p>O usuário fechar a aplicação antes de terminar a ação.</p><p>O usuário ser menor de idade</p>|


## Resgatar Dinheiro
| **Título**  | **Resgatar Dinheiro** |
| ------------- | ------------- |
| **Objetivo**  |O usuário deseja resgatar o dinheiro proveniente de algum investimento|
| **Contexto** |<p> **Pré-condição:** O [usuário](#Usuário) deve ter uma conta na RICO e ter feito algum investimento</p><p>**Pós-condição:** O usuário resgata o seu dinheiro</p>|
| **Atores** |<p>1. Usuário</p><p>2. RICO</p>|
| **Recursos** |Acesso a internet, ter um smartphone ou computador com acesso a internet|
| **Episódios** |<p>O usuário solicita um investimento</p><p>A RICO vende os ativos nos quais você posicionou. Isso tem impacto direto na velocidade com a qual o dinheiro cai em sua conta do Banco.</p><p>O usuário recebe o seu dinheiro após um tempo|
| **Restrições** |<p>Fluxo interativo</p><p>Boa experiência de usuário</p>|
| **Exceção** |<p>O usuário não possuir conta na RICO</p><p>A internet parar de funcionar no meio da ação</p><p>O usuário fechar a aplicação antes de terminar a ação.</p><p>O usuário ser menor de idade</p>|


## Negociar na BM&F

| **Título**  | **Investimento em BM&F** |
| ------------- | ------------- |
| **Objetivo**  |O usuário deseja negociar na BM&F, que significa Bolsa de Mercadorias & Futuros. Ela também é chamada pelos jornais e noticiários de "Bolsa de Valores" ou apenas de "a Bolsa".O seu maior objetivo é registrar e negociar operações financeiras.|
| **Contexto** |<p> **Pré-condição:** O [usuário](#Usuário) deve ter uma conta na RICO e de estar buscando por investimentos</p><p>**Pós-condição:** O usuário negocia na BM&F por exemplo ações, cotas de fundos de investimento, preços de bens agrícolas e recursos naturais (commodities), além de títulos públicos e privados</p>|
| **Atores** |<p>1. Usuário</p><p>2. BM&F</p>|
| **Recursos** |Acesso a internet, ter um smartphone ou computador com acesso a internet|
| **Episódios** | <p>O [usuário](#Usuário) deseja investir</p><p>O usuário acessa a BM&F</p> <p>O [usuário](#Usuário) compra por exemplo ações, cotas de fundos de investimento, preços de bens agrícolas e recursos naturais (commodities), além de títulos públicos e privados</p> <p>A BM&F disponibiliza e garante que o investimento foi feito</p>|
| **Restrições** |<p>Fluxo interativo</p><p>Boa experiência de usuário</p>|
| **Exceção** |<p>O usuário não possuir conta na RICO</p><p>A internet parar de funcionar no meio da ação</p><p>O usuário fechar a aplicação antes de terminar a ação.</p><p>O usuário ser menor de idade</p>|


## Utilizar Alvo Programado
| **Título**  | **Alvo Programado** |
| ------------- | ------------- |
| **Objetivo**  | O time da RICO identifica boas oportunidades de ganhos no mercado e sugere uma operação pré-programada com preço de compra e preços de venda, cabendo ao investidor, se concordar com a estratégia, informar apenas a quantidade desejada e deixar a operação prosseguir de modo automático|
| **Contexto** |<p> **Pré-condição:** O [usuário](#Usuário) se interessa pela ferramenta alvo programado, o mesmo deve ter uma conta na RICO</p><p> **Pós-condição:** A RICO disponibiliza análise de investimentos e sugere ao usuário</p>|
| **Atores** |<p>1. Usuário</p><p>2. RICO</p>|
| **Recursos** |Acesso a internet, ter um smartphone ou computador com acesso a internet|
| **Episódios** |<p>A RICO identifica boas oportunidades de ganhos no mercado e sugere uma operação pré-programada com preço de compra e preços de venda</p><p>O usuário avalia, informa a quantidade desejada e a operação pressegue de modo automático</p>|
| **Restrições** |<p>Fluxo interativo</p><p>Boa experiência de usuário</p>|
| **Exceção** |<p>O usuário não possuir conta na RICO</p><p>A internet parar de funcionar no meio da ação</p><p>O usuário fechar a aplicação antes de terminar a ação.</p><p>O usuário ser menor de idade</p>|

##  Investir por Categoria
| **Título**  | **Investir por Categoria** |
| ------------- | ------------- |
| **Objetivo**  | Possibilitar o [usuário](#Usuário) de escolher por categoria o tipo de investimento que quer realizar e, dentro da categoria selecionada, escolher o que comprar |
| **Contexto** | <p> **Pré-condição:** O [usuário](#Usuário) tem uma quantidade de dinheiro para comprar uma ação</p><p>**Pós-condição:**    O [usuário](#Usuário) investe seu dinheiro em alguma ação</p>  |
| **Atores** | <p>1. [Usuário](#Usuário)</p><p>2. Sistema</p> |
| **Recursos** | <p>1. Acesso a internet</p><p>2. Dinheiro necessário depositado na conta</p> |
| **Episódios** | <p>O [usuário](#Usuário) acessa sua conta</p><p>O [usuário](#Usuário) visualiza sua quantidade de dinheiro X</p><p>O [usuário](#Usuário) não quer deixar seu dinheiro parado</p><p>O [usuário](#Usuário), por ser [conservador](#Conservador), quer procurar nas categorias os de renda fixa</p><p>o [usuário](#Usuário) encontra o que quer comprar e investe seu dinheiro </p> |
| **Restrições** | <p>O [usuário](#Usuário) que possui dinheiro na carteira</p><p>[usuário](#Usuário) que não quer deixar o dinheiro parado</p> |
| **Exceção** | <p>A internet parar de funcionar no meio da ação</p><p>O [usuário](#Usuário) não ter dinheiro suficiente pra comprar determinada ação</p><p>O usuário ser menor de idade</p>|

##  Depositar na conta da Rico
| **Título**  | **Depositar na conta da Rico** |
| ------------- | ------------- |
| **Objetivo**  | O usuário pode depositar dinheiro do seu banco para a sua conta Rico e investi-lo|
| **Contexto** | <p> **Pré-condição:** Ter uma conta bancária e uma conta na Rico</p><p>**Pós-condição:** o usuário terá o dinheiro na sua conta Rico e poderá investi-lo</p>  |
| **Atores** | <p> 1.[Usuário](#Usuário)</p><p>2. Sistema</p> <p>3. Banco</p>|
| **Recursos** | Acesso a internet, ter um smartphone ou computador com acesso a internet|
| **Episódios** | <p>O [usuário](#Usuário) não possui dinheiro na conta Rico</p><p>O [usuário](#Usuário) quer investir e para isso necessita ter dinheiro na conta Rico</p><p>O [usuário](#Usuário) realiza uma transferência de um banco para a conta Rico</p> <p>O [usuário](#Usuário) possui dinheiro na conta rico</p> <p>O banco do usuário envia o dinheiro para a conta Rico</p><p>O sistema recebe dinheiro do banco </p>|
| **Restrições** | Fluxo interativo |
| **Exceção** | <p>A internet parar de funcionar no meio da ação</p><p>O [usuário](#Usuário) fechar o aplicativo durante a ação</p><p>O usuário não possui dinheiro</p> <p>Não estar no horário de transferência bancária</p><p>O usuário ser menor de idade</p>|

## Alavancagem
| **Título**  | **Alavancagem** |
| ------------- | ------------- |
| **Objetivo**  |Alavancagem é a utilização de determinados recursos para aproveitar oportunidades de multiplicar seus resultados. Ela funciona como um limite de crédito, possibilitando que você invista um valor maior do que tem em conta|
| **Contexto** |<p> **Pré-condição:** Ter uma conta na Rico</p><p>**Pós-condição:** o usuário será capaz de utilizar a alavancagem</p>|
| **Atores** |1. Usuário|
| **Recursos** |Acesso a internet, ter um smartphone ou computador com acesso a internet|
| **Episódios** |<p>O usuário deseja investir valores maiores, mas não possui muito dinheiro</p><p>O usuário faz uma alavancagem</p><p>O usuário investe uma quantia maior de dinheiro maior</p>|
| **Restrições** |<p>Fluxo interativo</p><p>Boa experiência de usuário</p>|
| **Exceção** |<p>O usuário não possuir conta na RICO</p><p>A internet parar de funcionar no meio da ação</p><p>O usuário fechar a aplicação antes de terminar a ação.</p><p>O usuário ser menor de idade</p>|

## Aplicação Automática
| **Título**  | **Aplicação Automática** |
| ------------- | ------------- |
| **Objetivo**  |Aplicação automática ocorre quando o dinheiro presente na conta corrente do cliente, ou parte dele, é direcionado para algum tipo de investimento do banco|
| **Contexto** |<p> **Pré-condição:** Ter uma conta na Rico</p><p>**Pós-condição:** O usuário será capaz de direcionar o seu dinheiro para algum tipo de investimento de um banco</p>|
| **Atores** |<p>1. Usuário</p><p>2. Banco</p>|
| **Recursos** |Acesso a internet, ter um smartphone ou computador com acesso a internet|
| **Episódios** |<p>O usuário possui dinheiro em sua conta</p><p>O banco propõe algum investimento</p><p>O usário permite o banco utilizar do seu dinheiro para algum investimento do banco</p><p>O usuário pode ter ou não rentabilidade</p>|
| **Restrições** |<p>Fluxo interativo</p><p>Boa experiência de usuário</p>|
| **Exceção** |<p>O usuário não possuir conta bancária</p><p>O usuário ser menor de idade</p>|

## Análise Fundamentalista
| **Título**  | **Análise Fundamentalista** |
| ------------- | ------------- |
| **Objetivo**  |A análise fundamentalista consiste na avaliação de uma empresa de acordo com sua situação financeira, mercadológico e até mesmo política. Tem como base o uso de dados econômicos, indicadores do mercado financeiro, balanços e resultado das empresas, além de métodos próprios a fim de identificar perspectivas e oportunidades de mercado.|
| **Contexto** |<p> **Pré-condição:** Desejo de aumentar a probabilidade de lucro</p><p>**Pós-condição:** O usuário poderá lucrar mais com investimentos</p>|
| **Atores** |<p>1. Usuário</p>|
| **Recursos** |Acesso a internet, ter um smartphone ou computador com acesso a internet|
| **Episódios** |<p>O usuário quer aumentar sua probabilidades de ganhos</p><p>O usuário faz uma análise fundamentalista sobre empresas e indicadores do mercado financeiro por exemplo</p><p>O usuário aumenta sua chance de lucro com investimentos, principalmente em renda variável</p>|
| **Restrições** |<p>Fluxo interativo</p><p>Boa experiência de usuário</p>|
| **Exceção** |<p>O usuário não possuir conta na RICO</p><p>A internet parar de funcionar no meio da ação</p><p>O usuário fechar a aplicação antes de terminar a ação.</p><p>O usuário ser menor de idade</p>|

## Destaques da semana
| **Título**  | **Destaques da semana** |
| ------------- | ------------- |
| **Objetivo**  |Informar ao usuário os destaques da semana no mercado financeiro|
| **Contexto** |<p> **Pré-condição:** Ter uma conta na Rico</p><p>**Pós-condição:** O usuário será capaz de ver os destaques da semana</p>|
| **Atores** |<p>1. Usuário</p><p>2. RICO</p>|
| **Recursos** |Acesso a internet, ter um smartphone ou computador com acesso a internet|
| **Episódios** |<p>O usuário prentende investir</p>O usuário acessa a RICO<p></p><p>A RICO disponibiliza informações semanais sobre o mercado de ações feitas por especialistas</p><p>O usuário acessa os destaques da semana</p>|
| **Restrições** |<p>Fluxo interativo</p><p>Boa experiência de usuário</p>|
| **Exceção** |<p>O usuário não possuir conta na RICO</p><p>A internet parar de funcionar no meio da ação</p><p>O usuário fechar a aplicação antes de terminar a ação.</p><p>O usuário ser menor de idade</p>|

## Aprender a investir com a Rico

| **Título**  | **Aprender a investir com a Rico** |
| ------------- | ------------- |
| **Objetivo**  |Ensinar o usuário a investir da maneira correta|
| **Contexto** |<p> **Pré-condição:** Ter uma conta na Rico</p><p>**Pós-condição:** O usuário será capaz de investir da melhor forma com especialistas da RICO</p>|
| **Atores** |<p>1. Usuário</p><p>2. RICO</p>|
| **Recursos** |Acesso a internet, ter um smartphone ou computador com acesso a internet|
| **Episódios** |<p>O usuário não sabe investir</p><p>O usuário acessa a RICO</p><p>A RICO disponibiliza informações em formato de texto, vídeos, sobre o mercado de ações, essas feitas por especialistas</p>|
| **Restrições** |<p>Fluxo interativo</p><p>Boa experiência de usuário</p>|
| **Exceção** |<p>O usuário não possuir conta na RICO</p><p>A internet parar de funcionar no meio da ação</p><p>O usuário fechar a aplicação antes de terminar a ação.</p><p>O usuário ser menor de idade</p>|

## Sair do Aplicativo
| **Título**  | **Sair do Aplicativo** |
| ------------- | ------------- |
| **Objetivo**  |O usuário necessita sair da aplicação|
| **Contexto** |<p> **Pré-condição:** O usuário deve ter também uma conta na RICO</p><p>**Pós-condição:** O usuário sairá da aplicação</p>|
| **Atores** |1. Usuário|
| **Recursos** |Acesso a internet, ter um smartphone ou computador com acesso a internet|
| **Episódios** |<p>O usuário utilizou a rico por um determinado tempo do dia e resolveu ir fazer outra coisa</p>O usuário sai do sistema<p></p>|
| **Restrições** |<p>Fluxo interativo</p><p>Boa experiência de usuário</p>|
| **Exceção** |<p>O usuário não possuir conta na RICO</p><p>A internet parar de funcionar no meio da ação</p><p>O usuário fechar a aplicação antes de terminar a ação.</p>|

## Fazer simulação gráfica de investimentos

| **Título**  | **Fazer simulação gráfica de investimentos** |
| ------------- | ------------- |
| **Objetivo**  |Fazer com que o usuário seja capaz de simular informações sobre seus investimentos|
| **Contexto** |<p> **Pré-condição:** O usuário deve ter feito algum investimento e deve ter também uma conta na RICO</p><p>**Pós-condição:** o usuário visualizará uma simulação com informações a respeito de seus investimentos</p>|
| **Atores** |<p>1. Usuário</p><p>2. RICO</p>|
| **Recursos** |Acesso a internet, ter um smartphone ou computador com acesso a internet|
| **Episódios** |<p>O usuário faz algum investimento</p><p>O usuário utiliza a ferramenta para simular seus investimentos</p><p>O sistema simula informações e gráficos a respeito dos investimentos realizados pelo usuário</p>|
| **Restrições** |<p>Fluxo interativo</p><p>Boa experiência de usuário</p>|
| **Exceção** |<p>O usuário não possuir conta na RICO</p><p>A internet parar de funcionar no meio da ação</p><p>O usuário fechar a aplicação antes de terminar a ação.</p><p>O usuário ser menor de idade</p>|


## Histórico de revisões

Data | Responsável | Versão | Alteração 
---- | ----------- | ------ | ---------
26/09/2019 | [@dansousamelo](https://github.com/dansousamelo) | 1 | Adicionado cenários de 17 á 23
26/09/2019 | [@dansousamelo](https://github.com/dansousamelo) | 1.1 | Adicionado cenários de 17 á 30
27/09/2019 | [@pedroMiranda7410](https://github.com/pedroMiranda7410) | 1.2 | Adicionado cenários de 1 á 16