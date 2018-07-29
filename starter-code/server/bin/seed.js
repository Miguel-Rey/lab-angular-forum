const mongoose = require('mongoose');
const Thread = require('../models/thread.model');

mongoose.connect('mongodb://localhost/forum-development').then( () =>  console.log('connected to DB'));

const threads = [
    {
        text: "Hacer la cama",
        done: false
    },
    {
        text: "Comprar pilas",
        done: false
    },
    {
        text: "Comer verdura",
        done: false
    },
]

Thread.create(threads)
.then(threads => {
    console.log(threads);
})
.then( () => {
    console.log('Created threads');
    mongoose.disconnect();
}).catch(e => console.log(e));