
class Employee {
    constructor(name, id, role) {
        this.name = name;
        this.id = id;
        this.role = role;
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
    getRole() {
        return "Employee";
    }
};

module.exports = Employee;