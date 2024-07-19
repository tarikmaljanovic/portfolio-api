import express from 'express';
import db from '../db/conn.js';
import CryptoJS from 'crypto-js';
import Jwt from 'jsonwebtoken';

const router = express.Router();

//Login
router.post('/', async (req, res) => {
    try {
        let collection = db.collection('users');
        let result = await collection.findOne({
            username: req.body.username,
            password: CryptoJS.SHA256(req.body.password).toString(),
            security_code: CryptoJS.SHA256(req.body.security_code).toString()
        });
    
        const token = Jwt.sign({ username: result.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
        res.json({
            token: token,
            username: result.username
        });
    } catch (err) {
        res.json({ message: err.stack });
    }
});

export default router;