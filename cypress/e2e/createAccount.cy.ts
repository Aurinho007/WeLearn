describe("Create Account Page", () => {
  beforeEach(() => {
    // Visita a página de criação de conta
    cy.visit("/login/create"); // Ajuste a rota de acordo com seu aplicativo
  });

  it("should display the create account form", () => {
    // Verifica se os campos de nome, e-mail, tipo de perfil e senha estão visíveis
    cy.get("input[placeholder=\"  digite seu nome\"]").should("be.visible");
    cy.get("input[placeholder=\"  nome@exemplo.com\"]").should("be.visible");
    cy.get("select").should("be.visible");
    cy.get("input[placeholder=\"  crie sua senha\"]").should("be.visible");
    cy.get("button").contains("Criar Conta").should("be.visible");
  });

  it("should show an error if the name is invalid", () => {
    // Testa a criação de conta sem nome
    cy.get("input[placeholder=\"  nome@exemplo.com\"]").type("user@example.com");
    cy.get("select").select("Aluno");
    cy.get("input[placeholder=\"  crie sua senha\"]").type("password123");
    cy.get("button").contains("Criar Conta").click();
    
    // Verifica se o Toast com a mensagem de erro é exibido
    cy.contains("Digite um nome válido").should("be.visible");
  });

  it("should show an error if the email is invalid", () => {
    // Testa a criação de conta com um e-mail inválido
    cy.get("input[placeholder=\"  digite seu nome\"]").type("John Doe");
    cy.get("input[placeholder=\"  nome@exemplo.com\"]").type("invalid-email");
    cy.get("select").select("Aluno");
    cy.get("input[placeholder=\"  crie sua senha\"]").type("password123");
    cy.get("button").contains("Criar Conta").click();

    // Verifica se o Toast com a mensagem de erro é exibido
    cy.contains("Email inválido").should("be.visible");
  });

  it("should show an error if no profile type is selected", () => {
    // Testa a criação de conta sem selecionar o tipo de perfil
    cy.get("input[placeholder=\"  digite seu nome\"]").type("John Doe");
    cy.get("input[placeholder=\"  nome@exemplo.com\"]").type("user@example.com");
    cy.get("input[placeholder=\"  crie sua senha\"]").type("password123");
    cy.get("button").contains("Criar Conta").click();

    // Verifica se o Toast com a mensagem de erro é exibido
    cy.contains("Selecione um tipo de usuário").should("be.visible");
  });

  it("should show an error if the password is invalid", () => {
    // Testa a criação de conta com uma senha inválida
    cy.get("input[placeholder=\"  digite seu nome\"]").type("John Doe");
    cy.get("input[placeholder=\"  nome@exemplo.com\"]").type("user@example.com");
    cy.get("select").select("Aluno");
    cy.get("input[placeholder=\"  crie sua senha\"]").type("123");
    cy.get("button").contains("Criar Conta").click();

    // Verifica se o Toast com a mensagem de erro é exibido
    cy.contains("Senha inválida").should("be.visible");
  });

  it("should create account successfully with valid inputs", () => {
    // Simula a interceptação da requisição de criação de conta
    cy.intercept("POST", "**/create-account", {
      statusCode: 200,
      body: {
        message: "Conta criada com sucesso!",
      },
    }).as("createAccountRequest");

    // Preenche o formulário corretamente
    cy.get("input[placeholder=\"  digite seu nome\"]").type("John Doe");
    cy.get("input[placeholder=\"  nome@exemplo.com\"]").type("user@example.com");
    cy.get("select").select("Aluno");
    cy.get("input[placeholder=\"  crie sua senha\"]").type("Password123");
    cy.get("button").contains("Criar Conta").click();

    // Verifica se a mensagem de sucesso foi exibida
    cy.contains("Conta criada com succeso!").should("be.visible");
    
    // Verifica se o formulário foi limpo e a tela de login foi aberta
    cy.get("input[placeholder=\"  digite seu nome\"]").should("have.value", "");
    cy.get("input[placeholder=\"  nome@exemplo.com\"]").should("have.value", "");
  });
});
