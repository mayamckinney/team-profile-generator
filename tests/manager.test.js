const Manager = require('../lib/manager');

test("Create a new engineer", () => {
    const employeeTest = new Manager(110011, 'John Doe', 'johndoe@employee.com', 303);
    expect(employeeTest.id).toEqual(expect.any(Number));
    expect(employeeTest.name).toBe('John Doe');
    expect(employeeTest.email).toEqual(expect.any(String));
    expect(employeeTest.officeNumber).toEqual(expect.any(Number));
});

test("All fields are filled out", () => {
    const employeeTest = new Manager(110011, 'John Doe', 'johndoe@employee.com', 303);
    expect(employeeTest.getId()).toBe(employeeTest.id);
    expect(employeeTest.getName()).toBe(employeeTest.name);
    expect(employeeTest.getEmail()).toBe(employeeTest.email);
    expect(employeeTest.getOfficeNumber()).toBe(employeeTest.officeNumber);
});