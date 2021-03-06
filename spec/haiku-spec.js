import { Haiku, Poem} from './../js/haiku.js';

describe('Haiku', function(){
let newHaiku;
  beforeEach(function(){
    newHaiku = new Haiku('',"")
  });

  it('create a new poem with three lines', function(){
    expect(newHaiku.line) .toEqual("")
  });

  it('count vowels and vowel teams in a line', function(){
    let vowelNum = newHaiku.vowelCount("good butts are squishy")
    expect(vowelNum) .toEqual(6)
  });

  it('identifies words with one vowel or vowel team as one syllable words', function(){
    let words = newHaiku.oneVowelWord("I have a great butt")
    expect(words) .toEqual(4)
  })

  it('identifies a word with a silent e as a one syllable word', function(){
    let words = newHaiku.silentE("You have a cute butt")
    expect(words) .toEqual(["You", "hav", "a", "cut", "butt"])
  })
});

describe('Poem', function(){
let newPoem;
  beforeEach(function(){
    newPoem = new Poem("")
  });

  it('create a new poem type', function(){
    expect(newPoem.type) .toEqual("")
  })
});
