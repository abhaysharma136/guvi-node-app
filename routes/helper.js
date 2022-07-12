import { client } from '../index.js';

export async function UpdateMovieById(id, data) {
    return await client.db("guvi-db")
        .collection("movies")
        .updateOne({ id: id }, { $set: data });
}
export async function DeleteMovieById(id) {
    return await client.db("guvi-db")
        .collection("movies")
        .deleteOne({ id: id });
}
export async function CreateMovies(data) {
    return await client.db("guvi-db")
        .collection("movies")
        .insertMany(data);
}
export async function GetMovieById(id) {
    return await client.db("guvi-db")
        .collection("movies")
        .findOne({ id: id });
}
export async function getAllMovies(request) {
    return await client.db("guvi-db")
        .collection("movies")
        .find(request.query)
        .toArray();
}
