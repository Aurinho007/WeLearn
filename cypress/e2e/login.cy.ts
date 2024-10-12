describe("Login Page", () => {
  beforeEach(() => {
    // Visita a página de login antes de cada teste
    cy.visit("/login"); // Ajuste para a rota correta do seu aplicativo
  });

  it("should display the login form", () => {
    // Verifica se os campos de e-mail, senha e o botão de login estão visíveis
    cy.get("input[placeholder=\" Digite seu email\"]").should("be.visible");
    cy.get("input[placeholder=\"  Digite sua senha\"]").should("be.visible");
    cy.get("button").contains("Entrar").should("be.visible");
  });

  it("should display error when email is not entered", () => {
    // Simula o envio do formulário sem o e-mail
    cy.get("input[placeholder=\"  Digite sua senha\"]").type("password123");
    cy.get("button").contains("Entrar").click();
    
    // Verifica se o Toast com a mensagem de erro é exibido
    cy.contains("Digite seu email").should("be.visible");
  });

  it("should display error when password is not entered", () => {
    // Simula o envio do formulário sem a senha
    cy.get("input[placeholder=\" Digite seu email\"]").type("user@example.com");
    cy.get("button").contains("Entrar").click();
    
    // Verifica se o Toast com a mensagem de erro é exibido
    cy.contains("Digite sua senha").should("be.visible");
  });

  it("should display error on invalid email", () => {
    // Simula um e-mail inválido
    cy.get("input[placeholder=\" Digite seu email\"]").type("invalid-email");
    cy.get("input[placeholder=\"  Digite sua senha\"]").type("password123");
    cy.get("button").contains("Entrar").click();
    
    // Verifica se o Toast com a mensagem de erro é exibido
    cy.contains("Email inválido").should("be.visible");
  });

  it("should login successfully with valid credentials", () => {
    // Simula a interceptação da requisição de login
    cy.intercept("POST", "**/login", {
      statusCode: 200,
      body: {
        user: { name: "Aureo", email: "aureo@gmail.com" }
      }
    }).as("loginRequest");

    // Preenche os campos de login com credenciais válidas
    cy.get("input[placeholder=\" Digite seu email\"]").type("aureo@gmail.com");
    cy.get("input[placeholder=\"  Digite sua senha\"]").type("1234");
    cy.get("button").contains("Entrar").click();

    // Aguarda a requisição de login ser interceptada
    // cy.wait("@loginRequest");

    // Verifica se o redirecionamento foi para a página /home
    cy.url().should("include", "/");

    // Verifica se o Toast de sucesso foi exibido
    cy.contains("Login feito com succeso!").should("be.visible");
  });
});
