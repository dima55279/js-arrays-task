// BEGIN
const calculateAverage = (array) => {
    let sum = 0;
    if (array.length > 0) {
        for (const temperature of array) {
            sum += temperature;
        }
        sum = sum / array.length;
        return sum;
    }
    else return null;
}
export default calculateAverage;
// END