const Employee = require("../lib/employee")

test("Can create an employee object", () => {
    const test = new Employee();
    expect(typeof(test)).toBe("object")
})
