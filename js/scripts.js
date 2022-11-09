document.addEventListener('DOMContentLoaded', () => {
  // Глобальные переменные
  const onlineForm = document.querySelector('.online-form');
  const onlineForms = document.querySelectorAll('.online-form');
  const onlineFormCloseBTN = document.querySelector('.online-form__close-btn');
  const calendarElem = document.querySelector('#calendar');
  const callBtns = document.querySelectorAll('.call-btn');
  const pickDateBtn = document.querySelector('#pick-date-btn');
  let calendarWrap = document.querySelector('#calendar-wrap');
  // инициализация кастомных select в форме регистрации
  const select1 = new ItcCustomSelect('#select-1');
  const select2 = new ItcCustomSelect('#select-2');
  const select3 = new ItcCustomSelect('#select-3');

  // удаляет все значения атрибута value в кастомном календаре
  function killEmAll() {
    for (let item2 of openDay) {
      item2.removeAttribute('value');
    };
  };

  // подключение скриптов из parts
  function include(url) {
    let script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
  };
  // удаляет все значения атрибута value в кастомном календаре
  function killEmAll() {
    for (let item2 of openDay) {
      item2.removeAttribute('value');
    };
  };

  // слушаем событие клика по кнопкам
  for (let item of callBtns) {
    item.addEventListener('click', function () {

      let box = item.getAttribute('data-btn-num');
      let dialogWindow = document.querySelector(`#online-form-${box}`);

      dialogWindow.classList.add('open');
      document.body.classList.add('scroll-off');

      if (box === '1') {
        // пока что буду вызывать календарь тут, для тестов
        // createCalendar(calendar, 2022, 11);
      };

      document.addEventListener('click', (e) => {
        let clickTarget = e.target;

        if (clickTarget === onlineFormCloseBTN) {
          dialogWindow.classList.remove('open');
          document.body.classList.remove('scroll-off');
        } else if (clickTarget.classList.contains('online-form')) {
          if (clickTarget.classList.contains('open')) {
            dialogWindow.classList.remove('open');
            document.body.classList.remove('scroll-off');
          };
        };

      });

    });
  };


  // работаем с кнопкой вызова календаря
  pickDateBtn.addEventListener('click', () => {
    // console.log('111');
    calendarWrap.classList.remove('hide');
    createCalendar(calendar, 2022, 11);
  });



  // data-set-btn

  // подключаем скрипты тут
  include("./js/parts/calendar.js");
  // include("./js/parts/callBtns.js");

  // ВРЕМЕННО! Удалить на продакшене!  ////////////
  document.addEventListener('click', e => console.log(e.target));

});
