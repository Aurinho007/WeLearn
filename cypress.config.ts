import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Adicione event listeners do Node se necessário
    },
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
    supportFile: false, // Desativa o arquivo de suporte se não precisar
    
    // Define a viewport para 1920x1080 (tamanho de tela desktop Full HD)
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
