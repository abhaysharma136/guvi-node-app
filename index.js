// const express = require('express');
// const { MongoClient } = require('mongodb');
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
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
  if(request.query.rating){
    request.query.rating=+request.query.rating;
  }
  //db.movies.find({})
  console.log(request.query);
  const movies= await client.db("guvi-db").collection("movies").find(request.query).toArray();
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


  app.delete('/movies/:id', async function (request,response) {
    const {id}=request.params;
    console.log(request.params, id);


    // db.movies.deleteOne({});
    const result= await client.db("guvi-db").collection("movies").deleteOne({id:id});
    console.log(result);
    result.deletedCount > 0
    ? response.send(result) 
    : response.status(404).send({msg: "movie not found"});
  });

  app.put('/movies/:id', async function (request,response) {
    const {id}=request.params;
    console.log(request.params, id);
    const data=request.body;
    //db.movies.updateOne({id:id},{$set:data})
    const result= await client.db("guvi-db")
    .collection("movies")
    .updateOne({id:id},{$set:data});

    response.send(result);
  });

app.listen(Port, () => console.log(`App started in ${Port}`));