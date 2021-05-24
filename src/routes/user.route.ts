import express, { Request, Response } from 'express';
import { createUser, deleteUser, getUser, updateUser, getAllUsers } from './user.controller';
import User from '../models/user.model';

const router = express.Router();

// router.get('/user/:id', (req: Request, res: Response) => {
//     const id = req.params.id;
//     res.status(200).json({
//         "message": "working",
//         "id":id
//     })
    
// })

//CREATE
router.post('/user', createUser);


//GET USER
router.get('/user/:id', getUser);

//DELETE USER
router.delete('/user/:id', deleteUser);

//UPDATE USER
router.put('/user/:id', updateUser);

//GET ALL USERS
router.get('/users/all', getAllUsers);

export default router;