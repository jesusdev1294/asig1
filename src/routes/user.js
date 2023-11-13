const express =  require('express');
const { createUser, findUsers, findGender, updateUser, deleteUser } = require('../services/user.service');
const router = express.Router();


router.post('/users', async(req, res) => {
    try {
       
        await createUser(req.body); 
        res.sendStatus(201);

    } catch(error) {
        res.sendStatus(400);
    }
})

router.get('/users', async (req, res) => {
    try {
        const users = await findUsers();
        res.status(201).send(users)
    } catch (error) {
        console.error(error);
        res.status(400);
    }
});

router.get('/users/:gender', async (req, res) => {
    try {
        const gender = await findGender(req.params.gender);
        res.status(200).send(gender);
    } catch (error) {
        console.error(error);
        res.status(400);
    }
});


router.put('/users/:dni', async (req, res) => {
    try {
        const userUpdate = await updateUser(req.params.dni,req.body);
        if(userUpdate!==null){
            return res.sendStatus(200);

        }
        const body =  req.body
        const dni = req.params.dni
        const createdUser  = {
            name: body.name,
            dni: dni,
            gender: body.gender,
            email: body.email,
            password: body.password,
        }
        await createUser(createdUser); 
        res.sendStatus(201);
    } catch (error) {
        console.error(error);
        res.status(400);
    }
});



router.delete('/users/:dni', async (req, res) => {
    try {
        const userDni = await deleteUser(req.params.dni);
        if(userDni.deletedCount > 0){
            return res.sendStatus(200);
        }
        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        res.sendStatus(400);
    }
});

module.exports = router;
