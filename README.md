# Sobre

Este repositório é um boilerplate para iniciar projetos usando Next.js, incluindo um conjunto de ferramentas populares para desenvolvimento front-end. A estrutura do projeto é configurada com TypeScript e vem com suporte para estilização com Styled Components, manipulação de imagens com Sharp, requisições HTTP com Axios, animações com React Spring, entre outras funcionalidades.

## Tecnologias Incluídas

- **Next.js:** O framework React para produção.
- **Styled Components:** Biblioteca para estilização de componentes utilizando tagged template literals.
- **Styled Media Query:** Utilitário para criar consultas de mídia responsivas com Styled Components.
- **Axios:** Cliente HTTP para fazer requisições.
- **TypeScript:** Superset tipado de JavaScript.
- **React:** Biblioteca JavaScript para a construção de interfaces de usuário.
- **React DOM:** Pacote responsável pela integração do React com o navegador.
- **Sharp:** Biblioteca para manipulação de imagens.
- **Swiper:** Componente de slider/carrossel para React.
- **React Spring:** Biblioteca para animações fluidas no React.
- **ESLint:** Ferramenta de linting para identificar e corrigir problemas no código.
- **Husky:** Utilizado para acionar scripts do npm em determinados momentos, como o commit.
- **Lint-staged:** Utilizado em conjunto com o Husky para rodar linters em arquivos que serão commitados.
- **Prettier:** Formatador de código.

## Estrutura do Projeto

- **`/pages`:** Páginas da aplicação, seguindo a convenção do Next.js.
- **`/styles`:** Estilos globais e temas, utilizando Styled Components.
- **`/public`:** Arquivos estáticos, como imagens e favicons.
- **`/components`:** Componentes React reutilizáveis.
- **`/axios`:** Funções de utilidade para fazer chamadas à API.

## Como Usar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/euperinotti/nextjs-boilerplate
   cd nextjs-boilerplate
   ```

2. **Instale as dependências:**
   ```bash
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   yarn dev
   ```

4. **Inicie a construção para produção:**
   ```bash
   yarn build
   ```

5. **Execute o servidor de produção:**
   ```bash
   yarn start
   ```