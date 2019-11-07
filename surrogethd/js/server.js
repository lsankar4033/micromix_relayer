const app = require("./app");

// Configure console logging statements
require("console-stamp")(console);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.info(`surrogethd listening on port ${port}`);
});
