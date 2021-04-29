const Intern = require("../lib/intern")

test("getSchool should return Intern", () => {
    const testvalue = "Intern"
    const test = new Intern("Bob", 10, "bob@gmail.com", testvalue)
    expect(test.getSchool()).toBe(testvalue)
})