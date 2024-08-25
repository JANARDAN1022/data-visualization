import { request,response } from 'express';
import Customer from '../models/Customer';

export const getNewCustomers = async (req: request, res: response) => {
    try {
        const customers = await Customer.find({}).sort('created_at');
        res.json(customers);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Other functions for fetching and processing data
