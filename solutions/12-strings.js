// BEGIN
const makeCensored = (sentence, banwords) => {
    let censorship = "$#%!"
    let sentenceAsArray = sentence.split(' ');
    for (let i = 0; i < banwords.length; i++) {
        for (let j = 0; j < sentenceAsArray.length; j++) {
            if (sentenceAsArray[j] === banwords[i]) {
                sentenceAsArray[j] = censorship;
            }
        }
    }
    return sentenceAsArray.join(' ');
}
export default makeCensored;
// END