export class Calculator {

    addition(x, y): number {

        if (typeof x !== 'number' || typeof y !== 'number') {
            return NaN;
        }

        return x + y;
    }

    subtraction(x, y): number {

        if (typeof x !== 'number' || typeof y !== 'number') {
            return NaN;
        }

        return x - y;
    }

    multiplication(x, y): number {

        if (typeof x !== 'number' || typeof y !== 'number') {
            return NaN;
        }

        return x * y;
    }

    division(x, y): number {

        if (typeof x !== 'number' || typeof y !== 'number') {
            return NaN;
        }

        return x / y;
    }
}