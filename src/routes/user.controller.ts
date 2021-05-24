import { Request, Response } from 'express';
import User from '../models/user.model'

export  async function  createUser(req: Request, res: Response) {
    try {

        const user = await User.create(req.body);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(402).json({
            "error": error.message
        })
    }
}

export async function getUser(req: Request, res: Response) {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user)
        
    } catch (error) {
        res.status(402).json({
            "error":error.message
        })
        
    }
}

export async function deleteUser(req: Request, res: Response) {
    try {
        const user = await User.findByIdAndRemove(req.params.id);
        res.status(200).json(user)

    } catch (error) {
        res.status(402).json({
            "error": error.message
        })

    }
}

export async function updateUser(req: Request, res: Response) {
    try {
        const user = await User.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(user)

    } catch (error) {
        res.status(402).json({
            "error": error.message
        })

    }
}

export async function getAllUsers(req: Request, res: Response) {
    try {
        const user = await User.find();
        res.status(200).json(user)

    } catch (error) {
        res.status(402).json({
            "error": error.message
        })

    }
}

