// const express = require('express');
// const { MongoClient } = require('mongodb');
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.MONGO_URL);
const app = express()

const Port=4000;

    app.use(express.json());
    const MONGO_URL = process.env.MONGO_URL;

    async function createConnection() {
      const client = new MongoClient(MONGO_URL);
      await client.connect();
      console.log("Mongo is connected ✌😊");

      return client;
    }
    
    const client = await createConnection();
  
    
app.get('/', function (request, response) {
  response.send('Hello,👍👍👍👍⭐🤣🤣')
});

//movies
app.get('/movies', async function (request,response) {
  //db.movies.find({})
  const movies= await client.db("guvi-db").collection("movies").find({}).toArray();
    response.send(movies);
  });
  app.get('/movies/:id', async function (request,response) {
    const {id}=request.params;
    console.log(request.params, id);

    // const movie=movies.find((mv)=>mv.id===id);
    const movie= await client.db("guvi-db").collection("movies").findOne({id:id});
    console.log(movie);
    movie ? response.send(movie) : response.status(404).send({msg: "movie not found"});
  });

  app.post('/movies', async function (request,response) {
    const data=request.body;
    console.log(data);
    //db.movies.inertMany(data)
    const result= await client.db("guvi-db").collection("movies").insertMany(data);  


    response.send(result);
  });

app.listen(Port, () => console.log(`App started in ${Port}`));