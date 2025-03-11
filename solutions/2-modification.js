// BEGIN
export const swap = (array) => {
    let firstElement = array[0];
    if (array.length > 1) {
        array[0] = array[array.length - 1];
        array[array.length - 1] = firstElement;
    }
    return array;
}
// END