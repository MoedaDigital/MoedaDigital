Introduction
=========

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
>**Note:** Initially it is recommended to create a testing application. (To be able to make real transactions you have to ask for permission inside the store's profile area).

4. Start testing, you can create transactions and verify if the orders are beeing correctly generated and processed.

5. Create an application for production and ask for permission to start your operation. Inside the menu ***Administração → Conta*** finish completing your informations, verify the transactions fees and accept the user agreement so your store can go into our analysis and be enabled to go into production.


Creating an Account
--------------------

To register at Moeda Digital you just need to:

1. Visit our webpage and click on ["Cadastre-se"](https://moeda.digital/signup.aspx).
2. Fill the form with the requested information.

Done that you will receive a confirmation email and then gain the acess to Moeda Digital's platform.

Creating Applications
-------------------------

####Requirements:

-- Owing a MD account.

####Steps:

1. Login into the platform.

2. In the superior menu go to  ***Administração → Aplicações*** 
There you will find the option "Criar uma Nova Aplicação"

3. Fill the fields with the choosen configurations and click on "Salvar".
>**Note:** You can find the fields descriptions further. 

####Fields: 

| Field    | Description |
| :-----------------| :---- | :--- |
| Código da Aplicação| Unique identifier of each application inside your account |
| Token | Private unique identifier of each MD account, *Do not share it with anyone*|
| Tipo de Aplicação| Defines the type of the application and the way it works|
|URL de Retorno| Your system URL that will receive notifications from Moeda Digital of changes in orders' status|
|Meios de Pagamento|The payment methods that your system allows|
|Quantidade Máxima de Parcelas| The maximum number of installments when paying with credit card |
|Não cobrar juros para as parcelas| Defines how many installments won't be charged with interests |
|Valor mínimo da parcela| Minimum installment value|
|Conceder desconto a vista para Boleto e TEF| Disccount for purchases with "Boleto" or electronic transfer  | 




