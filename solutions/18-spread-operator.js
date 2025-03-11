// BEGIN
export const flatten = (array) => {
    const newArray = []
    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].length >= 0) {
                newArray.push(...array[i]);
            }
            else newArray.push(array[i]);
        }
    }
    return newArray;
}
// END