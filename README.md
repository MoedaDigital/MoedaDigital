
**MANUAL DE INTEGRÇÃO**
===================

Introdução
=========

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

####Como utilizar:

1. (Opcional) Consultar Meios de Pagamento:

 A consulta meios de pagamento serve para ver os Meios de pagamento que estão habilitados pela aplicação. Para fazer essa consulta deve-se enviar uma requisição HTTP através dos métodos **GET** ou **POST** para a URL: https://moeda.digital/gateway.asmx/ConsultaMeiosDePagamento
<br>Na consulta devem ser enviados como parâmetros:

- Número da Loja: **Loja**
- Nome da aplicação: **Aplicação**
- \* Meios de pagamento: **Meios**

	<br>*Com esse parâmetro você pode verificar a disponibilidade de um meio específico ou verificar todos os disponíveis, os valores aceitos são ( "Todos" , "Credito", "Debito", "Boleto" , etc..) 

	Você receberá como resposta o XML Array de Retorno Meios Pagamento XML descrito mais a baixo.
	
2. (Opcional) Consultar Parcelas:

	Nesta etapa pode-se consultar o valores das parcelas  habilitados na aplicação para um devido valor.  Para fazer essa consulta deve-se enviar uma requisição HTTP através dos métodos GET ou POST para a URL: https://moeda.digital/gateway.asmx/ConsultaParcelasXML

	Na consulta devem ser enviados como parâmetros:

 - Número da Loja: **Loja**
 - Nome da aplicação: **Aplicação**
 - Valor da compra: **Valor** ( sem pontuação )

	Você receberá como resposta o XML Retorno Parcelas XML descrito mais a baixo.

3. Iniciar Pagamento:

	Nesta etapa a sua aplicação deverá enviar  um XML contendo as informações do pedido para ser registrado na Moeda Digital, esta retornará um XML contendo, entre outras informações, um código  HTML a ser exibido ao cliente.

	O XML contendo o pedido deve ser enviado como parâmetro através dos métodos **GET** ou **POST** para a URL: https://moeda.digital/gateway.asmx/IniciarPagamento

	Nome do parâmetro: ***PedidoXML***

	O PedidoXML está definido no item Parâmetros XML.

4. Exibir o código ao cliente:

	O passo 2 retorna um XML com informações e o status do pedido, em caso de ter sido bem sucedido, ele possui um código HTML para ser exibido ao cliente para proceder o pagamento.

	O Retorno do Pedido está definido no item Parâmetros XML.
	
5. Cole o texto copiado junto ao corpo do E-mail ou mensagem de cobrança a ser enviada.

6. Acompanhar o Status do pedido:

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




PARÂMETROS XML
==============

Pedido XML
-----------------

###Campos

| Tag | Explicação | Valor  | Obrigatório  | 
|:----- |:----------  | :------- | :------| 
| clsPedido           | Elemento raíz do pedido.  |                  | Sim  |              
| cliente             | Raíz de bloco Cliente XML  | Bloco cliente   | Sim  |
| endereco1           | Raíz de bloco Endereço XML | Bloco Endereço  | Sim  | 
| endereco2           | Raíz de bloco Endereço XML | Bloco Endereço  | Não  | 
| email1              | Email do cliente     | &lt;email&gt;String&lt;/email&gt;   | Sim  |
| email2              | Segundo email do cliente | &lt;email&gt;String&lt;/email&gt;  | Não | 
| email3              | Terceiro email do cliente   | &lt;email&gt;String&lt;/email&gt; | Não |  
| LojaChaveAcesso     | Identificador da loja | String -Token da loja | Sim  | 
| LojaApp             | Nome da Aplicação   | String - Nome da aplicação | Sim | 
| LojaCanal          | Tipo de Aplicação  | String: <br>-"WEB"<br>-"Mobile" | Sim | 
| MeiosdePagamento   | O código do meio de pagamento configurado na aplicação  | <nobr>String: <br>-"Visa"<br>-"Mastercard"<br>-"Diners"<br>-"Elo"<br>-"Amex"<br>-"Boleto" </nobr> | Sim |
| PedidoCodigo        | Identificador do pedido na Loja e Aplicação ( serve para o acompanhamento do pedido) | String | Sim |
| PedidoNumeroLoja    | Identificador do pedido na própria loja.| Pode ser igual ao &lt;PedidoCodigo&gt; | Sim | 
| PedidoVencimento    | Data de vencimento do pedido para ser informada ao cliente. | Formato: "dd/mm/aaaa" | Sim | 
| PedidoExpiracao     | Data e hora que o pedido será cancelado caso não estiver pago | <nobr>Formato: "dd/mm/aaaa hh:mm:ss"</nobr>  | Sim | 
| PedidoRecorrente    | Identificar se o pedido é recorrente | S ou N | Sim | 
| PedidoValor         | Valor total do pedido | Int - Valor sem pontuação ex: para R$1000,00 colocar 100000  | Sim | 
| PedidoValorSemJuros | Valor total do pedido desconsiderando os juros| Int - Valor sem pontuação ex: para R$1000,00 colocar 100000  | Sim | 
| PedidoItens         | Quantidade de itens que compõe o pedido| Int | Sim | 
| PedidoParcelas      | Número de parcelas do pagamento| Int: (deve ser compatível com as configurações da aplicação) | Sim |
| PedidoValorParcelas | O valor individual de cada parcela.|Int: Valor sem pontuação ex: para R$1000,00 colocar 100000  | Sim | 
| PedidoFinanciador   | Define se o financiamento dos juros é por conta da loja ou da administradora de cartões | "Int:  <nobr><br>Administradora: "1"<br>Loja: "2"</nobr> | Sim |
| PedidoEmissao     | Data e hora da emissão do pedido| Formato: <nobr>"dd/mm/aaaa hh:mm:ss"</nobr>| Não | 
| PedidoMulta         | Multa para o caso de pagamento após o vencimento. | Int - Valor sem pontuação  (Válido para boleto) Caso não haja colocar 0. | Sim |
| PedidoJuros         | Valor total do juros cobrado para parcelamento.| Int - Valor sem pontuação Caso não haja colocar 0. | Sim|       
| PedidoInstrucoes   | Campo para escrever informações extras| String| Não | 
| PortadorCartao      | Número do Cartão| String| Depende\* |  
| PortadorValidade    | Data de expiração do cartão| Formato: "mm/aa" | Depende\*   | 
| PortadorCVV         | Código de validação do cartão | Int | Depende\*  |
| PortadorNome        | Nome que está no cartão | String | Depende\*  | 

\*Apenas para compras no cartão.

###Exemplo

```
<?xml version="1.0" encoding="utf-16"?>
<clsPedido>
    <Cliente>
        <DataCadastro></DataCadastro>
        <Nome></Nome>
        <Sobrenome></Sobrenome>
        <RazaoSocial></RazaoSocial>
        <Genero></Genero>
        <CpfCnpj></CpfCnpj>
        <NascAbertura></NascAbertura>
        <Login></Login>
        <Moeda></Moeda>
        <Idioma> </Idioma>
        <IpCadastro></IpCadastro>
        <Notas></Notas>
    </Cliente>
    <Endereco1>
        <Endereco></Endereco>
        <Numero></Numero>
        <Complemento></Complemento>
        <Bairro></Bairro>
        <Cidade> </Cidade>
        <UF></UF>
        <CEP></CEP>
        <Pais> </Pais>
        <DDD></DDD>
        <Telefone></Telefone>
        <Tipo></Tipo>
    </Endereco1>
    <Endereco2>
        <Endereco></Endereco>
        <Numero></Numero>
        <Complemento></Complemento>
        <Bairro></Bairro>
        <Cidade> </Cidade>
        <UF></UF>
        <CEP></CEP>
        <Pais> </Pais>
        <DDD></DDD>
        <Telefone></Telefone>
        <Tipo></Tipo>
    </Endereco2>
    <Email1>
        <Email></Email>
    </Email1>
    <Email2>
        <Email></Email>
    </Email2>
    <Email3>
        <Email></Email>
    </Email3>
    <LojaChaveAcesso></LojaChaveAcesso>
    <LojaApp></LojaApp>
    <LojaCanal></LojaCanal>
    <MeiosdePagamento></MeiosdePagamento>
    <PedidoCodigo></PedidoCodigo>
    <PedidoNumeroLoja></PedidoNumeroLoja>
    <PedidoEmissao></PedidoEmissao>
    <PedidoVencimento></PedidoVencimento>
    <PedidoExpiracao></PedidoExpiracao>
    <PedidoRecorrente></PedidoRecorrente>
    <PedidoValor></PedidoValor>
    <PedidoValorSemJuros></PedidoValorSemJuros>
    <PedidoMulta></PedidoMulta>
    <PedidoJuros></PedidoJuros>
    <PedidoItens></PedidoItens>
    <PedidoParcelas></PedidoParcelas>
    <PedidoValorParcelas></PedidoValorParcelas>
    <PedidoFinanciador></PedidoFinanciador>
    <PedidoInstrucoes></PedidoInstrucoes>
    <Rateios>
        <Rateio> 
            <SubConta></SubConta>
            <Valor></Valor>
        </Rateio>
        <Rateio>
            <SubConta></SubConta>
            <Valor></Valor>
        </Rateio>
    </Rateios>
    <PortadorCartao></PortadorCartao>
    <PortadorValidade></PortadorValidade>
    <PortadorCVV></PortadorCVV>
    <PortadorNome></PortadorNome>
</clsPedido>
```

-----------
Retorno do Pedido XML
---------------------

| Tag                | Explicação                       | Valor       | 
|:-------------------|:-------------------------------- |:------------| 
| &lt;RetornoPedido&gt;    | Elemento raíz do retorno.        |             | 
| &lt;NSU&gt;              |                                  | String      | 
| &lt;Mensagem&gt;         |                                  | String      | 
| &lt;Retorno&gt;          |                                  |             | 
| &lt;PedidoStatus&gt;     | Status atual do Pedido        |String: <nobr><br>-APROVADO <br> -INVALIDO<br> -PENDENTE<br> -NEGADO<br> -CANCELADO<br> -CHARGEBACK</nobr> |
| &lt;Conteúdo&gt;         |                                  | String      | 
| &lt;PedidoNumeroLoja&gt; | Identificador do pedido na loja. | String      | 


Retorno Meios de Pagamento XML
------------------------------

| Tag                | Explicação                       | Valor       | 
|:-------------------|:-------------------------------- |:------------|
| &lt;ArrayOfRetornoMeiosPagamento&gt; | Raíz do XML de retorno      | 1 ou mais Elementos do tipo RetornoMeiosPagamento | 
| &lt;RetornoMeiosPagamento&gt; | Bloco RetornoMeiosPagamento |     |                                              | 

| Tag                | Explicação                       | Valor       | 
|:-------------------|:-------------------------------- |:------------|
| &lt;RetornoMeiosPagamento&gt; | Raíz do Bloco ||
|&lt;Nome&gt; | Nome do meio de pagamento utilizado para fazer o pedido  |<nobr>String: <br>-"Visa"<br>-"Mastercard"<br>-"Diners"<br>-"Elo"<br>-"Amex"<br>-"Boleto" </nobr>  |  
| &lt;Tipo&gt; |  | String - <br>CREDITO <br>BOLETO <br>DEBITO | 
| &lt;Parcelado&gt;    | Se o meio aceita parcelas | "S" ou "N"  | 
| &lt;Imagem&gt; | URL com uma imagem que representa o meio de pagamento | String - URL | 
| &lt;Mensagem&gt; | |String|   


Retorno Status Pagamento XML
---------------------------

| Tag                      | Explicação                           | Valor    | 
|:-------------------------|:-------------------------------------|:---------| 
| &lt;RetornoStatusPagamento&gt; | Elemento raíz do retorno.            |          | 
| &lt;PedidoNumeroLoja&gt;       | Identificador do pedido na loja      | String   | 
| &lt;Status&gt;                 | Status to pedido                     | String: <br>-BAIXO <br>-MEDIO <br>-ALTO <br>-" " | 
| &lt;Modulo&gt;                 | Tipo de pagamento usado              | String   | 
| &lt;MeioPagamento&gt;          | Forma de pagamento usada             | String   | 
| &lt;DataPagamento&gt;          | Data do pagamento                    | String   | 
| &lt;ValorPago&gt;              | Valor total pago                     | Decimal  | 
| &lt;Mensagem&gt;               |                                      | String   | 
| &lt;NivelRisco&gt;             | Indicador do risco de ser uma fraude | String: <nobr><br>-APROVADO <br> -INVALIDO<br> -PENDENTE<br> -NEGADO<br> -CANCELADO<br> -CHARGEBACK</nobr> | 

------------
Retorno Parcelas XML
--------------------

| Tag                     | Explicação                | Valor                                 | 
|-------------------------|---------------------------|---------------------------------------| 
| &lt;ConsultaParcelasArray&gt; | Raiz do Bloco             | 1 ou mais elementos &lt;RetornoParcelas&gt; | 
| &lt;RetornoParcelas&gt;       | Elemento Retorno Parcelas |                                       | 
| &lt;Parcela&gt;               | Número de parcelas        | Int                                   | 
| &lt;ValorTotal&gt;            | Valor total da compra     | Decimal                               | 
| &lt;ValorParcela&gt;          | Valor de cada parcela     | Decimal                               | 
| &lt;Obs&gt;                   |                           | String                                | 
| &lt;Mensagem&gt;              |                           | String                                | 


Cliente XML
-----------

| Tag            | Explicação                                         | Valor                                  | Obrigatório    | 
|----------------|----------------------------------------------------|----------------------------------------|----------------| 
| &lt;DataCadastro&gt; | Data de cadastro do cliente                        | String - Formato: <nobr>"dd/mm/aaaa"</nobr>         | Não            | 
| &lt;Nome&gt;         | Sigla do estado                                    | String  | Sim            | 
| &lt;Sobrenome&gt;    | Código postal                                      | String - Formato "ddddd-ddd"           | Apenas para PF | 
| &lt;RazaoSocial&gt;  | Razão social da empresa no caso de pessoa júridica | String | Apenas para PJ | 
| &lt;Genero&gt;       | Gênero do cliente | Opções:  <nobr>"J" - pessoa juridica <br>"M" - pessoa física do sexo Masculino <br>"F" - pessoa física do sexo Feminino</nobr>                               | Sim            | 
| &lt;CpfCnpj&gt;      | CPF ou CNPJ                                        | String                                 | Sim            | 
| &lt;NascAbertura&gt; | Data de nascimento ou de abertura da empresa       | String                                 | Apenas para PF | 
| &lt;Login&gt;        | Bairro                                             | String                                 | Não            | 
| &lt;Moeda&gt;        | DDD                                                | String - Sempre utilizar o valor "BRL" | Sim            | 
| &lt;Idioma&gt;       | Telefone                                           | String - Idioma do cliente: <nobr><br>PT-BR<br>EN_US<br>ES_ES</nobr>  | Sim |
| &lt;IpCadastro&gt;   | Ip do cliente| String: Formato: <nobr>"ddd.ddd.ddd.ddd"</nobr>     | Não    | 
| &lt;Notas&gt;        | Notas adicionais sobre o cliente                   | String | Não            | 


Endereço XML
------------

| Tag           | Explicação       | Valor                                    | Obrigatório | 
|---------------|------------------|------------------------------------------|-------------| 
| &lt;Cidade&gt;      | Cidade           | String                                   | Sim         | 
| &lt;UF &gt;         | Sigla do estado  | String - Sigla 2 digitos em maiúsculo.   | Sim         | 
| &lt;CEP&gt;         | Código postal    | String - Formato "ddddd-ddd"             | Sim         | 
| &lt;Pais&gt;        | Sigla do país    | String - Sigla 2 digitos em maiúsculo.   | Sim         | 
| &lt;Tipo&gt;        | Tipo do endereço | String - ex : "Residêncial", "Comercial" | Sim         | 
| &lt;Numero&gt;      | Número do local  | String                                   | Não         | 
| &lt;Complemento&gt; | Complemento      | String                                   | Não         | 
| &lt;Bairro&gt;      | Bairro           | String                                   | Não         | 
| &lt;DDD&gt;         | DDD              | String                                   | Não         | 
| &lt;Telefone&gt;    | Telefone         | String                                   | Não         | 

