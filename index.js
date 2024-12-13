const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router({}); // Empty in-memory object instead of db.json
const port = process.env.PORT || 8080;

const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

server.use(cors(corsOptions));
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
