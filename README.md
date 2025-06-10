# Cypress Agilean

Projeto de testes automatizados end-to-end utilizando Cypress para validar as funcionalidades da landing page do módulo **Qualidade** da plataforma Agilean.

🔗 Página testada: [https://www.agilean.com.br/qualidade](https://www.agilean.com.br/qualidade)

---

## 🧠 Sobre o projeto

Este projeto foi desenvolvido como parte de um desafio técnico, com foco em:

- Validação funcional de um formulário de geração de leads
- Testes de responsividade em múltiplas resoluções de tela
- Validação de acessibilidade com `axe-core`
- Interceptação e verificação de requisições de API com Cypress
- Integração de ferramentas de qualidade de código (ESLint, Prettier, Husky, lint-staged)

---

## 📋 Regras de Negócio Cobertas

- Testes com entradas válidas e inválidas para todos os campos do formulário (nome, e-mail, telefone etc.)
- Verificação da visibilidade de elementos-chave como banners, botões e títulos
- Acessibilidade por teclado via navegação com Tab
- Exibição e comportamento de mensagens de erro
- Responsividade para desktop, tablet e celular
- Prevenção de envio do formulário com dados inválidos
- Interceptação de requisições para envio de dados da API

---

## ✅ Pré-requisitos

Para executar este projeto localmente, você vai precisar de:

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/) (testado com a versão `v20.11.1`)
- npm (já vem junto com o Node.js)

---

## ⚙️ Instalação e Configuração

1. Clone este repositório:
```bash
git clone https://github.com/jonathanrsbr/cypress-agilean.git
cd cypress-agilean
```

2. Instale as dependências:
```bash
npm install
```

---

## 🧪 Executando os testes

### ✅ Modo headless (linha de comando):
```bash
npm test
```

### 🖥️ Modo interativo (interface do Cypress):
```bash
npm run cy:open
```

---

## 🧹 Qualidade de Código

Este projeto utiliza as seguintes ferramentas para garantir um código limpo e padronizado:

- **ESLint** para validação de boas práticas
- **Prettier** para formatação de código
- **Husky** para execução de hooks de Git
- **lint-staged** para aplicar ESLint e Prettier apenas nos arquivos modificados

> Sempre que um `git push` é realizado, o hook `pre-push` executa automaticamente o ESLint e o Prettier nos arquivos alterados.

---

## 📁 Estrutura do Projeto

```
cypress/
├── e2e/             # Especificações principais de testes
├── fixtures/        # Massa de dados (mocks)
├── support/         # Comandos personalizados e configurações globais
.husky/              # Hooks do Git, como o pre-push
```

---

## 🙋‍♂️ Autor

Feito com ❤️ por [Jonathan Sales](https://www.linkedin.com/in/jonathan-sales-44580b1b3/)
