const User = require('../models/user.model');

// Create a new user

const createUser = async (user) => {
    const newUser = new User(
        user
    );
    const userSucced = await newUser.save();
    if(userSucced === undefined || userSucced === null ) {
        throw new Error();
    } else {
        return userSucced
    }
}

//Read all users
const findUsers = () => { 
    return User.find();
  
}

// Condition Gender
const findGender = (gender) => { 
    return User.find({ gender });
}


// Update a user

const updateUser = (dni,user) => {
    const { name, gender,email,password } = user;
     return User.findOneAndUpdate({ dni }, { name, gender,email,password }, { new: true });

}

const deleteUser = (dni) => {
    return User.deleteOne({ dni })
}

module.exports = { createUser, findUsers, findGender, updateUser, deleteUser };
