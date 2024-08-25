import express from 'express';
import { getNewCustomers } from '../controllers/customersController';

const router = express.Router();

router.get('/new', getNewCustomers);

export default router;
