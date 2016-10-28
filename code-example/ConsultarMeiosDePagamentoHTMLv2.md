Consultar Meios De Pagamento HTMLv2
===================================

C#
---

```C#

```

PHP
---

```PHP
<?
function ConsultarMeiosPagamentoHTMLv2($lojaToken, $lojaApp, $meioPagamento) {

?>

```

HTTP GET
--------

```

```

Retorno
-------

```
<string xmlns="http://tempuri.org/">
	<div id='MoedaDigital' style='float:left; width: 99%; margin: 10px auto; text-align: center;' >
		<div id='mdBandeiras' style= 'display:block; width: 80%; margin: 10px auto; text-align: center;' > 
			<div style="display:block;"> <br /> 
				<div style="float:left; padding:7px;">
					<label for='CIELO-VISA'>
						<input type='radio' id='CIELO-VISA' name='MD_MeioPagto' value='CIELO-VISA' checked="checked" /> 
						<img src='https://moeda.digital/Imagens/Bandeiras/visa.png' alt="" /> 
					</label> 
				</div> 
				<div style="float:left; padding:7px;"> 
					<label for='ITAU-BOLETO'>
						<input type='radio' id='ITAU-BOLETO' name='MD_MeioPagto' value='ITAU-BOLETO' /> 
						<img src='https://moeda.digital/Imagens/Bandeiras/boleto.png' alt="" /> 
					</label>
				</div> 
			</div> 
		</div> 
		<input type='hidden' id='MD_ValorBoleto' name='MD_ValorBoleto' value='100.00' /> 
		<input type='hidden' id='MD_ValorParcela' name='MD_ValorParcela' value='100.00' /> 
		<div style='display:block; width:530px; margin: 10px auto;'> <br />
			<div id='MD_Header' style='float: left; width:530px; margin: 10px auto;'> <br /> 
				<div style='float: left; width:180px; text-align:left;'><b>Quantidade de Parcelas</b></div>
				<div style='float: left; width:110px; text-align:right;'><b>Valor da Parcela</b></div> 
				<div style='float: left; width:110px; text-align:right;'><b>Valor Total</b></div> 
				<div style='float: left; width:120px; text-align:center;'><b>Obs.</b></div> 
			</div>
			<div id='div_MD_cartao' style='float:left; width:530px; margin: 0px auto;'> 
				<div style='float:left; width:180px; text-align:left;'> 
					<input type='radio' id='MD_FormaPagto1' name='MD_FormaPagto' value='1' checked='checked' />&nbsp;1 parcela
				</div> 
				<div style='float:left; width:110px; text-align:right;'> 100,00&nbsp;</div>
				<div style='float:left; width:110px; text-align:right;'> 100,00&nbsp;</div>
				<div style='float:left; width:120px; text-align:left;'>&nbsp;&nbsp;</div> 
			</div> 
		</div> 
	</div>
</string>
```