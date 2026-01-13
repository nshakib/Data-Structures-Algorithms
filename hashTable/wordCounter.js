

function wordCounter(text){
    const lowerText = text.toLowerCase();

    const wordMap = {};

    const words = lowerText.split(/\s+/);
    
    for(const word of words){
        if(word in wordMap){
            wordMap[word]++;
        }else{
            wordMap[word] = 1;
        }
    }
    return wordMap;
}

const text = "walk dod dog dog";
const result = wordCounter(text);
console.log(result);