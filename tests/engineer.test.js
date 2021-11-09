const { expect } = require('@jest/globals');
const Engineer = require('../lib/engineer');



test ("engineer", () => {
      const engineer = new Engineer();
      expect(typeof(engineer)).toBe("object")
})


test ("name", () => {
      const name = "Carl";
      const engineer = new Engineer(name);
      expect(engineer.name).toBe(name);
    
});

test ("id", () => {
      const id = 18;
      const engineer = new Engineer("Carl", id);
      expect(engineer.id).toBe(id);
   
});

test ("email", () => {
      const email = "Carl@gmail.com";
      const engineer = new Engineer("Carl", 18, email);
      expect(engineer.email).toBe(email);
    
});

test ("github", () => {
      const github = "Carl168";
      const engineer = new Engineer("Carl", 18, "Carl@gmail.com", github);
      expect(engineer.github).toBe(github);
    
});

test ("getName", () => {
      const email = "Carle@gmail.com";
      const engineer = new Engineer("Carl", 18, email);
      expect(engineer.getName()).toBe("Carl");
    
});

test ("getId", () => {
      const email = "Carl@gmail.com";
      const engineer = new Engineer("Carl", 18, email);
      expect(engineer.getId()).toBe(18);
    
});

test ("getEmail", () => {
      const email = "Carl@gmail.com";
      const engineer = new Engineer("Carl", 18, email);
      expect(engineer.getEmail()).toBe("Carl@gmail.com");
    
});

test ("getGithub", () => {
      const email = "Carl@gmail.com";
      const engineer = new Engineer("Carl", 18, email);
      expect(engineer.getGithub()).toBe("Carl168");
    
});