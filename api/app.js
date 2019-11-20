import express from 'express'
import bodyParser from 'body-parser'


const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});