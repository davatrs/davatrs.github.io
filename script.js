//Parallax
// $(window).on('load', function () {
//   $('.pKiri').addClass('pMuncul');
//   $('.pKanan').addClass('pMuncul');
// });

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  // Jumbotron
  $('.jumbotron img').css({
    transform: 'translate(0px, ' + wScroll / 4 + '%)',
  });

  $('.jumbotron h1').css({
    transform: 'translate(0px, ' + wScroll / 2 + '%)',
  });

  $('.jumbotron p').css({
    transform: 'translate(0px, ' + wScroll / 1.2 + '%)',
  });

  // About
  if (wScroll >= $('#about').offset().top - 300) {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
  }
  //Projects
  if (wScroll > $('#projects').offset().top - 250) {
    $('#projects .card').each(function (i) {
      setTimeout(function () {
        $('#projects .card').eq(i).addClass('muncul');
      }, 250 * (i + 1));
    });
  }
});
