{
    let rectangle = null;
    let tmprect = null;
    let latlngs = [];

    function drawRect(map) {
        if (map) {
            backMap();
            map.on('mousedown', mousedownRect);
            map.on('mouseup', mouseupRect);
        }
    }

    function mousedownRect(e) {
        map.on('mousemove', mousemoveRect);
        //左上角坐标
        latlngs[0] = [e.latlng.lat, e.latlng.lng];
    }

    function mousemoveRect(e) {
        map.dragging.disable();
        if (tmprect) {
            tmprect.remove();
        }
        latlngs[1] = [e.latlng.lat, e.latlng.lng];
        tmprect = L.rectangle(latlngs, {dashArray:5})
        map.addLayer(tmprect)
    }

    function mouseupRect(e) {
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
}