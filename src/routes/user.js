const express =  require('express');
const { createUser, findUsers, findGender, updateUser, deleteUser } = require('../services/user.service');
const router = express.Router();


router.post('/users', async(req, res) => {
    try {
        console.log(req.body)
        const user = await createUser(req.body); 
        console.log('routeeeer.<.<.<.<.<.<.<.<.<.<papapapapapapapappa',user);
        res.sendStatus(201);

    } catch(error) {
        console.log('-------..........>error crear usuario',error);
        res.sendStatus(400);
    }
})

router.get('/users', async (req, res) => {
    try {
        const users = await findUsers();
        console.log(users)
        res.status(201).send(users)
    } catch (error) {
        console.error(error);
        res.status(400);
    }
});

router.get('/users/:gender', async (req, res) => {
    try {
        const gender= await findGender(req.params.gender);
        console.log("---->",gender)
        res.status(200).send(gender);
    } catch (error) {
        console.error(error);
        res.status(400);
    }
});


// router.get('/users/:dni', async (req, res) => {
//     try {
//         const gender = await findGender(req.params.gender);
//         console.log("---->",gender)
//         res.send(200);
//     } catch (error) {
//         console.error(error);
//         res.status(400);
//     }
// });


router.put('/users/:dni', async (req, res) => {
    try {
        console.log(".,.,.,.,.,.,.,.,,..",req.params.dni,req.body)
        const userDni = await updateUser(req.params.dni,req.body);
        console.log("---->",userDni)
        res.send(userDni);
    } catch (error) {
        console.error(error);
        res.status(400);
    }
});



router.delete('/users/:dni', async (req, res) => {
    try {
        console.log(".,.,.,.,.,.,.,.,,..",req.params.dni)
        const userDni = await deleteUser(req.params.dni);
        console.log("---->",userDni)
        res.send(userDni);
    } catch (error) {
        console.error(error);
        res.status(400);
    }
});

module.exports = router;
