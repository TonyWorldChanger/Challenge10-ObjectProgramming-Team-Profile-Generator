// creates the employee contructor object
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email=email;
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