// BEGIN
const getSuperSeriesWinner = (array) => {
    let canada = 0;
    let ussr = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] > array[i][1]) {
            canada++;
        }
        else if (array[i][0] < array[i][1]) {
            ussr++;
        }
    }
    if (canada > ussr)
        return "canada";
    else if (canada < ussr)
        return "ussr";
    else return null;
}
export default getSuperSeriesWinner;
// END