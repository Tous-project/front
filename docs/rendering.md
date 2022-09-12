# geojson 데이터를 활용한 지도 렌더링

## 준비

### 지도 데이터

> [GIS Developer](http://www.gisdeveloper.co.kr/?p=2332) 대한민국 최신 행정구역 파일을 제공하는 사이트
>
> [Mapshaper](https://mapshaper.org/) SHP 파일을 geojson 형태로 변환해주는 사이트
>
> [geojson.io](http://geojson.io/) geojson 파일을 지도 형태로 렌더링해주는 사이트

1. GIS Developer 사이트에서 지도 데이터 다운로드
2. 압축 해제 후 mapshaper로 import (.dbf, .prj, .shp, .shx 파일 한번에 import해야됨)
    - detect line intersections, snap vertices 옵션 체크 (지도 데이터의 오류 제거)
    - 기본적으로 GIS Developer 사이트에서 제공되는 데이터는 euc-kr로 인코딩되어 있기 떄문에 import optinon에 `encoding=euc-kr`을 추가로 입력
3. 지도 데이터 경량화
    - 상단 메뉴에서 Simplify 선택
    - Visvalingam/weighted area 선택
    - apply 후 상단의 퍼센티지를 적절히 조정하여 지도 데이터 경량화 (퍼센티지가 높을수록 모양이 선명해지고 그리기 위한 좌표가 많아짐)
    - 좌측 상단의 intersection 알림의 x 표시를 클릭하여 제거
4. 좌표계 변경
    - 상단의 console 선택
    - `-proj wgs84` 입력
5. json 파일로 export
    - 상단의 export 선택
    - geojson 선택
    - command line options에 `encoding=utf-8` 입력
6. 데이터 검증
    - geojson.io에 접속하여 다운받은 json 파일을 import하여 지도 데이터가 제대로 export됐는지 확인

## 렌더링

- react-leaflet을 사용하여 지도 데이터를 렌더링
- src.pages.Map.tsx 파일에 렌더링을 위한 간단한 template 코드가 존재
