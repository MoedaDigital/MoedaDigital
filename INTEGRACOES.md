INTEGRANDO
===========

Link e Botão de Compras
-----------------------

####Pré-requisitos:

--- Possuir Aplicação configurada como "Link Carrinho de Compras - Cobrança Instantânea" 

####Aplicabilidade:

 - Envio de cobrança por E-mail ou outros meios de comunicação.
 - Inserção em páginas WEB.

####Como utilizar:

1. Entre em sua Conta MD na plataforma.

2. No menu principal acesse Administração → Gerar Carrinho

3. Preencha os campos e escolha entre URL, Botão ou Link.
>**Nota:** A diferença entre as opções é apenas a formatação na qual a URL é fornecida, o Botão fornece configurações de estilização em HTML.

4. Copie o texto que é mostrado na caixa de texto ao lado das opções.

5. Cole o texto copiado junto ao corpo do E-mail ou mensagem de cobrança a ser enviada.

6. Aguarde o pagamento.

####Campos de configuração do pagamento:

| Campo    | O que é | O que faz|
| :-----------------| :---- | :--- |
|Aplicação|	Nome da Aplicação configurada para essa cobrança|Define os meios de pagamento e outras configurações da cobrança.|
|Número do Pedido|	Identificador único de cada pedido por aplicação|Serve para o acompanhamento do pagamento através da plataforma.|
|Valor|O valor total a ser cobrado. **O valor 0 configura a opção de doação**| Define o valor que será cobrado do cliente |
|Texto do Botão| Texto que será mostrado no botão --- Apenas serve para o caso do botão | Muda o texto mostrado no botão.|
|Tipo |Escolhe entre Link, URL e Botão| Fornece diferentes modos de formatação.|


Check-out Transparente
---------------------------------

####Pré-requisitos:

--- Possuir Aplicação configurada como "**Integração com desenvolvimento próprio**"

####Aplicabilidade:

 - Vendas de maior variedade de itens.
 - Maior controle sobre as vendas.
 - Maior capacidade de costumização do processo.

####Fluxo:

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
    Loja->>Cliente: 8 - Compra Finalizada.</div>  
    
####Como utilizar:

1. **(Opcional) Consultar Meios de Pagamento**:

	A consulta meios de pagamento serve para ver os Meios de pagamento que estão habilitados pela aplicação. Para fazer essa consulta deve-se enviar uma requisição HTTP através dos métodos **GET** ou **POST** para a URL: https://moeda.digital/gateway.asmx/ConsultaMeiosDePagamento

	Na consulta devem ser enviados como parâmetros:

 - Número da Loja: **Loja**
 - Nome da aplicação: **Aplicação**
 - Meios de pagamento: **Meios** \*

	\* Com esse parâmetro você pode verificar a disponibilidade de um meio específico ou verificar todos os disponíveis, os valores aceitos são ( "Todos" , "Credito", "Debito", "Boleto" , etc..) 

	Você receberá como resposta o XML Array de Retorno Meios Pagamento XML descrito mais a baixo.

	Exemplos:
	<div class="code-sample-options">[Code](code-example/ConsultarMeiosDePagamento.md)<div>

1. **(Opcional) Consultar Parcelas:**

	Nesta etapa pode-se consultar o valores das parcelas  habilitados na aplicação para um devido valor.  Para fazer essa consulta deve-se enviar uma requisição HTTP através dos métodos GET ou POST para a URL: https://moeda.digital/gateway.asmx/ConsultaParcelasXML

	Na consulta devem ser enviados como parâmetros:

 - Número da Loja: **Loja**
 - Nome da aplicação: **Aplicação**
 - Valor da compra: **Valor** ( sem pontuação )

	Você receberá como resposta o XML Retorno Parcelas XML descrito mais a baixo.

1. **Iniciar Pagamento**:

	Nesta etapa a sua aplicação deverá enviar  um XML contendo as informações do pedido para ser registrado na Moeda Digital, esta retornará um XML contendo, entre outras informações, um código  HTML a ser exibido ao cliente nos casos dos meios diferentes de crédito.

	O XML contendo o pedido deve ser enviado como parâmetro através dos métodos **GET** ou **POST** para a URL: https://moeda.digital/gateway.asmx/IniciarPagamento

	Nome do parâmetro: ***PedidoXML***

	O PedidoXML está definido no item Parâmetros XML.

1. **Exibir o código ao cliente**:
	
	>Nota: Caso o meio de pagamento seja Crédito, não há o que ser exibido ao cliente, pular para o passo 5.

	O passo 2 retorna um XML com informações e o status do pedido, em caso de ter sido bem sucedido, ele possui um código HTML para ser exibido ao cliente para proceder o pagamento.

	O Retorno do Pedido está definido no item Parâmetros XML.

1. **Acompanhar o Status do pedido**:

	Após o pedido ser registrado, ele pode ser acompanhado através de métodos disponibilizados para consulta pela Moeda Digital e por meio de WebHook, descritos neste manual nas áreas : Consultar Status do Pedido e WebHook - URL de retorno

####Parâmetros XML:

-----------
ACOMPANHAMENTO DOS PEDIDOS
==========================

Consultar Status
---------------

####Como utilizar:

 O status de cada pedido pode ser consultado através de requisições HTTP utilizando os metodos POST ou GET para a URL: https://moeda.digital/gateway.asmx/ConsultaStatusPagamento 
 
 Na consulta devem ser enviados como parâmetros:

 - Número da Loja: Loja
 - Nome da aplicação: Aplicação
 - Identificador do pedido: Pedido 

Você receberá como resposta o XML Retorno Status Pagamento descrito mais a baixo.


WebHook - URL de retorno
-------------------------------------

####Como utilizar:

Para cada aplicação é possível fornecer uma **URL** de retorno que será chamada pela Moeda Digital sempre que um pedido tiver seu Status alterado. A requisição pode ser feita através dos métodos **GET** ou **POST**.

1. Acesse sua Conta MD na plataforma da Moeda Digital.
 
2. Acesse no menu superior ***Administração*** → ***Aplicações*** e selecione a aplicação que deseja acompanhar.

3. Preencha o campo "URL de Retorno" com a URL da sua aplicação que receberá a notificação.

4. Programe seu site para receber o seguinte paramêtro contendo o número identificador do pedido que teve seu status alterado.

	- Identificador do Pedido na Loja: Pedido
 
5. Por motivos de segurança após receber o chamado de alteração do status do pedido, a loja deve consultar o status do pedido através do procedimento descrito em Consultar Status do Pedido utilizando-se do identificador recebido.

