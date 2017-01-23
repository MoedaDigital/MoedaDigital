Introdução
=========

Moeda Digital
-------------

Somos uma empresa que oferece soluções para facilitar o processo de recebimentos online; sempre prezando segurança, simplicidade e aumento das vendas. 

Oferecemos diversas maneiras de uma  pessoa ou empresa começar a receber pagamentos de forma segura e conforme as necessidades de cada um; essas maneiras são chamadas de formas de integração, e cada uma possui aplicações distintas além de esforços diferentes para coloca-las em prática.

MD Account
-------------

The MD account is the store profile in Moeda Digital that allows the company or professional to access our online platform.
Inside the store's area you can:

- Do integration tests.
- Track your orders.
- Analyse your orders and cashflow.
- Create new applications.
- Make the request to go into production and start selling.

Integrations
----------------

###Custom Checkout HTML

####Description

In the custom checkout html the store receives a HTML code snippet to show their clients in their own site displaying all the allowed payment methods, avoiding the need to make changes in the code when a new payment method is added or removed.

The client never leaves your page to conclude the payment.

###Custom Checkout

####Descrição

In the custom checkout the payment process is fully costumized by the store, all the steps of the payment are done inside the store's page. 

The client never leaves your page to conclude the payment.


FIRST STEPS
================

Resume
-----------

The following list is a description of all the necessary steps to go through the integration process.

1. Create a MD account, by that you gain access to the platform and can start testing.

2. Create and Configure an application: 
<br>Each MD account can create diverses applications with different configurations;
You have to choose the integration type.
You can configure the receiving methods( credit card, interests, "boleto", e etc)
>**Note:** Initially is recommended to create a testing application. (To be able to make real transactions you have to ask for permission inside the store's profile area).

4. Start testing, you can create transactions and verify if the orders are beeing correctly generated and processed.

5. Create an application for production and ask for permission to start your operation. Inside the menu ***Administração → Conta*** finish completing your informations, verify the transactions fees and accept the user agreement so your store can go into our analysis and be enabled to go into production.


Criando Conta
--------------------

Criar uma conta na Moeda Digital é muito simples, basta:

1. Acessar o site da Moeda Digital e clicar em "CRIAR CONTA".
2. Preencher o formulário com as informações requisitadas.

Feito isso, você conseguirá entrar na plataforma da Moeda Digital através do site da Moeda digital clicando em "Acessar"; de lá você pode verificar relatórios, criar aplicações, fazer testes de integração entre outras funcionalidades. 


Criando Aplicação
-------------------------

####Pré-requisitos:

-- Ter uma Conta MD.

####Passos:

1. Entre com seu usuário na plataforma.

2. No menu superior vá na área  ***Administração → Aplicações*** 
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




