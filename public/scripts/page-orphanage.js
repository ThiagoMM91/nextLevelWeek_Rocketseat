//options.
const options = {   
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}


//Create map
const map = L.map('mapid', options).setView([-27.2223905,-49.6408755], 15)

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

//Create + Add Marker
L
.marker([-27.2223905,-49.6408755], { icon })
.addTo(map)


/* image gallery / Galeria de Imagens */ 
function selectImage(event) {
    const button = event.currentTarget
    //remove all active classes / remover classes ativas.

    const buttons = document.querySelectorAll('.images button')
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }


    //select clicked image. / Selecionar imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img')


    //update the container with the selected image. 
    imageContainer.src = image.src


    // add .active class to the selected buttom
    button.classList.add('active')

    
}
