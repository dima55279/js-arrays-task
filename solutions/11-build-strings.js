// BEGIN
const buildDefinitionList = (array) => {
    let string = "";
    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            string += "<dt>" + array[i][0] + "</dt>" + "<dd>" + array[i][1] + "</dd>";
        }
    }
    else return string;
    string = "<dl>" + string + "</dl>";
    return string;
}
export default buildDefinitionList;
// END