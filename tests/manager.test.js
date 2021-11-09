const { expect } = require('@jest/globals');
const Manager = require('../lib/manager');



test ("manager", () => {
      const manager = new Manager();
      expect(typeof(manager)).toBe("object")
})


test ("name", () => {
      const name = "Sam";
      const manager = new Manager(name);
      expect(manager.name).toBe(name);
    
});

test ("id", () => {
      const id = 20;
      const manager = new Manager("Sam", id);
      expect(manager.id).toBe(id);
   
});

test ("email", () => {
      const email = "Sam@gmail.com";
      const manager = new Manager("Sam", 20, email);
      expect(manager.email).toBe(email);
    
});

test ("officeNumber", () => {
      const officeNumber = 10;
      const manager = new Manager("Sam", 20, "Sam@gmail.com", officeNumber);
      expect(manager.officeNumber).toBe(officeNumber);
    
});

test ("getName", () => {
      const email = "Sam@gmail.com";
      const manager = new Manager("Sam", 20, email);
      expect(manager.getName()).toBe("Sam");
    
});

test ("getId", () => {
      const email = "Sam@gmail.com";
      const manager = new Manager("Sam", 20, email);
      expect(manager.getId()).toBe(20);
    
});

test ("getEmail", () => {
      const email = "Sam@gmail.com";
      const manager = new Manager("Sam", 20, email);
      expect(manager.getEmail()).toBe("Sam@gmail.com");
    
});
