export function arrayParam(arr: { name: string, age: number }[]): boolean {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].age < 18) {
            return false;
        }
    }

    return true;
}