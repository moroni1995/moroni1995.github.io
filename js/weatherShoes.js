function findShoes() {
    //INPUT = Get user input of select element
    let weather = document.getElementById('weather-select').value;
    let footwear;

    //PROCESS = Compares user input or weather variable and set footwear that matches with selected weather
    switch (weather) {
        case 'hot':
            footwear = 'sandals';
            break;
        case 'rain':
            footwear = 'galoshes';
            break;
        case 'snow':
            footwear = 'boots';
            break;
        case 'unknown':
            footwear = 'shoes';
            break;
    }
    //OUTPUT = Display the footwear to the user
    document.getElementById('output').innerHTML = `Footwear: ${footwear}`
}