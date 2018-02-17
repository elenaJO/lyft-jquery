$(document).ready(function() {
  $('#cod-postal').text('+' + localStorage.codPostal);
  // variables para validar si los digitos son iguales
  var cont = false;
  var cont1 = false;
  var cont2 = false;
  var numberRandom;
  // funcion que crea un numero random si es que se presiona el boton resent code
  numberRandom = function() {
    var numRandom = (Math.floor((Math.random() * 10))).toString();
    var numRandom1 = (Math.floor((Math.random() * 10))).toString();
    var numRandom2 = (Math.floor((Math.random() * 10))).toString();
    var numberLag = numRandom + numRandom1 + numRandom2;
    return numberLag;
  };
  // funcion para desahabilitar el boton
  function disable() {
    $('#button-next-verify').attr('disabled', 'disabled');
    $('#button-next-verify').addClass('disabled-color');
    $('#button-next-verify').removeClass('enabled-color');
  }
  // funcion para habilitar el boton
  function enable() {
    $('#button-next-verify').removeAttr('disabled');
    $('#button-next-verify').removeClass('disabled-color');
    $('#button-next-verify').addClass('enabled-color');
  }

  function verify(num1, num2) {
    if (num1 === num2) {
      return true;
    } else {
      return false;
    }
  }

  $('#button-reset').click(function() {
    cont = false;
    cont1 = false;
    cont2 = false;
    $('#cod1').val('');
    $('#cod2').val('');
    $('#cod3').val('');
    disable();
    var numberResent = numberRandom();
    alert('LAB - ' + numberResent);
    // se separa por digitos
    var num1 = (parseInt(numberResent / 100)).toString();
    var num2 = (parseInt((numberResent % 100) / 10)).toString();
    var num3 = (parseInt((numberResent % 100) % 10)).toString();
    $('#cod1').keyup(function() {
      if (verify($('#cod1').val(), num1) === true && verify($('#cod2').val(), num2) === true && verify($('#cod3').val(), num3)) {
        enable();
      } else {
        disable();
      }
    });

    $('#cod2').keyup(function() {
      if (verify($('#cod1').val(), num1) === true && verify($('#cod2').val(), num2) === true && verify($('#cod3').val(), num3)) {
        enable();
      } else {
        disable();
      }
    });

    $('#cod3').keyup(function() {
      if (verify($('#cod1').val(), num1) === true && verify($('#cod2').val(), num2) === true && verify($('#cod3').val(), num3)) {
        enable();
      } else {
        disable();
      }
    });
  });

  $('#cod1').keyup(function() {
    if (verify($('#cod1').val(), localStorage.numRam) === true && verify($('#cod2').val(), localStorage.numRam1) === true && verify($('#cod3').val(), localStorage.numRam2)) {
      enable();
    } else {
      disable();
    }
  });

  $('#cod2').keyup(function() {
    if (verify($('#cod1').val(), localStorage.numRam) === true && verify($('#cod2').val(), localStorage.numRam1) === true && verify($('#cod3').val(), localStorage.numRam2)) {
      enable();
    } else {
      disable();
    }
  });

  $('#cod3').keyup(function() {
    if (verify($('#cod1').val(), localStorage.numRam) === true && verify($('#cod2').val(), localStorage.numRam1) === true && verify($('#cod3').val(), localStorage.numRam2)) {
      enable();
    } else {
      disable();
    }
  });
  // el boton redirecciona a la vista form
  $('#button-next-verify').click(function() {
    window.location.href = '../views/form.html';
  });
});