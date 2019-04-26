const server = require("./src/server");

server.start(({ port }) => {
  console.log(`Server is running on port ${port}`);
});
