{
    let i = null; // 圆心
    let r = 0; // 半径
    let tempCircle = new L.circle();
    let circle = null;
    let circleOption = {
        weight: 2,
        color:'#ff0000',
        fillColor:'#ff0000',
        fillOpacity:0.2
    }

    function drawCircle(map) {
        if (map) {
            backMap();
            map.on("mousedown", mousedownCircle);
            map.on("mousemove", mousemoveCircle);
            map.on("mouseup", mouseupCircle);
        }
    }

    function mousedownCircle(e) {
        i = L.latLng(e.latlng);
    }

    function mousemoveCircle(e) {
        if (i) {
            map.dragging.disable();
            r = L.latLng(e.latlng).distanceTo(i)
            tempCircle.setLatLng(i)
            tempCircle.setRadius(r)
            tempCircle.setStyle(circleOption)
            map.addLayer(tempCircle);
        }
    }

    function mouseupCircle(e) {
        removeCircle();
        if (i) {
            r = L.latLng(e.latlng).distanceTo(i);
            circle = L.circle(i, circleOption);
            circle.setRadius(r);
            map.addLayer(circle);
            i = null;   
            r = 0;
            map.dragging.enable();
            // console.log(circle.getRadius())
            // console.log(circle.getLatLng())
        }
    }

    function removeCircle() {
        if (circle) {
            map.removeLayer(tempCircle);
            map.removeLayer(circle);         //  方法一
            // circle.remove();              //  方法二
        }
    }
}