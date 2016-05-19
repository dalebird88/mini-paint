$(document).ready(function() {



  $('.box').on('dblclick', function() {
    $(this).removeClass(colors);
  })
  $('#reset').on('click', function() {
    $('.box').removeClass(colors)
  })
  var colors = 'red green blue yellow white';
  var color = 'white';
  $('#red').on('click', function() {
    color = 'red';
  })

  $('#blue').on('click', function() {
    color = 'blue';
  })

  $('#green').on('click', function() {
    color = 'green';
  })

  $('#yellow').on('click', function() {
    color = 'yellow';
  })

  $('#white').on('click', function() {
    color = 'white';
  })
  $('.box').on('click', function() {
  $(this).addClass(color);
})
var isDown = false;   // Tracks status of mouse button

$(document).mousedown(function() {
  isDown = true;      // When mouse goes down, set isDown to true
})
.mouseup(function() {
  isDown = false;    // When mouse goes up, set isDown to false
});

$(".box").mouseover(function(){
  if(isDown) {        // Only change css if mouse is down
     $(this).addClass(color);
  }
});
})
