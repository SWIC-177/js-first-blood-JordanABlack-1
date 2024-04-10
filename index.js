const people = [
  {
    id: 1,
    name: "John Doe",
    age: 23,
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 29,
  },
  {
    id: 3,
    name: "Jim Doe",
    age: 34,
  },
  {
    id: 4,
    name: "Jill Doe",
    age: 45,
  },
  {
    id: 5,
    name: "Jack Doe",
    age: 56,
  },
  {
    id: 6,
    name: "Jenny Doe",
    age: 67,
  },
];

function renameOdds(p) {
  for (let i = 0; i < p.length; i++) {
    if (p[i].id % 2 !== 0) {
      p[i].name = "Odd Name";
    }
  }

<<<<<<< HEAD
  return p;
}

console.log(renameOdds(people));
=======
const updatedPerson = updatePersonName(person, "Jane Doe");
console.log(updatedPerson);

const person = {
  name: "John Doe",
  age: 23,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
};

function updatePersonName = (p, newName) {
  const p2Update = { ...p };

  p2Update.name = newName;
  return p;
}

const updatedPerson = updatePersonName(person, "Jane Doe");
console.log(updatedPerson);
>>>>>>> 14dd79c8bb5d2196d0b0e30719bddfac5041574f
