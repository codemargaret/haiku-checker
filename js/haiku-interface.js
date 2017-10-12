import { Haiku, Poem } from './../js/haiku.js';

$(document).ready(function(){
  $('#haiku').submit(function(event){
    event.preventDefault();
    var line1 = $('#line1').val();

    $('#entries').text(line1);
  });
});
