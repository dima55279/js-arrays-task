// BEGIN
const getTotalAmount = (array, currency) => {
    let balance = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].slice(0, 3) === currency) {
            balance += Number(array[i].slice(4));
        }
    }
    return balance;
}
export default getTotalAmount;
// END