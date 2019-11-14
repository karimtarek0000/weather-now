import $ from 'jquery';
import { getStateCountry } from '../model/model';
import { renderCurLocation, loadingAnimation, uiElement, renderInfoandIconWeather } from '../view/view';

let state = {};

$(function () {

    const setDataCurrentLocation = async () => {

        // WILL BE RENDER CLASS
        state.curLocation = new getStateCountry();

        // ADD LOADING ANIMATION TO UI
        loadingAnimation(true, uiElement.headerLocation);

        // WILL BE WAIT SET DATA INTO CLASS
        await state.curLocation.setData();

        // WILL BE WAIT GET API DATA
        await state.curLocation.getApi();

        // REMOVE LOADING ANIMATION FROM UI
        loadingAnimation(false, uiElement.headerLocation);

        // RENDER UI ELMENTS 
        renderCurLocation(state.curLocation.state, state.curLocation.country);

        await state.curLocation.convertTemperature(state.curLocation.tempFrnhit);

        // renderInfoandIconWeather(state.curLocation.tempCelusies, state.curLocation.summary);

    };


    loadingAnimation(true, uiElement.headerLocation, uiElement.headerWeatherInner);



    // RENDER ALL FUNCTION
    // setDataCurrentLocation();


});



