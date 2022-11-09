document.addEventListener('DOMContentLoaded', () => {
  // Глобальные переменные
  const onlineForm = document.querySelector('.online-form');
  const onlineFormCall = document.querySelector('.online-form-call');
  // const onlineFormContent = document.querySelector('.online-form__content');
  const onlineFormCloseBTN = document.querySelector('.online-form__close-btn');
  const calendarElem = document.querySelector('#calendar');

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

  // слушаем клики
  function liseneClick() {
    document.addEventListener('click', (e) => {
      let clickTarget = e.target;

      if (clickTarget === onlineFormCloseBTN) {
        dialogItem.classList.remove('open');
        document.body.classList.remove('scroll-off');
      } else if (clickTarget.classList.contains('online-form')) {
        if (clickTarget.classList.contains('open')) {
          dialogItem.classList.remove('open');
          document.body.classList.remove('scroll-off');
        };
      };
    });

  }

  // события показа формы регистрации на странице
  document.addEventListener('click', (e) => {

    // показ формы
    let clickTarget = e.target;

    if (clickTarget === onlineFormCall) {
      onlineForm.classList.add('open');
      document.body.classList.add('scroll-off');

      // пока что буду вызывать календарь тут, для тестов
      createCalendar(calendar, 2022, 11);

    } else if (clickTarget === onlineFormCloseBTN) {
      onlineForm.classList.remove('open');
      document.body.classList.remove('scroll-off');
    } else if (clickTarget.classList.contains('online-form')) {
      if (clickTarget.classList.contains('open')) {
        onlineForm.classList.remove('open');
        document.body.classList.remove('scroll-off');
      };
    };

    if (clickTarget.id === 'js-btn-proof') {
      let dialogItem = document.querySelector('#js-modal-proof');
      dialogItem.classList.add('open');
      document.body.classList.add('scroll-off');
      liseneClick();

    }


  });

  // подключаем скрипты тут
  include("./js/parts/calendar.js");

  // ВРЕМЕННО! Удалить на продакшене!  ////////////
  document.addEventListener('click', e => console.log(e.target));

});
