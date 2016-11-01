Consultar Meios de Pagamento
============================


PHP
---

```PHP
<?
function ConsultarMeiosPagamento($lojaToken, $lojaApp, $meioPagamento) {

     $moedadigital_url = 'https://moeda.digital/gateway.asmx/ConsultaMeiosDePagamento';
     $soap = new SoapClient($moedadigital_url); 

     $array_meios_pagamento = array(
     	"Loja" => $lojaToken,       
     	"Aplicacao" => $lojaApp,       
     	"Meios" => $meioPagamento
     	); 
 
     $Result = $soap->ConsultaMeiosDePagamento($array_meios_pagamento);
     var_dump ($Result); 
	//echo $Result->ConsultaMeiosDePagamento->Nome;
	//echo $Result->ConsultaMeiosDePagamento->Tipo;
	//echo $Result->ConsultaMeiosDePagamento->Imagem; }
?>

```

GET
---

```
//Pedido
http://localhost:23296/Gateway.asmx/ConsultaMeiosDePagamento?Loja=xxxxxxxxx-xxxx-xxxxx-xxxx-xxxxxxxx&Aplicacao=app-teste&Meios=TODOS

//Resposta
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