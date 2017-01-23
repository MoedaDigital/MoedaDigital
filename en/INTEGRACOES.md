INTEGRATING
===========

Custom Checkout HTML
---------------------------

####Requirements:

-- Owing an application configured as "**Integração com desenvolvimento próprio**"

####Applicability:

 - Selling major variety of itens.
 - Major controll over your sales.
 - Automatic support to new payment methods.

####Flow:

<pre>
<div class="mermaid">sequenceDiagram
    participant Client
    participant Store
    participant MD
    Cliente->>+Loja: 1 - Comprar
    Loja->>MD: 2 - Consultar Meios de Pagamento
    MD-->>Loja: 3 - Retorno Meios de Pagamento
    Loja-->>-Cliente: 4 - Html com meios de pagamento
    Cliente->>+Loja: 5 - Dados de Pagamento
    Loja->>MD: 6 - Iniciar Pagamento
    MD-->>Loja: 7 - Retorno do Pedido
    Loja->>-Cliente: 8 - Compra Finalizada</div> 
</pre>

####Steps:

1. **Consulting payment methods**:

	This step is usefull to check the avaiable payment methods on the application, to do this you need to make a HTTP request through the methods **GET** or **POST** to the URL: https://moeda.digital/gateway.asmx/ConsultaMeiosDePagamentoHTMLv2

	Parameters to send:

 - Token da Loja: **Loja**
 - Nome da aplicação: **Aplicacao**
 - Meios de pagamento: **Meios** \*
 - Valor total da compra: **Valor**
 - Idioma do cliente: **Idioma** \*

	\* With these parameters you can choose which methods between the application's enabled ones that will appear as an payment option, the current accepted values are ( "Todos" , "Credito", "Debito", "Boleto" , etc..) 

	\* The language (Idioma) can be ( "PT-BR", "EN_US", "ES_ES")

	As a response you will receive a XML that contains the HTML code snippet to be shown to the client inside the payment form.

	**Example**:
	<div class="code-sample-options">[Code](../code-example/ConsultarMeiosDePagamentoHTMLv2.md)<div>

1. **Initiate payment**:

	In this step your application must send a XML containing the order informations to be registered at Moeda Digital, receiving in response a XML within among other informations, a code snippet to be shown to the client so he can proceed (ex: a link to the client bank to complete the TEF). If the order is sent with the credit or debit card information in it, the transaction will be done in real time and the response will contain it's status, without needing to display anything else.

	The XML containing the order must be sent as a parameter troughout the HTTP methods **GET** or **POST** to the URL: https://moeda.digital/gateway.asmx/IniciarPagamentoXML

	Parameter's name: ***PedidoXML***

	The PedidoXML parameter is defined in the item [References / **Pedido**](#parametros-pedido).

	**Examples**:
	<div class="code-sample-options">[Code](../code-example/IniciarPagamentoXML.md)<div>

1. **Showinig the code to the client**:
	
	>Note: When ordering with credit or debit card as payment method along with the card information there will be nothing from Moeda Digital response to be shown to the client.

	The second step returns a XML containing te informations and the status of the order, in case of beeing succefull it will contain a HTML code snippet to be displayed to the client so he can proceed the payment.

	The return of the order is defined in the item [References / **Retorno do Pedido XML**](#parametros-retorno-do-pedido-xml).

1. **Monitoring the orders' status**:

	After registering a order, it can be monitored through our consulting methods or by WebHook, both of them described further in this manual as: [Monitoring / **Consulting Status**](#acompanhamento-dos-pedidos-consultar-status) and [Monitoring / **Consulting Status**](#acompanhamento-dos-pedidos-webhook-url-de-retorno) 


Custom Checkout 
---------------------------

####Requirements:

-- Owing a application configured as "**Integração com desenvolvimento próprio**"

####Applicability:

 - Selling major variety of itens.
 - Major controll over your sales.
 - Fully costumizable.

####Flow:

<pre>
<div class="mermaid">sequenceDiagram
    participant Cliente
    participant Loja
    participant MD
    Cliente->>+Loja: (opcional) - Comprar
    Loja->>+MD: Consultar Meios de Pagamento
    MD-->>-Loja: Retorno Meios de Pagamento
    Loja->>+MD: (opcional) - Consultar Parcelas
    MD-->>-Loja: Cálculo dos valores parcelados
    Loja-->>-Cliente: Página 100% própria de pagamento
    Cliente->>+Loja: Dados de Pagamento
    Loja->>MD: Iniciar Pagamento
    MD-->>Loja: Retorno do Pedido
    Loja->>-Cliente: Resultado do pedido</div> 
</pre>

####Steps:

1. **(Optional) Consultar Meios de Pagamento**:

	This step is usefull to check the avaiable payment methods on the application, to do this you need to make a HTTP request through the methods **GET** or **POST** to the URL: https://moeda.digital/gateway.asmx/ConsultaMeiosDePagamentoHTMLv2

	Parameters to send:

 - Token da Loja: **Loja**
 - Nome da aplicação: **Aplicacao**
 - Meios de pagamento: **Meios** \*

	\* With these parameters you can choose which methods between the application's enabled ones that will appear as an payment option, the current accepted values are ( "Todos" , "Credito", "Debito", "Boleto" , etc..) 

	As a response you will receive a XML explained in [References / **Array Retorno Meios de Pagamento**](#parametros-array-retorno-meios-de-pagamento-xml).

	**Examples**:
	<div class="code-sample-options">[Code](../code-example/ConsultarMeiosDePagamento.md)<div>

1. **(Optional) Consult Installments:**

	This step is usefull to check the values of the installments already calculated with interests as defined in your application. In order to do this, you need to make a HTTP request through the methods **GET** or **POST** to the URL: https://moeda.digital/gateway.asmx/ConsultaParcelasArray

	Parameters to send:

 - Token da Loja: **Loja**
 - Nome da aplicação: **Aplicacao**
 - Valor da compra: **Valor** ( sem pontuação )

	As a response you will receive a XML explained in [References / **Retorno de Parcelas Array**](#parametros-retorno-parcelas-array)..
	
	**Examples**:
	<div class="code-sample-options">[Code](../code-example/ConsultaParcelasArray.md)<div>

1. **Initiate payment**:

	In this step your application must send a XML containing the order informations to be registered at Moeda Digital, receiving in response a XML within among other informations, a code snippet to be shown to the client so he can proceed (ex: a link to the client bank to complete the TEF). If the order is sent with the credit or debit card information in it, the transaction will be done in real time and the response will contain it's status, without needing to display anything else.

	The XML containing the order must be sent as a parameter troughout the HTTP methods **GET** or **POST** to the URL: https://moeda.digital/gateway.asmx/IniciarPagamentoXML

	Parameter's name: ***PedidoXML***

	The PedidoXML parameter is defined in the item [References / **Pedido**](#parametros-pedido).

	**Examples**:
	<div class="code-sample-options">[Code](../code-example/IniciarPagamentoXML.md)<div>

1. **Showinig the code to the client**:
	
	>Note: When ordering with credit or debit card as payment method along with the card information there will be nothing from Moeda Digital response to be shown to the client.

	The second step returns a XML containing te informations and the status of the order, in case of beeing succefull it will contain a HTML code snippet to be displayed to the client so he can proceed the payment.

	The return of the request is defined in the item [References / **Retorno do Pedido XML**](#parametros-retorno-do-pedido-xml).

1. **Monitoring the orders' status**:

	After registering a order, it can be monitored through our consulting methods or by WebHook, both of them described further in this manual as: [Monitoring / **Consulting Status**](#acompanhamento-dos-pedidos-consultar-status) and [Monitoring / **Consulting Status**](#acompanhamento-dos-pedidos-webhook-url-de-retorno) 


MONITORING ORDERS
==========================

Consulting Status
---------------

####Steps:

 Each order's status can be consulted by sending HTTP request through the methods **GET** or **POST** to the URL: URL: https://moeda.digital/gateway.asmx/ConsultaStatusPagamento 
 
 Parameters to send:

 - Token da Loja: Loja
 - Nome da aplicação: Aplicação
 - Identificador do pedido: Pedido 

   The return of the request is defined in the item [Monitoring / **Consulting Status**](#parametros-retorno-status-pagamento-xml)


WebHook - URL de retorno
-------------------------------------

####Steps:

For each application it is possible to configure a return **URL** that will be called every time an order's status has changed. It will be done through the HTTP methods **GET** and **POST**.

1. Enter in your account at [Moeda Digital](https://moeda.digital/signin.aspx).
 
2. In the superior menu go to ***Administração*** → ***Aplicações*** and select the application you will configure.

3. Fill the field "**URL de Retorno**" with the URL your application will receive the notifications.

4. Prepare your server to receive the following parameter containg the id of the order that had it's status changed.

	**Parameters**:

 - Order's merchant id: **Pedido** 
 
5. As security measures after receiving the status change notification your application should make a request to consult the status of the received order merchant id as described in the [Monitoring / **Consulting Status**](#acompanhamento-dos-pedidos-consultar-status) session.


**Exemplos de Requisição**:
	<div class="code-sample-options">[Code](../code-example/WebHook.md)</div>
