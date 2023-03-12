const Intern = require("../lib/Intern");


 describe("Intern", () => {
        it("returns an object with the properties of Employee, in addition to the Intern properties.", () => {
            const intern = new Intern("John Wick", 1, "johnwick@email.com", "University of Wick")
            expect(intern.name).toEqual("John Wick");
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual("johnwick@email.com");
            expect(intern.school).toEqual("University of Wick");
        });
     });

     