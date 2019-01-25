{
    let points = [];
    let lines = new L.polyline(points);
    let tempLines = new L.polyline([], {dashArray:5});
    let polyline = null;

    function drawLine(map) {
        if (map) {
            backMap();
            map.on('click', onClick);
            map.on('dblclick', onDoubleClick);
            map.on('mousemove', onMove);
        }
    }

    function onClick(e) {
        points.push([e.latlng.lat, e.latlng.lng]);
        lines.addLatLng(e.latlng);
        map.addLayer(lines);
    }

    function onMove(e) {
        if (points.length > 0) {
            tempLines.setLatLngs([points[points.length - 1], [e.latlng.lat, e.latlng.lng]]);
            map.addLayer(tempLines)
        }
    }

    function onDoubleClick(e) {
        removeLine();
        polyline = L.polyline(points);
        map.addLayer(polyline);
        lines.remove();
        tempLines.remove();
        points = [];
        lines = new L.polyline(points);
    }

    function removeLine() {
        if (polyline) {
            map.removeLayer(tempLines);
            map.removeLayer(polyline);
        }
    }
}