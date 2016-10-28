
PARÂMETROS XML
==============

Pedido XML
-----------------

###Campos

| Nome          | Tipo   | Obrigatório | Tamanho | Formato                             | Descrição                                                            |
|:--------------|:-------|:------------|:--------|:------------------------------------|:---------------------------------------------------------------------|
| Token         | objeto | Sim         | -       | -                                   | Token da loja disponível no painel do administrador da Moeda Digital |
| Aplicacao     | string | Sim         | -       | -                                   | Nome da aplicação criada no painel do administrador da Moeda Digital |
| CodigoPedido  | objeto | Sim         | -       | -                                   | Código identificador do pedido na loja                               |
| PedidoEmissao | objeto | Não         | -       | “dd/mm/aaaa hh:mm:ss”               | Data de emissão do pedido                                            |
| Produto       | string | Sim         | -       | -                                   | Nome do produto sendo vendido (Será mostrado em caso de boleto)      |
| Cliente       | objeto | Sim         | -       | &lt;Cliente&gt;&lt;/Cliente&gt;     | Elemento contendo as informações do cliente                          |
| Endereco      | objeto | Sim         | -       | &lt;Endereco&gt;&lt;/Endereco&gt;   | Elemento contendo as informações do endereço de cobrança             |
| Pagamento     | objeto | Sim         | -       | &lt;Pagamento&gt;&lt;/Pagamento&gt; | Elemento contendo as informações do pagamento                        |
| Rateios       | objeto | Não         | -       | &lt;Rateios&gt;&lt;/Rateios&gt;     | Elemento contendo as divisões do valor recebido                      |

\* Apenas para compras no cartão.

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
| &lt;Status&gt;                 | Status to pedido                     | String <br>-BAIXO <br>-MEDIO <br>-ALTO <br>-" " | 
| &lt;Modulo&gt;                 | Tipo de pagamento usado              | String   | 
| &lt;MeioPagamento&gt;          | Forma de pagamento usada             | String   | 
| &lt;DataPagamento&gt;          | Data do pagamento                    | String   | 
| &lt;ValorPago&gt;              | Valor total pago                     | Decimal  | 
| &lt;Mensagem&gt;               |                                      | String   | 
| &lt;NivelRisco&gt;             | Indicador do risco de ser uma fraude | String <nobr><br>-APROVADO <br> -INVALIDO<br> -PENDENTE<br> -NEGADO<br> -CANCELADO<br> -CHARGEBACK</nobr> | 


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
| &lt;IpCadastro&gt;   | Ip do cliente| String Formato: <nobr>"ddd.ddd.ddd.ddd"</nobr>     | Não    | 
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
