$(document).ready(function() {


    // slider 
    $('.ba-slider').slick({
        slidesToShow: 4,
        slidesToScroll:2,
        arrows: false,
        infinite: false,
        dots: true,
        autoPlay: true,
        appendDots: '.slider-nav'
    });

});

// include google maps
const googleMapsScript = document.createElement('script');
	googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBaSe6jdgxnsPBSc7pRB0_MlIoZSRm7aw8&callback=initMap';
    document.head.appendChild(googleMapsScript);
    
// init google map
function initMap() {

    var markerBA = {lat: 50.006693, lng: 36.237199};

    map = new google.maps.Map(document.getElementById('map'), {
        center: markerBA,
        zoom: 19
    });

    var marker = new google.maps.Marker({
        position: baOffices[i].position,
        title: 'ba-map title',
        // icon: 'path/to/icon.png',
        map: map
      });
}



