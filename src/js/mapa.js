(function() {
    const lat = -36.8269900;
    const lng = -73.0497700;
    const mapa = L.map('mapa').setView([lat, lng ], 16);
    

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);

    marker = new L.marker([lat,lng],{
        draggable:true,
        autoPan:true
    }).addTo(mapa)

    marker.on('moveend',function(evt){
        marker = evt.target
        const position = marker.getLatLng();
        mapa.panTo(new L.LatLng(position.lat,posicion.lng))
    })

})()