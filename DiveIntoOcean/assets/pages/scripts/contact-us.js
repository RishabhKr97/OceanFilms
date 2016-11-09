var ContactUs = function () {

    return {
        //main function to initiate the module
        init: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
	            lat: 27.568108,
				lng: 77.674725,
			  });
			   var marker = map.addMarker({
		            lat: 27.568108,
					lng: 77.674725,
		            title: 'Find us here!',
		            infoWindow: {
		                content: "<b>Ocean Films,</b> Fauji Bhawan, B-167, Sec-2, B.S. Dham Chaitanya Vihar<br> Phase-2, Vrindavan, Uttar Pradesh, India-281121"
		            }
		        });

			   marker.infoWindow.open(map, marker);
			});
        }
    };

}();