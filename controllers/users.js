import { v4 as uuidv4 } from 'uuid';

let users = [];

class UserControler{


    static createUser(req, res) {
        const user = req.body; 

        const createUser = { ...user, id: uuidv4() } 
        users.push(createUser);
     
         res.status(201).json({createUser, message : `user with the name ${user.firstName} added to the database!`});

    } 

    static getAUser(req, res){
        const { id} = req. params;
    
        const foundUser = users.find((user) => user.id === id);
        if(!foundUser){
            return res.status(200).json({error: "user does not exist please check id"})
        }
        res.send (foundUser);
    }

    static getUsers(req, res){
        res.send(users);
    }


    static deleteUser(req, res){
        const{ id } = req. params;

        users = users.filter((user) => user.id !== id);
        
        res.status(204)
        
    }
    static upDated(req, res){
        const{ id } = req. params;

        const{ firstName, lastName, age } = req.body;
    
        const user = users.find((user) => user.id === id);
        if(!user){
            return res.status(201).json({error: "user does not exist please check id"})
        }
        
        if(firstName) user.firstName = firstName;
        
        if (lastName) user.lastName = lastName;
        
        if(age) user.age = age;
    
        res.status(201).json({message :`user with id ${id}has been updated`});
        
    }
}

 export default UserControler