function createIncrementFunction(incrementBy) {
  return function(score) {
      return score + incrementBy;
  };
}

const incrementBy3 = createIncrementFunction(3);
const currentScore = 10;
const newScore = incrementBy3(currentScore);

console.log(`Current score: ${currentScore}, New score after incrementing by 3: ${newScore}`);

//Video Emulated
const person = { name: "Jordan Black", age: 18, isAdult: true, };
function createGreeting(Individual) { return (salutation) => '${salutation}, ${individual.name}!'; }

const greetJohn = createGreeting(person); console.log(greetJohn("Hello")); console.log(greetJohn("Good morning"));