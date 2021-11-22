import patientController from './patient.controller';
import clinicalsContoller from './clinicals.controller';

module.exports =(router)=>{
    router.get('/patients', patientController.getAll);
    router.post('/patients', patientController.create);
    router.put('/patients/:id', patientController.update);
    router.delete('/patients/:id', patientController.delete);
 
    router.get('/clinicals/:patientId', clinicalsContoller.getAll);
    router.post('/clinicals', clinicalsContoller.create);
} 