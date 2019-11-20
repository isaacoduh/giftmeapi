import express from 'express'
import bodyParser from 'body-parser'
import authRoute from './routes/authRoutes'
import listRoute from './routes/listRoute'


const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/**
 * Routes
 */
app.use('/api/auth', authRoute);
app.use('/api', listRoute);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});