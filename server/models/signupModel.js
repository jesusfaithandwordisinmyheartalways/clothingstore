


import mongoose  from 'mongoose';



const signupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    
    password: {
        type: String,
        required: true,
        minlength: 6
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
  

})




const NewUser = mongoose.model('usersignup', signupSchema)





export default NewUser