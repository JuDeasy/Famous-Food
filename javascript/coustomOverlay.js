//커스텀어레이를 만듭니다
    var 데이터 = [
        {lat:37.28274957269953, lng:127.01777215587882,place:'<div class="seeker" style="padding:5px">카페 초안</div>'},
        {lat:37.27999728059638, lng:127.01822191857855,place:'<div class="seeker" style="padding:5px">진미통닭</div>'},
        {lat:37.28804896891714, lng:127.01369200017918,place:'<div class="seeker" style="padding:5px">정지영커피로스터즈</div>'},
        {lat:37.28571686278892, lng:127.01395184236323,place:'<div class="seeker" style="padding:5px">존앤진</div>'},
        {lat:37.28493998548241, lng:127.01152784264205,place:'<div class="seeker" style="padding:5px">운멜로</div>'}   
        ]

        for(var i=0;i<데이터.length;i++){
            // 마커가 표시될 위치입니다 
            var markerPosition  = new kakao.maps.LatLng(데이터[i].lat,데이터[i].lng); 
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                position: markerPosition,
                clickable: true
            })
            marker.setMap(map);
    
            //클릭한 마커의 좌표값을 불러옵니다
            kakao.maps.event.addListener(marker, 'click', function(){
            const position = this.getPosition();
            
            //데이터 Array에서 인덱스값을 가져옵니다
            const arrayNumber = 데이터.findIndex(ei => ei.lat === position.Ma);

            const storeDetail = document.querySelector(".storeDetail");
            var newMarkerPosition  = new kakao.maps.LatLng(데이터[arrayNumber].lat,데이터[arrayNumber].lng);
    
            //클릭한 마커값과 인덱스값을 비교합니다
            if(position.La === newMarkerPosition.La){
                storeDetail.innerHTML ="<iframe class=\"sample\" style=\"width:100%; height: 98%;\"src=\"/pages/ex"+`${arrayNumber}`+".html\"></iframe>";
            } else{
                storeDetail.innerHTML ="<iframe class=\"sample\" style=\"width:100%; height: 98%;\"src=\"/pages/sidbar.html\"></iframe>";
            }                
                    
            var iwContent = 데이터[arrayNumber].place;
            var customOverlay = new kakao.maps.CustomOverlay({
            position: position,
            content: '<div class ="label"><span class="left"></span><span class="center">' + iwContent + '<button class="button1" onclick="">❌</button></span><span class="right"></span></div><div><a href="ex.html" target="_blank" class="link"></a></div>'
            })
            customOverlay.setMap(map);
            
            //지도, 마커 클릭 시 커스텀오버레이가 사라집니다
            kakao.maps.event.addListener(map, 'click', function(){
            customOverlay.setMap(null);
            storeDetail.innerHTML ="<iframe class=\"sample\" style=\"width:100%; height: 98%;\"src=\"/pages/sidbar.html\"></iframe>";
            });
            });
        };

export {데이터};
