import {hash} from 'bcrypt'
import{getUsersdb,getUserIddb,insertUserdb,deleteUserdb,updateUserdb} from '../model/userdb.js'


const getUsers = async(req,res)=>{
    res.json(await getUsersdb())//move to controller .tomorrow
}

const getUser =  async(req,res)=>{
    res.json(await getUserIddb(req.params.id))
   
}

const insertUser = async(req,res)=>{
    let {firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile} = req.body; 
    let hashedP = await hash(userPass,10,)   
        // console.log(hashedP);

        if(hashedP.stack) throw (hashedP)
        await insertUserdb(firstName, lastName, userAge, Gender, userRole, emailAdd, hashedP, userProfile)
        res.send(await getUsersdb())
        console.log('Data was inserted successfully');
        
    }

const deleteUser = async(req,res)=>{
        let {id} = req.body;
        await deleteUserdb(req.params.id)
        res.send('delete successfully');
    }
 
const updateUser = async(req,res)=>{
        let { firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile} = req.body;
        let users = await getUserIddb(req.params.id)

        firstName? firstName=firstName : firstName = users.firstName
        lastName? lastName=lastName : lastName = users.lastName
        userAge? userAge=userAge : userAge = users.userAge
        Gender? Gender=Gender : Gender = users.Gender
        userRole? userRole=userRole : userRole = users.userRole
        emailAdd? emailAdd=emailAdd : emailAdd = users.emailAdd
        userPass? userPass=userPass : userPass = users.userPass
        userProfile? userProfile=userProfile : userProfile = users.userProfile
        
        res.send('Updated was succesfully');
        await updateUserdb(firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile, req.params.id)
    }

    const loginUser = async (req, res) => {
        res.json({
            message: 'You logged in successfully',
            token: req.body.token
        })
    }

export{getUsers,getUser,insertUser,deleteUser,updateUser, loginUser}