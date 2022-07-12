// const express = require('express');
// const { MongoClient } = require('mongodb');
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import {moviesRouter} from "./routes/movies.js"
dotenv.config();
const app = express()

const Port=process.env.PORT;

    app.use(express.json());
    const MONGO_URL = process.env.MONGO_URL;

    async function createConnection() {
      const client = new MongoClient(MONGO_URL);
      await client.connect();
      console.log("Mongo is connected ✌😊");

      return client;
    }
    
   export const client = await createConnection();
  
    
app.get('/', function (request, response) {
  response.send('Hello,👍👍👍👍⭐🤣🤣')
});

app.use('/movies',moviesRouter);
app.listen(Port, () => console.log(`App started in ${Port}`));