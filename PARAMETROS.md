
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
| PortadorNome        | Nome que está no cartão | String | Depende\* | 

\* Apenas para compras no cartão.

###Exemplo

```xml
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
