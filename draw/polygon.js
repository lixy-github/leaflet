{
    let points=[];
    let lines = new L.polyline([]);
    let dashLins = new L.polyline([],{dashArray:5});
    let polygon = null;

    // 绘制多边形
    function makePolygon(map) {
        if (map) {
            backMap();
            map.on('click', onClick);    //点击地图
            map.on('dblclick',onDoubleClick); // 双击地图
            map.on('mousemove',onMove); 
        }
    }

    // 清除多边形
    function clearPolygon() {
        if (polygon) {
            map.removeLayer(polygon)
        }
    }

    function onClick(e) {
        points.push([e.latlng.lat,e.latlng.lng]);
        lines.addLatLng(e.latlng);
        // map.addLayer(dashLins);
        map.addLayer(lines);
    }

    function onMove(e) {
        if(points.length>0) {
            dashLins.setLatLngs([points[points.length-1],[e.latlng.lat,e.latlng.lng],points[0]]);
            map.addLayer(dashLins);
        }
    }

    function onDoubleClick(e) {
        clearPolygon();
        polygon = L.polygon(points);
        map.addLayer(polygon)
        // map.removeLayer(dashLins)
        // map.removeLayer(lines)
        lines.remove();
        dashLins.remove();
        points = [];
        lines = new L.polyline([]);
    }
}