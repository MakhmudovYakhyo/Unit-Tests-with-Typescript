import { arrayParam } from "./ArrayParam";

test("Given object's age is above or equal to 18", () => {
    expect(arrayParam([ {name:"John",age:22}, {name:"Jack",age:18}, {name:"James",age:40} ])).toBe(true);
})

test("Given object's age is not above or equal to 18", () => {
    expect(arrayParam([ {name:"John",age:10}, {name:"Jack",age:32}, {name:"James",age:40} ])).toBe(false);
})

test("Given object's age is not above or equal to 18", () => {
    expect(arrayParam([ {name:"John",age:18}, {name:"Jack",age:17}, {name:"James",age:19} ])).toBe(false);
})

test("Given object's age is not above or equal to 18", () => {
    expect(arrayParam([ {name:"John",age:2}, {name:"Jack",age:1}, {name:"James",age:0} ])).toBe(false);
})

test("Given object's age is above or equal to 18", () => {
    expect(arrayParam([ {name:"John",age:18}, {name:"Jack",age:38}, {name:"James",age:58} ])).toBe(true);
})