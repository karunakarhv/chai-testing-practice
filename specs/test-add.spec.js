var assert = require('chai').assert;

function add(args) {
    let temp = 0;
    args.forEach(arg => {
        if (typeof arg !== 'number') {
            throw new Error('All arguments must be numbers');
        }
        temp += arg;
    });
    return temp;
}

describe("add()", function () {
  const tests = [
    { args: [1, 2], expected: 3 },
    { args: [1, 2, 3], expected: 6 },
    { args: [1, 2, 3, 4], expected: 10 },
  ];

  tests.forEach(({ args, expected }) => {
    it(`correctly adds ${args.length} args`, function () {
      const res = add(args);
      assert.strictEqual(res, expected);
    });
  });
});