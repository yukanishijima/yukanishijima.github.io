// animation - showCard

function showCard() {

  var element = document.getElementsByClassName('showCard');
  // cancel if there's no such element
  if (!element) return;

  var showTiming = window.innerHeight > 768 ? 600 : 100;
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;

  for (var i = 0; i < element.length; i++) {
    var elemClientRect = element[i].getBoundingClientRect();
    var elemY = scrollY + elemClientRect.top;

    if (scrollY + windowH - showTiming > elemY) {
      element[i].classList.add('isShow');

      //　once it goes back to top, remove isShow class
    } else if (scrollY + windowH < elemY) {
      element[i].classList.remove('isShow');
    }
  }
}

showCard();
window.addEventListener('scroll', showCard);