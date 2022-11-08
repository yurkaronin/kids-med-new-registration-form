document.addEventListener('DOMContentLoaded', () => {

  // select-1 – id элемента
  const select1 = new ItcCustomSelect('#select-1');
  const select2 = new ItcCustomSelect('#select-2');
  const select3 = new ItcCustomSelect('#select-3');

  // Глобальные переменные
  const onlineForm = document.querySelector('.online-form');
  const onlineFormCall = document.querySelector('.online-form-call');
  const onlineFormContent = document.querySelector('.online-form__content');
  const onlineFormCloseBTN = document.querySelector('.online-form__close-btn');

  // для разработки
  document.addEventListener('click', e => console.log(e.target));

  document.addEventListener('click', (e) => {
    if (e.target === onlineFormCall) {
      onlineForm.classList.add('open');
      document.body.classList.add('scroll-off');
      createCalendar(calendar, 2022, 11);
    } else if (e.target === onlineFormCloseBTN) {
      onlineForm.classList.remove('open');
      document.body.classList.remove('scroll-off');
    } else if (e.target.classList.contains('online-form')) {
      if (e.target.classList.contains('open')) {
        onlineForm.classList.remove('open');
        document.body.classList.remove('scroll-off');
      };
    }
  });

  // удаляем все значения атрибута в коллекции
  function killEmAll() {
    for (let item2 of openDay) {
      item2.removeAttribute('value');
    };
  }

  // выбор дня в календаре
  const openDay = document.querySelectorAll('td.open');
  console.log(openDay);

  for (let item of openDay) {
    item.addEventListener('click', function() {
      killEmAll();

      item.setAttribute('value', 'choose');
    });

  }

  // генерация календаря
  function createCalendar(elem, year, month) {

    let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    let d = new Date(year, mon);

    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    // пробелы для первого ряда
    // с понедельника до первого дня месяца
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
      table += '<td></td>';
    }

    // <td> ячейки календаря с датами
    while (d.getMonth() == mon) {
      table += '<td><span>' + d.getDate() + '</span><small>16:00-20:00</small></td>';

      if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1);
    }

    // добить таблицу пустыми ячейками, если нужно
    // 29 30 31 * * * *
    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<td></td>';
      }
    }

    // закрыть таблицу
    table += '</tr></table>';

    elem.innerHTML = table;
  }

  function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
    let day = date.getDay();
    if (day == 0) day = 7; // сделать воскресенье (0) последним днем
    return day - 1;
  }

//  ВРЕМЕННО!
// вызываем функцию если на странице есть календарь
if(document.querySelector('#calendar')) {
  createCalendar(calendar, 2022, 11);
};




});
