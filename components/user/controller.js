const store = require('./store');


function addUser(name){
    if(!name){
        console.error('[userController] No hay nombre');
        return Promise.reject('Invalid name');
    }

    const user = {
        name,
    };

    return store.add(user);
}

function getUsers(){
    return store.list();
}

module.exports = {
    addUser,
    getUsers,
};