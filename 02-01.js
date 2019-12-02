const input = [
  1,
  0,
  0,
  3,
  1,
  1,
  2,
  3,
  1,
  3,
  4,
  3,
  1,
  5,
  0,
  3,
  2,
  1,
  10,
  19,
  2,
  9,
  19,
  23,
  1,
  9,
  23,
  27,
  2,
  27,
  9,
  31,
  1,
  31,
  5,
  35,
  2,
  35,
  9,
  39,
  1,
  39,
  10,
  43,
  2,
  43,
  13,
  47,
  1,
  47,
  6,
  51,
  2,
  51,
  10,
  55,
  1,
  9,
  55,
  59,
  2,
  6,
  59,
  63,
  1,
  63,
  6,
  67,
  1,
  67,
  10,
  71,
  1,
  71,
  10,
  75,
  2,
  9,
  75,
  79,
  1,
  5,
  79,
  83,
  2,
  9,
  83,
  87,
  1,
  87,
  9,
  91,
  2,
  91,
  13,
  95,
  1,
  95,
  9,
  99,
  1,
  99,
  6,
  103,
  2,
  103,
  6,
  107,
  1,
  107,
  5,
  111,
  1,
  13,
  111,
  115,
  2,
  115,
  6,
  119,
  1,
  119,
  5,
  123,
  1,
  2,
  123,
  127,
  1,
  6,
  127,
  0,
  99,
  2,
  14,
  0,
  0,
];

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

  for (let i = 0; i < input.length + (input.length % 4); i += 4) {
    const opcode = input[i];
    const input1Addr = input[i + 1];
    const input2Addr = input[i + 2];
    const outputAddr = input[i + 3];
    const input1 = input[input1Addr];
    const input2 = input[input2Addr];

    switch (opcode) {
      case 1:
        input[outputAddr] = input1 + input2;
        break;
      case 2:
        input[outputAddr] = input1 * input2;
        break;
      case 99:
        console.log(`The value in position 0 is: ${input[0]}`);
        process.exit(0);
        break;
      default:
        console.log(`Unsupported opcode ${opcode}. Please check your input.`);
        process.exit(1);
    }
  }
}

main();
