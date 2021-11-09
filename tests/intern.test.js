const { expect } = require('@jest/globals');
const Intern = require('../lib/intern');



test ("intern", () => {
      const intern = new Intern();
      expect(typeof(intern)).toBe("object")
})


test ("name", () => {
      const name = "Dave";
      const intern = new Intern(name);
      expect(intern.name).toBe(name);
    
});

test ("id", () => {
      const id = 19;
      const intern = new Intern("Dave", id);
      expect(intern.id).toBe(id);
   
});

test ("email", () => {
      const email = "Dave@gmail.com";
      const intern = new Intern("Dave", 19, email);
      expect(intern.email).toBe(email);
    
});

test ("school", () => {
      const school = "UPenn"
      const intern = new Intern("Dave", 19, "Dave@gmail.com", school)
      expect(intern.school).toBe(school);
})

test ("getName", () => {
      const email = "Dave@gmail.com";
      const intern = new Intern("Dave", 19, email);
      expect(intern.getName()).toBe("Dave");
    
});

test ("getId", () => {
      const email = "Dave@gmail.com";
      const intern = new Intern("Dave", 19, email);
      expect(intern.getId()).toBe(19);
    
});

test ("getEmail", () => {
      const email = "Dave@gmail.com";
      const intern = new Intern("Dave", 19, email);
      expect(intern.getEmail()).toBe("Dave@gmail.com");
    
});

test ("getSchool", () => {
    const email = "Dave@gmail.com";
    const intern = new Intern("Dave", 19, email);
    expect(intern.getSchool()).toBe("UPenn");
  
});