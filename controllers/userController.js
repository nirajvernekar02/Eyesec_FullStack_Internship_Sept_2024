const User = require('../models/userModel');


//To create the user

exports.createUser = async(req,res)=>{
try{
    const {name,email,phone,password}= req.body;
    const user = await User.create({name,email,phone,password});
    console.log(user)
    res.status(201).json({message:'User has been sucessfully created'});
}catch(err){
    res.status(500).json({message:'error'})
}
}

exports.getuser = async(req,res)=>{
    try{
        const user = await User.find()
        res.status(201).json({message:'sucessfull',user})
    }catch(err){
        res.status(500).json({message:'error',err})
    }
}


exports.updateuser = async(req,res)=>{
    try{
        const {userid} = req.params.id;
        const {name,email} = req.body;
        const user = await User.findByIdAndUpdate(
            
                userid,
                {name,email},
                {new:true}
            
        );
        res.status(201).json({message:"User Updated Sucessfully",user})

    }catch(err){
        res.status(500).json({message:'error',err})
    }
}
