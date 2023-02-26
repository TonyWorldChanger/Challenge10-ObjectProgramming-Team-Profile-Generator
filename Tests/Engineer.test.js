class Engineer {
    constructor(name, id, email, role, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.github = github;
    }
};


describe("Engineer", () => {
    it("returns an object that includes the engineer properties.", () => {
        const engineer = new Engineer("John Wick", 1, "johnwick@email.com", "johnwick1", "Engineer")
        expect(engineer.name).toEqual("John Wick");
        expect(engineer.id).toEqual(1);
        expect(engineer.email).toEqual("johndoe@email.com");
        expect(engineer.github).toEqual("johndoe1");
        expect(engineer.role).toEqual("Engineer");
    });
});