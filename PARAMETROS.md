
PARÂMETROS
==========

Pedido
--------

###Campos

| Nome          | Tipo   | Obrigatório | Tamanho | Formato                             | Descrição                                                            |
|:--------------|:-------|:------------|:--------|:------------------------------------|:---------------------------------------------------------------------|
| Token         | string | Sim         | -       | -                                   | Token da loja disponível no painel do administrador da Moeda Digital |
| Aplicacao     | string | Sim         | -       | -                                   | Nome da aplicação criada no painel do administrador da Moeda Digital |
| CodigoPedido  | objeto | Sim         | -       | -                                   | Código identificador do pedido na loja                               |
| PedidoEmissao | date | Não         | -       | “dd/mm/aaaa hh:mm:ss”               | Data de emissão do pedido                                            |
| Produto       | string | Sim         | -       | -                                   | Nome do produto sendo vendido (Será mostrado em caso de boleto)      |
| [Cliente](#parametros-cliente)       | objeto | Sim         | -       | &lt;Cliente&gt;&lt;/Cliente&gt;     | Elemento contendo as informações do cliente                          |
| [Endereco](#parametros-endereco)      | objeto | Sim         | -       | &lt;Endereco&gt;&lt;/Endereco&gt;   | Elemento contendo as informações do endereço de cobrança             |
| [Pagamento](#parametros-pagamento)     | objeto | Sim         | -       | &lt;Pagamento&gt;&lt;/Pagamento&gt; | Elemento contendo as informações do pagamento                        |
| [Rateios](#parametros-rateios)       | objeto | Não         | -       | &lt;Rateios&gt;&lt;/Rateios&gt;     | Elemento contendo as divisões do valor recebido                      |


###Exemplo

```xml
<?xml version='1.0' encoding='utf-16'?>
<Pedido xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema'>
   <Token></Token>
   <Aplicacao></Aplicacao>
   <CodigoPedido></CodigoPedido>
   <PedidoEmissao></PedidoEmissao>
   <Produto></Produto>
   <Cliente>
      <NomeCompleto></NomeCompleto>
      <RazaoSocial></RazaoSocial>
      <Genero></Genero>
      <CpfCnpj></CpfCnpj>
      <Idioma></Idioma>
      <Email></Email>
   </Cliente>
   <Endereco>
      <Logradouro></Logradouro>
      <Numero></Numero>
      <Complemento></Complemento>
      <Bairro></Bairro>
      <Cidade></Cidade>
      <UF></UF>
      <CEP></CEP>
      <Pais></Pais>
      <DDD></DDD>
      <Telefone></Telefone>
      <Tipo></Tipo>
   </Endereco>
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
   <Pagamento>
       <ValorTotal></ValorTotal>
       <Meio></Meio>
       <Recorrente></Recorrente>
       <Instrucoes></Instrucoes>
       <Moeda></Moeda>
       <Vencimento></Vencimento>
       <Parcelamento>
           <ValorSemJuros></ValorSemJuros>
           <Parcelas></Parcelas>
           <ValorParcela></ValorParcela>
       </Parcelamento>
       <Cartao>
           <Numero></Numero>
           <Validade></Validade>
           <CVV></CVV>
           <PortadorNome></PortadorNome>
       </Cartao>
   </Pagamento>
</Pedido>
```



Endereço
---------

| Nome        | Tipo   | Obrigatório | Tamanho      | Formato         | Descrição               |
|:------------|:-------|:------------|:-------------|:----------------|:------------------------|
| Endereco    | -      | -           | -            | -               | Elemento raíz do bloco  |
| Logradouro  | string | Sim         | -            | -               | Nome da rua             |
| Numero      | int    | Sim         | -            | -               | Número do endereço      |
| Complemento | string | Não         | -            | -               | Complemento do endereço |
| Bairro      | string | Sim         | -            | -               | Nome do bairro          |
| Cidade      | string | Sim         | -            | -               | Cidade                  |
| UF          | string | Sim         | 2 Carácteres | ex: BH          | Código do estado        |
| CEP         | string | Sim         | -            | -               | Código Postal           |
| Pais        | string | Sim         | 2 Carácteres | ex: BR          | Código do país          |
| Tipo        | string | Sim         | -            | ex: Residencial | Tipo de endereço        |

Cliente
-------

| Nome         | Tipo   | Obrigatório   | Tamanho   | Formato                                                                                       | Descrição                                                                                                                               |
|:-------------|:-------|:--------------|:----------|:----------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------|
| Cliente      | -      | -             | -         | -                                                                                             | Elemento raíz do bloco                                                                                                                  |
| NomeCompleto | string | Ver descrição | -         | -                                                                                             | Nome completo do cliente, obrigatório em caso de pessoa física                                                                          |
| RazaoSocial  | string | Ver descrição | -         | -                                                                                             | Razão social, obrigatório em caso de pessoa jurídica                                                                                    |
| Genero       | char   | Sim           | -         | <nobr>J para Jurídico<BR>I para Internacional<br>M para   Masculino<br>F para Feminino</nobr> | Genero que descreve o comprador, em caso de cliente internacional é   obrigatório ter ao menos um dos campos: NomeComple ou RazaoSocial |
| CpfCnpj      | string | Ver descrição | -         | -                                                                                             | Número de cadastro de pessoa Física ou Jurídica, obrigatório para todos   menos clientes internacionais                                 |
| Idioma       | string | Sim           | -         | ES_ES<br>PT-BR<br>EN_US                                                                       | Idioma do cliente                                                                                                                       |
| Email        | string | Sim           | -         | -                                                                                             | E-mail do cliente                                                                                                                       |
| DDD          | string | Sim           | 3 Digitos | ex: 41                                                                                        | DDD do telefone                                                                                                                         |
| Telefone     | string | Sim           | -         | -                                                                                             | Telefone do cliente                                                                                                                     |

Pagamento
---------

| Nome           | Tipo   | Obrigatório | Tamanho       | Formato                                                                | Descrição                                                                         |
|:---------------|:-------|:------------|:--------------|:-----------------------------------------------------------------------|:----------------------------------------------------------------------------------|
| Pagamento      | -      | -           | -             | -                                                                      | Elemento raíz do bloco                                                            |
| ValorTotal     | int    | Sim         | -             | Valor total com 2 casas decimais sem pontuação ex: 10000 para R$100.00 | Valor total que será pago pelo cliente                                            |
| Meio           | string | Sim         | -             | VISA<br>MASTER<br>BOLETO                                               | Nome do meio de pagamento igual aos nomes habilitados na aplicação                |
| Recorrencia    | objeto | Não         | 1 Carácter    |                                                                        | Elemento contendo informações sobre recorrência                                   |
| *Recorrencia*<br><nobr>&emsp;Recorrente</nobr>  | char   | Não&gt;Sim  | 1 Carácter    | <nobr>S: para sim<br>N: para não</nobr>                                | Define se haverá recorrência                                                      |
| *Recorrencia*<br><nobr>&emsp;Tempo</nobr> | int    | Não&gt;Sim  | máx 2 dígitos | ex: 12                                                                 | Número de meses que serão feitas cobranças iguais ao cliente                      |
| Instrucoes     | string | Não         | -             | -                                                                      | Instruções sobre como o cliente deve efetuar o pagamento ( aparecerá no   boleto) |
| Moeda          | string | Sim         | -             | ex: BRL                                                                | Moeda em que o cliente será cobrado                                               |
| Vencimento     | date   | Sim         | -             | "dd/mm/aaaa"                                                           | Data em que o pagamento não será mais aceito                                      |


Cartão
------

| Nome         | Tipo   | Obrigatório | Tamanho | Formato | Descrição                    |
|:-------------|:-------|:------------|:--------|:--------|:-----------------------------|
| Cartao       | -      | -           | -       | -       | Elemento raíz do bloco       |
| Numero       | int    | Sim         | -       | -       | Número do cartão             |
| Validade     | date   | Sim         | -       | "mm/aa" | Data de expiração do cartão  |
| CVV          | int    | Sim         | -       | -       | Código de seguranã do cartão |
| PortadorNome | string | Sim         | -       | -       | Nome do portador do cartão   |


Parcelamento
------------

| Nome          | Tipo | Obrigatório | Tamanho | Formato                                                                | Descrição                                                                                 |
|:--------------|:-----|:------------|:--------|:-----------------------------------------------------------------------|:------------------------------------------------------------------------------------------|
| Parcelamento  | -    | -           | -       | -                                                                      | Elemento raíz do bloco                                                                    |
| ValorSemJuros | int  | Sim         | -       | Valor total com 2 casas decimais sem pontuação ex: 10000 para R$100.00 | Valor que o cliente pagará descontado do valor dos juros que serão pagos   pelas parcelas |
| Parcelas      | int  | Sim         | -       | -                                                                      | Número de parcelas que será dívidida a compra                                             |
| ValorParcela  | int  | Sim         | -       | Valor total com 2 casas decimais sem pontuação ex: 10000 para R$100.00 | Valor de cada parcela                                                                     |

Rateios
-------

| Nome                              | Tipo   | Obrigatório | Tamanho | Formato                                                                | Descrição                                                 |
|-----------------------------------|--------|-------------|---------|------------------------------------------------------------------------|-----------------------------------------------------------|
| Rateios                           | -      | -           | -       | -                                                                      | Elemento raíz do bloco                                    |
| *Rateios*<br><nobr>&emsp;Rateio</nobr>         | objeto | Sim         | -       | &lt;Rateio&gt;&lt;/Rateio&gt;                                           | Raíz de cada bloco rateio, um para cada divisão do pedido |
| <nobr>&emsp;*Rateio*<br>&emsp;&emsp;Subconta</nobr> | string | Sim         | -       | -                                                                      | Identificador da Subconta cadastrada                      |
| <nobr>&emsp;*Rateio*<br>&emsp;&emsp;Valor</nobr>    | int    | Sim         | -       | Valor total com 2 casas decimais sem pontuação ex: 10000 para R$100.00 | Valor a ser passado para a conta especificada             |

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
|&lt;Nome&gt; | Nome do meio de pagamento utilizado para fazer o pedido  |<nobr>String <br>-"Visa"<br>-"Mastercard"<br>-"Diners"<br>-"Elo"<br>-"Amex"<br>-"Boleto" </nobr>  |  
| &lt;Tipo&gt; |  | String - <br>CREDITO <br>BOLETO <br>DEBITO | 
| &lt;Parcelado&gt;    | Se o meio aceita parcelas | "S" ou "N"  | 
| &lt;Imagem&gt; | URL com uma imagem que representa o meio de pagamento | String - URL | 
| &lt;Mensagem&gt; | |String|   


Retorno Status Pagamento XML
-----------------------------

| Tag                      | Explicação                           | Valor    | 
|:-------------------------|:-------------------------------------|:---------| 
| &lt;RetornoStatusPagamento&gt; | Elemento raíz do retorno.            |          | 
| &lt;PedidoNumeroLoja&gt;       | Identificador do pedido na loja      | String   | 
| &lt;Status&gt;                 | Status to pedido                     |String <nobr><br>-APROVADO <br> -INVALIDO<br> -PENDENTE<br> -NEGADO<br> -CANCELADO<br> -CHARGEBACK</nobr> | 
| &lt;Modulo&gt;                 | Tipo de pagamento usado              | String   | 
| &lt;MeioPagamento&gt;          | Forma de pagamento usada             | String   | 
| &lt;DataPagamento&gt;          | Data do pagamento                    | String   | 
| &lt;ValorPago&gt;              | Valor total pago                     | Decimal  | 
| &lt;Mensagem&gt;               |                                      | String   | 
| &lt;NivelRisco&gt;             | Indicador do risco de ser uma fraude |  String <br>-BAIXO <br>-MEDIO <br>-ALTO <br>-" " | 


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
