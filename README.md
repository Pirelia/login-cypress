# login-cypress
atividade para ser feita em aula, teste de login em cypress 

Estrutura
.
├── index.html           # Página do formulário de login (HTML simples)
├── styles.css           # Estilos básicos
├── app.js               # Lógica do login (validação, mensagens)
├── package.json         # Scripts + dependências (http-server, cypress)
├── cypress.config.js    # Config Cypress (baseUrl http://localhost:3000)
└── cypress
    └── e2e
        └── login.cy.js  # Testes E2E para o formulário de login
    └── fixtures
        └── dados.json   # Dados de teste (usuário, senha, mensagens)
    └── support
        └── commands.js  # Comandos customizados Cypress