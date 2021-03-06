Introdução
=========

Conteúdo
---------

Aqui você encontra o passo a passo de como fazer a integração com a Moeda Digital.


Conta MD
-------------

A conta MD é o cadastro na Moeda Digital que permite a empresa ou o profissional acessar a plataforma online e começar a receber. 
Dentro da área do usuário na plataforma Moeda Digital é  possível:

- Fazer testes de integração.
- Acompanhar os pedidos gerados pelo seu negócio.
- Analisar seus pedidos e recebimentos.
- Criar novas aplicações.
- Pedir a habilitação da loja para começar as vendas.

Integrações
----------------

###Checkout Transparente HTML

####Descrição

O checkout transparente HTML é o Checkout Transparente porém permite que a loja utilize de um HTML pronto com os meios de pagamento, possibilitando a adesão de novos meios de pagamento disponíveis sem a necessidade de mexer no site. 

Assim como no Checkout Transparente, o cliente não precisa deixar sua página para encerrar o pagamento, 

####Indicação

É a solução indicada para quem quer maior personalização e tenha condições técnicas para implementação, além de querer a possibilidade de mudar os meios de pagamento aceitos sem a necessidade mudanças no código.

O Checkout transparente possuí também um menor índice de desistência pelos compradores.

###Checkout Transparente

####Descrição

No Checkout transparente todo o processo de compra ocorre na página do E-commerce, o usuário não percebe a existência da Moeda Digital e o lojista tem a possibilidade de customizar todas as etapas em sua página.

####Indicação

É a solução indicada para quem quer maior personalização de sua página e tenha condições técnicas mais avançadas para implementação. 

O Checkout transparente possuí também um menor índice de desistência pelos compradores.


Recorrência
------------

####Descrição

A recorrência é uma maneira de fazer cobranças automáticas mensais no cartão do seu cliente, caso a primeira transação seja aprovada, serão agendadas cobranças pelo tempo especificado de até 12 meses.


####Indicação

- Vendas por assinatura.
- Serviços por assinatura.

Split / Rateio
--------------

####Descrição

O Rateio é a forma de dividir os valores recebidos entre uma ou mais contas, nele a aplicação segue o mesmo caminho do checkout transparente, porém informa com quais contas previamente cadastradas os valores devem ser divididos.

Após os recebimentos, o dono da aplicação pode solicitar as transferências dos valores disponíveis para cada conta.

####Indicação

- Market Places
- Aplicações com multiplos recebedores




PRIMEIROS PASSOS
================

Resumo
-----------

A lista a seguir é uma breve descrição de todos os passos necessários do início ao fim do processo de integração.

1. Criação da conta na Moeda Digital , através dela você terá acesso à plataforma e às ferramentas de  pagamento oferecidas.

2. Criar e Configurar uma Aplicação: 
<br>Cada conta MD pode criar diversas aplicações com distintas configurações;
Deve-se escolher o tipo de integração da aplicação
Deve-se escolher as opções de recebimento ( cartão, juros, boleto, número de parcelas aceitas, e etc)
>**Nota:** Inicialmente deve-se criar uma aplicação para teste que permite iniciar a integração. (Utilizar aplicações em produção apenas é possível após entrar em contato com nossa equipe)

4. Começar os testes, você poderá gerar transações para a aplicação de teste e verificar se os pedidos estão sendo gerados e processados corretamente, além de se acostumar com o painel da plataforma onde poderá ver relatórios sobre suas transações.

5. Habilitar sua conta em produção, basta pedir a habilitação da sua loja através da plataforma. No menu ***Administração → Conta*** termine o preenchimento dos seus dados cadastrais, verifique as tarifas combinadas e aceite o termo de uso para que sua loja entre em análise e seja habilitada para poder operar em produção.

6. Receber!


Criando Conta
--------------------

Criar uma conta na Moeda Digital é muito simples, basta:

1. Acessar o site da Moeda Digital e clicar em "CRIAR CONTA".
2. Preencher o formulário com as informações requisitadas.

Feito isso, você conseguirá entrar na plataforma da Moeda Digital através do site da Moeda digital clicando em "Acessar"; de lá você pode verificar relatórios, criar aplicações, fazer testes de integração entre outras funcionalidades. 

>**Nota:** Para poder realizar uma venda real, entre em ***Administração → Conta*** , preencha os campos necessários e solicite a habilitação de sua loja. 


Criando Aplicação
-------------------------

####Pré-requisitos:

-- Ter uma Conta MD.

####Passos:

1. Entre com seu usuário na plataforma.

2. No menu superior vá na área  ***Administração → Aplicações*** 
Aqui você encontrará um campo de seleção com a opção "Criar uma Nova Aplicação"

3. Preencha os campos com as configurações escolhidas e clique em Salvar.
>**Nota:** Você encontrará uma descrição dos campos mais abaixo. 

4. Pronto, você possui uma nova aplicação.

####Campos: 

| Campo    | O que é | O que faz|
| :-----------------| :---- | :--- |
| Código da Aplicação| Identificador único de cada aplicação dentro de sua conta MD|Identificar a aplicação referente a cada pedido.|
| Token | Identificador único de cada conta MD|Identificar a qual conta MD o pedido se refere.|
| Tipo de Aplicação|Campo que define que tipo de integração foi escolhida para a aplicação|Mostra como o pedido deve proceder.|
|URL de Retorno|Um link para a Moeda Digital avisar as mudanças de status de cada pedido.|Quando um pedido muda de status a Moeda Digtal faz uma requisição ao link avisando sobre a mudança.|
|Meios de Pagamento|Os meios de pagamento que serão aceitos por você|Permite que o cliente pague apenas com os meios selecionados.|
|Quantidade Máxima de Parcelas| Campo com as opções de parcelamento | Determina até quantas vezes o cliente poderá parcelar a compra no cartão  |
|Não cobrar juros para as parcelas|Campo com opções de parcelamento  | Determina a quantidade de parcelas que não serão cobrados juros do cliente |
|Valor mínimo da parcela| Valores mínimos para aceitar parcelemaneto | Define o valor mínimo que será aceito para cada parcela de uma compra |


Sandbox
--------

O ambiente sandbox é disponibilizado para fazer testes de integração, ele pode ser utilizado ainda que a loja não esteja habilitada.

No canto superior do painel é possiível alterar para o painel de sandbox, nele é possível verificar os pedidos de teste feitos e alterar seus status acionando o webhook.

Para fazer pedidos em homologação basta utilizar a url **http://sandbox.moeda.digital/gateway.asmx/** nos métodos fornecidos.

Números de Cartão para teste que serão aprovados em homologação:  
    
- 4242424242424242
- 5555555555554444
- 378282246310005
- 6011111111111117
- 30569309025904





