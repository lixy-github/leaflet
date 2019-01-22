//地图服务提供商
const LTMSProviders = L.TileLayer.extend({

    initialize: function (type, options) {
        let provider = LTMSProviders.provider;

        let parts = type.split('.');

        let providerName = parts[0];
        let mapName = parts[1];
        let mapType = parts[2];
        let url = provider[providerName][mapName][mapType];

        L.TileLayer.prototype.initialize.call(this, url, L.extend(options, provider[providerName].Options));
    }
})

LTMSProviders.provider = {
    TianDiTu: {
        Normal: {
            Map: "http://t{s}.tianditu.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}",
            Annotion: "http://t{s}.tianditu.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}"
        },
        Satellite: {
            Map: "http://t{s}.tianditu.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}",
            Annotion: "http://t{s}.tianditu.cn/DataServer?T=cia_w&X={x}&Y={y}&L={z}"
        },
        Terrain: {
            Map: "http://t{s}.tianditu.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}",
            Annotion: "http://t{s}.tianditu.cn/DataServer?T=cta_w&X={x}&Y={y}&L={z}"
        },
        Options: {
            subdomains: '01234567',
            tms: false
        }
    },

    GaoDe: {
        Normal: {
            Map: 'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
        },
        Satellite: {
            Map: 'http://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
            Annotion: 'http://webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}'
        },
        Options: {
            subdomains: '1234',
            tms: false
        }
    },

    QQ: {
        Normal: {
            Map: "http://rt{s}.map.gtimg.com/realtimerender?z={z}&x={x}&y={y}&type=vector&style=0"
        },
        Satellite: {
            Map: "http://p{s}.map.gtimg.com/sateTiles/{z}/{x16}/{y16}/{x}_{y}.jpg",
            Annotion: "http://rt1.map.gtimg.com/tile?z={z}&x={x}&y={y}&type=vector&styleid=3&version=263"
        },
        Options: {
            subdomains: '0123',
            tms: true
        }
    },

    Google: {
        Normal: {
            Map: "http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
        },
        Satellite: {
            Map: "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
        },
        Options: {
            tms: false
        }
    },

    Geoq: {
        Normal: {
            Map: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}",
            Color: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetColor/MapServer/tile/{z}/{y}/{x}",
            PurplishBlue: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
            Gray: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}",
            Warm: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}",
            Cold: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetCold/MapServer/tile/{z}/{y}/{x}"
        },
        Options: {
            tms: false
        }
    }
}

const LMapTMS = function (type, options) {
    return new LTMSProviders(type, options)
}