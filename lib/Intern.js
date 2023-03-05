

class Intern {
    constructor(name, id, email, role, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.school = school;
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
    getschool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
};

module.exports = Intern;