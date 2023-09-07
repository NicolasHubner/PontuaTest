# Pontua Teste

Este projeto consiste em criar um aplicativo que consome os dadso da API da marvel e são exibidos de acordo com o Figma enviado.

## Pontos

-   Busquei trazer meus conhecimentos pensando na perfomace do aplicativo;
-   Utilizei o padrão de Design Patterns para a aplicação;
-   Utilizei de Lint e Prettier para padronizar o código;
-   Criei configuração padrão com @, para faciltiar o import de arquivos;
-   Criação de components utilizando o framwork Native Base extraindo o máximo de componentes, pensnado que caso a aplicação pudesse crescer facilitaria a manutenção do código;
-   A estilização e as cores utilizadas foram as fornecidas em STYLS no Figma, de tal modo que Poppins que foi utilizado no Figma foi subsituido por Gilroy;
-   Não utilizei react-native-gesture-handler, pois Touchable Opacity do react native vem atendendno bem as expectativas;

## Descrevendo o projeto

-   Construi a aplicação separado em duas grandes partes que eram as telas de autenticação e a tela de quando o usuário está logado;
-   Na parte de autenticação utilizei do Figma fornecido parar crias as telas de login e a partir disso busquei utilizar o mesmo tipo de layout para fazer a criação de registro e recuperação de senha;
-   Em todos os INPUTS do projeto na parte de autebticação utilizei o React Hooks Form para facilitar a validação dos campos;
-   Na troca de telas está sendo utilizado fade_in ou slide_right para dar uma melhor experiência ao usuário;
-   Em ESQUECEU A SENHA utilizei de Animated.View para fazer a transição de ações;
-   Para autenticação criei um LoginFunction.ts que simula o login com o criador de token;

-   Componentizei grande parte do código para facilitar uma "futura" manutenção;
-   Utilzei Redux para fazer a comunicação entre os componentes;
-   Armazenei dados do usuário, token, e os dados da API da Marvel no Redux;

-   No search criei um hook para fazer a ação de debounce e melhorar experiência do usuário;
-   Na telas que possuem representação dos dados da API da Marvel, busquei utilizei FlatList pensando em perfomace e coloquei Skeleton para dar um feedback para o usuário;
-   Busquei sempre colocar um feedback de uma ação, como Toast na parte de Auth;

# Tela de Detalhes

-   Nas telas de detalhes do personagem, a API da Marvel nem todo mundo vem com os mesmos dados, tendo que criar várias interfaces para cada tipo de dado, como Comics, Series, Characters, Events, etc. Pensando nisso, tive que adaptar a tela de detalhes para exibir na TIMELINE, as séries colocando uma animação para melhorar experiência do usuário;
-   Além disso, a parte de quadrinhos, somente foi utilizada para quando a página de detalhes não era sobre QUADRINHOS, como por exemplo, quando o usuário clica em um personagem, ele é redirecionado para a página de detalhes do personagem, e lá é exibido os quadrinhos que o personagem participou;

# O que pode ser melhorado

-   Como aplicação é pequena e estamos "mockando" bastante coisa, puxei apenas 22 itens de cada lista e armazenei no Redux, em um caso de CNTP(Condições Normais de Temperatura e Pressão) eu puxaria todos os dados e teria que averiguar as melhores formas de armazenar esses dados;
-   Pensando em expandir internacionalmente a aplicação, seria interessante utilizar constantes para as strings e utilizar o i18n para traduzir as strings ou escrever na mão;

## Tecnologias

-   React Native
-   Typescript
-   Native Base
-   Axios
-   React Navigation
-   React Hooks Form
-   Expo(Buscando rapidez no desenvolvimento e no teste da aplicação)

## Antes de rodar o projeto

-   É necessário ter o Node instalado na máquina;
-   É necessário ter o Yarn instalado na máquina;
-   É necessário ter o Expo instalado na máquina;
-   Ter um emulador ou um dispositivo físico para rodar o projeto;

## Como rodar o projeto

-   Instale as dependências com o comando

```
 yarn install
```

-   Rode o projeto com o comando:

```
 `yarn start`
```

-   Posteriormente escolha qual dispositivo deseja rodar o projeto, se emulador ou dispositivo físico.
