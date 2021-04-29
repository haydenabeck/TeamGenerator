const Manager = require("../lib/manager")

test("getOfficeNumber should return Manager", () => {
    const testvalue = "Manager"
    const test = new Manager("Bob", 10, "bob@gmail.com", testvalue)
    expect(test.getOfficeNumber()).toBe(testvalue)
})