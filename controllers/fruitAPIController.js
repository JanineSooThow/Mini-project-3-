const axios = require('axios');

//the 'fetchAPIData' function uses Axios to make an HTTP GET request to the url endpoint. 
const fetchAPIData = (res) => {

    //getting the data from fruit api
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://fruityvice.com/api/fruit/all',
        headers: { }
    };

    axios.request(config)
    .then((response) => {
    //console.log(JSON.stringify(response.data));

    const fruits = response.data; //store all fruits in a variable

    //now we can put each filtered family into the databases
   /* Models.FruitList.create(fruits)
    .then(function (data) {
        res.status(200);
        res.json("successfully inserted into the database");

})
    .catch(err => {
        throw err;
    }); */
//     const getAllFruits = async (req, res) => {
//         try {
//             // Call fetchAPIData to fetch all the fruits from the API and store them in the database
//             await fetchAPIData(res);
//             // Retrieve all the fruits from the database and send them as a response to the client
//             const fruits = await Models.FruitList.find({});
//             res.send({ result: 200, data: fruits });
//         } catch (err) {
//             throw err;
//         }
//     }; 
// })
    
//     .catch((error) => {
//         console.log(error);
    });
}

//second part of code 
// "use strict";
//getAllFruits calls on fruit model by using .find. Then uses promise API with .then and .catch (async code)
//Because it is a remote connection to a db and takes time to make a connection to the db and get data to come back it is asynchronous so we wait for that happen with promise and comes back with the data
const Models = require("../models");

const getAllFruits = (req, res) => {
    Models.FruitList.find({})
    .then(function (data) {res.send({ result: 200, data: data })
    }).catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message});
    });
};

//creates new fruit in the database 
const createFruit = (data, res) => {
     Models.FruitList.create(data)
    .then(function (data) {res.send({ result: 200, data: data })
    }).catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message});
    });
};

//updates a fruit in the database 
const updateFruit = (req, res) => {
    Models.FruitList.findByIdAndUpdate(req.params.id, req.body, {
        useFindAndModify: false
    })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        });
  };

  const deleteFruit = (req, res) => {
    Models.FruitList.findByIdAndRemove(req.params.id, req.body, {
        useFindAndModify: false,
    })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
}


//API data fetching and database operations should be accessible when importing this module
module.exports = {
    fetchAPIData,
    getAllFruits,
    createFruit,
    updateFruit,
    deleteFruit
}


    
    
