(function() {
    const lat = -36.8268850;
    const lng = -73.0699700;
    const mapa = L.map('mapa').setView([lat, lng ], 12);
    

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);


})()