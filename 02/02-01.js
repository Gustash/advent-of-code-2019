const { intcodeProgram, getInitialInput } = require('./helpers');

const input = getInitialInput();

function main() {
  /**
   * Once you have a working computer, the first step is to restore the gravity
   * assist program (your puzzle input) to the "1202 program alarm" state it had
   * just before the last computer caught fire. To do this, before running the
   * program, replace position 1 with the value 12 and replace position 2 with
   * the value 2. What value is left at position 0 after the program halts?
   */
  input[1] = 12;
  input[2] = 2;

  const output = intcodeProgram(input);
  console.log(`The value in position 0 is: ${output}`);
}

main();
