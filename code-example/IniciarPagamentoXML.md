Iniciar Pagamento
=================

C#
---

```C#
var client = new RestClient("https://moeda.digital/gateway.asmx/IniciarPagamentoXML");
var request = new RestRequest(Method.POST);
request.AddHeader("content-type", "application/x-www-form-urlencoded");
request.AddParameter("application/x-www-form-urlencoded", pedidoXML , ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

PHP
---

```PHP
<?php

$request = new HttpRequest();
$request->setUrl('https://moeda.digital/gateway.asmx/IniciarPagamentoXML');
$request->setMethod(HTTP_METH_POST);

$request->setHeaders(array(
  'content-type' => 'application/x-www-form-urlencoded'
));

$request->setContentType('application/x-www-form-urlencoded');
$request->setPostFields(array(
  'clsPedido' => $pedidoXML
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

```