function crearMapa(lat, lon){

    var map = L.map('map', {zoomControl: false}).setView([lat, lon], 13);
     
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     }).addTo(map);
     
    L.marker([lat, lon]).addTo(map)
    .bindPopup('tas por aqui, fijate bien')
    .openPopup();
    var circle = L.circle([lat, lon], {
        color: 'red',
        fillColor: '#f04',
        fillOpacity: 0.5,
        radius: 200
    }).addTo(map);
 }

function exito(posicion) {
    console.log (posicion)

    const {latitude, longitude, accuracy} = posicion.coords;
    const {timeStamp} = posicion;

    crearMapa(latitude, longitude);
}

function error(error) {
    console.log(error); 
}

const opciones = {
    enableHighAccuracy: true, 
    timeout: 5000, 
    maximumAge: 0 
};

navigator.geolocation.getCurrentPosition(exito, error, opciones);