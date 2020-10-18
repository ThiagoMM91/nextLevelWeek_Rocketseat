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
})

let marker;

//Create + Add Marker
map.on('click', (event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.getQuerySelector('[name=lat]').value = lat;
    document.getQuerySelector('[name=lng]').value = lng;

    // remove previous icon
    marker && map.removeLayer(marker)

    // add icon Layer
    marker = L.marker ([lat, lng], { icon })
    .addTo(map)

});

//add Photo Field >
function addPhotoField(){
    // catch photo container #images
    const container = document.querySelector('#images')
    // Get  container to dupe .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // clone last image added
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    
    //verify is field is empty, if so, dont add container
    const input = newFieldContainer.children[0] 
    if (input.value == ''){
        alert('Campo de Link-Foto Vazio!')
        return 
    }

    //clear field before adding to the image newFieldContainer
    input.value = ''
    
    // add clone to image container
    container.appendChild(newFieldContainer)

}

function deleteField (event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length <= 1) {
        //clear field
        span.parentNode.children[0].value =''
        return
    }

    // del field
    span.parentNode.remove()
}

//select Yes or No at weekend opening Section
function toggleSelect(event) {

    //remove '.active' from all buttons
    document.querySelectorAll('.button-select button')
    .forEach( (button) => button.classList.remove('active'))

    //add '.active' class to the
    const button = event.currentTarget
    button.classList.add('active');

    //update the 'input hidden' with the desired value
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value
    
}