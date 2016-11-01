Consultar Meios De Pagamento HTMLv2
===================================

C#
---

```C#
var client = new RestClient("https://moeda.digital/gateway.asmx/ConsultaMeiosDePagamentoHTMLv2?Loja=xxxxxxx-xxxx-xxxxx-xxxx-xxxxxxxx&Aplicacao=app-teste&Meios=TODOS&Valor=10000&Idioma=PT-BR");
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
```

PHP
---

```PHP
<?php

$request = new HttpRequest();
$request->setUrl('https://moeda.digital/gateway.asmx/ConsultaMeiosDePagamentoHTMLv2');
$request->setMethod(HTTP_METH_GET);

$request->setQueryData(array(
  'Loja' => 'xxxxxxx-xxxx-xxxxx-xxxx-xxxxxxxx',
  'Aplicacao' => 'app-teste',
  'Meios' => 'TODOS',
  'Valor' => '10000',
  'Idioma' => 'PT-BR'
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
<string xmlns="http://tempuri.org/"> 

	<script type="text/javascript">
 	//<![CDATA[ 
 	function set_MD_MeioPagto(_MD_MeioPagto) {
     if ((_MD_MeioPagto.indexOf("CIELO") == -1) && (_MD_MeioPagto.indexOf("REDECARD") == -1)) {
         document.getElementById('div_MD_debitoboleto').style.display = 'block'; 
         document.getElementById('div_MD_cartao').style.display = 'none'; 
         document.getElementById('MD_FormaPagto0').checked = true;  
         set_MD_FormaPagto('1', document.getElementById('MD_ValorBoleto').value);
     } 
     else 
     { 
         document.getElementById('div_MD_cartao').style.display = 'block'; 
         document.getElementById('div_MD_debitoboleto').style.display = 'none'; 
         document.getElementById('MD_FormaPagto1').checked = true;  
         set_MD_FormaPagto('1', '100.00');
         if (_MD_MeioPagto.indexOf("DISCOVER") != -1) {
             document.getElementById('div_MD_parcelado').style.display = 'none'; 
         } 
         else 
         { 
             document.getElementById('div_MD_parcelado').style.display = 'block'; 
         }
     }
 	}

 	function set_MD_FormaPagto(_MD_FormaPagto, _MD_ValorParcela) {
     var  _ValorParcela = document.getElementById('MD_ValorParcela');
     _ValorParcela.value = _MD_ValorParcela;
 	}
 
	//]]> 
	</script>
	<div id='MoedaDigital' style='float:left; width: 99%; margin: 10px auto; text-align: center;' >
		<div id='mdBandeiras' style= 'display:block; width: 80%; margin: 10px auto; text-align: center;' >
			<div style="display:block;"><br />
				<div style="float:left; padding:7px;">
					<label for='CIELO-VISA'>
						<input type='radio' id='CIELO-VISA' name='MD_MeioPagto' value='CIELO-VISA' onclick="set_MD_MeioPagto('CIELO-VISA')"  checked="checked"  /> 
						<img src='https://moeda.digital/Imagens/Bandeiras/visa.png' alt="" />
					</label>
				</div>
			<div style="float:left; padding:7px;">
				<label for='CIELO-MASTERCARD'>
					<input type='radio' id='CIELO-MASTERCARD' name='MD_MeioPagto' value='CIELO-MASTERCARD' onclick="set_MD_MeioPagto('CIELO-MASTERCARD')"  /> 
					<img src='https://moeda.digital/Imagens/Bandeiras/mastercard.png' alt="" />
				</label>
			</div>
			<div style="float:left; padding:7px;">
				<label for='CIELO-AMEX'>
					<input type='radio' id='CIELO-AMEX' name='MD_MeioPagto' value='CIELO-AMEX' onclick="set_MD_MeioPagto('CIELO-AMEX')"  /> 
					<img src='https://moeda.digital/Imagens/Bandeiras/amex.png' alt="" />
				</label>
			</div>
			<div style="float:left; padding:7px;">
				<label for='CIELO-DINERS'>
					<input type='radio' id='CIELO-DINERS' name='MD_MeioPagto' value='CIELO-DINERS' onclick="set_MD_MeioPagto('CIELO-DINERS')"  /> 
					<img src='https://moeda.digital/Imagens/Bandeiras/diners.png' alt="" />
				</label>
			</div>
			<div style="float:left; padding:7px;">
				<label for='CIELO-ELO'>
					<input type='radio' id='CIELO-ELO' name='MD_MeioPagto' value='CIELO-ELO' onclick="set_MD_MeioPagto('CIELO-ELO')"  /> 
					<img src='https://moeda.digital/Imagens/Bandeiras/elo.png' alt="" />
				</label>
			</div>
			<div style="float:left; padding:7px;">
				<label for='CIELO-DISCOVER'>
					<input type='radio' id='CIELO-DISCOVER' name='MD_MeioPagto' value='CIELO-DISCOVER' onclick="set_MD_MeioPagto('CIELO-DISCOVER')"  /> 
					<img src='https://moeda.digital/Imagens/Bandeiras/discover.png' alt="" />
				</label>
			</div>
			<div style="float:left; padding:7px;">
				<label for='ITAU-BOLETO'>
					<input type='radio' id='ITAU-BOLETO' name='MD_MeioPagto' value='ITAU-BOLETO' onclick="set_MD_MeioPagto('ITAU-BOLETO')"  /> 
					<img src='https://moeda.digital/Imagens/Bandeiras/boleto.png' alt="" />
				</label>
			</div>
		</div>
	</div>
	<input type='hidden' id='MD_ValorBoleto' name='MD_ValorBoleto' value='100.00' /> 
	<input type='hidden' id='MD_ValorParcela' name='MD_ValorParcela' value='100.00' /> 
	<div style='display:block; width:530px; margin: 10px auto;'><br />
		<div id='MD_Header' style='float: left; width:530px; margin: 10px auto;'><br />
			<div style='float: left; width:180px; text-align:left;'><b>Quantidade de Parcelas</b></div> 
			<div style='float: left; width:110px; text-align:right;'><b>Valor da Parcela</b></div> 
			<div style='float: left; width:110px; text-align:right;'><b>Valor Total</b></div> 
			<div style='float: left; width:120px; text-align:center;'><b>Obs.</b></div> 
		</div>
		<div id='div_MD_debitoboleto' style='float:left;  width:530px;  margin: 0px auto; display: none;'>
			<div style='float:left; width:180px; text-align:left;'>
				<input type='radio' id='MD_FormaPagto0' name='MD_FormaPagto' value='1' onclick="set_MD_FormaPagto('01','100.00')"  />&nbsp;1 parcela</div>
				<div style='float:left; width:110px; text-align:right;'> 100,00&nbsp;</div>
				<div style='float:left; width:110px; text-align:right;'> 100,00&nbsp;</div>
				<div style='float:left; width:120px; text-align:left;'>&nbsp;À vista&nbsp;</div>
			</div>
			<div id='div_MD_cartao' style='float:left;  width:530px;  margin: 0px auto;'>
				<div style='float:left; width:180px; text-align:left;'>
					<input type='radio' id='MD_FormaPagto1' name='MD_FormaPagto' value='1' onclick="set_MD_FormaPagto('1','100.00')"  checked='checked' />&nbsp;1 parcela
				</div>
				<div style='float:left; width:110px; text-align:right;'> 100,00&nbsp;</div>
				<div style='float:left; width:110px; text-align:right;'> 100,00&nbsp;</div>
				<div style='float:left; width:120px; text-align:left;'>&nbsp;&nbsp;</div>
				<div id='div_MD_parcelado' style='float:left;  width:530px;'>
					<div style='float:left;'>
   						<div style='float:left; width:180px; text-align:left;  margin: 0px auto;'>
   							<input type='radio' id='MD_FormaPagto2' name='MD_FormaPagto' value='2' onclick="set_MD_FormaPagto('2','52.25')" />&nbsp;2 parcelas
   						</div>
   						<div style='float:left; width:110px; text-align:right;'> 52,25&nbsp;</div>
  						<div style='float:left; width:110px; text-align:right;'> 104,51&nbsp;</div>
						<div style='float:left; width:120px; text-align:left;'>&nbsp;&nbsp;</div>
					</div>
					<div style='float:left;'>
 						<div style='float:left; width:180px; text-align:left;  margin: 0px auto;'>
  							<input type='radio' id='MD_FormaPagto3' name='MD_FormaPagto' value='3' onclick="set_MD_FormaPagto('3','35.35')" />&nbsp;3 parcelas
  						</div>
   						<div style='float:left; width:110px; text-align:right;'> 35,35&nbsp;</div>
   						<div style='float:left; width:110px; text-align:right;'> 106,04&nbsp;</div>
   						<div style='float:left; width:120px; text-align:left;'>&nbsp;&nbsp;</div>
					</div>
					<div style='float:left;'>
						<div style='float:left; width:180px; text-align:left;  margin: 0px auto;'>
							<input type='radio' id='MD_FormaPagto4' name='MD_FormaPagto' value='4' onclick="set_MD_FormaPagto('4','26.90')" />&nbsp;4 parcelas
						</div>
   						<div style='float:left; width:110px; text-align:right;'> 26,90&nbsp;</div>
   						<div style='float:left; width:110px; text-align:right;'> 107,58&nbsp;</div>
   						<div style='float:left; width:120px; text-align:left;'>&nbsp;&nbsp;</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</string>
```