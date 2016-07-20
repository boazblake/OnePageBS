import React from 'react';
import Footer from '../modules/footer.js'
import $ from 'jquery'

$(document).ready(function (){

  // create a LatLng object containing the coordinate for the center of the map
  var latlng = new google.maps.LatLng(-33.86455, 151.209);

  // prepare the map properties
  var options = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    navigationControl: true,
    mapTypeControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true
  };

  // initialize the map object
  var map = new google.maps.Map(document.getElementById('google_map'), options);

  // add Marker
  var marker1 = new google.maps.Marker({
    position: latlng, map: map
  });

  // add listener for a click on the pin
  google.maps.event.addListener(marker1, 'click', function() {
    infowindow.open(map, marker1);
  });

  // add information window
  var infowindow = new google.maps.InfoWindow({
    content:  '<div class="info"><strong>This is my company</strong><br><br>My company address is here<br> 32846 Sydney</div>'
  });  
});



class Contact extends React.Component {
  render(){
    return(
      <div id="services" className="pad-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h3>Parallax scrolling effect is in action</h3>
              <h4>The next is the address on Google maps</h4>
            </div>
          </div>
        </div>
      
      <div id="google_map"></div>

      <Footer/>

      </div>



    )
  }
}

export default Contact