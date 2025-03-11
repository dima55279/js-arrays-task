// BEGIN
const bubbleSort = (array) => {
    let flag = true;
    let nonRearrangedElements = array.length;
    while (flag && nonRearrangedElements > 0) {
        for (let i = 0; i < nonRearrangedElements - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
        nonRearrangedElements -= 1;
    }
    return array;
}
export default bubbleSort;
// END