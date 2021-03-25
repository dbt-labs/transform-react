const fs = require("fs");

const { NODE_ENV } = process.env;
if (!NODE_ENV) {
  throw new Error(
    "The NODE_ENV environment variable is required but was not specified."
  );
}

const dotenvFile = ".env";
if (fs.existsSync(dotenvFile)) {
  require("dotenv-expand")(
    require("dotenv").config({
      path: dotenvFile,
    })
  );
}
