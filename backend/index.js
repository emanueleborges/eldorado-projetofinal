const express = require('express');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');


const app = express();
const port = 3000;

routes(app);

const swaggerFile = require('./swagger_auto.json');
app.use('/',  swaggerUi.serve,  swaggerUi.setup(swaggerFile));
app.use(express.json());
app.listen(port, () => console.log('http://localhost:${port}'));

module.exports = app;

/*
https://imasters.com.br/banco-de-dados/tutorial-de-migrations-com-node-js-e-sequelize
npm i
npx sequelize-cli db:create ou nmp database
npx sequelize-cli db:migrate ou npm migrate

npm install -g @angular/cli
npx ng new frontend [y sass] 
npx ng generate component componentes/lista  -- criiacao de componentes e ou servicos 
npx ng generate services services/lista  -- criiacao de componentes e ou servicos 
ng serve -- iniciar servidor
*/