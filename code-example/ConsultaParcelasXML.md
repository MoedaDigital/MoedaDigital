Consulta Parcelas XML
=====================

C#
---

```C#
var client = new RestClient("https://moeda.digital/gateway.asmx/ConsultaParcelasXML?Loja=xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx&Aplicacao=app-teste&Valor=10000");
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
```

PHP
---

```PHP
<?php
$request = new HttpRequest();
$request->setUrl('https://moeda.digital/gateway.asmx/ConsultaParcelasXML');
$request->setMethod(HTTP_METH_GET);

$request->setQueryData(array(
  'Loja' => 'xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx',
  'Aplicacao' => 'app-teste',
  'Valor' => '10000'
));

$request->setHeaders(array(
  'postman-token' => 'e262013d-6cab-fd3c-f840-51a091ebb751',
  'cache-control' => 'no-cache'
));

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}
?>
```

Retorno
-------

```
//Body
<?xml version="1.0" encoding="utf-8"?>
<string xmlns="http://tempuri.org/">s:xsd="http://www.w3.org/2001/XMLSchema"&gt;
  &lt;RetornoParcelas&gt;
    &lt;Parcela&gt;0&lt;/Parcela&gt;
    &lt;ValorTotal&gt;100,00&lt;/ValorTotal&gt;
    &lt;ValorParcela&gt;100,00&lt;/ValorParcela&gt;
    &lt;Obs&gt;À vista&lt;/Obs&gt;
    &lt;Mensagem /&gt;
  &lt;/RetornoParcelas&gt;
  &lt;RetornoParcelas&gt;
    &lt;Parcela&gt;1&lt;/Parcela&gt;
    &lt;ValorTotal&gt;100,00&lt;/ValorTotal&gt;
    &lt;ValorParcela&gt;100,00&lt;/ValorParcela&gt;
    &lt;Obs /&gt;
    &lt;Mensagem /&gt;
  &lt;/RetornoParcelas&gt;
</string>
```