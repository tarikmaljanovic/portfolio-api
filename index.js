import express from 'express';
import cors from 'cors';
import './loadEnv.mjs';
import projectsRouter from './routes/projectRoutes.js'
import userRoutes from  './routes/userRoutes.js'

const port = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/projects', projectsRouter);
app.use('/users', userRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})