const { expect } = require('@jest/globals');
const Employee = require('../lib/employee');


test ("employee", () => {
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

test ("getName", () => {
      const email = "Mike@gmail.com";
      const employee = new Employee("Mike", 17, email);
      expect(employee.getName()).toBe("Mike");
    
});

test ("getId", () => {
      const email = "Mike@gmail.com";
      const employee = new Employee("Mike", 17, email);
      expect(employee.getId()).toBe(17);
    
});

test ("getEmail", () => {
      const email = "Mike@gmail.com";
      const employee = new Employee("Mike", 17, email);
      expect(employee.getEmail()).toBe("Mike@gmail.com");
    
});
