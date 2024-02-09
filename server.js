const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({path:'./config.env'});
const port = process.env.PORT;
 
const DB = process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD);


mongoose.connect(DB)
.then(con=>{
    console.log('Connected to DATABASE')
})
.catch((err)=>{
    console.log(err)
})




app.listen(port,()=>{
    console.log(`Server runing at port: ${port}`);
})