const { intcodeProgram, getInitialInput } = require('./helpers');

const DESIRED_OUTPUT = 19690720;

function main() {
  let output;
  let noun;
  let verb;
  for (let i = 0; i < 100; i += 1) {
    for (let j = 0; j < 100; j += 1) {
      const input = getInitialInput();
      input[1] = noun;
      input[2] = verb;

      output = intcodeProgram(input);

      if (output === DESIRED_OUTPUT) {
        console.log('Noun:', noun);
        console.log('Verb:', verb);
        console.log('Result:', 100 * noun + verb);
        return;
      }

      verb = 0 + j;
    }

    noun = 0 + i;
  }
}

main();
