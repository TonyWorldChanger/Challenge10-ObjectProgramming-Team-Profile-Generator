const Employee = require("../lib/Employee");



describe("Employee", () => {
    it("creates an Employee object with the correct properties", () => {
        const employee = new Employee("John Wick", 1, "johnwick@email.com");
        expect(employee.name).toEqual("John Wick");
        expect(employee.id).toEqual(1);
        expect(employee.email).toEqual("johnwick@email.com");
    });
});