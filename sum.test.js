const sum = require('./sum').sum

test('test two numbers', ()=>{
    expect(sum(2)).toBe(4)
})