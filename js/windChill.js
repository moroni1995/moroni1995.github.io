function doInputOutput() {
    //INPUT
    let temperature = parseInt(document.getElementById('temperature').value);
    let windspeed = parseInt(document.getElementById('windspeed').value);
    let windchill;

    if (temperature < 50 && windspeed > 3) {
        windchill = windChill(temperature, windspeed);
    } else {
        windchill = "Wind chill is not calculated for temperatures above 50 degrees Fahrenheit nor for wind speeds below 3 miles per hour. ";
    }
    //OUTPUT
    document.getElementById('output').innerHTML = `${windchill} Fº`;

}
//PROCESSING
function windChill(tempF, speed) {
    return 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16)
}