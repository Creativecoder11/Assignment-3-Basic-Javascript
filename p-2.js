function isJavaScriptFile (string){
    if (typeof string !== "string") {
        return "Please enter a valid input ";
    }
    const fileName = string.endsWith('.js');
    return fileName;
}
const inputFileName = 'Kawser.js'
const findName = isJavaScriptFile(inputFileName);
console.log(findName);
