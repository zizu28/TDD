const exercise = require('./exercise')

test('Check capitalization of first character', () => {
    const testCases = [
        {case: 'carlos', outcome: 'Carlos'},
        {case: 'abracadabra', outcome: 'Abracadabra'},
        {case: 'test', outcome: 'Outcome'}
    ]
    testCases.forEach(test => {
        expect(exercise.capitalize(test.case)).toMatch(test.outcome)
    })
});

test('Input is a string', () => {
    const testCases = [6, null, undefined, {type:'object'}, ['list'], '']
    testCases.forEach(test => {
        expect(() => exercise.capitalize(test)).toThrow(new Error(`${test} is an invalid input...`))
    })
})


test('Reverse a string', () => {
    expect(exercise.reverseString('zulka')).
    toMatch('akluz')
});

test('Functions with object', () => {
    expect(exercise.calculator.add(1,2)).
    toEqual(3);
    expect(exercise.calculator.subtract(4,2)).
    toEqual(2);
    expect(exercise.calculator.divide(4,2)). 
    toEqual(2);
    expect(exercise.calculator.multiply(2,4)). 
    toEqual(8)
})