//더 이상 사용되지 않습니다
// 마커가 표시될 위치입니다 
var markerPosition1  = new kakao.maps.LatLng(37.282805828597446, 127.01904580892752);
var markerPosition2  = new kakao.maps.LatLng(37.28260780150065, 127.01774897852316);
// 마커를 생성합니다
var marker1 = new kakao.maps.Marker({
    position: markerPosition1,
	clickable: true
});
var marker2 = new kakao.maps.Marker({
    position: markerPosition2,
	clickable: true
}); 
// 마커가 지도 위에 표시되도록 설정합니다
marker1.setMap(map);
marker2.setMap(map);


marker1.addListener("click", function(e){
    console.dir(e);
})

///////////////////////

// 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
var iwContent = '<div style="padding:5px;">수원화성박물관</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
var cafeCho = '<div style="padding:5px;">카페 초안</div>',
	iwRemoveable = true;
// 인포윈도우를 생성합니다
var infowindow1 = new kakao.maps.InfoWindow({
    content : iwContent,
    removable : iwRemoveable
});
var infowindow2 = new kakao.maps.InfoWindow({
    content : cafeCho,
    removable : iwRemoveable
});
// 마커에 클릭이벤트를 등록합니다
kakao.maps.event.addListener(marker1, 'click', function() {
      // 마커 위에 인포윈도우를 표시합니다
      infowindow1.open(map, marker1);
	document.querySelector('iframe').classList.toggle('hidden');
});
kakao.maps.event.addListener(marker2, 'click', function() {
	// 마커 위에 인포윈도우를 표시합니다
	infowindow2.open(map, marker2);
});