document.addEventListener('DOMContentLoaded', () => {
  // Глобальные переменные
  const onlineForms = document.querySelectorAll('.online-form');
  const callButtons = document.querySelectorAll('.call-btn');
  const pickDateBtn = document.querySelector('#pick-date-btn');
  const pickDateBtn2 = document.querySelector('#pick-time-btn');
  const pickDateBtn3 = document.querySelector('#enter-name-btn');
  let calendarWrap = document.querySelector('#calendar-wrap');
  const customCalendarBody = document.querySelector('#calendar > table');
  const custSelect = document.querySelectorAll('.itc-select__toggle');
  const custSelectParent = document.querySelectorAll('.itc-select');
  // инициализация кастомных select в форме регистрации
  const select1 = new ItcCustomSelect('#select-1');
  const select2 = new ItcCustomSelect('#select-2');
  const select3 = new ItcCustomSelect('#select-3');

  // слушаем событие клика по кнопкам вызова диалоговых окон
  for (let item of callButtons) {
    item.addEventListener('click', function () {

      let box = item.getAttribute('data-btn-num');
      let dialogWindow = document.querySelector(`#online-form-${box}`);

      dialogWindow.classList.add('open');
      document.body.classList.add('scroll-off');

      for (let item of onlineForms) {
        item.addEventListener('click', function (e) {
          if (e.target.classList.contains('online-form__close-btn')) {
            e.target.closest('.online-form').classList.remove('open');
            document.body.classList.remove('scroll-off');
          } else if (e.target.classList.contains('online-form')) {
            e.target.closest('.online-form').classList.remove('open');
            document.body.classList.remove('scroll-off');
          } else if (e.target.classList.contains('close-online-form')) {
            e.target.closest('.online-form').classList.remove('open');
            document.body.classList.remove('scroll-off');
          };

        });

      };


    });
  };

  pickDateBtn.addEventListener('click', function () {
    pickDateBtn.classList.add('hide');
    calendarWrap.classList.remove('hide');
    pickDateBtn2.classList.remove('hide');
    // запускаем функцию формирования календаря
    // createCalendar(calendar, 2022, 11);
  });

  pickDateBtn2.addEventListener('click', function () {
    document.querySelector('.reception-time').classList.remove('hide');
    pickDateBtn2.classList.add('hide');

    pickDateBtn3.classList.remove('hide');
  });
  pickDateBtn3.addEventListener('click', function () {
    document.querySelector('.input-list').classList.remove('hide');
    document.querySelector('.form-result').classList.remove('hide');
    document.querySelector('.online-form__footer').classList.remove('hide');
    pickDateBtn3.classList.add('hide');

    // pickDateBtn3.classList.remove('hide');
  });


  // подключаем большие блоки кода их отдельных файлов
  function include(url) {
    let script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
  };


  // for (let item of custSelect) {
  //   item.addEventListener('click', function () {
  //     custSelectParent.forEach((element) => {
  //       element.classList.remove('itc-select_show');
  //     });
  //   });
  // };

  // подключаем большие скрипты скрипты тут
  include('./js/parts/calendar.js');

  // ВРЕМЕННО! Удалить на продакшене!  ////////////
  // document.addEventListener('click', e => console.log(e.target));
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".calendar__button--prev",
      prevEl: ".calendar__button--next",
    },
  });

  var dateMask = IMask(
    document.getElementById('mydata'),
    {
      mask: '00:00:0000',
      lazy: false,
    });

  var telMask = IMask(
    document.getElementById('mytel'),
    {
      mask: '+7 (000) 000-00-00',
      lazy: false,
    });

});
