$(document).ready(function () {
  $('.btn-nav').click(function () {
    $(this).toggleClass('active');
    $('.nav-active').slideToggle(300);
  });
});