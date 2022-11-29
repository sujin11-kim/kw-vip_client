import axios from "axios";
import { useState, useEffect } from 'react';
import geojson from '../HangJeongDong_ver20220701';
const { kakao } = window;

function paintMap(local_to_paint)
{
    console.log(local_to_paint)
    let geo_data = geojson.features;
    let coordinates=[];
    let local_name='';
    let polygons=[];

    const map=document.getElementById('pollution-map');
    const paint=(coordinates)=>{
        let path=[];
        let points=[];

        coordinates[0][0].forEach((coordinate) => {
            let point = {};
            point.x = coordinate[1];
            point.y = coordinate[0];
            points.push(point);
            path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));
        });

        let polygon = new kakao.maps.Polygon({
            map: map,
            path: path, // 그려질 다각형의 좌표 배열입니다
            strokeWeight: 2, // 선의 두께입니다
            strokeColor: '#004c80', // 선의 색깔입니다
            strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid', // 선의 스타일입니다
            fillColor: '#fff', // 채우기 색깔입니다
            fillOpacity: 0.7, // 채우기 불투명도 입니다
        });
        
        console.log('2');
        polygons.push(polygon);
        polygon.setMap(map);
    }

    geo_data.forEach((val)=>{
    coordinates=val.geometry.coordinates;
    local_name=val.properties.adm_nm;

    if(local_name===local_to_paint)
    {
        console.log('hi');
        paint(coordinates);
    }
    })
}

export default paintMap;