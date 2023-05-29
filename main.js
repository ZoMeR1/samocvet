let tabNav = document.querySelectorAll('.tabs__nav-item'),
    tabContent = document.querySelectorAll('.tab'),
    tabName;

tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav)
});

function selectTabNav() {
    tabNav.forEach(item => {
        item.classList.remove('is-active');
    });
    this.classList.add('is-active');
    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);
}

function selectTabContent(tabName) {
    tabContent.forEach(item => {
        item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
    })
}

let tab = function() {

};

tab();

/* SLIDER */

const img = document.querySelector('.slider__image');
const text = document.querySelector('.slider-text');
const textH1 =document.querySelector('.slider-h1');
const dots = document.querySelectorAll('.slider__dot');
// Создадим массив всех изображений
const imgArr = ['img/slider.img/slider-1.jpg','img/slider.img/slider-2.jpeg','img/slider.img/slider-3.jpg'];
const textArr = ['<ul class="slider-text"><li>Серьги</li><li>Браслеты</li><li>Бусы</li></ul>',
 '<ul class="slider-text"><li>Цветные</li><li>ЧерноБелые</li><li>Смешанные</li></ul>',
  ' <ul class="slider-text"><li>Камни</li><li>Подарки</li><li>Для Гороскопа</li></ul>'];
const textH1Arr = ['Бижутерия', 'Минералы', 'Сувениры']
// Создаем текущий индекс
let currentIndex = 0;

// Функция смены индекса у dots
function changeIndex(ind) {
    //Получаем индекс 
    currentIndex = ind;
    // Произвести процесс смены слайдов
    slide(currentIndex);
}

function nextIndex(direction){
    currentIndex +=direction;
    // дополнительно делаем проверку чтобы индекс не вышел за пределы
    if(currentIndex >= imgArr.length){
        // Получаем первый элемент путем обнуления
        currentIndex = 0;
    } else if (currentIndex<0) {
        // Получаем последний элемент
        currentIndex = imgArr.length - 1;
    }
    slide(currentIndex);    
}

function slide(index){
    img.style.display = 'none';
    setTimeout(()=>{
        img.style.display = 'block';
    }, 0);
    //меняем атрибут src
    img.src = imgArr[index];
    text.innerHTML = textArr[index];
    textH1.innerHTML = textH1Arr[index];
    //Обновляем точки
    updateDots(index);
    
}
// Активный статус 
function updateDots(index) {
    for (let dot of dots) {
        dot.classList.remove('activ');
    }
    dots[index].classList.add('activ');
}
//Саму функцию нужно повесить на кнопки при событии клика
const btnLeft = document.querySelector('.slider__nav-left');
const btnRight = document.querySelector('.slider__nav-right');

 btnLeft.addEventListener('click', ()=>{
    nextIndex(-1)
});
btnRight.addEventListener('click', ()=>{
    nextIndex(1)
});

/* FILTER TABS */

let filterBot = document.querySelector('.filters__buttom'),
    filterImg = document.querySelector('.filter-img'),
    filterStars = document.querySelector('.filters__stars'),
    starFlag = false;

filterBot.addEventListener('click', goStars);

function goStars() {
    if (starFlag == false) {
        filterImg.src = 'img/simple.img/filter-acive.png';
        filterStars.style.right = '60px';
        starFlag = true;
    } else {
        filterImg.src = 'img/simple.img/filter-buttom.png';
        filterStars.style.right = '-500px';
        starFlag = false;
    }
}

let rewTabNav = document.querySelectorAll('.filter__nav'),
    rewTabContent = document.querySelectorAll('.review-tab'),
    rewTabName;

rewTabNav.forEach(item => {
    item.addEventListener('click', selectRewTabNav)
});

function selectRewTabNav() {
    rewTabNav.forEach(item => {
        item.src = 'img/simple.img/star.png';
    }); 
    this.src = 'img/simple.img/star-active.png';
    rewTabName = this.getAttribute('data-tab-id');
    selectedRewTabContent(rewTabName);
}

function selectedRewTabContent(rewTabName) {
    rewTabContent.forEach(item => {
        item.classList.contains(rewTabName) ? item.classList.add('active') : item.classList.remove('active');
    })
}

let tabs = function() {

}

tabs();

/* Show more */

let showMore = document.querySelector('.show__more'),
    reviews = document.querySelector('.reviews-container'),
    moreFlag = false;

showMore.addEventListener('click', showIt);

function showIt() {
    if(moreFlag == false) {
        reviews.style.height = '2000px';
        showMore.innerHTML = 'Убрать';
        moreFlag = true;
    } else {
        reviews.style.height = '650px';
        showMore.innerHTML = 'Показать все';
        moreFlag = false;
    }
}

let yes = document.querySelector('#yes');

yes.addEventListener('click', complete);

function complete() {
    yes.classList.add('active');
    yes.innerHTML = 'Успешно!';
}

let but = document.querySelector('.mobile-but'),
    span1 = document.querySelector('#span-1'),
    span2 = document.querySelector('#span-2'),
    span3 = document.querySelector('#span-3'),
    menuFlag = false,
    menu = document.querySelector('.mobile-text');

but.addEventListener('click', cross);

function cross() {
    if (menuFlag == false) {
        span1.style.backgroundColor = '#fff';
        span2.style.transform = 'rotate(45deg)';
        span3.style.transform = 'rotate(-45deg)';
        menu.style.opacity = '1';
        menu.style.zIndex = '2';
        menuFlag = true;
    } else {
        span1.style.backgroundColor = '#424F60';
        span2.style.transform = 'rotate(0)';
        span3.style.transform = 'rotate(0)';
        span1.style.transform = 'translateY(0px)';
        span2.style.transform = 'translateY(-10px)';
        span3.style.transform = 'translateY(-20px)';
        menu.style.opacity = '0';
        menu.style.zIndex = '-5';
        menuFlag = false;
    }
}

let enc = document.querySelector('#encyclopedia'),
    modelW = document.querySelector('.model-window'),
    close = document.querySelector('.close');

enc.addEventListener('click', Model);
close.addEventListener('click', cModel);

function Model() {
    modelW.style.display = 'flex';
}

function cModel() {
    modelW.style.display = 'none';
}

let encM = document.querySelector('#encyclopediaMobile'),
    modelWm = document.querySelector('.model-window-mobile'),
    closeM = document.querySelector('.close-mobile');

encM.addEventListener('click', modelM);
closeM.addEventListener('click', closeMw);

function modelM() {
    modelWm.style.display = 'flex';
}

function closeMw() {
    modelWm.style.display = 'none';
}

let acc = document.querySelector('#contact'),
    phone = document.querySelector('.contact'),
    treg = document.querySelector('.treagle'),
    accFlag = false;

acc.addEventListener('click', accardeon)

function accardeon() {
    if (accFlag == false) {
        phone.style.display = 'block';
        treg.style.transform = 'rotate(180deg)'
        accFlag = true;
    } else {
        phone.style.display = 'none';
        treg.style.transform = 'rotate(0'
        accFlag = false;
    }
}