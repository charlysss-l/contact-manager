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

//Read All
router.get('/', async(req,res)=>{
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//Read One
router.get('/:id', async(req,res)=>{
    try {
        const contact = await Contact.findById(req.params.id);
        if(!contact) return res.status(404).json({ message: 'Contact not found' });
        res.json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//Update
router.put('/:id', async(req,res)=>{
    try {
        const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedContact);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//Delete
router.delete('/:id', async (req,res)=>{
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        if (!deletedContact) return res.status(404).json({ message: 'Contact not found' });
        res.json({ message: 'Contact deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
export default router;