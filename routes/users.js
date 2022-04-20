import express from 'express';
import { getUsers, createUser, getAUser, upDated, deleteUser } from '../controllers/users.js';


const router = express.Router();

router.get('/', getUsers);


router.post('/', createUser);


router.get ('/:id', getAUser);

router.patch('/:id', upDated);

router.delete ('/:id', deleteUser);

export default router;