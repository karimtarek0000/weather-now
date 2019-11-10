// ALL IMPORT
import axios from 'axios';

// CONST API
const appId = 'GZXYXEN2MVW3iSsdbCcP',
    appCode = 'cTdL9-GW9_BeiicF_1kmgw',
    proxy = `https://cors-anywhere.herokuapp.com/`,
    apiUrl = `${proxy}https://weather.api.here.com/weather/1.0/report.json?app_id=${appId}&app_code=${appCode}`;



// GET CURRENT STATE AND COUNTRY
export class getStateCountry {
    constructor() {
    };

    getCurPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    };

    async setData() {
        const { coords } = await this.getCurPosition();
        const { latitude, longitude } = coords;
        this.latitude = latitude;
        this.longitude = longitude;
    };

    async getApi() {
        const data = await axios.get(`${apiUrl}&product=forecast_7days_simple&latitude=${this.latitude}&longitude=${this.longitude}`);
        return this.allData = data;
    };

}





// let allData = {};
// function test() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(pos => {
//             const latitude = pos.coords.latitude;
//             const longitude = pos.coords.longitude;
//             getData(latitude, longitude);
//         });

//     }
// };

// async function getData(latitude, longitude) {
//     const d = await axios.get(`${apiUrl}&product=forecast_7days_simple&latitude=${latitude}&longitude=${longitude}`);
//     return allData.state = d.data.feedCreation;
// };


// async function render() {
//     const d = test();
//     const s = await d;
//     document.write(s);
// }

// render();

// export function getCurrentPosition() {
//     return new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
// }
