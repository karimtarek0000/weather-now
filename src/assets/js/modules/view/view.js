import $ from 'jquery';


// ALL VARIABLES
export const uiElement = {
    headerLocation: '.header__content__location',
    headerCityClass: 'header__content__location__current__city',
    headerCountryClass: 'header__content__location__current__country',
    currentLocationEl: $('.header__content__location__current'),
    svgIconCurrentLocation: $('.header__content__location > svg'),
    headerWeatherInfo: $('.header__content__weather__info'),
    headerWeatherInner: $('.header__content__weather__inner'),
};

// RENDER CURRENT LOCATION
export const renderCurLocation = (curState, curCountry) => {

    // APPEND SPAN RENDER COUNTRY AND STATE UI
    uiElement.currentLocationEl.append(`
            <span id="curCountry">${curCountry},</span>
            <span id="curState">${curState}</span>
        `);

    // ADD CLASS IN APPEND SPAN INTO CURRENT LOCATION EL
    uiElement.currentLocationEl.children('#curState').addClass(uiElement.headerCityClass);
    uiElement.currentLocationEl.children('#curCountry').addClass(uiElement.headerCountryClass);

    // STYLE ICONS SVG
    uiElement.svgIconCurrentLocation.css('display', 'inline-block');

};

// RENDER INFO AND ICON WEATHER
export const renderInfoandIconWeather = (icon, temp, summary) => {

    
    const s = 'icon-' + icon;
    const iconWeather = `
            <svg>
                <use xlink:href="./assets/img/icon svg/sprit.svg#{icon}">
            </svg>
    `;

    // 
    uiElement.headerWeatherInner.prepend(iconWeather);

    // 
    uiElement.headerWeatherInfo.append(`
            <p class="header__content__weather__info__class">${temp}</p>
            <p class="header__content__weather__info__summary">${summary}</p>
        `);
};

// RENDER LOADING ANIMATION WILL BE RUNNING BEFORE GET DATA IN UI
export const loadingAnimation = function (elm) {

    var status = Array.prototype.slice.call(arguments, 0, 1)[0];
    var allElm = Array.prototype.slice.call(arguments, 1);

    if (status) {
        $(allElm).each(function () {
            $(this).append(`
                <div class="loading">
                    <div class="loading__inner"></div>
                </div>
            `);
        })
    } else {
        $(allElm).each(function () {
            $(this).children().remove('.loading');
        });
    }



};

