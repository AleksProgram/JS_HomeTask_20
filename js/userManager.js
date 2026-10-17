function createUserManager() {
    let users = [];
    
    return {
        addUser: function(user) {
            users.push(user);
        },
        getUsers: function() {
            return [...users];
        }   
    }
}