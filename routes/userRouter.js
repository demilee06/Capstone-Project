import express from 'express'
import{getUsers,insertUser,getUser,updateUser,deleteUser, loginUser} from '../controller/userController.js'
import { checkUser } from '../middleware/authenticate.js'
const userRouter = express.Router()

userRouter.get('/',getUsers)
userRouter.post('/register',insertUser)
userRouter.post('/login',checkUser,loginUser)
userRouter.get('/:id',getUser)
userRouter.patch('/update/:id',updateUser)
userRouter.delete('/delete/:id',deleteUser)

export{userRouter}