// удаляет все значения атрибута value в кастомном календаре
function killEmAll() {
  for (let item2 of openDay) {
    item2.removeAttribute('value');
  };
};

// выбор дня в календаре
const openDay = document.querySelectorAll('td.open');
for (let item of openDay) {
  item.addEventListener('click', function () {
    killEmAll();

    item.setAttribute('value', 'choose');
  });

};

// генерация календаря - по идее нужна после того как пользователь выбрал врача
function createCalendar(elem, year, month) {

  let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
  let d = new Date(year, mon);

  let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

  // пробелы для первого ряда
  // с понедельника до первого дня месяца
  // * * * 1  2  3  4
  for (let i = 0; i < getDay(d); i++) {
    table += '<td class="empty"></td>';
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
      table += '<td class="empty"></td>';
    }
  };

  // закрыть таблицу
  table += '</tr></table>';

  elem.innerHTML = table;
};

function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
  let day = date.getDay();
  if (day == 0) day = 7; // сделать воскресенье (0) последним днем
  return day - 1;
};
