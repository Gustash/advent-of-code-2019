const { intcodeProgram, getInitialInput } = require('./helpers');

const DESIRED_OUTPUT = 19690720;

function main() {
  let output;
  let noun;
  let verb;

  while (output !== DESIRED_OUTPUT) {
    noun = Math.round(Math.random() * 99);
    verb = Math.round(Math.random() * 99);

    console.log('Testing', [noun, verb]);
    const input = getInitialInput();
    input[1] = noun;
    input[2] = verb;

    output = intcodeProgram(input);
  }

  console.log('Noun:', noun);
  console.log('Verb:', verb);
  console.log('Result:', 100 * noun + verb);
}

main();
