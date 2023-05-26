var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid ',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_fasilitasumum_all_1 = new ol.format.GeoJSON();
var features_fasilitasumum_all_1 = format_fasilitasumum_all_1.readFeatures(json_fasilitasumum_all_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fasilitasumum_all_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fasilitasumum_all_1.addFeatures(features_fasilitasumum_all_1);
var lyr_fasilitasumum_all_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fasilitasumum_all_1, 
                style: style_fasilitasumum_all_1,
                interactive: true,
                title: '<img src="styles/legend/fasilitasumum_all_1.png" /> fasilitasumum_all'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_fasilitasumum_all_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_fasilitasumum_all_1];
lyr_fasilitasumum_all_1.set('fieldAliases', {'nama_fasum': 'nama_fasum', 'jenis': 'jenis', 'kategori': 'kategori', 'nama_foto': 'nama_foto', 'link_foto': 'link_foto', 'namaobj': 'namaobj', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'namobj': 'namobj', 'keterangan': 'keterangan', 'desa': 'desa', 'name': 'name', 'descriptio': 'descriptio', 'latitude': 'latitude', 'longitude': 'longitude', 'lat': 'lat', 'long': 'long', 'id': 'id', 'jnsrth': 'jnsrth', 'tipfsu': 'tipfsu', 'nama_fas_1': 'nama_fas_1', 'time': 'time', 'layer': 'layer', 'path': 'path', });
lyr_fasilitasumum_all_1.set('fieldImages', {'nama_fasum': 'TextEdit', 'jenis': 'TextEdit', 'kategori': 'TextEdit', 'nama_foto': 'TextEdit', 'link_foto': 'TextEdit', 'namaobj': 'TextEdit', 'fcode': 'TextEdit', 'remark': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'namobj': 'TextEdit', 'keterangan': 'TextEdit', 'desa': 'TextEdit', 'name': 'TextEdit', 'descriptio': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'id': 'TextEdit', 'jnsrth': 'TextEdit', 'tipfsu': 'TextEdit', 'nama_fas_1': 'TextEdit', 'time': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_fasilitasumum_all_1.set('fieldLabels', {'nama_fasum': 'no label', 'jenis': 'no label', 'kategori': 'no label', 'nama_foto': 'no label', 'link_foto': 'no label', 'namaobj': 'no label', 'fcode': 'no label', 'remark': 'no label', 'metadata': 'no label', 'srs_id': 'no label', 'namobj': 'no label', 'keterangan': 'no label', 'desa': 'no label', 'name': 'no label', 'descriptio': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'lat': 'no label', 'long': 'no label', 'id': 'no label', 'jnsrth': 'no label', 'tipfsu': 'no label', 'nama_fas_1': 'no label', 'time': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_fasilitasumum_all_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});