const Employee = require("../lib/employee");

test("Create a new employee", () => {
    const employeeTest = new Employee(110011, 'John Doe', 'johndoe@employee.com');
    expect(employeeTest.id).toEqual(expect.any(Number));
    expect(employeeTest.name).toBe('John Doe');
    expect(employeeTest.email).toEqual(expect.any(String));
});

test("All fields are filled out", () => {
    const employeeTest = new Employee(11011, 'John Doe', 'johndoe@employee.com');
    expect(employeeTest.getId()).toBe(employeeTest.id);
    expect(employeeTest.getName()).toBe(employeeTest.name);
    expect(employeeTest.getEmail()).toBe(employeeTest.email);
});