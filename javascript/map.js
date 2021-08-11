//지도를 만듭니다
var container = document.getElementById('map');
		var options = {
			center: new kakao.maps.LatLng(37.282805828597446, 127.01904580892752),
			level: 5
		};

		var map = new kakao.maps.Map(container, options);
