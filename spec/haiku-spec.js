import { Haiku } from './../js/haiku.js';

describe('Haiku', function(){
let newHaiku;
  beforeEach(function(){
    newHaiku = new Haiku("","","")
  });

  it('create a new poem with three lines', function(){
    expect(newHaiku.line1) .toEqual("")
    expect(newHaiku.line2) .toEqual("")
    expect(newHaiku.line3) .toEqual("")
  });

  it('count vowels in a line', function(){
    let vowelNum = newHaiku.vowelCount("good butts are squishy")
    expect(vowelNum) .toEqual(8)
  });

  it('identifies words with one vowel as one syllable words', function(){
    let words = newHaiku.oneVowelWord("i have a great butt")
    expect(words) .toEqual(3)
  })
});
