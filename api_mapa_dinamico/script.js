// Array [local, latitude, longitude]

destinos = [
    [
        "Cancún, México",
        21.185825728408798,
        -86.85230016459138
    ]
    ,
    [
        "Hawaii, EUA",
        21.308769168988754,
        -158.04524147166748,
    ],
    [
        "Arraial do Cabo, Brasil",
        -22.9877924209166,
        -42.01292851426791
    ],
    [
        "Porto Seguro, Brasil",
        -16.40792362872437,
        -39.048106898973074
    ]
];

for(i = 0; i < destinos.length; i++) {
    var map = new ol.Map({
        target: 'destino-' + (i + 1),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([
                destinos[i][2],
                destinos[i][1]
            ]),
            zoom: 11
        })
    });
}