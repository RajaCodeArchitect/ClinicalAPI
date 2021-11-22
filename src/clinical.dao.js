import mongoose from "mongoose";
import clinicalsSchema from './clinicals.model';

clinicalsSchema.statics={
    get:function(query, cb){
        this.find(query,cb);
    },
    create:function(data, cb){
        var clinicalData = this(data);
        clinicalData.save(cb);
    } 
    
}

var clinicalModel = mongoose.model("Clinicals", clinicalsSchema,'clinicals');
module.exports = clinicalModel;