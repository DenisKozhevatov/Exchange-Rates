// ================================  Выбор DOM элементов ===============================
/*
Oбъектная модель документа - DOM (Document Object Model) — это специальная древовидная структура, которая позволяет управлять HTML-разметкой из JavaScript-кода.

Основой HTML-документа являются теги. Каждый HTML-тег является объектом. Вложенные теги являются «детьми» родительского элемента. Текст, который находится внутри тега, также является объектом.

Все эти объекты доступны при помощи JavaScript, мы можем использовать их для изменения страницы.
*/
/*
querySelector — поиск первого элемента, подходящего под CSS-селектор;
querySelectorAll — поиск всех элементов подходящих под CSS-селектор.

getElementById — поиск элемента по идентификатору;
getElementsByClassName — поиск элементов по названию класса;
getElementsByTagName — поиск элементов по названию тега;
*/

// Выбор одного элемента DOM по селектору
// Будет выбрат первый найденный элемент. Поиск осуществляется с начала кода страницы, сверху вниз.

// const header = document.querySelector("h2");  //   так мы можем искать любые эленты в объекте document, но найдем Заголовок h2  и находит первый с верху вниз
// console.log(header);   //   <h2 class="heading-2">Заголовок 2</h2>

// - Свойство classList даёт возможность просматривать и манипулировать классами элемента.

// Добавим методом (add) красный цвет через свойство classList
// document.querySelector("h2").classList.add("red"); // Заголовок будет в красной рамке
// document.querySelector("h1").classList.add("green"); // Заголовок будет в зелёной рамке
// document.querySelector("h3").classList.add("blue"); // Заголовок будет в синей рамке

//  Можно искать и присваивать классы через переменную:
// const header2 = document.querySelector("h2");
// header2.classList.add("red");

// document.querySelector(".heading-3").classList.add("blue"); //  нашли и добавили синюю рамку к Заголовку 3

//  Выбор коллекции элементов (с помощью с querySelectorAll)

/*
HTMLCollection и NodeList — это очень похожие на массив коллекции. Они хранят элементы веб-страницы (узлы DOM). NodeList может хранить любые типы узлов, а HTMLCollection — только узлы HTML элементов. К элементам коллекций можно обращаться по индексу, но у них нет привычных методов массива.

HTMLCollection возвращают методы getElementsByTagName и getElementsByClassName.

NodeList возвращают методы querySelectorAll и childNodes.
*/
// const headings = document.querySelectorAll("h2");
// console.log(headings);                           // вернет NodeList(6) [h2.heading-2, h2.heading-2, h2, h2, h2, h2]

// headings.classList.add(red - text);  // вызов метода classList из коллекции приведет к ошибке и надо вызывать его из элемента коллекции

// для начала надо перебрать коллекцию, а это массив и используем for-of (для получения более подробных сведений об элементах)

// for (let item of headings) {
//   console.log(item); // так мы вызываем элементы отдельно и далее мы можем передать им отделыные свойства
//   item.classList.add("red-text"); //   здесь все Заголовки 2 становятся крассными
// }

// const paragraphs = document.querySelectorAll("p");
// for (let item of paragraphs) {
//   console.log(item);
//   item.classList.add("green-text"); // текст во всех пораграфах стал зеленым
// }

//  Важно: можно массивы обходить с помощью метода forEach, но передаём в него функцию, которая обойдет каждый элемент массива

// const paragraphs = document.querySelectorAll("p");

// paragraphs.forEach(function (item) {
//   item.classList.add("green-text"); // также каждый параграф стал зеленым
// });

//  ======   Cуществуют и другие методы выбора элементов в DOM  ======

// 1. Поиск элементов по имени css классов
// document.getElementsByClassName("");

// 2. Поиск элементов по имени тегов
// document.getElementsByTagName("");

// 3. Поиск элементов по id (это позволяет выбрать один уникальный элемент по id)
// document.getElementById("");

/*
Если очень нужны методы массива, то преобразуй HTMLCollection или NodeList в массив с помощью Array.from.

let paragraphs = document.getElementsByTagName("p");
let array = Array.from(paragraphs);

console.log(array);  // (5) [p, p, p, p, p]
*/

//----------  Работа с классами CSS -----

/*
element.classList.add("класс указываем в ковычках, но беч точки в начале")

Методы:
.add()          - добавляет класс СSS;
.remove()       - удаляет класс CSS;    
.toggle()       - переключает..., то есть добавляет класс если его небыло или убирает если он был;
.contains()     - возращиет true или false в зависимости от того есть ли такой класс в теге или нет4

*/

// Для взаимодействия с классами элементов нам необходимо:
// 1. Найти элемент на странице:

// const heading = document.querySelector("h2");

// // console.log(heading); // <h2 class="heading-2">Заголовок 2</h2>

// // 2. Мы исользыем свойство classList, который даёт возможность просматривать и манипулировать классами элемента
// // добавим каккой-либо класс в аргумент и без ковычек

// // heading.classList.add("red-text"); // и добавили класс <h2 class="heading-2 red-text">Заголовок 2</h2>

// // удалим этот же класс

// // heading.classList.remove("red-text"); // <h2 class="heading-2">Заголовок 2</h2>

// // использыем переключатель toggle добавим green-text и уберем

// // heading.classList.toggle("green-text"); // <h2 class="heading-2 green-text">Заголовок 2</h2>
// // heading.classList.toggle("green-text"); // <h2 class="heading-2">Заголовок 2</h2>

// /*  Важный момент то, что toggle может возвращать:
//     1. true если  класс будет добавлен;
//     2. false если такой класс удалили;
// Например:
//     */
// console.log(heading.classList.toggle("green-text")); // true
// console.log(heading.classList.toggle("green-text")); // false
// // проверим есть ли green-text в heading

// // console.log(heading.classList.contains("green-text")); // вернет true

// -------------- Работа с Атрибутами ------------ закроем 1 div и откроем 2 div на странице HTML

/*
getAttribute(attrName) — возвращает значение указанного атрибута (т.е. если мы хотим узнать что в атрибуте);
setAttribute(name, value) — добавляет указанные атрибут и его значение к элементу;
hasAttribute(attrName) — возвращает true при наличии у элемента указанного атрибута (т.е. проверяет есть ли такой атрибут);
removeAttribute(attrName) — удаляет указанный атрибут;

// toggleAttribute(name, force) — добавляет новый атрибут при отсутствии или удаляет существующий атрибут;
// hasAttributes() — возвращает true, если у элемента имеются какие-либо атрибуты (т.е. проверяет наличае атрибутов во множественном числе);
// getAttributesNames() — возвращает названия атрибутов элемента;
*/

// const img = document.querySelector("#logo");
// console.log(img); // <img id="logo" src="./img/js.png" alt="Логотип">

// img.getAttribute("src"); // чтобы увидить, это надо запустиь в консоле или присвоить переменной и тоже запустить в консоле

// console.log(img.getAttribute("src")); // ./img/js.png

// // или через переменную
// const src = console.log(img.getAttribute("src"));

// console.log(src); //  ./img/js.png

// /* изменим атрибут через setAttribute(он c двумя аргументами), а имеено
// setAttribute("название атрибута, кот хотим установить или поменять его значение", "то что мы хотим записать в атрибут")
// */

// // в примере ниже: поменяем картинку JS на PHP
// img.setAttribute("src", "./img/php.png"); // на странице поменялась картинка, но она очень большая...

// // Изменим её размер добавив ширину в пикселях

// img.setAttribute("width", "200"); // картинка php стала меньше

// // проверим картинку
// console.log(img); // <img id="logo" src="./img/php.png" alt="Логотип" width="200">

// //  Мы можем на прямую поменять картинку  (свойство объекта) используя оператор (.) передадим новое значение как СТРОКУ:

// img.src = "./img/js.png"; //  картинка вернулась на JS, но width  остался 200 как мы ранее установили
// //  проверим в консоле
// console.log(img); // <img id="logo" src="./img/js.png" alt="Логотип" width="200">

// --------  У на есть КНОПКА на странице и мы сней поработаем -----

// 1.Найдём её  и 2. на прямую изменим уё свойства

// const button = document.querySelector("#button");
// console.log(button); // <input id="button" type="submit" value="Кнопка">

//button.value = "Отправить"; // <input id="button" type="submit" value="Отправтить">

// или через setAttribute
//button.setAttribute("value", "Пипка"); // <input id="button" type="submit" value="Пипка">

// ------- Работа с прослушкой событий -----

/*
Событие – это определённый сигнал от браузера. Он сообщает нам о том, что что-то произошло.

При этом сигнал всегда связан с объектом. Подавать сигналы могут различные объекты: window, document, DOM-элементы и т.д.

События бывают разных типов: клик, нажатие клавиши на клавиатуре, прокрутка страницы и т.д.

Происходящие события можно обрабатывать и выполнять код, когда нужное событие происходит.

Зачем нам события? Они нам нужны для того, чтобы мы могли реагировать на них, или другими словами выполнять определённые действия, когда они произойдут.

В JavaScript это выполняется посредством привязывания некоторой функции к событию. После этого эта функция будет вызываться всякий раз, когда это событие на указанном элементе будет возникать. Эту функцию в JavaScript принято называть обработчиком события.

Следует отметить, что на странице постоянно возникает огромное количество событий, независимо от того назначили ли мы им обработчик или нет. Наша задача – это заставить наш сайт или приложение реагировать только на те события, которые нам небезразличны.*/

// --------------------------------------------
// = Работа с событием клика =

/*
Существует два способа обработать события:

 - методом addEventListener 
 - с помощью on-свойств DOM-элементов

*/

// Мы сделаем возможность удаления картинки (со страницы) по нажатию (по клику).

// 1. найдём кнопку по id чтобы отследить события по кликам на эту кнопку

// const button = document.querySelector("#button");

// 2. найдём картинку по id

// const img = document.querySelector("#logo");

// 3. для понимания функции кнопки ИЗМЕНИМ ей занчение "Кнопка" на "Удалить"

// button.value = "Удалить"; // <input id="button" type="submit" value="Удалить">

//  А теперь работаем с СОБЫТИЕМ для кнопки посредство добавления метода addEventListener, который забирает 2 аргумента: addEventListener ("названия события в виде строки", "функция, кот запустится после события") или addEventListener("click", function() {}). А в функции мы удалим картинку со строницы по нажатию кнопки. Такая function является функцией-обработчиком событий

// button.addEventListener("click", function () {
//   console.log("click!");
//   img.remove();
// }); //  произошло удаление - img

// // + Другой синтаксис работы с событием

// button.onclick = function () {
//   console.log("click!");
//   img.remove();
// }; // картинка также удалилась

/*  
    В чём разница в использовании addEventListener и onclick ??????????

Если обрабатывать события с помощью on-свойств, то получится добавить только одну функцию-обработчик на каждый элемент. 

Часто одного обработчика недостаточно. Чтобы не создавать ограничение на пустом месте, используют альтернативный метод подписки на события — метод addEventListener, который позволяет навешивать прослушки сколько угодно даже для одинаковых событий.
*/

//  Например мы можем на одно событие "click" повесить несколько прослушек с выполнением разных функций

// button.addEventListener("click", function () {
//   console.log("click 1 !");
//   img.remove();
// });
// button.addEventListener("click", function () {
//   console.log("click 2 !");
//   img.remove();
// });
// button.addEventListener("click", function () {
//   console.log("click 3 !");
//   img.remove();
// }); // Получим выполнение всех функций отдельно...
// /*
// click 1 !
// click 2 !
// click 3 !
// */

//  То есть мы можем добавлять несколько обрабочиков событий на одно и тоже событие используя addEventListener

// //  При работе со свойствами оn... (onclick, onscroll, onkeypress, onmouseenter и так далее) функция-обработцик сработеет один раз для одного события и если мы сщздадим ещё один обработцик для этогоже события, то сработает последний обработчик который ПЕРЕЗАПИШЕТ предидущие...

// //  Например:

// button.onclick = function () {
//   console.log("click 1 !");
//   img.remove();
// };
// button.onclick = function () {
//   console.log("click 2!");
//   img.remove();
// };                            // получим только click 2!

// // Вывод: оn-свойства ипользуем когда планируем обрабатывать 1 событие 1 раз

//-------------- Работа с прослушкой событий 2 (форма) (в итерактивном теге input) ------

// 1. Поставим none  в пред идущем div и уберем none в div  с тегом form. чтобы заработали новые теги и тд.

// // 2. Найдём нужный нам элемент по id

// const inputText = document.querySelector("#input-text");
// // // проверим есть ли такой элемент (есть)
// // console.log(inputText); // <input type="text" class="input-text" id="input-text">

// // 2. Найдём ещё один нужный нам элемент по id

// const textBlock = document.querySelector("#text-block");
// // проверим есть ли такой элемент (есть)
// console.log(textBlock); // <div class="text-block" id="text-block">...</div>

// //  3. ОК, эти элементы есть в коде html и добавим прослушку

// inputText.addEventListener("input", function () {
//   //console.log("input!"); // события отобразились в консоле
//   console.log(inputText.value); // в консоле отображается весь текст который печатаем в окне (input)
// });

// //  4. а теперь добавим код, чтобы видеть на странице в строке под окном input те символы которые печатаем в input. (Используем свойство innerText)

// const inputText = document.querySelector("#input-text");

// const textBlock = document.querySelector("#text-block");

// inputText.addEventListener("input", function () {
//   console.log(inputText.value);
//   textBlock.innerText = inputText.value;
// });

// // 4.1 перепишем функцию в коде ввиде стрелочной функции

// const inputText = document.querySelector("#input-text");

// const textBlock = document.querySelector("#text-block");

// inputText.addEventListener("input", () => {
//   console.log(inputText.value);
//   textBlock.innerText = inputText.value;
// }); // получим тоже самое

// // 4.2 перепишем код и составим отдельную функцию, которую можно использовать в разных кодах и если функция объёмная:

// const inputText = document.querySelector("#input-text");

// const textBlock = document.querySelector("#text-block");

// inputText.addEventListener("input", inputHandler); //  здесь имя функции без (), так как нам не надо вызывать её тут же !!!

// function inputHandler() {
//   console.log(inputText.value);
//   textBlock.innerText = inputText.value;
// }

// ---------- Прослушка событий 3  (объект Ivent)

// //1. Используем в обработчике ключ.слово this, которое будет ссылаться на тот элемент кот-й мы будем слушать

// const list = document.querySelector("#list");
// list.addEventListener("click", function () {
//   console.log(this); // каждое нажатие даст <ul id="list"><li>Посмотреть вебинар</li>, в зависимости куда нажмём
// });

// 2. добавим в функцию объект event как параметр,  но его именем может быть любое (это лишь первый параметр в функции !!!):

// const list = document.querySelector("#list");
// list.addEventListener("click", function (event) {
//   console.log(this);  // this вместо list
//   console.log(event); //   выдаст всю информациию по событию, а именно PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
// });

// // 3. добавим свойство target (просмотрим цель по которой мы кликнули)

// const list = document.querySelector("#list");
// list.addEventListener("click", function (event) {
//   // console.log(this);
//   // console.log(event);
//   console.log(event.target); // увидим элемент на который нажали <li>Посмотреть вебинар</li>
// });

//----------------------------------------------------------------------------------------------

// --------- Работа с элементами на странице ---------

// ШПАРГАЛКА
/*
// - создать элемент
document.createElement('tag-name')

// - изменить HTML содержимое внутри элемента
element.innerHTML = ''

// - изменить Текстовое  содержимое внутри элемента
node.innerText = ''

// - клонирование элемента
node.cloneNode() // true c внутренним содержимым (текст и теги), false - без внутреннего содержимого

// - вставить элемент внутрь другого элемента
element.append(nodesOrDOMStrings)

// - удалить элемент
element.remove()
*/

// ======= Создадим элемент (заголовок) на странице  =====

// //  1. Выбор контейнера по id

// const container = document.querySelector("#elementsContainer");

// // 2. Cоздадим заголовок методом createElemen("здесь название тега который создаём")

// document.createElement("h1"); // мы создали новый тегб но он ещё не добавлен на страницу

// // 3.  Для добавления тега на страницу запишем его в переменную и добавим внутренний текст

// const newHeader = document.createElement("h1"); // в консоле есть новый h1
// newHeader.innerText = "Новый заголовок"; // у h2 появился новый текст

// // 4. перенесем наш заголовок на страницу, а именно добавим его в наш основной контейнер через метод append

// container.append(newHeader); //  через  JS мы добавили Новый заголовок на страницу

// // ======= Копирование шапки (клонирование или простой способ)  =====

// // 1. Перед тем как скопировать надо найти элемент в разметке HTML и запишем его в переменную:

// const mainHeader = document.querySelector("header");

// // 2. Клонируем методом cloneNode(true) с присвоением переменной

// const headerCopy = mainHeader.cloneNode(true); // внимание обязвтельно ставим true,
// // иначе не скопируется содержимое шапки

// // 3. Добавляем наш клон в контейнер
// container.append(headerCopy); // получили клон шапки на странице

// ========= ОК, но теперь весь код запишем в одном место, а выше закоментируем

/*
// ИТОГ того, что делали выше:

// 1 - создание заголовка (Элемента)

const container = document.querySelector("#elementsContainer");

const newHeader = document.createElement("h1");

newHeader.innerText = "Новый заголовок";

container.append(newHeader);

// 2 - копирование шапки (Элемента)

const mainHeader = document.querySelector("header");

const headerCopy = mainHeader.cloneNode(true);

container.append(headerCopy);
*/

/*
// ---------- Вставка разметки HTML через строки

// 1. найдем контейнер в который поместим новый элемент

const container = document.querySelector("#elementsContainer");

// 2. создадим переменную в которую запишем новый HTML элемент

const htmlExample = "<h2>Ещё один заголовок</h2>";

// 3. помещаем в контейнер строку, используя метод  insertAdjacentHTML (перевод: добавить соседний HTML)
// и помещаем в него 2 аргумента ("где расположить элемент, например beforeend = перед закрывающим тегом", "кусок разметки HTML, который мы хотим добавить") или insertAdjacentHTML("где вставляем", "что вставляем")

container.insertAdjacentHTML("beforeend", htmlExample);

// так создали на странице Ещё один заголовок c <div id="elementsContainer"><h1>Новый заголовок</h1><h2>Ещё один заголовок</h2></div>
*/

/* Есть подобные методы например: 
- insertAdjacentElement - для вставки элементов созданных через метод document.createElement;
- insertAdjacentText - для добавления текста;
*/

/* 
// ===== Вставка разметки HTML через шаблонные сроки ------

// пропишем предидуший код заново и в одном месте
// 1. выбираем место
const container = document.querySelector("#elementsContainer");


// 2. создадим новую переменн и присвоим строку с текстом заголовка

const title = "Текст заголовка";

const htmlExample = `<h2>${title}</h2>`;

// 3. добавляем элемент на страницу методом insertAdjacentHTML

container.insertAdjacentHTML("beforeend", htmlExample);
// добавили "Текст заголовка"
*/

//
//
//  ---------- ToDo список задач ---------

/*
План на урок: с помощью JS сделать так:
1. печатаем новую задачу;
2. отправляем её;
3. получаем новыю задачу в списке на странице.
*/

//  ---- 1-й Способ. Через создание разметки.

// // 1. находим по id все элементы с кот будем работать и присвоим их переменным
// // А их 3: 1. сам лист, 2. форма отпраки, 3. поле ввода текста

// const todoList = document.querySelector("#todo-list");

// const todoForm = document.querySelector("#todo-form");

// const todoInput = document.querySelector("#todo-input");

// // // 2. добавляем прослушку на Форму через addEventListener
// // // мы будем слушать событие submit (от англ. "submit" ‒ «отправить») "отправку формы"
// // // А в addEventListener мы добавим функцию обработчик

// // todoList.addEventListener("submit", formHandler);

// // function formHandler() {
// //   // 1. попробуем отобразить Submit! в консоле
// //   console.log("Submit!"); // пробуем что-то отправить, но в консоле Submit! сразу пропадает
// //   //   потому что отправка формы должна идти на адрес внутри в форме, но мы его не указывали
// //   //   поэтому форма отправляется на нашу же страницу и происходит перезагрузка нашей страницы
// // }

// // 1. Для того чтобы отменить перезагрузку страницы мы объявим в параметры функции
// // объект event
// // 2. и применим к нему метод preventDefault()
// /*
// Событие — это какое-то действие, произошедшее на странице. Например, клик, нажатие кнопки, движение мыши, отправка формы и так далее.
// Когда срабатывает событие, браузер создаёт объект события Event. Этот объект содержит всю информацию о событии.
// У него есть свои свойства и методы, с помощью которых можно эту информацию получить и использовать.
// Один из методов как раз позволяет отменить действие браузера по умолчанию — preventDefault().
// Event можно передать в функцию-обработчик события и в ней указать инструкции, которые должны быть выполнены, когда оно сработает.
// Функция preventDefault() не позволяет выполнить действие по умолчанию для события.
// */

// todoForm.addEventListener("submit", formHandler);

// function formHandler(event) {
//   event.preventDefault(); // так мы отменим отправку формы (и перезагрузку страницы)
//   //   console.log("Submit!"); // проверили и закоментируем Submit!

//   //   1. получаем из поля ввода (input) текст задачи

//   const taskText = todoInput.value;
//   //   // проверим в консоле как работает ввод текста
//   //   console.log(taskText); // Ok. всё что печатаем и отправляем выводится в консоле
//   //   // далее создадим кусок разметки HTML, а именно
//   //   //   создадим li HTML
//   const li = `<li>${taskText}</li>`;

//   // Добавляем новую разметку на нашу страницу
//   todoList.insertAdjacentHTML("beforeend", li); // новая задача выводится на экран

//   // Улучшим и добавим очищение поля ввода после ввода текста
//   todoInput.value = "";

//   //   добавим возвращение фокуса (курсора) в поле ввода ( методом focus())
//   todoInput.focus();
// }

// //  Закоментируем весь 1-ы блок (и это 1-й Способ)  и перенесём весь код заново ниже

// const todoList = document.querySelector("#todo-list"); // находим лист с формой
// const todoForm = document.querySelector("#todo-form"); // находим форму
// const todoInput = document.querySelector("#todo-input"); // находим поле ввода текста

// todoForm.addEventListener("submit", formHandler); // вешаем прослушку на "отправку" и установим обработчик

// function formHandler(event) {
//   event.preventDefault(); // предотвращаем отправку формы

//   const taskText = todoInput.value; // получаем задачу из инпута

//   const li = `<li>${taskText}</li>`; // создаём тег li через разметку

//   todoList.insertAdjacentHTML("beforeend", li); // новую разметку выводим на страницу

//   todoInput.value = ""; // очищаем поле ввода

//   todoInput.focus(); // фокус на поле ввода
// }

// //  ---- 2-й Способ. Через создание Тега.

// const todoList = document.querySelector("#todo-list"); // находим лист с формой
// const todoForm = document.querySelector("#todo-form"); // находим форму
// const todoInput = document.querySelector("#todo-input"); // находим поле ввода текста

// todoForm.addEventListener("submit", formHandler); // вешаем прослушку на "отправку" и установим обработчик

// function formHandler(event) {
//   event.preventDefault(); // предотвращаем отправку формы

//   const taskText = todoInput.value; // получаем текст-задачу из input

//   /*
//     const li = `<li>${taskText}</li>`; // создаём тег li через разметку

//     todoList.insertAdjacentHTML("beforeend", li); // новую разметку выводим на страницу
// */

//   //  Создаём тег Li посредством создания элемента document.createElement
//   const newTask = document.createElement("li");

//   // Заполним новый li текстом из input
//   newTask.innerText = taskText; // или todoInput.value

//   //   добавим вывод текста на страницу
//   todoList.append(newTask);

//   todoInput.value = ""; // очищаем поле ввода

//   todoInput.focus(); // фокус на поле ввода
// }
// //  ---- выше 2-й способ закоментируем, но продублируем этот код для добавления кнопки "Удалить"
//

// // ---- 2-й способ с кнопкой "Удалить".

// const todoList = document.querySelector("#todo-list"); // находим лист с формой
// const todoForm = document.querySelector("#todo-form"); // находим форму
// const todoInput = document.querySelector("#todo-input"); // находим поле ввода текста

// todoForm.addEventListener("submit", formHandler); // вешаем прослушку на "отправку" и установим обработчик

// function formHandler(event) {
//   event.preventDefault(); // предотвращаем отправку формы

//   const taskText = todoInput.value; // получаем текст-задачу из input

//   //  Создаём тег Li посредством создания элемента document.createElement
//   const newTask = document.createElement("li");

//   // Заполним новый li текстом из input
//   newTask.innerText = taskText; // или todoInput.value
//   //
//   //

//   // Создаём кнопку "Удалить" c помощью createElement
//   const deleteButton = document.createElement("button");
//   // Coздаём для кнопки отрибут спом метода setAttribute c аргументами "role" и "button"
//   deleteButton.setAttribute("role", "button");
//   // добавим кнопке текст "Удалить"
//   deleteButton.innerText = "Удалить";
//   // добавим кнопке стиль, но свойство стиля передаём в [] в виде строки и значение в виде строки
//   deleteButton.style["margin-left"] = "15px";
//   //   добавим кнопку на страницу при выведении текста
//   newTask.append(deleteButton);
//   //   повесим прослушку на click кнопки c функцией (c this => не стработает) по её  удалению со строницы вместе сновой задачей
//   deleteButton.addEventListener("click", function () {
//     this.closest("li").remove();
//   });
//   /* this ссылается на эту же кнопку, метод closest (ближайший) ищет
//     снизу вверх первый элемент li, а метод remove удаляет его */

//   //
//   //   добавим вывод текста на страницу
//   todoList.append(newTask);

//   todoInput.value = ""; // очищаем поле ввода

//   todoInput.focus(); // фокус на поле ввода
// }
// // закоментируем 2-й  способ выше

// ------------- setInterval --------

/*
setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.

Первым параметром следует передавать функцию-коллбэк, а вторым - время в миллисекундах, 
указывающее, через какой промежуток будет повторяться код, заданный первым параметром.*/

// // Запустим и остановим setInterval

// // 1. сщздадим функцию и присвоим её переменной

// const setIntervalID = setInterval(function () {
//   console.log("Hi");
// }, 2000);

// // 2. посредством метода clearInterval мы мгновенно остановим setIntervalID
// // его можно запустить в консоле и он остановит интревал

// // clearInterval(setIntervalID);

// ------------- setTimeOut --------

// // setTimeout позволяет вызвать функцию один раз через определённый интервал времени.

// const timerID = setTimeout(function () {
//   console.log("Hi");
// }, 5000);

// // если хотим остановить тоже используем

// // clearInterval(timerID);

// // ------- setInterval + setTimeout (совместим их в коде, а именно запустим и остановим) -----

// const timerID = setInterval(function () {
//   console.log("setInterval Hi");
// }, 2000);

// setTimeout(function () {
//   clearInterval(timerID);
// }, 10000);  // остановили через 10 сек

// ---------- Практика. Таймер setInterval ----------

// 1. уберем none в  <div class="dom-example none">
// 2. появился таймер на нашей странице с 3-мя кнопками

// -------- Секундомер.

//
// 1. coздадим счетчик но используем только let

// let counter = "0";

// setInterval(function () {
//   counter++;
//   const counterElement = document.querySelector("#counter");
//   counterElement.innerText = counter;
// }, 1000);
// // --- Cчетчик работает, закоментируем ---

// // ------ Старт

// // 2. поработаем с кнопкой Старт, но чтобы он не срабатывал самостоятельно

// const counterElement = document.querySelector("#counter");
// let counter = "0";

// // 1. Найдем кнопку старт и присвоим переменной
// const buttonStart = document.querySelector("#start");
// // 2. создадим функцию (выше она уже есть в счетчике), которая будет работать при нажатии Start

// let timerID; // эту переменную мы объявили на стадии Пауза (смотри ниже) и внесли переменную в функцию Старта

// buttonStart.onclick = function () {
//   console.log(buttonStart); // для просмотра сработки <button role="button" id="start">Старт</button>

//   timerID = setInterval(function () {
//     counter++;
//     counterElement.innerText = counter;
//   }, 1000);
// };

// // ------ Пауза

// // 1. найдём
// const buttonPause = document.querySelector("#pause");

// // 2. создадим для неё соотв. функцию, а также сделаем переменную let timerID в секундомере и вынесем её в глобальную область видимости

// buttonPause.onclick = function () {
//   console.log(buttonPause); // для просмотра сработки <button role="button" id="pause">Пауза</button>

//   clearInterval(timerID); // для остановки timerID ил счетчика
// };

// // ------ Сброс  (reset)

// // 1. найдем кнопку Сброс по Id (c присвоением переменной)

// const buttonReset = document.querySelector("#reset");

// buttonReset.onclick = function () {
//   console.log(buttonReset); // для просмотра стработки

//   counter = 0; //  так обнуляем счетчик

//   counterElement.innerText = counter; // обновляем показания счетчика в counterElement

//   clearInterval(timerID); // остановим счетчик
// };

//  ----------- И так, перепишем весь большой код чуть ниже для лучшей наглядности:

// // 1. Секундомер.

// let counter = "0";

// setInterval(function () {
//   counter++;
//   const counterElement = document.querySelector("#counter");
//   counterElement.innerText = counter;
// }, 1000);

// // 2. Старт

// const counterElement = document.querySelector("#counter"); // найдем счетчик
// let counter = "0"; //  0 - это начальное значение счетчика

// const buttonStart = document.querySelector("#start"); // найдем кнопку старт и присвоим переменной

// let timerID; // эту переменную мы объявили на стадии Пауза (смотри ниже) и внесли переменную в функцию Старта

// buttonStart.onclick = function () {
//   // создадим функцию setInterval (выше она уже есть внутри счетчика), которая будет работать при нажатии Start
//   timerID = setInterval(function () {
//     counter++;
//     counterElement.innerText = counter;
//   }, 1000);
// };

// // 3. Пауза
// const buttonPause = document.querySelector("#pause"); // найдём по id паузу

// buttonPause.onclick = function () {
//   // создадим для неё соотв. функцию, а также сделаем переменную let timerID в секундомере и вынесем её в глобальную область видимости
//   clearInterval(timerID); // для остановки timerID в счетчике
// };

// // ------ Сброс  (reset)

// const buttonReset = document.querySelector("#reset"); // найдем кнопку Сброс по Id (c присвоением переменной)

// buttonReset.onclick = function () {
//   // сделаем функцию для сброса счетчика
//   counter = 0; //  так обнуляем счетчик
//   counterElement.innerText = counter; // обновляем показания счетчика в counterElement
//   clearInterval(timerID); // остановим timerID в счетчике
// };

// ----- Асинхроннось. Callback. Callback hell------

// // 1. ниже сработает код: Step 3, Step 2, Step 1
// setTimeout(function () {
//   console.log("Step 1");
// }, 3000);

// setTimeout(function () {
//   console.log("Step 2");
// }, 2000);

// setTimeout(function () {
//   console.log("Step 3");
// }, 1000);

// // 2. Порядок ниже изменим чтобы сработал код:
// // Step 1, Step 2, Step 3

// setTimeout(function () {
//   console.log("Step 1");

//   setTimeout(function () {
//     console.log("Step 2");

//     setTimeout(function () {
//       console.log("Step 3");
//     }, 1000);
//   }, 2000);
// }, 3000);

// -----Пример с проверкой номеров в отеле:

// function checkRooms() {
//   console.log("Проверяем номера в отеле...");
//   const availableRooms = true;
//   return availableRooms;
// }

// if (checkRooms()) {
//   console.log("Номера есть!");
//   console.log("Едем в отпуск!");
// } else {
//   console.log("Номеров нет.");
//   console.log("Отпуск отменяется.");
// }
// // выше код сработает последовательно

// // ----- добавим задержку в код на 1 сек. и будет проблема (номеров нет)

// function checkRooms() {
//   setTimeout(function () {
//     console.log("Проверяем номера в отеле...");
//     const availableRooms = true;
//     return availableRooms;
//   }, 1000);
// }

// if (checkRooms()) {
//   console.log("Номера есть!");
//   console.log("Едем в отпуск!");
// } else {
//   console.log("Номеров нет.");
//   console.log("Отпуск отменяется.");
// }

// // Чтобы исправить нам надо вернуть переменную  availableRooms в глобальную область видимости, для этого переместим if-else во внутрь функции checkRooms  и удалим return availableRooms, а в if проверим эту же переменную availableRooms;:

// function checkRooms() {
//   setTimeout(function () {
//     console.log("Проверяем номера в отеле...");
//     const availableRooms = true; // если false то билетов не будет

//     if (availableRooms) {
//       console.log("Номера есть!");
//       console.log("Едем в отпуск!");
//     } else {
//       console.log("Номеров нет.");
//       console.log("Отпуск отменяется.");
//     }
//   }, 1000);
// }
// // OK  и вызовим саму функцию checkRooms
// checkRooms(); // всё работает хорошо

// // Cледующее---- Проверим номера и наличие билетов нан самолет ----

// function checkRooms() {
//   setTimeout(function () {
//     console.log("Проверяем номера в отеле...");
//     const availableRooms = true;

//     if (availableRooms) {
//       let message = "Номера есть !";
//       submitVacation(message);
//     } else {
//       let message = "Номеров нет !";
//       cancelVacation(message);
//     }
//   }, 2000);
// }

// function cancelVacation(message) {
//   console.log("---cancelVacation---");
//   console.log("Ответ на предидущем шаге:", message);
//   console.log("Отпуск отменяется !");
// }

// function submitVacation(message) {
//   console.log("---submitVacation---");
//   console.log("Ответ на предидущем шаге:", message);
//   console.log("Едем в отпуск !");
// }
// // запустим главную функцию checkRooms
// checkRooms(); // всё сработало коректно

// // ---- Далее----Сделаем нашу функцию более универсальной - когда сможем передавать в неё аргументы и задавать параметры

// function checkRooms(success, failed) {
//   setTimeout(function () {
//     console.log("Проверяем номера в отеле...");
//     const availableRooms = true;

//     if (availableRooms) {
//       let message = "Номера есть !";
//       success(message);
//     } else {
//       let message = "Номеров нет !";
//       failed(message);
//     }
//   }, 2000);
// }

// function cancelVacation(message) {
//   console.log("---cancelVacation---");
//   console.log("Ответ на предидущем шаге:", message);
//   console.log("Отпуск отменяется !");
// }

// function submitVacation(message) {
//   console.log("---submitVacation---");
//   console.log("Ответ на предидущем шаге:", message);
//   console.log("Едем в отпуск !");
// }

// checkRooms(submitVacation, cancelVacation); // тоже отработало отлично

// // -----Далее ---- усложним и добавим дополнительную проверку наличия билетов на самолет:

// function checkRooms(success, failed) {
//   setTimeout(function () {
//     console.log("Проверяем номера в отеле...");
//     const availableRooms = true;

//     if (availableRooms) {
//       let message = "Номера есть !";
//       success(message);
//     } else {
//       let message = "Номеров нет !";
//       failed(message);
//     }
//   }, 2000);
// }

// function cancelVacation(message) {
//   console.log("---cancelVacation---");
//   console.log("Ответ на предидущем шаге:", message);
//   console.log("Отпуск отменяется !");
// }

// function submitVacation(message) {
//   console.log("---submitVacation---");
//   console.log("Ответ на предидущем шаге:", message);
//   console.log("Едем в отпуск !");
// }

// // сallback Hell разростается
// // код уезжает в право
// checkRooms(
//   function (messageFromCheckRooms) {
//     checkTickets(
//       messageFromCheckRooms,
//       function (messageFromCheckTickets) {
//         submitVacation(messageFromCheckTickets);
//       },
//       function (messageFromCheckTickets) {
//         cancelVacation(messageFromCheckTickets);
//       }
//     );
//   },
//   function (messageFromCheckRooms) {
//     cancelVacation(messageFromCheckRooms);
//   }
// );
// // - ниже пишем функцию по проверке авиабилетов

// function checkTickets(message, success, failed) {
//   setTimeout(function () {
//     console.log("---function checkTickets---");
//     console.log("Oтвет на предидущем шаге:", message);
//     console.log("Проверяем авиабилеты..."); // здесь как-бы код с запросом в авиакомпанию
//     const availableTickets = true;
//     if (availableTickets) {
//       let message = "Билеты есть !";
//       success(message);
//     } else {
//       let message = "Билетв нет !";
//       failed(message);
//     }
//   }, 1000);
// }

// --------  Промисы --------

// 1. --- Создание промиса ---

// const myPromis = new Promise(function (resolve, reject) {
//   console.log("Promis created"); // - обозначим момент создания Промиса
//   setTimeout(function () {
//     //---запрос на сервер
//     const response = true; // - симулируем ответ с сервера
//     // Ниже задаём код, что делать в случае успеха и не успеха
//     if (response) {
//       resolve();
//     } else {
//       reject();
//     }
//   }, 2000);
// });

// // Ниже опишем код, который  обрабатывает ответ полученный нашим Промисом

/*
Метод then() используют, чтобы выполнить код после успешного выполнания промиса.
Всегда возвращает новый промис.
Для обработки ошибок или неуспешного выполнения промиса используют метод catch().
// Методы then и catch работают всегда только с 1 аргументом (успех - неуспех)
*/

// myPromis
//   .then(function () {
//     // - это в случае resolve
//     console.log("Then");
//   })
//   .catch(function () {
//     // - это в случае reject
//     console.log("Catch");
//   }); // Promis created / Then
// //
// //

// // 2. --- Promis отработал, но мы можем его усложнить,
// // - если в resolve / reject  передавать какие-то значения (дынные = data)  ---

// const myPromis = new Promise(function (resolve, reject) {
//   console.log("Promis created"); // - обозначим момент создания Промиса
//   setTimeout(function () {
//     //---запрос на сервер
//     const response = true; // - симулируем ответ с сервера

//     if (response) {
//       // передаём данные в resolve
//       let message = "Успех.";
//       resolve(message);
//     } else {
//       // передаём данные в reject
//       let message = "Провал.";
//       reject(message);
//     }
//   }, 2000);
// });

// myPromis
//   .then(function (data) {
//     // принимаем некие параметры data
//     // - в случае resolve
//     console.log("Then");
//     console.log(data); // вывод данных data в консоль
//   })
//   .catch(function (data) {
//     // принимаем некие параметры data
//     // - в случае reject
//     console.log("Catch");
//     console.log(data); // вывод данных data в консоль
//   }); // Promis created / Then / Успех.

// // // 3. --- Выше промис можно сократить и методы (then / catch) поставить сразу после его создания ---

// const myPromis = new Promise(function (resolve, reject) {
//   console.log("Promis created");
//   setTimeout(function () {
//     const response = true;
//     if (response) {
//       let message = "Успех.";
//       resolve(message);
//     } else {
//       let message = "Провал.";
//       reject(message);
//     }
//   }, 2000);
// })
//   .then(function (data) {
//     console.log("Then");
//     console.log(data);
//   })
//   .catch(function (data) {
//     console.log("Catch");
//     console.log(data);
//   }); // Promis created / Then / Успех.

// // 4. Добавлять метод then  можно не один раз ---
// // - ниже пример с таким решением...

// const myPromis = new Promise(function (resolve, reject) {
//   console.log("Promis created");
//   setTimeout(function () {
//     const response = true;
//     if (response) {
//       let message = "Успех.";
//       resolve(message);
//     } else {
//       let message = "Провал.";
//       reject(message);
//     }
//   }, 2000);
// })
//   .then(function (data) {
//     // в then 1 колбеk обработал результат промиса и вернул некие данные и передал их в then 2
//     console.log("Then 1");
//     console.log(data);
//     return "Data from Then 1";
//   })
//   .then(function (data) {
//     //в then 2 колбек отрадотал полученные данные от then 1 и вывел в консоль "Data from Then 1"
//     console.log("Then 2");
//     console.log(data);
//   })
//   .catch(function (data) {
//     console.log("Catch");
//     console.log(data);
//   });
// // --- обычно обработка результатов Промиса сводится к методу then (в случае выполнания) и cath (при не выполнении или ошибки)

// // На этом всё, но мы далее немного усложним,
// // а именно добавим задержку в обработке промиса
// // ниже мы увидим нечто удивительное:

// const myPromise = new Promise(function (resolve, reject) {
//   console.log("Promise created");

//   setTimeout(function () {
//     const response = true;

//     if (response) {
//       let message = "Success";
//       resolve(message);
//     } else {
//       let message = "Failed";
//       reject(message);
//     }
//   }, 2000);
// });

// myPromise
//   .then(function (data) {
//     setTimeout(() => {
//       console.log("Then 1");
//       console.log(data);
//     }, 1000);
//   })
//   .then(function (data) {
//     setTimeout(() => {
//       console.log("Then 2");
//     }, 500);
//   })
//   .catch(function (data) {
//     console.log("Catch");
//     console.log(data);
//   }); // код отработает в таком порядке:
// /*
// Promise created
// Then 2
// Then 1
// Success
// */
// --- Выполнится: сначала Промис, а потом тот then еоторый выполнится быстрее,  а не в заданном нами порядке,
// так как на выполнение then 2 мы определили меньше времени ---

// // --- но если мы поменяем время, то then 1 и then 2 выполятся по порядку согласно установленого времени ---

// const myPromise = new Promise(function (resolve, reject) {
//   console.log("Promise created");

//   setTimeout(function () {
//     const response = true;

//     if (response) {
//       let message = "Success";
//       resolve(message);
//     } else {
//       let message = "Failed";
//       reject(message);
//     }
//   }, 3000);
// });

// myPromise
//   .then(function (data) {
//     setTimeout(() => {
//       console.log("Then 1");
//       console.log(data);
//     }, 1000);
//   })
//   .then(function (data) {
//     setTimeout(() => {
//       console.log("Then 2");
//     }, 2000);
//   })
//   .catch(function (data) {
//     console.log("Catch");
//     console.log(data);
//   }); // код отработает в таком порядке:
// /*
// Promise created
// Then 1
// Success
// Then 2
// */

// ----- Далее по промисам Веб Кадеми понёс херню и мы обратимся по промисам, а имено по применению синтаксиса async / await и fetch к БОГДАНУ !!! -----

// /*
// С помощью функции fetch() можно отправлять сетевые запросы на сервер — как получать, так и отправлять данные.
// Метод возвращает промис с объектом ответа, где находится дополнительная информация (статус ответа, заголовки)
// и ответ на запрос.

// Функция fetch() принимает два параметра:

// url — адрес, по которому нужно сделать запрос;
// options (необязательный) — объект конфигурации, в котором можно настроить метод запроса, тело запроса, заголовки и многое другое.
// По умолчанию вызов fetch() делает GET-запрос по указанному адресу.
// */

// fetch("https://jsonplaceholder.typicode.com/todos/1")  // Promise {<pending>}
//   .then((response) => response.json()) // здесь получим второй Промис
//   .then((json) => console.log(json))  // {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
//   .catch((error) => console.log(error));

// // ----- Перепим код, чтобы получить в первом then ЯВНО (так как функции => возвращают значения НЕЯВНО )

// fetch("https://jsonplaceholder.typicode.com/todos/1") // Promise 1
//   .then(function (response) {
//     console.log(response);
//     return response.json;
//   }) // Promise 2
//   .then((json) => console.log(json)) // Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/todos/1', redirected: false, status: 200, ok: true, …}
//   .catch((error) => console.log(error));

// ----- Что будет если Промис вернет ошибку, например если не будет интернета ??? ---- смотрим ниже
/*
Promise {<pending>}
VM62:1          GET https://jsonplaceholder.typicode.com/todos/1 net::ERR_INTERNET_DISCONNECTED
(anonymous) @ VM62:1
VM62:7 TypeError: Failed to fetch
    at <anonymous>:1:1
*/

//  ----- async/await -----
/*
Добавленное перед определением функции ключевое слово async делает функцию асинхронной. 
Возвращаемое значение это Promise.

Асинхронные операции выполняются не сразу: код отправил запрос к API и ждёт, пока сервер пришлёт ответ. 
Ключевое слово await используется, чтобы дождаться выполнения асинхронной операции. 

Ключевые слова async/await упрощают работу с Promise.
*/

// //  1. Пример

// async function asyncFunction() {
//   // сначала Promise
//   return "Success!"; // вернули результат Promuse
// }
// asyncFunction();
// // посмотрим в консоле
// console.log(asyncFunction()); // Promise {<fulfilled>: 'Success!'}

// //  --- С помощью метода then b catch мы также обработаем результат Промиса

// async function asyncFunction() {
//   return "Success!"; // вернули результат Promuse
// }

// asyncFunction()
//   .then((value) => {
//     console.log(value); // Success!
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // --- Используем await для ожидания результата Promise

// // 2. Пример

// const timerPromise = () =>
//   new Promise((resolve, rejact) => setTimeout(() => resolve(), 2000));

// const asyncFunction = async function () {
//   console.log("Timer starts");
//   await timerPromise(); // здесь ожидание испорлнения Промиса (2 sec)
//   console.log("Timer ended");
// };

// asyncFunction(); // Timer starts (через 2 секунды) Timer ended

// --- Fetch example - курсы валют --- теперь снова вернемся к Веб Кадеми -----

// ----- Пример fetch с промисами, получение данных по API -----

// разблокируем код в классе "fetch-example" для работы с крсами валют на index.html

// - сведения берем на сайте https://www.cbr-xml-daily.ru/  (Курсы валют ЦБ РФ в XML)

// // 1. Получаем данные с сервера (в виде строки)

// // fetch("https://www.cbr-xml-daily.ru/daily_json.js")

// async function getCurrencies() {
//   const url = "https://www.cbr-xml-daily.ru/daily_json.js";

//   const response = await fetch(url);

//   const data = await response.json();
//   // далее выведем полученый объект js
//   console.log(data);
//   // получим из объекта js данные по $ и Eur
//   console.log(data.Valute.USD.Value); // 61.4247
//   console.log(data.Valute.EUR.Value); // 62.3551
//   // Полученные значения по цене валют можно обрезать до 2 знаков после (,)
//   console.log(data.Valute.USD.Value.toFixed(2)); // 61.42
//   console.log(data.Valute.EUR.Value.toFixed(2)); // 62.36
//   // создадим отделные переменные и запишем в них финальные значения
//   const usdRate = data.Valute.USD.Value.toFixed(2);
//   const eurRate = data.Valute.EUR.Value.toFixed(2);

//   // 2. Отобразим стоимость валют на нашей странице, а для этого сначала найдем для них элементы по id

//   const usdElm = document.querySelector("#usd");
//   const eurElm = document.querySelector("#eur");
//   // - поместим цену валют (текст) в найденные элементы
//   usdElm.innerText = usdRate;

//   eurElm.innerText = eurRate;
// }

// getCurrencies();

// ----- OK. Всё отработало идеально, но перепишим код ниже более кратко

async function getCurrencies() {
	const url = "https://www.cbr-xml-daily.ru/daily_json.js";

	const response = await fetch(url);

	const data = await response.json();

	// создадим отделные переменные и запишем в них финальные значения валют
	const usdRate = data.Valute.USD.Value.toFixed(2);
	const eurRate = data.Valute.EUR.Value.toFixed(2);

	// 2. Отобразим стоимость валют на нашей странице, а для этого сначала найдем для них элементы по id

	const usdElm = document.querySelector("#usd");
	const eurElm = document.querySelector("#eur");

	// - поместим цену валют (текст) в найденные элементы
	usdElm.innerText = usdRate;
	eurElm.innerText = eurRate;
}

getCurrencies();
