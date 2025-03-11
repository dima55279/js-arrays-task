// BEGIN
const getSameParity = (array) => {
    let parityOfFirstElement = Math.abs(array[0]) % 2;
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (Math.abs(array[i]) % 2 === parityOfFirstElement)
            newArray.push(array[i]);
    }
    return newArray;
}
export default getSameParity;
// END