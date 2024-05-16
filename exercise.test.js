const exercise = require('./exercise')

test('Check capitalization of first character', () => {
    const testCases = [
        {case: 'carlos', outcome: 'Carlos'},
        {case: 'abracadabra', outcome: 'Abracadabra'},
        {case: 'test', outcome: 'Test'}
    ]
    testCases.forEach(test => {
        expect(exercise.capitalize(test.case)).toMatch(test.outcome)
    })
});

test('Check type of parameter', () => {
    const testCases = [6, null, undefined, {type:'object'}, ['list'], '']
    testCases.forEach(test => {
        expect(() => exercise.capitalize(test)).toThrow()
    })
});

test("reverseString() output string is reversed", () => {
    const testCases = [
      {case: "singleWord", result: "droWelgnis"},
      {case: "multiple word sentence", result: "ecnetnes drow elpitlum"}
    ];
    testCases.forEach( (testCase) => {
        expect(exercise.reverseString(testCase.case)).toMatch(testCase.result);
    })
  });

  test('Check type of parameter', () => {
    const testCases = [6, null, undefined, {type:'object'}, ['list'], '']
    testCases.forEach(test => {
        expect(() => exercise.reverseString(test)).toThrow()
    })
});

test('Functions with object', () => {
    expect(exercise.calculator.add(1,2)).
    toEqual(3);
    expect(exercise.calculator.add(0.1,0.2)).
    toBeCloseTo(0.3);
    expect(exercise.calculator.subtract(4,2)).
    toBe(2);
    expect(exercise.calculator.subtract(0.4,0.2)).
    toBeCloseTo(0.2);
    expect(exercise.calculator.divide(4,2)). 
    toEqual(2);
    expect(exercise.calculator.divide(0,2)). 
    toBe(0);
    expect(exercise.calculator.divide(4,0)). 
    toBe(Infinity);
    expect(exercise.calculator.multiply(2,4)). 
    toEqual(8)
})

test('Encryption with Caesar Cipher', () => {
    expect(exercise.ceasarCipher('Zulkarnain', 3)).toMatch(/Cxonduqdlq/);
    expect(exercise.ceasarCipher('Zulkarnain', 5)).toMatch(/Ezqpfwsfns/);
    expect(exercise.ceasarCipher('Practicing TDD with Jest! Hurrraaaayyyyy...', 5)).
    toMatch(/Uwfhynhnsl YII bnym Ojxy! Mzwwwffffddddd.../);
})

test('Array analysis', () => {
    expect(exercise.analyzeArray([1,2,3,4,5,6,7,8,9])).
    toEqual({ average: 5, min: 1, max: 9, length: 9 })
})