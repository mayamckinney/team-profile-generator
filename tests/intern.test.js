const Intern = require('../lib/intern');

test("Create a new intern", () => {
    const employeeTest = new Intern(110011, 'John Doe', 'johndoe@employee.com', 'Willington');
    expect(employeeTest.id).toEqual(expect.any(Number));
    expect(employeeTest.name).toBe('John Doe');
    expect(employeeTest.email).toEqual(expect.any(String));
    expect(employeeTest.school).toEqual(expect.any(String));
});

test("All fields are filled out", () => {
    const employeeTest = new Intern('John Doe', 110011, 'johndoe@employee.com', 'Willington');
    expect(employeeTest.getId()).toBe(employeeTest.id);
    expect(employeeTest.getName()).toBe(employeeTest.name);
    expect(employeeTest.getEmail()).toBe(employeeTest.email);
    expect(employeeTest.getSchool()).toBe(employeeTest.school);
});