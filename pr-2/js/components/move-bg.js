/* eslint-disable no-undef */
let lFollowX = 0;
let lFollowY = 0;
let x = 0;
let y = 0;
const friction = 1 / 50;

const moveBackground = function () {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  const translate = 'translate('+x+'px, '+y+'px) scale(1.1)'; // eslint-disable-line

  $('#move-text').css('-webit-transform', translate).css('-moz-transform', translate).css('transform', translate);

  window.requestAnimationFrame(moveBackground);
};

$(window).mousemove(function (e) {
  const width = this.innerWidth;

  if (width >= 1024) {
    const lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    const lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100;
    lFollowY = (10 * lMouseY) / 100;
  }
});

moveBackground();
