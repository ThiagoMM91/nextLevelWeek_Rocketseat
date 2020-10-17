//Create map
const map = L.map('mapid').setView([-27.2223905,-49.6408755], 15)

//Create Tile Layer
L
.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map)

//Create Icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2],
})

//create popup Overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das Meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>');



//Create + Add Marker
L
.marker([-27.2223905,-49.6408755], { icon })
.addTo(map)
.bindPopup(popup)