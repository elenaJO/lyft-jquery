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
      if ($(this).val() === num1) {
        cont = true;
      } else {
        cont = false;
      }
    
      if (cont === true && cont1 === true && cont2 === true) {
        enable();
      } else {
        disable(); 
      }
    });
    
    $('#cod2').keyup(function() { 
      if ($(this).val() === num2) {
        cont1 = true;
      } else {
        cont1 = false;
      }
    
      if (cont === true && cont1 === true && cont2 === true) {
        enable();
      } else {
        disable();
      }
    });

    $('#cod3').keyup(function() { 
      if ($(this).val() === num3) {
        cont2 = true;
      } else {
        cont2 = false;
      }
    
      if (cont === true && cont1 === true && cont2 === true) {
        enable();
      } else {  
        disable();
      }
    });
  });

  $('#cod1').keyup(function() { 
    if ($(this).val() === localStorage.numRam) {
      cont = true;
    } else {
      cont = false;
    }

    if (cont === true && cont1 === true && cont2 === true) {
      enable();
    } else {
      disable(); 
    }
  });

  $('#cod2').keyup(function() {
    if ($(this).val() === localStorage.numRam1) {
      cont1 = true;
    } else {
      cont1 = false;
    }

    if (cont === true && cont1 === true && cont2 === true) {
      enable();
    } else {
      disable();   
    }
  });

  $('#cod3').keyup(function() {
    if ($(this).val() === localStorage.numRam2) {
      cont2 = true;
    } else {
      cont2 = false;
    }

    if (cont === true && cont1 === true && cont2 === true) {
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