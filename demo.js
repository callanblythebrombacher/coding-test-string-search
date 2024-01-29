function stringSearch(inputString){
    let matches = [];
    let curMatch = "";
    let tempStr = inputString;


    for (let curPos = 0, nextPos = 0; curPos < tempStr.length;) {
        nextPos = tempStr.indexOf("\"");
        
        curMatch = tempStr.substring(curPos, nextPos+1);
        
        matches.push(curMatch);
        tempStr = tempStr.replace(curMatch, "");
    }

    return matches;
}

console.log(stringSearch('some string, "with" content that "needs extracting"'));
console.log(stringSearch('some string, ""with content that ""needs extracting"'));