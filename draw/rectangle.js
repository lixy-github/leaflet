let rectangle = null;
let tmprect = null;
let latlngs = [];

function drawRect(map) {
    if (map) {
        backMap();
        map.on('mousedown', rectMouseDown);
        map.on('mouseup', rectMouseUp);
    }
}

function rectMouseDown(e) {
    map.on('mousemove', rectMouseMove);
    //左上角坐标
    latlngs[0] = [e.latlng.lat, e.latlng.lng];
}

function rectMouseMove(e) {
    map.dragging.disable();
    if (tmprect) {
        tmprect.remove();
    }
    latlngs[1] = [e.latlng.lat, e.latlng.lng];
    tmprect = L.rectangle(latlngs, {dashArray:5})
    map.addLayer(tmprect)
}

function rectMouseUp(e) {
    removeRect();
    map.dragging.enable();
    map.off("mousemove");
    latlngs[1] = [e.latlng.lat, e.latlng.lng];
    rectangle = L.rectangle(latlngs);
    map.addLayer(rectangle);
}

function removeRect() {
    if (rectangle) {
        map.removeLayer(rectangle);
        tmprect.remove();
    }
}