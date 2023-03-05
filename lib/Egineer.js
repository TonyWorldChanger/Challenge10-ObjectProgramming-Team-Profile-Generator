
class Engineer {
    constructor(name, id, email, role, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.github = github;
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getGitHub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
    
};


module.exports = Engineer;