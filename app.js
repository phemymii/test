const { response } = require('express');

const app = require('express')()

// 

app.post('/', (request, response)=>{
    return response.json({message: 'done'})
})

const server = app.listen(4000, ()=>{
    console.log('server running');
})
