document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm')
    const messageEl = document.getElementById('message')
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const username = form.username.value.trim()
      const password = form.password.value.trim()
      // Limpa mensagem anterior
      messageEl.textContent = ''
      messageEl.style.color = ''
      // Validação simples
      if (!username || !password) {
        messageEl.textContent = 'Por favor, preencha usuário e senha.'
        messageEl.style.color = 'red'
        return
      }
      // Simulação de login válido
      if (username === 'admin' && password === '1234') {
        messageEl.textContent = 'Login realizado com sucesso!'
        messageEl.style.color = 'green'
      } else {
        messageEl.textContent = 'Usuário ou senha incorretos.'
        messageEl.style.color = 'red'
      }
    })
  })