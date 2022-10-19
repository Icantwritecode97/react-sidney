const person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(`
  Folosind obiectul person si redyce,
  afiseaza in consola un string care contine
  skillurile de pe pozitiile pare ale arrayului, separate prin virgula
`);
const string1 = person.skills.reduce((string1, skill, index) => {
  if (index % 2 === 0) {
    string1 += `${skill}, `;
  }

  return string1;
}, '');
console.log(string1.slice(0, string1.length - 2));

console.warn(`

`);
