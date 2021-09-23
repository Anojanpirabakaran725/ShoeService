import axios from "axios";

const client =  axios.create({
    baseURL:"http:localhost/"
});

client.get("/products/1"); //Ist ein Promise
client.post("/product/1");