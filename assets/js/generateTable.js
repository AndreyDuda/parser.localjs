function generateTableBody(infoJson) {
    var tableBody = document.getElementById('countryTableBody');
    var value = '';
    tableBody.innerHTML = '';

    for (var key in infoJson) {
        var tr = document.createElement('tr');
        var CountryInfo = infoJson[key];
        for (var prop in CountryInfo) {
            if (CountryInfo.hasOwnProperty(prop) && typeof CountryInfo[prop] === 'object') {
                value = CountryInfo[prop].join(', ');
            } else {
                value = CountryInfo[prop];
            }
            var td = document.createElement('td')
            td.innerHTML = value;
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }
}