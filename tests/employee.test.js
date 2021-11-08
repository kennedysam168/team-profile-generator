const { expect } = require('@jest/globals');
const Employee = require('../lib/employee');


test ("can i create a new employee", () => {
      const employee = new Employee();
      expect(typeof(employee)).toBe("object")
})


test ("can we set name from constructor", () => {
      const name = "Mike";
      const employee = new Employee(name);
      expect(employee.name).toBe(name);
    
});

test ("id", () => {
      const id = 17;
      const employee = new Employee("Mike", id);
      expect(employee.id).toBe(id);
   
});

test ("email", () => {
      const email = "Mike@gmail.com";
      const employee = new Employee("Mike", 17, email);
      expect(employee.email).toBe(email);
    
});
