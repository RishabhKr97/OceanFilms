var ContactUs = function () {

    return {
        //main function to initiate the module
        init: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
	            lat: 28.7501,
				lng: 77.1177,
			  });
			   var marker = map.addMarker({
		            lat: 28.7501,
					lng: 77.1177,
		            title: 'Loop, Inc.',
		            infoWindow: {
		                content: "<b>DTU</b> Shabad Daultpur, Bawana Road<br>New Delhi, India"
		            }
		        });

			   marker.infoWindow.open(map, marker);
			});
        }
    };

}();