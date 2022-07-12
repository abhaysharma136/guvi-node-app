import express from "express";
const router=express.Router();
import { getAllMovies, GetMovieById, CreateMovies, DeleteMovieById, UpdateMovieById } from "./helper.js";

router.get('/', async function (request,response) {
    if(request.query.rating){
      request.query.rating=+request.query.rating;
    }
    //db.movies.find({})
    console.log(request.query);
    const movies= await getAllMovies(request);
      response.send(movies);
    });

    router.get('/:id', async function (request,response) {
      const {id}=request.params;
      console.log(request.params, id);
  
      // const movie=movies.find((mv)=>mv.id===id);
      const movie= await GetMovieById(id);
      console.log(movie);
      movie ? response.send(movie) : response.status(404).send({msg: "movie not found"});
    });
  
    router.post('/', async function (request,response) {
      const data=request.body;
      console.log(data);
      //db.movies.inertMany(data)
      const result= await CreateMovies(data);  
  
  
      response.send(result);
    });
  
  
    router.delete('/:id', async function (request,response) {
      const {id}=request.params;
      console.log(request.params, id);
  
  
      // db.movies.deleteOne({});
      const result= await DeleteMovieById(id);
      console.log(result);

      result.deletedCount > 0
      ? response.send(result) 
      : response.status(404).send({msg: "movie not found"});
    });
    router.put('/:id', async function (request,response) {
        const {id}=request.params;
        console.log(request.params, id);
        const data=request.body;
        //db.movies.updateOne({id:id},{$set:data})
        const result= await UpdateMovieById(id, data);
    
        response.send(result);
      });

      export const moviesRouter=router;


