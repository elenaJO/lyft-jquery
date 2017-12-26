// var numRandom = (Math.floor((Math.random() * 10))).toString();
// var numRandom1 = (Math.floor((Math.random() * 10))).toString();
// var numRandom2 = (Math.floor((Math.random() * 10))).toString();
var numRandom = (9).toString();
var numRandom1 = (2).toString();
var numRandom2 = (1).toString();
// var numberRandomNew;
// numberRandomNew = function() {
//   var numRandomNew = (Math.floor((Math.random() * 10))).toString();
//   var numRandomNew1 = (Math.floor((Math.random() * 10))).toString();
//   var numRandomNew2 = (Math.floor((Math.random() * 10))).toString();
//   var numberLagNew = numRandomNew + numRandomNew1 + numRandomNew2;
//   return numberLagNew;
// };
// var con = numberRandomNew();
$(document).ready(function() {
  $('#image-flags-1').click(function() {
    var srcImageFlags = $('#image-flags').attr('src');
    var altImageFlags = $('#image-flags').attr('alt');
    var thisImageFlags = $(this).attr('src');
    var thisAltImageFlags = $(this).attr('alt');
    $('#image-flags').attr('src', thisImageFlags);
    $('#image-flags').attr('alt', thisAltImageFlags);
    $(this).attr('src', srcImageFlags);
    $(this).attr('alt', altImageFlags);
    if (thisAltImageFlags === 'mexico') {
      $('#postal').text('52');
    }
    if (thisAltImageFlags === 'colombia') {
      $('#postal').text('51');
    }
    if (thisAltImageFlags === 'peru') {
      $('#postal').text('50');
    }
    if (thisAltImageFlags === 'eu') {
      $('#postal').text('49');
    }
  });

  $('#image-flags-2').click(function() {
    var srcImageFlags = $('#image-flags').attr('src');
    var altImageFlags = $('#image-flags').attr('alt');
    var thisImageFlags = $(this).attr('src');
    var thisAltImageFlags = $(this).attr('alt');
    $('#image-flags').attr('src', thisImageFlags);
    $('#image-flags').attr('alt', thisAltImageFlags);
    $(this).attr('src', srcImageFlags);
    $(this).attr('alt', altImageFlags);
    if (thisAltImageFlags === 'mexico') {
      $('#postal').text('52');
    }
    if (thisAltImageFlags === 'colombia') {
      $('#postal').text('51');
    }
    if (thisAltImageFlags === 'peru') {
      $('#postal').text('50');
    }
    if (thisAltImageFlags === 'eu') {
      $('#postal').text('49');
    }    
  });

  $('#image-flags-3').click(function() {
    var srcImageFlags = $('#image-flags').attr('src');
    var altImageFlags = $('#image-flags').attr('alt');
    var thisImageFlags = $(this).attr('src');
    var thisAltImageFlags = $(this).attr('alt');
    $('#image-flags').attr('src', thisImageFlags);
    $('#image-flags').attr('alt', thisAltImageFlags);
    $(this).attr('src', srcImageFlags);
    $(this).attr('alt', altImageFlags);
    if (thisAltImageFlags === 'mexico') {
      $('#postal').text('52');
    }
    if (thisAltImageFlags === 'colombia') {
      $('#postal').text('51');
    }
    if (thisAltImageFlags === 'peru') {
      $('#postal').text('50');
    }
    if (thisAltImageFlags === 'eu') {
      $('#postal').text('49');
    }    
  });

  $('#number-phone').keyup(function() {
    if (($(this).val().length) === 9) {
      $('#button-next').removeAttr('disabled');
      $('#button-next').removeClass('disabled-color');
      $('#button-next').addClass('enabled-color');
    } else {
      $('#button-next').attr('disabled', 'disabled');
      $('#button-next').addClass('disabled-color');
      $('#button-next').removeClass('enabled-color');
    }
  });

  $('#button-next').click(function() {
    // var numberNew = numberRandomNew();
    alert('LAB - ' + numRandom + numRandom1 + numRandom2);
    // alert('LAB - ' + numberNew);
    window.location.href = '../views/verify.html';
  });
});
