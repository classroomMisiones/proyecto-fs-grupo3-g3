
$(document).ready(function () {
  $("#selectmoneda").change(function () {
    var num = $(this).val();

    if (num == 1) {
      valor = "peso_bn.png";
    }
    if (num == 2) {
      valor = "bitcoin_bn.png";
    }
    if (num == 3) {
      valor = "ethereum_bn.png";
    }
    if (num == 4) {
      valor = "dogecoin_bn.png";
    }
    if (num == 5) {
      valor = "monero_bn.png";
    }

    $("#imgmoneda").prop("src", "assets/monedas/" + valor);
  })
});

/* global bootstrap: false */
(function () {
  'use strict'
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()
