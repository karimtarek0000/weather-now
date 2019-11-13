// ALL IMPORT
import axios from 'axios';

// CONST API
const appId = 'EQHrtTdWgbVo5vXDTVdA',
    appCode = 'Txo9T9stJo3kgoCoIsPYjQ',
    apiKeySky = '6457893945213e0d272e0c4befdba105',
    proxy = `https://cors-anywhere.herokuapp.com/`,
    apiUrl = `${proxy}https://weather.api.here.com/weather/1.0/report.json?app_id=${appId}&app_code=${appCode}`;


// OOB GET CURRENT STATE AND COUNTRY
export class getStateCountry {

    // ALL DATA
    constructor() { };

    // PROMISE GET GEOLOCATION
    getCurPosition() {
        if (navigator.geolocation) {
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });
        }
    };

    // CONVERT TEMPERATURE
    convertTemperature(temp) {
        const celusies = (temp - 32) * (5 / 9);
        return this.tempCelusies = celusies;
    };

    // SET DATA WILL BE GET COORDS FROM FUNCTION GET CUR POSITION
    async setData() {
        const { coords } = await this.getCurPosition();
        const { latitude, longitude } = coords;
        this.latitude = latitude;
        this.longitude = longitude;
    };

    // GET DATA FROM API
    async getApi() {
        const data = await axios.get(`${apiUrl}&product=forecast_7days_simple&latitude=${this.latitude}&longitude=${this.longitude}`);
        // ALL DATA FROM API HERE DEVELOPER API
        const { forecastLocation } = data.data.dailyForecasts;
        this.country = forecastLocation.country;
        this.state = forecastLocation.state;

        // ALL DATA FROM SKY API 
        const data2 = await axios.get(`${proxy}https://api.darksky.net/forecast/${apiKeySky}/${this.latitude},${this.longitude}`);
        const { temperature, summary } = data2.data.currently;
        this.tempFrnhit = temperature;
        this.summary = summary;
    };

}
