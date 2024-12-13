const jsonServer = require("json-server");
const cors = require("cors"); // Importing CORS middleware
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

// Custom CORS configuration
const corsOptions = {
  origin: `${process.env.FRONTEND_URL}`, // Replace with your front-end URL
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

server.use(cors(corsOptions)); // Apply CORS middleware
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
