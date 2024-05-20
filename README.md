# Folha de Pagamento

Este projeto é uma aplicação web desenvolvida para um trabalho de faculdade que gera holerites seguindo as regras da Consolidação das Leis do Trabalho (CLT) do Brasil. Foi construído utilizando tecnologias modernas de desenvolvimento web, como Next.js, React, Tailwind CSS e Axios.

## Funcionalidades

- **Geração Dinâmica de Holerites**: Criação de holerites precisos com base nos dados de entrada de acordo com as regras da CLT.
- **Rápido e Eficiente**: Utiliza Axios para busca eficiente de dados e gerenciamento de estado.
- **Interface Amigável**: Construída com React para garantir uma experiência de usuário suave e interativa.

## Tecnologias Utilizadas

- **Next.js**: Um framework React para construção de aplicações renderizadas no servidor.
- **React**: Uma biblioteca JavaScript para construção de interfaces de usuário.
- **Tailwind CSS**: Um framework CSS utilitário para desenvolvimento rápido de UI.
- **Axios**: Um cliente HTTP baseado em promessas para o navegador e Node.js.

## Primeiros Passos

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js (v14.x ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/euperinotti/folha-pagamento.git
   cd folha-pagamento
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   # ou
   yarn install
   ```

### Executando a Aplicação

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
# ou
yarn dev
```

Abra o navegador e acesse `http://localhost:3000` para ver a aplicação em ação.

<!-- ### Construindo para Produção

Para construir a aplicação para produção, execute:

```bash
npm run build
# ou
yarn build
```

Em seguida, para iniciar o servidor de produção:

```bash
npm start
# ou
yarn start
``` -->

<!-- ### Linting

Para manter a qualidade do código, faça a lintagem do seu código usando:

```bash
npm run lint
# ou
yarn lint
``` -->

## Estrutura do Projeto

Aqui está uma visão geral da estrutura do projeto:

```
folha-pagamento/
├── components/     # Componentes React reutilizáveis
├── pages/          # Páginas Next.js
├── public/         # Recursos estáticos
├── styles/         # Configuração do Tailwind CSS e estilos globais
├── utils/          # Funções utilitárias
├── .eslintrc.js    # Configuração do ESLint
├── next.config.js  # Configuração do Next.js
├── package.json    # Metadados do projeto e dependências
└── README.md       # Documentação do projeto
```

## Contribuindo

Contribuições são bem-vindas! Se você tiver alguma ideia, sugestão ou relato de bug, por favor, abra uma issue ou envie um pull request. Certifique-se de que seu código segue os padrões de codificação do projeto e passa em todas as verificações de linting e testes.