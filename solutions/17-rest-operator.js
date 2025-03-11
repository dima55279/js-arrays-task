// BEGIN
export const getMax = (array) => {
    if (array.length > 0) {
        const [first, ... rest] = array;
        let max = first;
        for (let i = 0; i < rest.length; i++) {
            if (max < rest[i]) {
                max = rest[i];
            }
        }
        return max;
    }
    else return null;
}
// END