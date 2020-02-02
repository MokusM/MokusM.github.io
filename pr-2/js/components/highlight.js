/* eslint-disable no-undef */
$(function() { // eslint-disable-line
  const originalBG = $('#root').css('background');
  const lightColor = '#fff';
  const gradientSize = 335;

  const width = window.innerWidth;

  if (width >= 1024) {
    $('#root-mouse')
      .mousemove(function(e) {// eslint-disable-line
        if (width >= 1024) {
          $('#root').removeClass('center-highlight');          
          const x = e.pageX - $('#root').offset().left;
          const y = e.pageY - $('#root').offset().top;

          const bg = 'radial-gradient(circle '+gradientSize+'px at '+x+'px '+y+'px, '+lightColor+', #F3F3F3)'; // eslint-disable-line
          const bgWebKit = '-webkit-gradient(radial, '+x+' '+y+', 1, '+x+' '+y+', '+gradientSize+', from('+lightColor+'), to(rgba(255,255,255,0.0))), '+originalBG; // eslint-disable-line
          const bgMoz = '-moz-radial-gradient('+x+'px '+y+'px 45deg, circle, '+lightColor+' 0%, '+originalBG+' '+gradientSize+'px)'; // eslint-disable-line

          if( e.pageY - $('#root').offset().top > gradientSize && e.pageY - $('#root').outerHeight() + gradientSize < $('#root').offset().top  ){
            $('#root').css('background', '').css('background', bgWebKit).css('background', bg)
            .css('background', bgMoz);
          }
        }
      })
      .mouseleave(function() { // eslint-disable-line
        //$('#root').css('background', originalBG);
      });
  } else {
    //$('#root').addClass('center-highlight');
  }
});
