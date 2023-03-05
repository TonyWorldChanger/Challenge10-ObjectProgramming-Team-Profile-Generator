const Manager = require("../lib/Manager");

class Manager {
    constructor(name, id, email, role, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.officeNumber = officeNumber;
    }
};

describe("Manager", () => {
    it("returns an object with the properties of Employee, in addition to the Intern properties.", () => {
        const manager = new Manager("John Wick", 1, "johnwick@email.com", "officeNumber", "Manager")
        expect(manager.name).toEqual("John Wick")
        expect(manager.id).toEqual(1)
        expect(manager.email).toEqual("johnwick@email.com")
        expect(manager.officeNumber).toEqual(undefined)
        expect(manager.role).toEqual("Manger");
    });
 });