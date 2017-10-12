export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  vowelCount(line) {
    let vowelCount = line.match(/[aeiouy]{1,2}/ig).length;
    return vowelCount;
  }

  oneVowelWord(line) {
    let splitLine = line.split(" ");
    let oneVowelWords = [];
    let syllableCounter = 0;
    let that = this;
    splitLine.forEach(function(word) {
      let vowelNum = that.vowelCount(word);
      if (vowelNum === 1) {
        syllableCounter += 1;
      }
    });
    return syllableCounter;
  }

  silentE(line) {
    let splitLine = line.split(" ");
    let newArray = [];
    splitLine.forEach(function(word) {
      if (word[word.length-1] === "e") {
        let newWord = word.slice(0,-1);
        newArray.push(newWord);
      } else {
        let newWord = word;
        newArray.push(newWord);
      }
    });
    return newArray;
  }
}
