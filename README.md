
**MANUAL DE INTEGRÇÃO**
===================

Introdução
=========

<div class='mermaid'>sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?</div>
<div class="mermaid">sequenceDiagram
    participant Cliente
    participant Loja
    participant MD
    Cliente->>Loja: 1 - Comprar
    Loja->>MD: 2 - Consultar Meios de Pagamento
    MD-->>Loja: 3 - Retorno Meios de Pagamento
    Loja-->>Cliente: 4 - Html com meios de pagamento
    Cliente->>Loja: 5 - Dados de Pagamento
    Loja->>MD: 6 - Iniciar Pagamento
    MD-->>Loja: 7 - Retorno do Pedido
    Loja->>Cliente: 8 - Compra Finalizada</div>
<div class="mermaid">sequenceDiagram
    participant Cliente
    participant Loja
    participant MD
    Cliente->>+Loja: 1 - Comprar
    Loja->>MD: 2 - Consultar Meios de Pagamento
    MD-->>Loja: 3 - Retorno Meios de Pagamento
    Loja-->>-Cliente: 4 - Html com meios de pagamento
    Cliente->>Loja: 5 - Dados de Pagamento
    Loja->>MD: 6 - Iniciar Pagamento
    MD-->>Loja: 7 - Retorno do Pedido
    Loja->>Cliente: 8 - Compra Finalizada</div>

Moeda Digital
-------------

Somos uma empresa que oferece soluções para facilitar o processo de recebimentos online; sempre prezando segurança, simplicidade e aumento das vendas. 

Oferecemos diversas maneiras de uma  pessoa ou empresa começar a receber pagamentos de forma segura e conforme as necessidades de cada um; essas maneiras são chamadas de formas de integração, e cada uma possui aplicações distintas além de esforços diferentes para coloca-las em prática.

Integrações
----------------

###Botão de Compras e Link de Pagamento

####Descrição

O Botão de Compras e o Link de Pagamento são as formas mais simples e rápidas para começar a receber pagamentos, sua principal finalidade é fazer cobranças de itens individuais ou receber doações de qualquer valor. Em ambos os casos o cliente será redirecionado para um ambiente seguro de pagamento fornecido pela moeda digital. Em poucos minutos você estará apto a mandar e-mails com cobranças ou gerar um botão em HTML para ser colocado em sua página de vendas.  

####Indicação
Algumas aplicações podem ser:

 - Lojistas que querem vender seus produtos através de páginas como facebook.
 -  Fazer cobranças por e-mail.
 - Profissionais que queiram receber por seus serviços de forma on-line. 
 - Lojistas com pouca variedade de produtos e com pouco conhecimento em desenvolvimento e queiram incluir um botão de compra em sua página.
 - Eventos.


###Check-out Transparente

####Descrição

No check-out transparente todo o processo de compra ocorre na página do E-commerce, o usuário não percebe a existência da Moeda Digital e o lojista tem a possibilidade de customizar todas as etapas em sua página.

####Indicação

É a solução indicada para quem quer maior personalização de sua página e tenha condições técnicas mais avançadas para implementação. 
O check-out transparente possuí também um menor índice de desistência pelos compradores.

Conta MD
-------------

A conta MD é o cadastro na Moeda Digital que permite a empresa ou o profissional acessar a plataforma online e começar a receber. 
Dentro da área do usuário na plataforma Moeda Digital é  possível:

- Fazer testes de integração.
- Acompanhar os pedidos gerados pelo seu negócio.
- Analisar seus pedidos e recebimentos.
- Criar novas aplicações.

PRIMEIROS PASSOS
================

Resumo
-----------

A lista a seguir é uma breve descrição de todos os passos necessários do início ao fim do processo de integração.

1. Criação da conta na Moeda Digital , através dela você terá acesso à plataforma e às ferramentas de  pagamento oferecidas.

2. Criar e Configurar uma Aplicação: 
<br>Cada conta MD pode criar diversas aplicações com distintas configurações;
Deve-se escolher o tipo de integração da aplicação
Deve-se escolher as opções de recebimento ( cartão, juros, boleto, número de parcelas aceitas, e etc)
>**Nota:** Inicialmente recomenda-se criar uma aplicação para teste que permite iniciar a integração. (Utilizar aplicações reais apenas é possível após entrar em contato com nossa equipe)

3. Caso o tipo de integração escolhido seja o Link de Compras ou o Botão de Compras você pode pular esta etapa, caso contrário deve-se desenvolver a integração com o seu sistema, utilizando-se de nossa documentação e módulos existentes.
 
4. Começar os testes, você poderá gerar transações para a aplicação de teste e verificar se os pedidos estão sendo gerados e processados corretamente, além de se acostumar com o painel da plataforma onde poderá ver relatórios sobre suas transações.
 
5. Habilitar sua aplicação real, aqui basta entrar em contato com a nossa equipe para a contratação e após isso todas suas aplicações estarão prontas para receber.
 
6. Receber!


Criando Conta
--------------------

Criar uma conta na Moeda Digital é muito simples, basta:

 1. Acessar o site da Moeda Digital e clicar em "CRIAR CONTA".
 2. Preencher o formulário com as informações requisitadas.

Feito isso, você conseguirá entrar na plataforma da Moeda Digital através do site da Moeda digital clicando em "Acessar"; de lá você pode verificar relatórios, criar aplicações, fazer testes de integração entre outras funcionalidades. 


Criando Aplicação
-------------------------

####Pré-requisitos:

--- Ter uma Conta MD.

####Passos:

1. Entre com seu usuário na plataforma.

2. No menu superior vá na área  Administração → Aplicações 
Aqui você encontrará um campo de seleção com a opção "Criar uma Nova Aplicação"
 
3. Preencha os campos com as configurações escolhidas e clique em Salvar.
>**Nota:** Você encontrará uma descrição dos campos mais abaixo. 
 
4. Pronto, você possui uma nova aplicação.

####Campos: 

| Campo    | O que é | O que faz|
| :-----------------| :---- | :--- |
| Código da Aplicação| Identificador único de cada aplicação dentro de sua conta MD|Identificar a aplicação referente a cada pedido.|
| Token | Identificador único de cada conta MD|Identificar a qual conta MD o pedido se refere.|
| Tipo de Aplicação|Campo que define que tipo de integração foi escolhida para a aplicação|Mostra como o pedido deve proceder.|
|URL de Retorno|Um link para a Moeda Digital avisar as mudanças de status de cada pedido.|Quando um pedido muda de status a Moeda Digtal faz uma requisição ao link avisando sobre a mudança.|
|Meios de Pagamento|Os meios de pagamento que serão aceitos por você|Permite que o cliente pague apenas com os meios selecionados.|
|Quantidade Máxima de Parcelas| Campo com as opções de parcelamento | Determina até quantas vezes o cliente poderá parcelar a compra no cartão  |
|Não cobrar juros para as parcelas|Campo com opções de parcelamento  | Determina a quantidade de parcelas que não serão cobrados juros do cliente |
|Valor mínimo da parcela| Valores mínimos para aceitar parcelemaneto | Define o valor mínimo que será aceito para cada parcela de uma compra |
|Conceder desconto a vista para Boleto e TEF| % de desconto para compras a vista | Define valor a ser utilizado no cálculo de desconto para compras a vista em boleto ou TEF |




