import express from 'express';
import Contact from '../models/contactModel.js';

const router = express.Router();

//CRUD
//Create
router.post('/', async(req,res)=>{
    const {name, email, phone} = req.body;
    const contact = new Contact ({name, email, phone});

    try {
        const newContact = await contact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;