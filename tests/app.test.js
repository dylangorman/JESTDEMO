// TESTING CHALLENGES
const {add} = require('../app.js')

// tests can eother contain a string describing the test or a funstion where we make our assertions 
test('2 + 3 = 5', () =>{
    expect(add(2,3)).toEqual(5)
})
// or 
test("should equal 5 when passed 2 and 3", () =>{
    expect(add(2,3)).toEqual(5)
})


