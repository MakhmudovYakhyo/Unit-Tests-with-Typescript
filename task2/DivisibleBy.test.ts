import { divisibleBy } from "./DivisibleBy";

test("Given number is divisible by 3 and not 5", () => {
    expect(divisibleBy(3)).toBe(false);
})

test("Given number is divisible by 5 and not 3", () => {
    expect(divisibleBy(5)).toBe(false);
})

test("Given number is divisible by 5 and 3", () => {
    expect(divisibleBy(15)).toBe(true);
})

