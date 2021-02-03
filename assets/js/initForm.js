(function() {
    var select = document.getElementById('country');
    var button = document.getElementById('country_button');
    var script = document.createElement('script');

    script.src = `http://www.ringcentral.com/api/index.php?cmd=getCountries&typeResponse=json&callback=buildSelect'`;
    document.body.append(script);

    select.addEventListener('change', function(e) {
        var disabled = (e.target.value == '0') ? true : false;
        button.setAttribute('data-id', e.target.value)
        button.disabled = disabled;

    });

    button.addEventListener('click', function(e) {
        var id = e.target.dataset.id;
        getInfo(id);
    })
})();

function buildSelect(response) {
    var select = document.getElementById('country');
    response.result.forEach((element) => {
        var option = document.createElement("option");
        option.setAttribute("value", element.id);
        option.innerHTML = element.name;
        select.appendChild(option);
    });

    select.disabled = false
}

