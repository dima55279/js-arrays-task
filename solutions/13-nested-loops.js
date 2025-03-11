const _ = require("lodash"); 

// BEGIN
const getSameCount = (firstArray, secondArray) => {
    let uniqueFirstArray = _.uniq(firstArray);
    let uniqueSecondArray = _.uniq(secondArray);
    let counter = 0;
    for (let i = 0; i < uniqueFirstArray.length; i++) {
        for (let j = 0; j < uniqueSecondArray.length; j++) {
            if (uniqueFirstArray[i] === uniqueSecondArray[j]) {
                counter++;
            }
        }
    }
    return counter;
}
export default getSameCount;
// END