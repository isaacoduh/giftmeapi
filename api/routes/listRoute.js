import express from 'express'
import listController from '../controllers/listController'
import jwt from '../middlewares/jwt'
import validate from '../middlewares/validate'

const router = express.Router();

const {createList, updateList, deleteList} = listController;
const {checkToken, verifyToken} = jwt;
const  { checkIfListExist, checkIfUser} = validate;

router.post('/list', checkToken, verifyToken, createList);
router.patch('/list/:listId', checkToken, verifyToken, checkIfListExist, checkIfUser, updateList);
router.delete('/list/:listId', checkToken, verifyToken, checkIfListExist, checkIfUser, deleteList);

export default router;