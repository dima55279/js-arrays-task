// BEGIN
const countUniqChars = (string) => {
    let arrayOfUniqueChars = [];
    for (let i = 0; i < string.length; i++) {
        if (arrayOfUniqueChars.includes(string[i]) !== true) {
            arrayOfUniqueChars.push(string[i]);
        }
    }
    return arrayOfUniqueChars.length;
}
export default countUniqChars;
// END