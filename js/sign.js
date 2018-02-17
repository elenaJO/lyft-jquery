$(document).ready(function() {
  // funcion para que cambie la bandera seleccionada y el codigo postal
  function bandera(element) {
    var srcImageFlags = $('#image-flags').attr('src');
    var altImageFlags = $('#image-flags').attr('alt');
    var thisImageFlags = $(element).attr('src');
    var thisAltImageFlags = $(element).attr('alt');
    $('#image-flags').attr('src', thisImageFlags);
    $('#image-flags').attr('alt', thisAltImageFlags);
    $(element).attr('src', srcImageFlags);
    $(element).attr('alt', altImageFlags);
    if (thisAltImageFlags === 'mexico') {
      $('#postal').text('52');
      localStorage.codPostal = '52';
    }
    if (thisAltImageFlags === 'colombia') {
      $('#postal').text('51');
      localStorage.codPostal = '51';
    }
    if (thisAltImageFlags === 'peru') {
      $('#postal').text('50');
      localStorage.codPostal = '50';
    }
    if (thisAltImageFlags === 'eu') {
      $('#postal').text('49');
      localStorage.codPostal = '49';
    }  
  }

  $('.band-cam').click(function() {
    bandera('#' + $(this).attr('id'));
  });

  // si se ingresan 9 digitos se activara en boton
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
  
  // cuando se activa el evento click se creara el codigo y se guardara en localStorage para validarlo en la otra vista
  $('#button-next').click(function() {
    var numRandomNew = (Math.floor((Math.random() * 10))).toString();
    var numRandomNew1 = (Math.floor((Math.random() * 10))).toString();
    var numRandomNew2 = (Math.floor((Math.random() * 10))).toString();
    alert('LAB - ' + numRandomNew + numRandomNew1 + numRandomNew2);
    localStorage.numRam = numRandomNew;
    localStorage.numRam1 = numRandomNew1;
    localStorage.numRam2 = numRandomNew2;
    window.location.href = '../views/verify.html';
  });
});
