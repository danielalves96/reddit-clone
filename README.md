# Reddit Clone

![enter image description here](https://res.cloudinary.com/technical-intelligence/image/upload/v1696195949/Captura_de_tela_2023-10-01_183020_lyehl4.png)

  <div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="30" width="42" alt="react logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" height="30" width="42" alt="typescript logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" height="30" width="42" alt="nextjs logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" height="30" width="42" alt="sass logo"  />
  </br>
  </br>
</div>


**Este é um projeto de clone do Reddit construído com tecnologias como Next.js 13.5.3, React 18 e TypeScript.**

O Projeto consiste no desenvolvimento de um clone da interface da página inicial de uma community do [Reddit](https://www.reddit.com/), nesse caso a community `r/pokemon`.

Foi escolhido o framework [NextJS](https://nextjs.org/) na versão 13 pois o mesmo possui uma ótima performance, como o tempo de carregamento reduzido, e tem como padrão o carregamento de páginas em server-side-rendering (SSR) e todas as páginas serão armazenadas em cache para fornecer o desempenho de um site estático.

Para demonstrar o conhecimento em css, optei por desenvolver a aplicação com CSS Modules em conjunto com o Framework [SASS](https://sass-lang.com/). Porém a mesma poderia ser desenvolvida usando [Styled Components](https://styled-components.com/) (Com a limitação dos componentes serem renderizados apenas em client side), Tailwind que tem total integração com [NextJS](https://nextjs.org/) 13 ou até mesmo com outras bibliotecas e frameworks disponíveis na comunidade.

Para os testes unitários optei por utilizar a biblioteca [JEST](https://jestjs.io/pt-BR/) em conjunto com a [React Testing Library](https://testing-library.com/).

> Nesta aplicação não fiz o uso de Routes e Context API ou outro gerenciador de estados pois não julguei necessário. Mas queiram ver algumas aplicações que desenvolvi com `NextJS`, `Styled Components`, `Tailwind`, `Context API` e `i18n` vou deixar o repositório dessas duas: [capivara-dev](https://github.com/danielalves96/capivara-dev) , [gamers-club-test](https://github.com/danielalves96/gamers-club-test).

Como a referência fornecida foi apenas uma imagem, tomei a liberdade de desenvolver um layout no Figma para facilitar o desenvolvimento.

**O mesmo pode ser consultado aqui:** **[FIGMA](https://www.figma.com/file/LXS8A09SBQs8x4TIrZv8LA/Untitled?type=design&node-id=0:1&mode=dev)**
## 🏭 Aplicação em produção

**Disponível neste link: [LIVE DEMO](https://reddit-clone-omega-flax.vercel.app/)**


## ⚙️ Instalação

Certifique-se de ter [Node.js](https://nodejs.org/) instalado em sua máquina antes de seguir as etapas abaixo.

1. Clone este repositório:

```bash

git clone https://github.com/danielalves96/reddit-clone.git

```

2. Acesse o diretório do projeto:

```bash

cd reddit-clone

```

Execute o comando:

```bash

cp .env.example .env

```

No arquivo `.env` está o nome da comunidade que iremos consultar os dados, e o limite de posts que serão carregados.

3. Instale as dependências:

```bash

npm install

```

## 🔧 Desenvolvimento

Para iniciar o servidor de desenvolvimento execute:

```bash

npm run dev

```

Isso iniciará o servidor de desenvolvimento NextJS e você poderá acessar o aplicativo em `http://localhost:3000.`

## 📦 Build

Para criar uma versão otimizada para produção do aplicativo:

```bash

npm run build

```

### Iniciar a aplicação em produção

Após a build, você pode iniciar o aplicativo em produção com o seguinte comando:

```bash

npm start

```

> OBS\*: As imagens renderizadas no feed não estão com uma boa qualidade,
> pois o retorno em `.json` do Reddit libera o acesso de aplicações
> externas apenas a thumbnail dos posts, que não tem uma resolução boa.

> OBS\*\*: Caso na hora do seu acesso nenhum post tenha imagem ou video
> para testar, basta alterar no arquivo `.env` a variável
> NEXT_PULIC_COMMUNITY_NAME para o nome de outra community.

Um bom exemplo que sempre tem vídeos e imagens é a community `cyberpunkgame`.

Seu arquivo `.env` ficará assim caso queira testar em modo desenvolvimento:

```bash

NEXT_PULIC_COMMUNITY_NAME=cyberpunkgame
NEXT_PULIC_RESULTS_LIMIT=25

```

> Caso em modo desenvolvimento ocorra um erro de API com o código 429, não se preocupe
> é apenas a API do Reddit bloqueando a consulta pelo número excessivo de requests.
> Aguarde alguns minutos que conseguirá realizar as consultas novamente.

## 🧪 Testes

Para executar a rotina testes executo o comando:

```bash

npm test

```

## ✔️ Verificação de tipos

Para verificar os tipos TypeScript execute o comando:

```bash

npm run type-check

```

## ✏️ Linting e Formatação

Para executar linting e formatação do código:

```bash

npm run lint

```

```bash

npm run format

```

## 🎲 Principais Dependências do projeto:

- [axios](https://axios-http.com/ptbr/docs/intro): Cliente HTTP para fazer solicitações de API.
- [date-fns](https://date-fns.org/): Biblioteca para manipulação de datas.
- [lodash](https://lodash.com/): Utilitários de JavaScript.
- [NextJS](https://nextjs.org/): Framework React para construção de aplicativos web.
- [React](https://react.dev/): Biblioteca JavaScript para construir interfaces de usuário.
- [React DOM](https://pt-br.legacy.reactjs.org/docs/react-dom.html): Renderizador React para a web.

## 🔩 Dependências de Desenvolvimento:

- [Jest](https://jestjs.io/pt-BR/): Framework de teste JavaScript.
- [ESLint](https://eslint.org/): Linter de código JavaScript/TypeScript.
- [Prettier](https://prettier.io/): Formatador de código.
- [Sass](https://sass-lang.com/): Pré-processador CSS.

## 📝 Licença

Esse projeto está sob a licença MIT.

---

<h3 align="center">
Feito por Daniel Luiz Alves
<br><br>
</h3>
