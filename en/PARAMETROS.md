
REFERENCES
==========

Pedido
--------

###Fields

| Name          | Type   | Mandatory | Size | Format                             | Description                                                            |
|:--------------|:-------|:------------|:--------|:------------------------------------|:---------------------------------------------------------------------|
| Token         | string | Yes         | -       | -                                   | Store unique token found in the administrator panel |
| Aplicacao     | string | Yes         | -       | -                                   | Name of the application|
| CodigoPedido  | object | Yes         | -       | -                                   | Merchant's order identifier |
| PedidoEmissao | date | No         | -       | “dd/mm/aaaa hh:mm:ss”               | Date the order was created                                       |
| Produto       | string | Yes         | -       | -                                   | Name of the product sold ( it will appear in the "Boleto" description )     |
| [Cliente](#references-cliente)       | object | Yes         | -       | &lt;Cliente&gt;&lt;/Cliente&gt;     | Element containing client's information                          |
| [Endereco](#references-endereco)      | object | Yes         | -       | &lt;Endereco&gt;&lt;/Endereco&gt;   | Element containing address information            |
| [Pagamento](#references-pagamento)     | object | Yes         | -       | &lt;Pagamento&gt;&lt;/Pagamento&gt; | Element containing payment information                       |



###Example

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
      <DDD></DDD>
      <Telefone></Telefone>
      <TelefoneTipo></TelefoneTipo>
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
       <Recorrencia>
            <Recorrente></Recorrente>
            <Tempo></Tempo>
       </Recorrencia>
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

| Name        | Type   | Mandatory | Size      | Format         | Description               |
|:------------|:-------|:------------|:-------------|:----------------|:------------------------|
| Endereco    | -      | -           | -            | -               | Root Element            |
| Logradouro  | string | Yes         | -            | -               | Street Name             |
| Numero      | int    | Yes         | -            | -               | Place's number          |
| Complemento | string | No          | -            | -               | Complement              |
| Bairro      | string | Yes         | -            | -               | Neighborhood            |
| Cidade      | string | Yes         | -            | -               | City                    |
| UF          | string | Yes         | 2 Characters | ex: BH          | State Code              |
| CEP         | string | Yes         | -            | -               | Postal Code             |
| Pais        | string | Yes         | 2 Characters | ex: BR          | Country Code            |

Cliente
-------

| Name        | Type   | Mandatory | Size |Format | Description |
|:-------------|:-------|:--------------|:----------|:----------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------|
| Cliente      | -      | -             | -         | -                                                                                             | Root Element               |
| NomeCompleto | string | Yes | -         | -                                                                                             | Client full name|
| RazaoSocial  | string | Look at description | -         | -                                                                                             | Company's name, Mandatory for legal person                                                                                  |
| Genero       | char   | Yes           | -         | <nobr>J for Legal Person<BR>I for International Client<br>M for Natural Person</nobr> | Gender that describes the purchaser, it is mandatory to complete one of the following fields: NomeComple ou RazaoSocial |
| CpfCnpj      | string | Look at description | -         | -                                                                                             | Document field, CPF for Natural Person and CNPJ for Legal Person, not required for international clients                              |
| Idioma       | string | Yes           | -         | ES_ES<br>PT-BR<br>EN_US                                                                       | Client language                                                                                                                      |
| Email        | string | Yes           | -         | -                                                                                             | Client's E-mail                                                                                                                       |
| DDD          | string | Yes           | 2 Digitos | ex: 41                                                                                        | Telephone's area code                                                                                                                         |
| Telefone     | string | Yes           | -         | -                                                                                             | Client's telephone number                                                                                                                     |

| TelefoneTipo| string | No         | -            | ex: Residencial | Type of telephone        |

Pagamento
---------

| Name        | Type   | Mandatory | Size |Format  | Description |
|:---------------|:-------|:------------|:--------------|:-----------------------------------------------------------------------|:----------------------------------------------------------------------------------|
| Pagamento      | -      | -           | -             | -                                                                      | Root Element
| ValorTotal     | int    | Yes         | -             | Number with two decimal digits and no pontuation ex: 10000 to R$100.00 | Total value to be paid                                          |
| Meio           | string | Yes         | -             | CREDITO<br>DEBITO<br>BOLETO<br>TRANSFERENCIA                                               | Payment method name               |
| Instrucoes     | string | No         | -             | -                                                                      | Instructions about how the payment should be done ( it will appear in the "Boleto" description )  |
| Moeda          | string | Sim         | -             | ex: BRL                                                                | Currency with the purchaser will be charged   |
| Vencimento     | date   | Sim         | -             | "dd/mm/aaaa"                                                           | Date that the payment expires and will no longer be accepted
| Parcelamento    | object | Sim         | 1 Character    |                                                                        | Node containing information about the installments                                   |
| *Parcelamento*<br><nobr>&emsp;ValorSemJuros</nobr>  | int   | *Yes*<br><nobr>&emsp;Yes</nobr> | -      |Number with two decimal digits and no pontuation ex: 10000 to R$100.00| Total value to be paid without interests |                                                 
| *Parcelamento*<br><nobr>&emsp;Parcelas</nobr> | int    | *Yes*<br><nobr>&emsp;Yes</nobr>  | max 2 digits | value between  1 and 12| Number of payment installments ( use 1 payment methods different from "CREDITO" , credit card)                   |
| *Parcelamento*<br><nobr>&emsp;ValorParcela</nobr> | int   | *Yes*<br><nobr>&emsp;Yes</nobr> | -      |Number with two decimal digits and no pontuation ex: 10000 to R$100.00  | Each installment's value |    
| [Cartao](#parametros-cartao)    | object | No         |  -   | &lt;Cartao&gt;&lt;/Cartao&gt; | Node containing credit or debit card information, if not sent  when "CREDIT" or "DEBIT" is choosen, it will be returned a link to proceed the payment through our By Page in Moeda Digital environment        |
  
Cartão
------

| Name         | Type   | Mandatory   | Size    |Format   | Description                  |
|:-------------|:-------|:------------|:--------|:--------|:-----------------------------|
| Cartao       | -      | -           | -       | -       | Root Element                 |
| Numero       | int    | Yes         | -       | -       | Card number                  |
| Bandeira     | string | Yes         | -       | AMEX<br>MASTERCARD<br>VISA<br>ELO<br>           | Card Brand as described in the application's configuration |
| Validade     | string | Yes         | -       | "mm/aa" | Card expiration date         |
| CVV          | int    | Yes         | -       | -       | Card Verification Value      |
| PortadorNome | string | Yes         | -       | -       | Card Holder name             |



Retorno do Pedido XML
---------------------

| Name                | Explanation                       | Value       | 
|:-------------------|:-------------------------------- |:------------| 
| &lt;RetornoPedido&gt;    | Root Element        |             | 
| &lt;NSU&gt;              |                                  | String      | 
| &lt;Mensagem&gt;         |                                  | String      | 
| &lt;Retorno&gt;          |                                  |             | 
| &lt;PedidoStatus&gt;     | Order's status      |<nobr><br>APROVADO<br>INVALIDO<br>PENDENTE<br>NEGADO<br>CANCELADO<br>ESTORNADO<br>CHARGEBACK</nobr> |
| &lt;Conteúdo&gt;         |                                  | String      | 
| &lt;PedidoNumeroLoja&gt; | Merchant's order identifier | String      | 


Array Retorno Meios de Pagamento XML
------------------------------

| Name                | Explanation                       | Value       | 
|:-------------------|:-------------------------------- |:------------|
| &lt;ArrayOfRetornoMeiosPagamento&gt; | Root Element      | 1 or more RetornoMeiosPagamento elements    | 
| &lt;RetornoMeiosPagamento&gt;        | Node RetornoMeiosPagamento | &lt;RetornoMeiosPagamento&gt;&lt;/RetornoMeiosPagamento&gt;     |          
| *RetornoMeiosPagamento*<br><nobr>&emsp;&lt;Nome&gt;</nobr>  | Name of the payment method or card brand |<nobr>String <br>-"Visa"<br>-"Mastercard"<br>-"Diners"<br>-"Elo"<br>-"Amex"<br>-"Boleto" </nobr>  |  
| *RetornoMeiosPagamento*<br><nobr>&emsp;&lt;Tipo&gt;</nobr>  | Payment method| String - <br>CREDITO <br>BOLETO <br>DEBITO | 
| *RetornoMeiosPagamento*<br><nobr>&emsp;&lt;Parcelado&gt;</nobr> | If installments are accepted | "S" (YES) or "N" (NO)| 
| *RetornoMeiosPagamento*<br><nobr>&emsp;&lt;Imagem&gt;</nobr>  | payment's method image URL| String - URL | 
| *RetornoMeiosPagamento*<br><nobr>&emsp;&lt;Mensagem&gt;</nobr>  | |String|   

###Example

```xml

<?xml version="1.0" encoding="utf-8"?>
<ArrayOfRetornoMeiosPagamento xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://tempuri.org/">
  <RetornoMeiosPagamento>
    <Nome>CIELO-VISA</Nome>
    <Descricao>Visa</Descricao>
    <Tipo>CREDITO</Tipo>
    <Parcelado>S</Parcelado>
    <Imagem>https://moeda.digital/Imagens/Bandeiras/visa.png</Imagem>
    <Mensagem />
  </RetornoMeiosPagamento>
  <RetornoMeiosPagamento>
    <Nome>ITAU-BOLETO</Nome>
    <Descricao>Visa</Descricao>
    <Tipo>BOLETO</Tipo>
    <Parcelado>S</Parcelado>
    <Imagem>https://moeda.digital/Imagens/Bandeiras/boleto.png</Imagem>
    <Mensagem />
  </RetornoMeiosPagamento>
</ArrayOfRetornoMeiosPagamento>
```

Retorno Status Pagamento XML
-----------------------------

| Name                | Explanation                       | Value       | 
|:-------------------------|:-------------------------------------|:---------| 
| &lt;RetornoStatusPagamento&gt; | Root Element        |          | 
| &lt;PedidoNumeroLoja&gt;       | Merchant's order identifier     | String   | 
| &lt;Status&gt;                 | Order's status                    | String <nobr><br>APROVADO<br>INVALIDO<br>PENDENTE<br>NEGADO<br>CANCELADO<br>CHARGEBACK</nobr> | 
| &lt;Modulo&gt;                 |              | String   | 
| &lt;MeioPagamento&gt;          | Payment method used             | String   | 
| &lt;DataPagamento&gt;          | Payment date                   | String   | 
| &lt;ValorPago&gt;              | Total value paid                  | Decimal  | 
| &lt;Mensagem&gt;               |                                      | String   | 
| &lt;NivelRisco&gt;             | Fraud risk indicator | String <br>-BAIXO <br>-MEDIO <br>-ALTO <br>-" " | 



Retorno Parcelas Array
--------------------

| Name                | Explanation                       | Value       | 
|-----------------------------------------------------|---------------------------|---------------------------------------| 
| &lt;ArrayOfRetornoParcelas&gt;  element                     | Root element           | 1 or more &lt;RetornoParcelas&gt; | 
| &lt;RetornoParcelas&gt;                             | Node RetornoParcelas |                                     | 
| *&lt;RetornoParcelas&gt;*<br><nobr>&emsp;&lt;Parcela&gt;</nobr>      | Installments number       | Int                                   | 
| *&lt;RetornoParcelas&gt;*<br><nobr>&emsp;&lt;ValorTotal&gt;</nobr>   | Purchase total value    | Decimal                               | 
| *&lt;RetornoParcelas&gt;*<br><nobr>&emsp;&lt;ValorParcela&gt;</nobr> | Installment value    | Decimal                               | 
| *&lt;RetornoParcelas&gt;*<br><nobr>&emsp;&lt;Obs&gt;</nobr>          |                           | String                                | 
| *&lt;RetornoParcelas&gt;*<br><nobr>&emsp;&lt;Mensagem&gt;</nobr>     |                           | String                                | 
