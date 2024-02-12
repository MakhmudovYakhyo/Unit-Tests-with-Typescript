import { checkDateFormat } from "./DateFormat";

test("Check the given date format is correct", () => {
    expect(checkDateFormat("12-01-2022")).toBe(true);
})

test("Check the given date format is not correct", () => {
    expect(checkDateFormat("32-01-2022")).toBe(false);
})

test("Check the given date format is not correct", () => {
    expect(checkDateFormat("31-13-2024")).toBe(false);
})

test("Check the given date format is not correct", () => {
    expect(checkDateFormat("131-13-20242")).toBe(false);
})

test("Check the given date format is not correct", () => {
    expect(checkDateFormat("31-131-2024")).toBe(false);
})

test("Check the given date format is not correct", () => {
    expect(checkDateFormat("31-13-20242")).toBe(false);
})

test("Check the given date format is correct", () => {
    expect(checkDateFormat("12-31-2023")).toBe(true);
})

test("Check the given date format is not correct", () => {
    expect(checkDateFormat("13-31-2023")).toBe(false);
})

test("Check the given date format is not correct", () => {
    expect(checkDateFormat("12-32-2023")).toBe(false);
})

test("Check the given date format is not correct", () => {
    expect(checkDateFormat("121-32-2023")).toBe(false);
})

test("Check the given date format is not correct", () => {
    expect(checkDateFormat("12-321-2023")).toBe(false);
})

test("Check the given date format is not correct", () => {
    expect(checkDateFormat("12-32-20235")).toBe(false);
})

test("Check the given date format is not correct", () => {
    expect(checkDateFormat("2023-31-2023")).toBe(false);
})

test("Check the given date format is not correct", () => {
    expect(checkDateFormat("2023-31-12")).toBe(false);
})

test("Check the given date format is not correct", () => {
    expect(checkDateFormat("2023-13-32")).toBe(false);
})

test("Check the given date format is correct", () => {
    expect(checkDateFormat("20234-12-31")).toBe(true);
})

test("Check the given date format is not correct", () => {
    expect(checkDateFormat("2023-321-12")).toBe(false);
})

test("Check the given date format is not correct", () => {
    expect(checkDateFormat("2023-32-121")).toBe(false);
})
