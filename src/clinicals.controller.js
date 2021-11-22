import dao from './clinical.dao';
import mongodb from 'mongodb';

exports.getAll = (req,res)=>{
    dao.get({patient:mongodb.ObjectID(req.params.patientId)},(err,clinicalData)=>{
        if(err) console.log(err);
        res.send(clinicalData);
    });
}

exports.getAll = (req,res)=>{
    dao.get({}, (err,patients)=>{
        if(err) console.log(err);
        res.send(patients);
    });
} 

exports.create = (req,res)=>{
    var clinicals = req.body
    dao.create(clinicals,(err, clinicals)=>{
        if(err) console.log(err);
        res.send(clinicals);
    })
}