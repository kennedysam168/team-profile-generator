const { describe } = require('yargs');
const employee = require('../lib/employee')


describe ("name", () => {
    it("sets employees name", () => {
      const name = "Mike";
      const employee = new employee(name);

      expect(employee.name).toEqual(name);
    });
});

describe ("id", () => {
    it("sets employees id", () => {
      const id = 17;
      const employee = new employee("Mike", 17);

      expect(employee.id).toEqual(id);
    });
});

describe ("email", () => {
    it("sets employees email", () => {
      const email = "Mike@gmail.com";
      const employee = new employee("Mike", 17, "Mike@gmail.com");

      expect(employee.email).toEqual(eamail);
    });
});
