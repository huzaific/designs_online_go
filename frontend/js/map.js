var map;
var InforObj = [];
var centerCords = {
	lat: 	58.969975,
	lng: 	5.733107
};

var icons = {
	event: {
	  icon: 'http://127.0.0.1:8000/Frontend/img/icons/marker-vector.png'
	},
	restaurent: {
	  icon: 'http://127.0.0.1:8000/Frontend/img/icons/marker-vector.png'
	}
	
  };

var markersOnMap = [
	{
		imageUrl: 'http://127.0.0.1:8000/Frontend/img/property/property-5.jpg',
		address: '568 E 1st Ave, Miami',
		html: ['<div class="property-item map-property-item"><div class="property-inner"><div class="image"><a href="single-properties.html"><img src="http://127.0.0.1:8000/Frontend/img/property/property-5.jpg" alt=""></a>',
				'<ul class="property-feature"><li><span class="area"><img src="http://127.0.0.1:8000/Frontend/img/icons/area.png" alt="">550 SqFt</span></li>',
				'<li><span class="bed"><img src="http://127.0.0.1:8000/Frontend/img/icons/bed.png" alt="">6</span></li>',
				'<li><span class="bath"><img src="http://127.0.0.1:8000/Frontend/img/icons/bath.png" alt="">4</span></li>',
				'<li><span class="parking"><img src="http://127.0.0.1:8000/Frontend/img/icons/parking.png" alt="">3</span></li></ul></div>',
				'<div class="content"><div class="left"><h3 class="title"><a href="single-properties.html">Azorex de South Villa</a></h3><span class="location"><img src="http://127.0.0.1:8000/Frontend/img/icons/marker.png" alt="">668 L 2nd Ave, Boston</span></div>',
				'<div class="right"><div class="type-wrap"><span class="price">$550<span>M</span></span><span class="type">Booking</span></div></div></div></div></div>',
			].join(''),
		LatLng : [{
			lat: 59.28410590000001,
			lng: 5.308563500000001
		}],
		type : 'event'
	},
	{
		imageUrl: 'http://127.0.0.1:8000/Frontend/img/property/property-1.jpg',
		address: '568 E 1st Ave, Miami',
		html: ['<div class="property-item map-property-item"><div class="property-inner"><div class="image"><a href="single-properties.html"><img src="http://127.0.0.1:8000/Frontend/img/property/property-1.jpg" alt=""></a>',
				'<ul class="property-feature"><li><span class="area"><img src="http://127.0.0.1:8000/Frontend/img/icons/area.png" alt="">550 SqFt</span></li>',
				'<li><span class="bed"><img src="http://127.0.0.1:8000/Frontend/img/icons/bed.png" alt="">6</span></li>',
				'<li><span class="bath"><img src="http://127.0.0.1:8000/Frontend/img/icons/bath.png" alt="">4</span></li>',
				'<li><span class="parking"><img src="http://127.0.0.1:8000/Frontend/img/icons/parking.png" alt="">3</span></li></ul></div>',
				'<div class="content"><div class="left"><h3 class="title"><a href="single-properties.html">Friuli-Venezia Giulia</a></h3><span class="location"><img src="http://127.0.0.1:8000/Frontend/img/icons/marker.png" alt="">568 E 1st Ave, Miami</span></div>',
				'<div class="right"><div class="type-wrap"><span class="price">$550<span>M</span></span><span class="type">Booking</span></div></div></div></div></div>',
			].join(''),

		LatLng : [{
			lat : 59.4198471,
			lng : 5.278645399999999
		}],
		type : 'event'
	},
	{
		imageUrl: 'http://127.0.0.1:8000/Frontend/img/property/property-7.jpg',
		address: '450 E 1st Ave, New Jersey',
		html: ['<div class="property-item map-property-item"><div class="property-inner"><div class="image"><a href="single-properties.html"><img src="http://127.0.0.1:8000/Frontend/img/property/property-7.jpg" alt=""></a>',
				'<ul class="property-feature"><li><span class="area"><img src="http://127.0.0.1:8000/Frontend/img/icons/area.png" alt="">550 SqFt</span></li>',
				'<li><span class="bed"><img src="http://127.0.0.1:8000/Frontend/img/icons/bed.png" alt="">6</span></li>',
				'<li><span class="bath"><img src="http://127.0.0.1:8000/Frontend/img/icons/bath.png" alt="">4</span></li>',
				'<li><span class="parking"><img src="http://127.0.0.1:8000/Frontend/img/icons/parking.png" alt="">3</span></li></ul></div>',
				'<div class="content"><div class="left"><h3 class="title"><a href="single-properties.html">Marvel de Villa</a></h3><span class="location"><img src="http://127.0.0.1:8000/Frontend/img/icons/marker.png" alt="">450 E 1st Ave, New Jersey</span></div>',
				'<div class="right"><div class="type-wrap"><span class="price">$550<span>M</span></span><span class="type">Booking</span></div></div></div></div></div>',
			].join(''),

		LatLng : [{
			lat : 58.1476714,
			lng : 8.0071166
		}],
		type : 'event'
	},
	{
		imageUrl: 'http://127.0.0.1:8000/Frontend/img/property/property-8.jpg',
		address: '12 EA 1st Ave, Washington',
		html: ['<div class="property-item map-property-item"><div class="property-inner"><div class="image"><a href="single-properties.html"><img src="http://127.0.0.1:8000/Frontend/img/property/property-8.jpg" alt=""></a>',
				'<ul class="property-feature"><li><span class="area"><img src="http://127.0.0.1:8000/Frontend/img/icons/area.png" alt="">550 SqFt</span></li>',
				'<li><span class="bed"><img src="http://127.0.0.1:8000/Frontend/img/icons/bed.png" alt="">6</span></li>',
				'<li><span class="bath"><img src="http://127.0.0.1:8000/Frontend/img/icons/bath.png" alt="">4</span></li>',
				'<li><span class="parking"><img src="http://127.0.0.1:8000/Frontend/img/icons/parking.png" alt="">3</span></li></ul></div>',
				'<div class="content"><div class="left"><h3 class="title"><a href="single-properties.html">MayaKanon de Villa</a></h3><span class="location"><img src="http://127.0.0.1:8000/Frontend/img/icons/marker.png" alt="">12 EA 1st Ave, Washington</span></div>',
				'<div class="right"><div class="type-wrap"><span class="price">$550<span>M</span></span><span class="type">Booking</span></div></div></div></div></div>',
			].join(''),

		LatLng : [{
			lat : 58.9637395,
			lng : 5.7266313
		}],
		type : 'event'
	},
	{
		imageUrl: 'http://127.0.0.1:8000/Frontend/img/property/property-10.jpg',
		address: '12 1st Ave, New Yourk',
		html: ['<div class="property-item map-property-item"><div class="property-inner"><div class="image"><a href="single-properties.html"><img src="http://127.0.0.1:8000/Frontend/img/property/property-10.jpg" alt=""></a>',
				'<ul class="property-feature"><li><span class="area"><img src="http://127.0.0.1:8000/Frontend/img/icons/area.png" alt="">550 SqFt</span></li>',
				'<li><span class="bed"><img src="http://127.0.0.1:8000/Frontend/img/icons/bed.png" alt="">6</span></li>',
				'<li><span class="bath"><img src="http://127.0.0.1:8000/Frontend/img/icons/bath.png" alt="">4</span></li>',
				'<li><span class="parking"><img src="http://127.0.0.1:8000/Frontend/img/icons/parking.png" alt="">3</span></li></ul></div>',
				'<div class="content"><div class="left"><h3 class="title"><a href="single-properties.html">Radison de Villa</a></h3><span class="location"><img src="http://127.0.0.1:8000/Frontend/img/icons/marker.png" alt="">12 1st Ave, New Yourk</span></div>',
				'<div class="right"><div class="type-wrap"><span class="price">$550<span>M</span></span><span class="type">Booking</span></div></div></div></div></div>',
			].join(''),
		LatLng : [{
			lat : 59.7661756,
			lng : 5.5101919
		}],
		type : 'event'
	},

];


	window.onload = function () {
		initMap();
	};

	function addMarkerInfo() {
		for( var i = 0; i < markersOnMap.length; i++ ) {
			var contentString = '<div>' + markersOnMap[i].html + '</div>'
			
			const marker = new google.maps.Marker({
				position: markersOnMap[i].LatLng[0],
				icon: icons[markersOnMap[i].type].icon,
				map: map,

			});

			const infowindow = new google.maps.InfoWindow({
				content: contentString,
			  });
			
			marker.addListener("click", () => {
				CloseOtherInfo();
				infowindow.open(marker.get('map'), marker);
				InforObj[0] =  infowindow;
			  });
		}
	}

	function CloseOtherInfo() {
		if( InforObj.length > 0 ) {
			InforObj[0].set("marker", null);
			InforObj[0].close();
			InforObj[0].length = 0;
		}


	}

	function initMap() {
		map = new google.maps.Map(document.getElementById('contact-map'), {
		zoom: 7,
		center: centerCords,
		
	});
	
	addMarkerInfo();
}