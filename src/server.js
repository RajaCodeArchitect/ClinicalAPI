import express from 'express';
import bodyParser from 'body-parser';
import props from './config/properties';
import db from './config/db';
import clinicalRoutes from './clinics.routes';

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
db();

var clinicalRouter = express.Router();
clinicalRoutes(clinicalRouter);
app.use('/clinicalsapi', clinicalRouter)



app.listen(props.PORT,(err)=>{
    if(err) throw err;
    console.log("Application started on Port 8000");
});


 