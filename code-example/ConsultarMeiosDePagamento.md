Consultar Meios de Pagamento
============================

C#
---

```C#

var client = new RestClient("http://localhost:23296/Gateway.asmx/ConsultaMeiosDePagamento?Loja=xxxxxx-xxxx-xxxxx-xxxx-xxxxxxxxxx&Aplicacao=app-teste&Meios=TODOS");
var request = new RestRequest(Method.GET);

IRestResponse response = client.Execute(request);

```

PHP
---

```PHP
<?php

$request = new HttpRequest();
$request->setUrl('http://moeda.digital/gateway.asmx/ConsultaMeiosDePagamento');
$request->setMethod(HTTP_METH_GET);

$request->setQueryData(array(
  'Loja' => 'xxxxxx-xxxx-xxxxx-xxxx-xxxxxxxxxx',
  'Aplicacao' => 'app-teste',
  'Meios' => 'TODOS'
));

try {
  $response = $request->send();

  echo $response->getBody();

} catch (HttpException $ex) {
  echo $ex;
}

?>

```

Resposta
---

```

//Body
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