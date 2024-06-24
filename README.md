# ecommerce-fed
Projeto final da disciplina Front-End Development, onde desenvolvemos um E-commerce utilizando as tecnologias estudadas durante o módulo. Criamos as interfaces do sistema utilizando ReactJS e Tailwind CSS, implementando diversos tipos de comunicação entre componentes, além de integrar e consumir dados de uma API externa.

![Logo](https://raw.githubusercontent.com/tadeujeronimo/ecommerce-fed/main/public/logo192.png)


## Projeto entregável final

O aluno deve entregar um projeto completo com as linguagens estudadas nesse módulo com o tema E-commerce. 


## Entregas

#### - Utilizar o React como biblioteca front-end:

O projeto foi criado com React na versão 18.3.

#### - Desenvolver no mínimo 5 páginas da aplicação:

Foram desenvolvidas as páginas de Home, Login, Registro, 404 e CRUD de Produtos (Listagem com Exclusão e ações/botões para páginas de Criação e Edição).

#### - Todas as páginas estilizadas com Tailwind CSS:

Todas as páginas foram estilizadas com Tailwind CSS v3, inclusive foram implementados os modos light e dark.

#### - Implementação de fluxo de autenticação com rotas seguras:

Foi implementado um esquema de autenticação que libera o acesso ao CRUD de Produtos somente após login bem-sucedido. No projeto existe um conjunto pré-definido de usuários mockados que devem ser utilizados para simular um ambiente de autenticação realista, pois são os mesmos fornecidos pela Fake Store API para obtenção de token JWT (JSON Web Token), uma vez que a API não suporta o registro de novos usuários em seu servidor.

#### - CRUD completo (Criação, Leitura, Edição e Exclusão):

Foi criado um CRUD completo, em rotas seguras, para gerenciamento de produtos do e-commerce.

#### - Troca de dados entre rotas e componentes da aplicação:

Foram implementados vários tipos de troca de informações entre componentes e/ou rotas. Por exemplo: Na rota da edição de um produto, e entre componentes via propriedades, atributo children e contexto. Além disso, foram utilizados diversos Hooks, tais como: useState, useEffect, useContext, useCallback e Custom Hooks (useAuth e usePageTitle).

#### - Troca de pelo menos uma informação via estado global (contexto):

O Context API foi empregado para criar um fluxo de autenticação eficiente e para gerenciar o estado das informações do usuário logado em toda a aplicação, facilitando o compartilhamento de dados entre componentes de forma global.

#### - Integração com serviço externo consumindo os principais métodos (GET/POST/PUT/DELETE):

Os pincipais métodos foram todos consumidos fazendo uso da Fake Store API, que fornece uma API REST online gratuita com dados pseudo-reais de comércio eletrônico ou site de compras. Porém, as operações não são persistidas no banco do serviço, o que não é problema para requisição do tipo GET. Com isso, foi implementado no CRUD de Produtos uma estratégia utilizando Local Storage. Ou seja, sempre que for realizada alguma requisição dos demais tipos (POST/PUT/DELETE), após o status de sucesso (200) retornado pela API a operação é simulada localmente no browser. Os produtos da Home são obtidos direntamente da API, sem impacto das alterações pelas alterações no Local Storage.


## Screenshots

![App Screenshot](https://raw.githubusercontent.com/tadeujeronimo/ecommerce-fed/main/public/screenshot.gif)


## Créditos

- Este projeto faz uso da [Fake Store API](https://fakestoreapi.com/) para simular dados de produtos e usuários;
- Algumas imagens utilizadas neste projeto são fornecidas pelo [Freepik](www.freepik.com);
- Ícones utilizados neste projeto são do [Font Awesome 5](https://fontawesome.com/) através do pacote [React Icons](https://react-icons.github.io/react-icons/);
- Este projeto utiliza a fonte [Roboto](https://fonts.google.com/specimen/Roboto) disponibilizada pelo Google Fonts;
- As cores dos temas claro e escuro foram inspiradas pelo [Dracula Theme](https://draculatheme.com).


## Licença

[MIT](https://choosealicense.com/licenses/mit/)

