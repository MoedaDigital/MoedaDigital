Consultar Meios de Pagamento
============================

C#
---

```C#

```

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