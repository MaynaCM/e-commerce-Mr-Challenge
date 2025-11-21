import jsonServer from "json-server";
import path from "path";

const server = jsonServer.create();
const router = jsonServer.router(path.join(process.cwd(), "src/mock-api/db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(async (req, res, next) => {
  await new Promise((res) => setTimeout(res, 400));
  next();
});

server.use(router);

server.listen(4000, () => {
  console.log("Mock API running at http://localhost:4000");
});
