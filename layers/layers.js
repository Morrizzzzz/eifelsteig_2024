var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_tracks_1 = new ol.format.GeoJSON();
var features_tracks_1 = format_tracks_1.readFeatures(json_tracks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tracks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tracks_1.addFeatures(features_tracks_1);
var lyr_tracks_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tracks_1, 
                style: style_tracks_1,
                popuplayertitle: "tracks",
                interactive: true,
                    title: '<img src="styles/legend/tracks_1.png" /> tracks'
                });
var format_tracks_2 = new ol.format.GeoJSON();
var features_tracks_2 = format_tracks_2.readFeatures(json_tracks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tracks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tracks_2.addFeatures(features_tracks_2);
var lyr_tracks_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tracks_2, 
                style: style_tracks_2,
                popuplayertitle: "tracks",
                interactive: true,
                    title: '<img src="styles/legend/tracks_2.png" /> tracks'
                });
var format_tracks_3 = new ol.format.GeoJSON();
var features_tracks_3 = format_tracks_3.readFeatures(json_tracks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tracks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tracks_3.addFeatures(features_tracks_3);
var lyr_tracks_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tracks_3, 
                style: style_tracks_3,
                popuplayertitle: "tracks",
                interactive: true,
                    title: '<img src="styles/legend/tracks_3.png" /> tracks'
                });
var format_tracks_4 = new ol.format.GeoJSON();
var features_tracks_4 = format_tracks_4.readFeatures(json_tracks_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tracks_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tracks_4.addFeatures(features_tracks_4);
var lyr_tracks_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tracks_4, 
                style: style_tracks_4,
                popuplayertitle: "tracks",
                interactive: true,
                    title: '<img src="styles/legend/tracks_4.png" /> tracks'
                });
var format_tracks_5 = new ol.format.GeoJSON();
var features_tracks_5 = format_tracks_5.readFeatures(json_tracks_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tracks_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tracks_5.addFeatures(features_tracks_5);
var lyr_tracks_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tracks_5, 
                style: style_tracks_5,
                popuplayertitle: "tracks",
                interactive: true,
                    title: '<img src="styles/legend/tracks_5.png" /> tracks'
                });
var format_tracks_6 = new ol.format.GeoJSON();
var features_tracks_6 = format_tracks_6.readFeatures(json_tracks_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tracks_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tracks_6.addFeatures(features_tracks_6);
var lyr_tracks_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tracks_6, 
                style: style_tracks_6,
                popuplayertitle: "tracks",
                interactive: true,
                    title: '<img src="styles/legend/tracks_6.png" /> tracks'
                });
var format_tracks_7 = new ol.format.GeoJSON();
var features_tracks_7 = format_tracks_7.readFeatures(json_tracks_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tracks_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tracks_7.addFeatures(features_tracks_7);
var lyr_tracks_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tracks_7, 
                style: style_tracks_7,
                popuplayertitle: "tracks",
                interactive: true,
                    title: '<img src="styles/legend/tracks_7.png" /> tracks'
                });
var format_tracks_8 = new ol.format.GeoJSON();
var features_tracks_8 = format_tracks_8.readFeatures(json_tracks_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tracks_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tracks_8.addFeatures(features_tracks_8);
var lyr_tracks_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tracks_8, 
                style: style_tracks_8,
                popuplayertitle: "tracks",
                interactive: true,
                    title: '<img src="styles/legend/tracks_8.png" /> tracks'
                });
var format_tracks_9 = new ol.format.GeoJSON();
var features_tracks_9 = format_tracks_9.readFeatures(json_tracks_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tracks_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tracks_9.addFeatures(features_tracks_9);
var lyr_tracks_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tracks_9, 
                style: style_tracks_9,
                popuplayertitle: "tracks",
                interactive: true,
                    title: '<img src="styles/legend/tracks_9.png" /> tracks'
                });
var format_tracks_10 = new ol.format.GeoJSON();
var features_tracks_10 = format_tracks_10.readFeatures(json_tracks_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tracks_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tracks_10.addFeatures(features_tracks_10);
var lyr_tracks_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tracks_10, 
                style: style_tracks_10,
                popuplayertitle: "tracks",
                interactive: true,
                    title: '<img src="styles/legend/tracks_10.png" /> tracks'
                });
var format_tracks_11 = new ol.format.GeoJSON();
var features_tracks_11 = format_tracks_11.readFeatures(json_tracks_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tracks_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tracks_11.addFeatures(features_tracks_11);
var lyr_tracks_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tracks_11, 
                style: style_tracks_11,
                popuplayertitle: "tracks",
                interactive: true,
                    title: '<img src="styles/legend/tracks_11.png" /> tracks'
                });
var format_tracks_12 = new ol.format.GeoJSON();
var features_tracks_12 = format_tracks_12.readFeatures(json_tracks_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tracks_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tracks_12.addFeatures(features_tracks_12);
var lyr_tracks_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tracks_12, 
                style: style_tracks_12,
                popuplayertitle: "tracks",
                interactive: true,
                    title: '<img src="styles/legend/tracks_12.png" /> tracks'
                });
var format_tracks_13 = new ol.format.GeoJSON();
var features_tracks_13 = format_tracks_13.readFeatures(json_tracks_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tracks_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tracks_13.addFeatures(features_tracks_13);
var lyr_tracks_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tracks_13, 
                style: style_tracks_13,
                popuplayertitle: "tracks",
                interactive: true,
                    title: '<img src="styles/legend/tracks_13.png" /> tracks'
                });
var format_tracks_14 = new ol.format.GeoJSON();
var features_tracks_14 = format_tracks_14.readFeatures(json_tracks_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tracks_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tracks_14.addFeatures(features_tracks_14);
var lyr_tracks_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tracks_14, 
                style: style_tracks_14,
                popuplayertitle: "tracks",
                interactive: true,
                    title: '<img src="styles/legend/tracks_14.png" /> tracks'
                });
var format_tracks_15 = new ol.format.GeoJSON();
var features_tracks_15 = format_tracks_15.readFeatures(json_tracks_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tracks_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tracks_15.addFeatures(features_tracks_15);
var lyr_tracks_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tracks_15, 
                style: style_tracks_15,
                popuplayertitle: "tracks",
                interactive: true,
                    title: '<img src="styles/legend/tracks_15.png" /> tracks'
                });
var format_overzicht_reis_16 = new ol.format.GeoJSON();
var features_overzicht_reis_16 = format_overzicht_reis_16.readFeatures(json_overzicht_reis_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_overzicht_reis_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_overzicht_reis_16.addFeatures(features_overzicht_reis_16);
var lyr_overzicht_reis_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_overzicht_reis_16, 
                style: style_overzicht_reis_16,
                popuplayertitle: "overzicht_reis",
                interactive: true,
                    title: '<img src="styles/legend/overzicht_reis_16.png" /> overzicht_reis'
                });
var format_pick_up_17 = new ol.format.GeoJSON();
var features_pick_up_17 = format_pick_up_17.readFeatures(json_pick_up_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pick_up_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pick_up_17.addFeatures(features_pick_up_17);
var lyr_pick_up_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pick_up_17, 
                style: style_pick_up_17,
                popuplayertitle: "pick_up",
                interactive: true,
                    title: '<img src="styles/legend/pick_up_17.png" /> pick_up'
                });
var group_eifelsteigetappe01kornelimuensterroetgen = new ol.layer.Group({
                                layers: [lyr_tracks_15,],
                                fold: "open",
                                title: "eifelsteig-etappe-01-kornelimuenster-roetgen"});
var group_eifelsteigetappe02roetgenmonschau = new ol.layer.Group({
                                layers: [lyr_tracks_14,],
                                fold: "open",
                                title: "eifelsteig-etappe-02-roetgen-monschau"});
var group_eifelsteigetappe03monschaueinruhr = new ol.layer.Group({
                                layers: [lyr_tracks_13,],
                                fold: "open",
                                title: "eifelsteig-etappe-03-monschau-einruhr"});
var group_eifelsteigetappe04einruhrgemuend = new ol.layer.Group({
                                layers: [lyr_tracks_12,],
                                fold: "open",
                                title: "eifelsteig-etappe-04-einruhr-gemuend"});
var group_eifelsteigetappe05 = new ol.layer.Group({
                                layers: [lyr_tracks_11,],
                                fold: "open",
                                title: "eifelsteig-etappe-05"});
var group_eifelsteigetappe06klostersteinfeldblankenheim = new ol.layer.Group({
                                layers: [lyr_tracks_10,],
                                fold: "open",
                                title: "eifelsteig-etappe-06-kloster-steinfeld-blankenheim"});
var group_eifelsteigetappe07blankenheimmirbach = new ol.layer.Group({
                                layers: [lyr_tracks_9,],
                                fold: "open",
                                title: "eifelsteig-etappe-07-blankenheim-mirbach"});
var group_eifelsteigetappe08mirbachhillesheim = new ol.layer.Group({
                                layers: [lyr_tracks_8,],
                                fold: "open",
                                title: "eifelsteig-etappe-08-mirbach-hillesheim"});
var group_eifelsteigetappe091 = new ol.layer.Group({
                                layers: [lyr_tracks_7,],
                                fold: "open",
                                title: "eifelsteig-etappe-09-1"});
var group_eifelsteigetappe10gerolsteindaun = new ol.layer.Group({
                                layers: [lyr_tracks_6,],
                                fold: "open",
                                title: "eifelsteig-etappe-10-gerolstein-daun"});
var group_eifelsteigetappe11daunmanderscheid = new ol.layer.Group({
                                layers: [lyr_tracks_5,],
                                fold: "open",
                                title: "eifelsteig-etappe-11-daun-manderscheid"});
var group_eifelsteigetappe12manderscheidhimmerod = new ol.layer.Group({
                                layers: [lyr_tracks_4,],
                                fold: "open",
                                title: "eifelsteig-etappe-12-manderscheid-himmerod"});
var group_eifelsteigetappe13klosterhimmerodbruch = new ol.layer.Group({
                                layers: [lyr_tracks_3,],
                                fold: "open",
                                title: "eifelsteig-etappe-13-kloster-himmerod-bruch"});
var group_eifelsteigetappe14bruchkordel = new ol.layer.Group({
                                layers: [lyr_tracks_2,],
                                fold: "open",
                                title: "eifelsteig-etappe-14-bruch-kordel"});
var group_eifelsteigetappe15kordeltrier = new ol.layer.Group({
                                layers: [lyr_tracks_1,],
                                fold: "open",
                                title: "eifelsteig-etappe-15-kordel-trier"});

lyr_OpenStreetMap_0.setVisible(true);lyr_tracks_1.setVisible(true);lyr_tracks_2.setVisible(true);lyr_tracks_3.setVisible(true);lyr_tracks_4.setVisible(true);lyr_tracks_5.setVisible(true);lyr_tracks_6.setVisible(true);lyr_tracks_7.setVisible(true);lyr_tracks_8.setVisible(true);lyr_tracks_9.setVisible(true);lyr_tracks_10.setVisible(true);lyr_tracks_11.setVisible(true);lyr_tracks_12.setVisible(true);lyr_tracks_13.setVisible(true);lyr_tracks_14.setVisible(true);lyr_tracks_15.setVisible(true);lyr_overzicht_reis_16.setVisible(true);lyr_pick_up_17.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_eifelsteigetappe15kordeltrier,group_eifelsteigetappe14bruchkordel,group_eifelsteigetappe13klosterhimmerodbruch,group_eifelsteigetappe12manderscheidhimmerod,group_eifelsteigetappe11daunmanderscheid,group_eifelsteigetappe10gerolsteindaun,group_eifelsteigetappe091,group_eifelsteigetappe08mirbachhillesheim,group_eifelsteigetappe07blankenheimmirbach,group_eifelsteigetappe06klostersteinfeldblankenheim,group_eifelsteigetappe05,group_eifelsteigetappe04einruhrgemuend,group_eifelsteigetappe03monschaueinruhr,group_eifelsteigetappe02roetgenmonschau,group_eifelsteigetappe01kornelimuensterroetgen,lyr_overzicht_reis_16,lyr_pick_up_17];
lyr_tracks_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_tracks_2.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_tracks_3.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_tracks_4.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_tracks_5.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_tracks_6.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_tracks_7.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_tracks_8.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_tracks_9.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_tracks_10.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_tracks_11.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_tracks_12.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_tracks_13.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_tracks_14.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_tracks_15.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_overzicht_reis_16.set('fieldAliases', {'Dag': 'Dag', 'Aankomst': 'Aankomst', 'Vertrek': 'Vertrek', 'Naam': 'Naam', 'Y': 'Y', 'X': 'X', });
lyr_pick_up_17.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_tracks_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_tracks_2.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_tracks_3.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_tracks_4.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_tracks_5.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_tracks_6.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_tracks_7.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_tracks_8.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_tracks_9.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_tracks_10.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_tracks_11.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_tracks_12.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_tracks_13.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_tracks_14.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_tracks_15.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_overzicht_reis_16.set('fieldImages', {'Dag': 'Range', 'Aankomst': 'TextEdit', 'Vertrek': 'TextEdit', 'Naam': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_pick_up_17.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_tracks_1.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_tracks_2.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_tracks_3.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_tracks_4.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_tracks_5.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_tracks_6.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_tracks_7.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_tracks_8.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_tracks_9.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_tracks_10.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_tracks_11.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_tracks_12.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_tracks_13.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_tracks_14.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_tracks_15.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_overzicht_reis_16.set('fieldLabels', {'Dag': 'no label', 'Aankomst': 'no label', 'Vertrek': 'no label', 'Naam': 'no label', 'Y': 'no label', 'X': 'no label', });
lyr_pick_up_17.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_pick_up_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});