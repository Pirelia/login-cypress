/// <reference types="cypress" />

/**
 * Testes E2E didáticos para o formulário de login.
 * - Visita a página inicial
 * - Tenta login com dados inválidos e verifica mensagem de erro
 * - Faz login com dados válidos e verifica mensagem de sucesso
 */

describe('Login - E2E', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve exibir mensagem de erro para login inválido', () => {
    cy.get('#username').type('usuarioErrado')
    cy.get('#password').type('senhaErrada')
    cy.get('#loginButton').click()

    cy.get('#message')
      .should('be.visible')
      .and('contain', 'Usuário ou senha incorretos.')
      .and('have.css', 'color', 'rgb(255, 0, 0)') // vermelho
  })

  it('Deve fazer login com sucesso com usuário e senha corretos', () => {
    cy.get('#username').type('admin')
    cy.get('#password').type('1234')
    cy.get('#loginButton').click()

    cy.get('#message')
      .should('be.visible')
      .and('contain', 'Login realizado com sucesso!')
      .and('have.css', 'color', 'rgb(0, 128, 0)') // verde
  })
})
