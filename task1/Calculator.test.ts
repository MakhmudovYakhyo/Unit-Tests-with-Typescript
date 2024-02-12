import { Calculator } from "./Calculator";

let calculator = new Calculator();

//unit tests for Addition function
test("Check the result 1 + 1 is equal to 2", () => {
    expect(calculator.addition(1, 1)).toBe(2);
})

test("Check the result 1 + '1' is not equal to 2", () => {
    expect(calculator.addition(1, '1')).not.toBe(2);
})

test("Check the result 1 + '1' is equal to NaN or throws error", () => {
    expect(calculator.addition(1, '1')).toThrowError('Not a number!');
})

test("Check the result '1' + '1' is equal to NaN or throws error", () => {
    expect(calculator.addition('1', '1')).toThrowError('Not a number!');
})


//unit tests for Subtraction function
test("Check the result 2 - 1 is equal to 1", () => {
    expect(calculator.subtraction(2, 1)).toBe(1);
})

test("Check the result 2 - '1' is not equal to 1", () => {
    expect(calculator.subtraction(2, '1')).not.toBe(1);
})

test("Check the result 2 - '1' is equal to NaN or throws error", () => {
    expect(calculator.subtraction(2, '1')).toThrowError('Not a number!');
})

test("Check the result '2' - '1' is equal to NaN or throws error", () => {
    expect(calculator.subtraction('2', '1')).toThrowError('Not a number!');
})

//unit tests for Multiplication function
test("Check the result 2 * 2 is equal to 4", () => {
    expect(calculator.multiplication(2, 2)).toBe(4);
})

test("Check the result 2 * '2' is not equal to 4", () => {
    expect(calculator.multiplication(2, '2')).not.toBe(4);
})

test("Check the result 2 * '2' is equal to NaN or throws error", () => {
    expect(calculator.multiplication(2, '2')).toThrowError('Not a number!');
})

test("Check the result '2' * '2' is equal to NaN or throws error", () => {
    expect(calculator.multiplication('2', '2')).toBe(NaN);
})

//unit tests for Division function
test("Check the result 6 / 3 is equal to 2", () => {
    expect(calculator.division(6, 3)).toBe(2);
})

test("Check the result 6 / '3' is not equal to 2", () => {
    expect(calculator.division(6, '3')).not.toBe(2);
})

test("Check the result 6 / '3' is equal to NaN or throws error", () => {
    expect(calculator.division(6, '3')).toThrowError('Not a number!');
})

test("Check the result '6' * '3' is equal to NaN or throws error", () => {
    expect(calculator.division('6', '3')).toThrowError('Not a number!');
})