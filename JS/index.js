document.getElementById('page-loaded').innerHTML = 
    (new Date()).toLocaleTimeString();
    
document.getElementById('get-data').addEventListener('click', getData);

function getData() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var clientData = JSON.parse(xhr.responseText);
            document.getElementById('client-name').innerHTML = clientData.name;
            document.getElementById('client-adress').innerHTML = clientData.adress;
            document.getElementById('client-city').innerHTML = clientData.city;
        }
    }
    xhr.open('GET', 'client.json?id=100', true);
    xhr.send();
}
