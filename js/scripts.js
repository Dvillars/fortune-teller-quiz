$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $('.lucky').slideUp();
    $('.neutral').slideUp();
    $('.unlucky').slideUp();
    var ones = [];
    var twos = [];
    $("input:checkbox[name=q1]:checked").each(function(){
      var q1 = $(this).val();
      ones.push(q1);
    });
    $("input:checkbox[name=q2]:checked").each(function(){
      var q2 = $(this).val();
      twos.push(q2);
    });
    if (ones.length > twos.length) {
      $('.lucky').slideDown();
    } else if (ones.length < twos.length) {
      $('.unlucky').slideDown();
    } else if (ones.length === twos.length) {
      $('.neutral').slideDown();
    } else {
      console.log('ERROR')
    };
  });
});
