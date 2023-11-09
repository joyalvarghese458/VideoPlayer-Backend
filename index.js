// import json server library in index.js
// require - import
const jsonServer = require('json-server')

// create server using server library
const mediaPlayerServer = jsonServer.create()

// create path to dp.json 
const router = jsonServer.router('db.json')

// meddlewares to convert js to json
const middleware = jsonServer.defaults()

// connect/use middleware and router in server
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

// set a port for the server {by default react and json run in 3000}
const port = 5000 || process.env.PORT 
// while host 6000 may taken by others so use for new { process.env.PORT} 

// to listen server for resolving request
mediaPlayerServer.listen(port,()=>{
    console.log(`mediaPlayerServer started at ${port} and ready fetch request`);
})