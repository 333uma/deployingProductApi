const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = 4000;
const products = require("./products.json");

app.get("/",(request,response) => {
    response.send("Welcome, I am Main Page!");
})

app.get("/products",(request,response) => {
    response.send(products);
})

app.get("/products/:id",(request,response) => {
    const {id} = request.params;
    response.send(products[i]);
})

app.listen(port, () => {
    console.log(`Server Running on: ${port}`);
})
