$(document).ready(function() {
  $('#first-name').keyup(function() {
    if ($(this).val().match(/[1-9]/)) {
      alert('No ingresar numeros');
      $(this).val('');
    } 
  });

  $('#last-name').keyup(function() {
    if ($(this).val().match(/[1-9]/)) {
      alert('No ingresar numeros');
      $(this).val('');
    } 
  });

  $('#email').focusout(function() {
    var PATTERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    var res = PATTERNEMAIL.test($(this).val());
    if (res === false) {
      alert('Ingresar correo valido');
      $(this).val('');
    }
  });
  $('#submit').click(function(event) {
    if ($('#check').prop('checked') && $('#first-name').val() && $('#last-name').val() && $('#email').val()) {
      event.preventDefault();
      window.location.href = '../views/end.html';
    } else {
      alert('Marque todos los campos');
      event.preventDefault();
    }
  });
});