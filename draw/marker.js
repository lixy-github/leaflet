{
    let marker = null;

    function drawMarker(map) {
        if (map) {
            backMap();
            map.on("click", clickMarker);
        }
    }

    function clickMarker(e) {
        removeMarker();
        marker = L.marker(e.latlng);
        map.addLayer(marker);
    }

    function removeMarker() {
        if (marker) {
            map.removeLayer(marker);
        }
    }
}