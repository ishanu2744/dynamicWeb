const express = require('express');
const User = require('../src/db/models/user.model.js');
const router = express.Router();

router.use(express.urlencoded({extended:false}));

//Routes
router.get('/',(req,res)=>{
    res.render('index');
})
router.post('/contact',async(req,res)=>{
    try{
        const existingUser = await User.findOne(
            {
                email: req.body.email
            }
        )
        if (existingUser) {
                res.status(400).render('index',{
                    message: null,
                    error: 'Email already exists'
                })
        }
        else{
            const userData = new User(req.body);
            await userData.save();
            res.status(201).render('index',{
                message: 'Data submitted successfully',
                error: null
            });
        }
    }catch(e){
        res.status(400).send(e);
    }
})

module.exports = router;