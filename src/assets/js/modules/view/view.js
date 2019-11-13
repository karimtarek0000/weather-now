import $ from 'jquery';


// ALL VARIABLES
export const uiElement = {
    headerLocation: '.header__content__location',
    headerCityClass: 'header__content__location__current__city',
    headerCountryClass: 'header__content__location__current__country',
    currentLocationEl: $('.header__content__location__current'),
    svgIconCurrentLocation: $('.header__content__location > svg')
};

// RENDER CURRENT LOCATION
export const renderCurLocation = (curState, curCountry) => {

    // APPEND SPAN RENDER UI
    uiElement.currentLocationEl.append(`
            <span id="curCountry">${curCountry},</span>
            <span id="curState">${curState}</span>
        `);

    // ADD CLASS IN APPEND SPAN INTO CURRENT LOCATION EL
    uiElement.currentLocationEl.children('#curState').addClass(uiElement.headerCityClass);
    uiElement.currentLocationEl.children('#curCountry').addClass(uiElement.headerCountryClass);
    
    uiElement.svgIconCurrentLocation.css('display', 'inline-block');
    
};

// RENDER LOADING ANIMATION WILL BE RUNNING BEFORE GET DATA IN UI
export const loadingAnimation = (elm, status) => {

    if (status) {
        $(elm).append(`
            <div class="loading">
                <div class="loading__inner"></div>
            </div>
        `);
    } else {
        $(elm).children().remove('.loading');
    }

};


