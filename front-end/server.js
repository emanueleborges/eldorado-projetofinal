const express = require('express');
const app = express();

const appName = 'device-category-manager';
const outputPath = `${__dirname}/dist/${appName}/browser`;
const PORT = process.env.PORT || 8080;

app.use(express.static(outputPath));

app.get('/*', (_req, res) => {
  res.sendFile(`${outputPath}/index.html`);
});

app.listen(PORT, () => {
  console.log(`Running is port ${PORT}`)
});