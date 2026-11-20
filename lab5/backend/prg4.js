import express from "express";
import { products } from "./data.js";

const app = express();

// returns name, image, price of all products
// app.get("api/produts",(req,res) =>{
//     let sortedProduct = products.map(({name,image,price,id})=>({
//         name,
//         image,
//         price,
//         id
// }));

let sortedProduct = products.map(({ description, reviews, ...rest }) => rest);

res.status(200).json({ count: sortedProduct.length, data: sortedProduct });

// get all details of particular product 
app.get("/api/products/:pid", (req, res) => {
  const { pid } = req.params;
  const item = products.find((p) => id === Number(pid));
  if (!item) {
    res.status(200).json({ msg: "product found", data: item });
  }
});

app.use((req, res) => {
  res.status(404).send("<h1>page not found</h1>");
});
app.listen(4444, () => console.log("prg4 is running at 4444"));
