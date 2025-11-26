var geo = navigator.geolocation;

const pontos = [
    [-86.8523001, 21.185825],
    [-158.045241, 21.308769],
    [-42.0129285, -22.9877924],
    [-39.0481068, -16.407923],
];

geo.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;

    console.log('Latitude:', latitude);
    console.log('Longitude:', longitude);

    // Criar mapa
    const map = new ol.Map({
        target: 'mapa',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([longitude, latitude]),
            zoom: 5
        })
    });

    // ✅ Criar múltiplos pontos corretamente
    const features = pontos.map(coord => {
        const ponto = new ol.Feature({
            geometry: new ol.geom.Point(
                ol.proj.fromLonLat(coord)
            )
        });

        ponto.setStyle(new ol.style.Style({
            image: new ol.style.Circle({
                radius: 7,
                fill: new ol.style.Fill({ color: 'red' }),
                stroke: new ol.style.Stroke({ color: 'white', width: 2 })
            })
        }));

        return ponto; // ✅ ESSENCIAL
    });

    // ✅ Criar camada vetorial
    const camada = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: features
        })
    });

    // ✅ Adicionar camada ao mapa
    map.addLayer(camada);
});
