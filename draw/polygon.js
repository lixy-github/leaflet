{
    let points=[];
    let lines = new L.polyline([]);
    let dashLins = new L.polyline([],{dashArray:5});
    let polygon = null;

    // 绘制多边形
    function makePolygon(map) {
        if (map) {
            backMap();
            map.on('click', clickPolygon);    //点击地图
            map.on('dblclick',dblclickPolygon); // 双击地图
            map.on('mousemove',movePolygon); 
        }
    }

    // 清除多边形
    function clearPolygon() {
        if (polygon) {
            map.removeLayer(polygon)
        }
    }

    function clickPolygon(e) {
        points.push([e.latlng.lat,e.latlng.lng]);
        lines.addLatLng(e.latlng);
        // map.addLayer(dashLins);
        map.addLayer(lines);
    }

    function movePolygon(e) {
        if(points.length>0) {
            dashLins.setLatLngs([points[points.length-1],[e.latlng.lat,e.latlng.lng],points[0]]);
            map.addLayer(dashLins);
        }
    }

    function dblclickPolygon(e) {
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