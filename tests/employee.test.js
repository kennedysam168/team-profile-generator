const { test } = require('@jest/globals');
const employee = require('../lib/employee')


test ("name", () => {
    
      const name = "Mike";
      const employee = employee(name);

      expect(employee.name).toEqual(name);
    
});

test ("id", () => {
   
      const id = 17;
      const employee = employee("Mike", 17);

      expect(employee.id).toEqual(id);
   
});

test ("email", () => {
    
      const email = "Mike@gmail.com";
      const employee = employee("Mike", 17, "Mike@gmail.com");

      expect(employee.email).toEqual(eamail);
    
});
