MODULOS e PLUGINS
==================

###Sobre

Utilize os Plugins e Módulos disponíveis para integrar com as principais plataformas de e-commerce.

>**Nota**: Não se esqueça de se cadastrar na Moeda Digital para poder configurar os plugins corretamente. 


WooCommerce
-----------

###Instalação

 1. Faça o Download do módulo:
	 [GitHub Download](https://github.com/MoedaDigital/WooCommercePlugin/archive/master.zip) (v1.1.1)
	 >**Nota:** Descompacte o arquivo e compacte apenas a pasta **moedadigital**

 2. No painel de admin do wordpress vá em ***Plugins → Adicionar Novo***

 3. Clique em **Fazer upload do plugin**, escolha o arquivo .zip baixado anteriormente e selecione **Instalar**.
 	
	![Configuração](images/modulos/woocommerce/2.PNG)

 4. Após a instalação, clique em **Ativar Plugin**.

	![Configuração](images/modulos/woocommerce/3.PNG)

###Configurando

 1. Dentro do painel de admin vá em ***WooCommerce → Settings (Configurações)***, e selecione a aba **Checkout (Finalizar Compra)** (Finalizar Compra)
	
	![Configuração](images/modulos/woocommerce/4.PNG)

 2. Em ***Checkout Options (Opções de pagamento)*** , clique em ***Moedadigital*** e preencha os campos:
	
	- Ativar/Desativar: Selecione este campo para que o WooCommerce apresente a Moeda Digital como meio de pagamento.
	- Titulo: Nome que será exibido ao cliente na seleção de meio de pagamentos ao finalizar a compra.
	- Description: Texto que será exibido ao cliente dentro da opção de pagar pela Moeda Digital.
	- Token: O Token da sua loja na Moeda Digital. (Pode ser consultado no painel do Administrador no site da Moeda Digital).
	- Aplicação: O nome da aplicação configurada dentro da Moeda Digital.

	![Configuração](images/modulos/woocommerce/5.PNG)
 
 3. Clique em salvar. Pronto! o seu site está configurado para utilizar a Moeda Digital.
 
 4. Dentro das configurações da aplicação no painel da Moeda Digital, configure a URL de retorno para 
	``` 
	dominio/index.php?wc-api=retorno_moeda_digital&?
	```
	substituindo **dominio** pelo endereço de seu site. 

 5. Escolha tipo de retorno : **URL** 
 
 6. Faça alguns testes e Boas vendas!
