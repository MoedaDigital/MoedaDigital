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
<ArrayOfRetornoParcelas xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://tempuri.org/">
    <RetornoParcelas>
        <Parcela>0</Parcela>
        <ValorTotal>100,00</ValorTotal>
        <ValorParcela>100,00</ValorParcela>
        <Obs>À vista</Obs>
        <Mensagem />
    </RetornoParcelas>
    <RetornoParcelas>
        <Parcela>1</Parcela>
        <ValorTotal>100,00</ValorTotal>
        <ValorParcela>100,00</ValorParcela>
        <Obs />
        <Mensagem />
    </RetornoParcelas>
    <RetornoParcelas>
        <Parcela>2</Parcela>
        <ValorTotal>104,51</ValorTotal>
        <ValorParcela>52,25</ValorParcela>
        <Obs />
        <Mensagem />
    </RetornoParcelas>
    <RetornoParcelas>
        <Parcela>3</Parcela>
        <ValorTotal>106,04</ValorTotal>
        <ValorParcela>35,35</ValorParcela>
        <Obs />
        <Mensagem />
    </RetornoParcelas>
    <RetornoParcelas>
        <Parcela>4</Parcela>
        <ValorTotal>107,58</ValorTotal>
        <ValorParcela>26,90</ValorParcela>
        <Obs />
        <Mensagem />
    </RetornoParcelas>
</ArrayOfRetornoParcelas>
```