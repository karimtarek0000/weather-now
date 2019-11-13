import $ from 'jquery';
import { getStateCountry } from '../model/model';
import { renderCurLocation, loadingAnimation, uiElement } from '../view/view';

let state = {};

$(function () {

    const setDataCurrentLocation = async () => {

        // WILL BE RENDER CLASS
        state.curLocation = new getStateCountry();

        // ADD LOADING ANIMATION TO UI
        loadingAnimation(uiElement.headerLocation, true);

        // WILL BE WAIT SET DATA INTO CLASS
        await state.curLocation.setData();

        // WILL BE WAIT GET API DATA
        await state.curLocation.getApi();

        // REMOVE LOADING ANIMATION FROM UI
        loadingAnimation(uiElement.headerLocation, false);

        // RENDER UI ELMENTS 
        // renderCurLocation(state.curLocation.state, state.curLocation.country);

        await state.curLocation.convertTemperature(state.curLocation.tempFrnhit);



    };


















    // RENDER ALL FUNCTION
    // setDataCurrentLocation();

    
});



