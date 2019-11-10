import $ from 'jquery';
import { getStateCountry } from '../model/model';
import { renderCurLocation } from '../view/view';

let state = {};

const fetchData = async () => {
    state.curLocation = new getStateCountry();
    await state.curLocation.setData();
    await state.curLocation.getApi();
    console.log(state.curLocation.allData);
}

fetchData();
