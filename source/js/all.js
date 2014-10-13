//= require_tree .
//= require "jquery/dist/jquery.js"
//= require "bootstrap/dist/js/bootstrap.js"
//= require "masonry/dist/masonry.pkgd.js"
//= require "imagesloaded/imagesloaded.pkgd.js"

if($('#related-images').length){
  var $container = $('#related-images').masonry();

  $container.imagesLoaded( function() {
    $container.masonry();
  });
}


var map = L.map('map').setView([38.88962,-77.022977], 12);

L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'examples.map-i875mjb7'
}).addTo(map);
