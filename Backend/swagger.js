const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node.js Swagger API",
      version: "1.0.0",
      description: "A simple API documentation using Swagger UI",
    },
    servers: [
      {
        url: "https://chocospot.onrender.com/",
        description: "Live C Server",
      },
    ],
  },
  apis: ["./routes/*.js"], 
  
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;
