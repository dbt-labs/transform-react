const path = require("path");
const fs = require("fs");
const fetch = require("node-fetch");
const {
  getIntrospectionQuery,
  printSchema,
  buildClientSchema,
} = require("graphql");

process.env.NODE_ENV = "development";

async function main() {
  let response;
  let data;
  try {
    response = await fetch("https://mql-transform-staging.transform.sh/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: getIntrospectionQuery() }),
    });
  } catch (err) {
    return Promise.reject(err);
  }

  try {
    data = await response.json();
  } catch (err) {
    return Promise.reject(err);
  }

  if (data.errors && data.errors.length > 0) {
    return Promise.reject(data.errors[0].message);
  }

  const schema = buildClientSchema(data.data);

  const outputFile = path.join(__dirname, "../schemas/mql/mql.graphql");

  try {
    await fs.promises.writeFile(outputFile, printSchema(schema));
  } catch (err) {
    return Promise.reject(err);
  }
  return Promise.resolve("We did it!");
}

main()
  .then((success) => {
    if (success) console.log("Success!", success);
  })
  .catch((failure) => {
    if (failure) console.log("Failure!", failure);
  });
