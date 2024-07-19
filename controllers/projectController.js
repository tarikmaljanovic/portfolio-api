import { ObjectId } from 'mongodb';
import db from '../db/conn.js';
import Jwt from 'jsonwebtoken';

const projectController = {
    getAll: async (req) => {
        let collection = db.collection('portfolio');
        let result = await collection.find().toArray();

        return result;
    },

    getById: async (req) => {
        let collection = db.collection('portfolio');
        let result = await collection.findOne({ _id: new ObjectId(req.params.id) });
    
        return result;
    },

    create: async (req) => {
        try {
            if(Jwt.verify(req.headers.authorization, process.env.JWT_SECRET)) {
                let collection = db.collection('portfolio');
                let result = await collection.insertOne(req.body);
            
                return result;
            }
        } catch (err) {
            return { message: 'Unauthorized' };
        }
    },

    update: async (req) => {
        try {
            if(Jwt.verify(req.headers.authorization, process.env.JWT_SECRET)) {
                let collection = db.collection('portfolio');
                let result = await collection.updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });
            
                return result;
            }
        } catch (err) {
            return { message: 'Unauthorized' };
        }
    },

    delete: async (req) => {
        try {
            if(Jwt.verify(req.headers.authorization, process.env.JWT_SECRET)) {
                let collection = db.collection('portfolio');
                let result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
            
                return result;
            }
        } catch (err) {
            return { message: 'Unauthorized' };
        }
    }
}

export default projectController;