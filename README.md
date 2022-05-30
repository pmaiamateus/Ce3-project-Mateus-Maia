# Bem vindos ao Projeto de cadastro de clientes para a empresa Ce3 health tech

Este projeto foi desenvolvido e destinado para uma vaga de emprego na empresa Ce3 health tech para demonstrar conhecimentos de programação e desenvolvimento web.

A proposta é desenvolver uma aplicação que armazena e atualiza cadastros de clientes da empresa de forma rápida e dinâmica.

---

## Sobre este repositório

Este repositório é o projeto por inteiro, sendo que dentro dele existe a parte de back-end e a parte de front-end, tratando tanto da parte cadastrar e atualizar o cadastro, verificando os dados antes de postá-los no banco, quanto a parte de front-end de forma interativa e rápida que possui um formulário para colocar os dados do cliente e a comunicação adequada com o banco.

Obs.: Caso tenha algum problema com a comunicação com o banco de dados, o arquivo que trabalha os dados do banco é Ce3-project-Mateus-Maia/back-end/.env

Sendo assim, foram requisitos do projeto:

### . Requisitos técnicos:

1. Front-end em React.
2. Back-end em NodeJS, com MySQL e sequelize (peço compreensão na parte de ser feita em NodeJS pois na Trybe foi aprendido python somente para ciência de dados. No entanto, ja deixo em evidência de antemão que estou aberto a aprender como é feito a linguagem em python ou a linguagem que a empresa usa).

### . Funcionalidades:

1. Cadastrar clientes.
2. Atualizar e editar cadastros.
3. Cada cadastro é unico com a chave CPF (não há cadastros duplicados utilizando o mesmo CPF)
4. Convênio selecionado em lista
5. Arquiteturas em camadas.
6. Temporariamente, o CPF ainda é obrigatório e ainda não foi feita a tabela de convênios.

## Como Instalar:

### Pré-requisitos:

1. MySql2 configurado
2. NPM
3. gitHub
4. VSCode ou algum programa similar

### Instalação

1. abra um terminal na pasta que deseja clonar o repositório (pode ser feito usando o botão direito do mouse).
2. copie os comandos:

   . git clone https://github.com/pmaiamateus/Ce3-project-Mateus-Maia.git

   . cd Ce3-project-Mateus-Maia

   . npm install
   
4. Caso queira apenas iniciar a aplicação, use "npm start" no terminal
5. Caso queira ver logs no terminal, será necessário usar:

   . cd back-end

   . npm run db:reset

   . npm start (inicia o back-end da aplicação)

   . *Abrir outro terminal*

   . cd front-end

   . npm start (inicia a aplicação front end)
    

## Como utilizar:

A aplicação possui uma rota apenas ('/') para os cadastros no back-end, que funciona da seguinte forma:
* `/` `POST` armazena um novo cadastro;
* `/` `PUT` atualiza um cadastro;

## Como foi desenvolvido:

Devido a problemas pessoais e por causa da rotina pesada essa semana na faculdade, eu consegui focar no projeto apenas no domingo e na segunda. Por causa disso que as implementações da tabela de convênios e o cadastro sem CPF não foram implementados (ou implementados em cima do tempo limite), além de quase todos os dados serem entregues em string (que podem ser organizados de forma melhor mas foi necessário fazer o projeto da forma mais rápida e direta para ser entregue o mais completo possível). 

Queria também ter feito testes para toda a aplicação em front e back end, porém com a falta de tempo decidi fazer os requisitos do projeto. Para ver um projeto feito com testes feito por mim, tem o projeto feito para um teste na Trybe no repositório: https://github.com/pmaiamateus/Ebyrt-project

### Tecnologias:

Para este projeto, foram utilizados NodeJS com javascript, typescrypt e react.

### Banco de dados:

O banco de dados foi conforme o pedido, com todas as colunas adequadas, porém quase todos os dados ainda em string (o que poderia causar problemas pois deixa os dados mais suscetíveis a erros)

### Próximos passos:

. Tornar o CPF facultativo para postar um cadastro no banco de dados
. Criar a tabela de convenios para ser consultada no front ao abrir a página

### Contatos:

https://www.linkedin.com/in/pmaiamateus/

https://github.com/pmaiamateus

email: pmaiamateus@gmail.com

telefone: (11) 954563519
