var geo = navigator.geolocation;

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
            zoom: 15
        })
    });

    // Criar ponto
    const ponto = new ol.Feature({
        geometry: new ol.geom.Point(
            ol.proj.fromLonLat([longitude, latitude])
        )
    });

    // Estilo correto do ponto
    ponto.setStyle(new ol.style.Style({
        image: new ol.style.Circle({
            radius: 7,
            fill: new ol.style.Fill({ color: 'red' }),
            stroke: new ol.style.Stroke({ color: 'white', width: 2 })
        })
    }));

    // Criar camada vetorial
    const camada = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [ponto]
        })
    });

    // ✅ Adicionar camada ao mapa
    map.addLayer(camada);
});
