function wakeDog(dogName, dogBreed) {
  let output = `Wake ${dogName} the ${dogBreed}`;
  console.log(output);
  return output;
}

function leashDog(dogName, dogBreed) {
  let output = `Leash ${dogName} the ${dogBreed}`;
  console.log(output);
  return output;
}

function walkToPark(dogName, dogBreed) {
  let output = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(output);
  return output;
}

function throwFrisbee(dogName, dogBreed) {
  let output = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(output);
  return output;
}

function walkHome(dogName, dogBreed) {
  let output = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(output);
  return output;
}

function unleashDog(dogName, dogBreed) {
  let output = `Unleash ${dogName} the ${dogBreed}`;
  console.log(output);
  return output;
}

let routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog,
];

function exerciseDog(name, breed) {
  let output = [];
  routine.forEach((exercise) => {
    output.push(exercise(name, breed));
  });
  return output;
}
