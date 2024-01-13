export function taskExample(string) {

    const words = string.split(" ");
    const revWords = [];
    
    for (let word of words) {
        let revWord = "";
        
        for (let i = word.length - 1; i >= 0; --i) {
            revWord += word[i];
        }
        
        revWords.push(revWord);
    }
    const correctForm = revWords.join(" ");
    return correctForm;
}