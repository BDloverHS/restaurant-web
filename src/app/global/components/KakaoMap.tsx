'use client'

import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { CommonType } from '../types/StyledType'

const StyledMap = styled.div<CommonType>`
  height: 350px;
  margin-bottom: 50px;
`

type Props = {
  center: any
  locations: any[]
  pan?: any
}

const KakaoMap = ({center, locations, pan}:Props) => {
  const mapRef = useRef<any>(undefined)
  const mContainer = mapRef<any>(undefined)

  useEffect(() => {
    if (mapRef) {
      
        mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 5, // 지도의 확대 레벨
        }

      const map = new window.kakao.maps.Map(mapContainer, mapOption)
      mapContainer.current

      const locations = [
        {
          lat: 33.450701,
          lng: 126.570667,
          category: '한식',
          name: '식당명',
          address: '주소',
        },
      ]
      for (const loc of locations)[] {
        const marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(loc.lat, loc.lng),
        })

        const windowHTML = `<div class='info-window'>
          <div class='row'>식당 종류 : ${loc.category}</div>
          <div class='row'>식당 이름 : ${name}</div>
          <div class='row'>식당 주소 : ${loc.address}</div>
        </div>`

        const infoWindow = new window.kakao.maps.InfoWindow({
          position,
          content: wiondowHTML,
        })

        window.kakao.maps.event.addListener(marker, click)

        infoWindow.open(map, marker)

        marker.setMap(map)
      }
    }
  }, [mapRef])

  return <div ref={mapRef} style={{ height: 350 }}></div>
}

export default React.memo(KakaoMap)
