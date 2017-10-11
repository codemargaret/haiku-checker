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
});
