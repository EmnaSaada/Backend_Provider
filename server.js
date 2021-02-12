const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const provider = require('./route/providerRouter');
let cors = require('cors');


/*const swaggerJsonDoc = require('swagger-jsdoc')	
const swaggerUI = require('swagger-ui-express')*/


const app = express();

/*const swaggerOptions = {	
    swaggerDefinition: {		
        info: {			
          title: "PROVIDER CRUD",		
          description: "A provider is a person who can repair some things roadside or domestic",		
          servers: ["http://localhost:3000"],
          version: '1.0.0'
          }            
  },
  
          apis:['./route/*.js']   
}  

const swaggerDocs = swaggerJsonDoc(swaggerOptions)	
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
*/


app.use(cors((x => x
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader())));
app.use(express.static(path.join(__dirname, 'dist/frontend')));
app.use('/', express.static(path.join(__dirname, 'dist/frontend')))

mongoose.connect('mongodb+srv://emna:emna@cluster0-36uwb.mongodb.net/test')
.then(console.log("database Connected !"));

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});

app.use('/provider/', provider)

