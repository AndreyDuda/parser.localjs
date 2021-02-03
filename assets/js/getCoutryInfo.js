function getInfo(countryId) {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'block';
    var script = document.createElement('script');
    script.src = 'http://www.ringcentral.com/api/index.php?cmd=getInternationalRates&param[internationalRatesRequest][brandId]=1210&param[internationalRatesRequest][countryId]=' + countryId +
        '&param[internationalRatesRequest][tierId]=3311&typeResponse=json&callback=buildResponse';
    document.body.append(script);
}

function buildResponse(response) {
    var responseRates = response.rates[0];
    var data = (Array.isArray(responseRates.value[0])) ? responseRates.value[0] : responseRates.value;
    var country = responseRates.key.name;
    var infoJson = [];
    var phonePart = '';
    data.forEach((element) => {
        if (!infoJson[element.type]) {
            infoJson[element.type] = {
                country: country,
                type: element.type,
                codes: [],
                rate: element.rate
            };
        }

        if (country) {
            country = '';
        }
        if (element.phonePart) {
            phonePart = String(element.phonePart);
        }
        infoJson[element.type].codes.push(element.areaCode + phonePart);
    });
    generateTableBody(infoJson);
    preloader.style.display = 'none';
}