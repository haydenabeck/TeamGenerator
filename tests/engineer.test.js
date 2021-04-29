const Engineer = require("../lib/engineer")

test("getRole should return Engineer", () => {
    const testvalue = "Engineer"
    const test = new Engineer("Bob", 10, "bob@gmail.com", testvalue)
    expect(test.getRole()).toBe(testvalue)
})