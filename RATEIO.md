RATEIO ou SPLIT
===============

Rateio
------

####Pré-Requisitos

-- Possuir Aplicação configurada como “**Integração com desenvolvimento próprio**“ 

-- Estar habilitado para cadastrar as contas dos outros recebedores (Para isso, entre em contato com nossa equipe)

####Indicação

 - Market Places
 - Aplicações com multiplos recebedores


####Como Fazer:

 - O rateio funciona da mesma maneira que o [Check-out Transparente](##integrando-check-out-transparente) ou [Check-out Transparente Html](##integrando-check-out-transparente-html) , porém você deve definir o parâmetro [**Rateios**](#parametros-rateios) dentro do Pedido.

 - Os valores serão dívididos entre as contas cadastradas, assim o dono da aplicação poderá ver quanto cada conta possuí para resgate e solicitar a transferência para cada uma delas.

Recorrência
===========

###Recorrência

####Pré-Requisitos

-- Possuir Aplicação configurada como “**Integração com desenvolvimento próprio**“ 

####Indicação

 - Planos de assinatura
 - Doações parceladas sem cobraça de juros

####Como Fazer:

 - A recorrência funciona da mesma maneira que o [Check-out Transparente](##integrando-check-out-transparente) ou [Check-out Transparente Html](##integrando-check-out-transparente-html) , porém você deve definir o parâmetro [**Recorrencia**](#parametros-recorrencia) dentro do Pedido.

 - O código do pedido no retorno será acrescido do número da recorrência sobre o total de vezes que se repetirá. ex: "código(1/12)".

 - Caso um dos pedidos seja negado, os outros pedidos serão cancelados automáticamente e uma notificação de pedido negado será enviada pela [URL de Retorno](#acompanhamento-dos-pedidos-webhook-url-de-retorno), cabe a aplicação fazer um novo pedido para poder dar continuidade aos pagamentos.

