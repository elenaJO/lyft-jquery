$(document).ready(function() {
  var cont = false;
  var cont1 = false;
  var cont2 = false;
  var numberRandom, original;

  numberRandom = function() {
    var numRandom = (Math.floor((Math.random() * 10))).toString();
    var numRandom1 = (Math.floor((Math.random() * 10))).toString();
    var numRandom2 = (Math.floor((Math.random() * 10))).toString();
    var numberLag = numRandom + numRandom1 + numRandom2;
    return numberLag;
  };

  $('#button-reset').click(function() {
    var numberResent = numberRandom();  
    alert('LAB - ' + numberResent);
    var num1 = (parseInt(numberResent / 100)).toString();
    var num2 = (parseInt((numberResent % 100) / 10)).toString();
    var num3 = (parseInt((numberResent % 100) % 10)).toString();
    $('#cod1').keyup(function() {
      if ($(this).val() === num1) {
        console.log('sii1');
        cont = true;
      } else {
        cont = false;
      }
    
      if (cont === true && cont1 === true && cont2 === true ) {
        $('#button-next-verify').removeAttr('disabled');
        $('#button-next-verify').removeClass('disabled-color');
        $('#button-next-verify').addClass('enabled-color');
      } else {
        $('#button-next-verify').attr('disabled', 'disabled');
        $('#button-next-verify').addClass('disabled-color');
        $('#button-next-verify').removeClass('enabled-color');  
      }
    });
    
    $('#cod2').keyup(function() { 
      if ($(this).val() === num2) {
        console.log('sii2');
        cont1 = true;
      } else {
        cont1 = false;
      }
    
      if (cont === true && cont1 === true && cont2 === true ) {
        $('#button-next-verify').removeAttr('disabled');
        $('#button-next-verify').removeClass('disabled-color');
        $('#button-next-verify').addClass('enabled-color');
      } else {
        $('#button-next-verify').attr('disabled', 'disabled');
        $('#button-next-verify').addClass('disabled-color');
        $('#button-next-verify').removeClass('enabled-color');  
      }
    });

    $('#cod3').keyup(function() { 
      if ($(this).val() === num3) {
        console.log('sii3');
        cont2 = true;
      } else {
        cont2 = false;
      }
    
      if (cont === true && cont1 === true && cont2 === true ) {
        $('#button-next-verify').removeAttr('disabled');
        $('#button-next-verify').removeClass('disabled-color');
        $('#button-next-verify').addClass('enabled-color');
      } else {
        $('#button-next-verify').attr('disabled', 'disabled');
        $('#button-next-verify').addClass('disabled-color');
        $('#button-next-verify').removeClass('enabled-color');  
      }
    });
  });

  $('#cod1').keyup(function() { 
    if ($(this).val() === numRandom) {
      cont = true;
    } else {
      cont = false;
    }

    if (cont === true && cont1 === true && cont2 === true ) {
      $('#button-next-verify').removeAttr('disabled');
      $('#button-next-verify').removeClass('disabled-color');
      $('#button-next-verify').addClass('enabled-color');
    } else {
      $('#button-next-verify').attr('disabled', 'disabled');
      $('#button-next-verify').addClass('disabled-color');
      $('#button-next-verify').removeClass('enabled-color');  
    }
  });

  $('#cod2').keyup(function() {
    if ($(this).val() === numRandom1) {
      cont1 = true;
    } else {
      cont1 = false;
    }

    if (cont === true && cont1 === true && cont2 === true ) {
      $('#button-next-verify').removeAttr('disabled');
      $('#button-next-verify').removeClass('disabled-color');
      $('#button-next-verify').addClass('enabled-color');
    } else {
      $('#button-next-verify').attr('disabled', 'disabled');
      $('#button-next-verify').addClass('disabled-color');
      $('#button-next-verify').removeClass('enabled-color');    
    }
  });

  $('#cod3').keyup(function() {
    if ($(this).val() === numRandom2) {
      cont2 = true;
    } else {
      cont2 = false;
    }

    if (cont === true && cont1 === true && cont2 === true ) {
      $('#button-next-verify').removeAttr('disabled');
      $('#button-next-verify').removeClass('disabled-color');
      $('#button-next-verify').addClass('enabled-color');
    } else {
      $('#button-next-verify').attr('disabled', 'disabled');
      $('#button-next-verify').addClass('disabled-color');
      $('#button-next-verify').removeClass('enabled-color');  
    }
  });

 
});