const Model = require('./model');


function addUser(user){
    const myUser = new Model(user);
    return myUser.save();
}


async function getUsers(){
    const users = await Model.find();    
    return users;
}
/*
async function updateMessage(id,message){
    const foundMessage = await Model.findOne({
        _id: id
    });
    
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

async function removeMessage(id){
    return Model.deleteOne({
        _id: id
    });
}*/

module.exports = {
    add: addUser,
    list: getUsers,
    //update: updateUser,
    //remove: removeUser,
}