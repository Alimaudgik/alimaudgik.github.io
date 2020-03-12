
      var mapBtnOn = document.querySelector('.map');
      var mapBtnOff = document.querySelector('.location__btn--off')
      var mapOn = document.querySelector('.footer__location--wrapper');

      mapBtnOn.addEventListener('click', function() {
        if (mapOn.classList.contains('location__off')) {
          mapOn.classList.remove('location__off');
          mapOn.classList.add('location__on');
        }
      });

      mapBtnOff.addEventListener('click', function() {
        if (mapOn.classList.contains('location__on')) {
          mapOn.classList.remove('location__on');
          mapOn.classList.add('location__off');
        }
      });
    