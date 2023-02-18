const Engineer = require('../lib/engineer');

test("Create a new engineer", () => {
    const employeeTest = new Engineer('John Doe', 110011, 'johndoe@employee.com');
    expect(employeeTest.name).toBe('John Doe');
    expect(employeeTest.id).toEqual(expect.any(Number));
    expect(employeeTest.email).toEqual(expect.any(String));
});

test("All fields are filled out", () => {
    const employeeTest = new Engineer('John Doe', 110011, 'johndoe@employee.com');
    expect(employeeTest.getName()).toBe(employeeTest.name);
    expect(employeeTest.getId()).toBe(employeeTest.id);
    expect(employeeTest.getEmail()).toBe(employeeTest.email);
});