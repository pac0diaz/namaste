$(document).ready(function () {
  var $header = $('.mainHeader');

  $(window).on('scroll', function () {
    $header.toggleClass('is-fixed',
    $(window).scrollTop() > 0);
  });

  $('#mainNav-trigger').click(function () {
    $('#mainNav').toggleClass('is-active'),
    $('#mainHeader').toggleClass('is-active');
  });

 });