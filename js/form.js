$(document).ready(function() {
  $('#first-name').keyup(function() {
    if ($(this).val().match(/[1-9]/)) {
      alert('No ingresar numeros');
    } 
  });

  $('#last-name').keyup(function() {
    if ($(this).val().match(/[1-9]/)) {
      alert('No ingresar numeros');
    } 
  });

  $('#submit').click(function() {
    // $('#email').on('input', function() {
    //   var PATTERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    //   var res = PATTERNEMAIL.test($(this).val());
    //   alert(res);
    // });
    var PATTERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    var res = PATTERNEMAIL.test($('#email').val());
    alert(res);
    if ($('#check').prop('checked') && $('#first-name').val() && $('#last-name').val() && $('#email').val() && res) {
      window.location.href = '../views/end.html';
      alert('lo logramos');
    } else {
      alert('Marque todos los campos');
    }
  });
});