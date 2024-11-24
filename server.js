import express from "express"; // Importa o framework Express para criar a aplicação web
import routes from "./src/routes/postsRoutes.js"; // Importa as rotas definidas em postsRoutes.js

// Cria uma aplicação Express
const app = express();
// Configura o diretório "uploads" para servir arquivos estáticos
app.use(express.static("uploads"));
// Utiliza as rotas definidas em postsRoutes.js
routes(app)

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
  console.log("Servidor escutando...");
});






