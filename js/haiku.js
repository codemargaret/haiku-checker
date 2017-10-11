export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  vowelCount(line) {
    let vowelCount = line.match(/[aeiouy]/ig).length;
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
        syllableCounter += 1; // return true; // one silabul
      }
    });
    return syllableCounter;
  }
}
