var mapa;
var currentPosition;
var localizaciones;
$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "localizaciones.json",
      dataType: "json",
      success: function(datos) {
        localizaciones = datos.localizaciones;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                currentPosition = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                pintarMapa(currentPosition);
            }, function() {
                pintarMapa(null);
            });
        } else {
            // Browser doesn't support Geolocation
            pintarMapa(null);
        }
      },
      error: function() {
        console.log('fallo al llamar al json')
      }
    });
  });

function pintarMapa(posicion){
    mapa = crearMapa(posicion);
    //posicion actual
    if(posicion!=null){
        L.marker([posicion.lat, posicion.lng]).addTo(mapa).bindPopup("<b>Usted está aquí</b>").openPopup();
        $('.leaflet-marker-icon').css('filter','hue-rotate(320deg)')
    }
    //localizaciones
    localizaciones.forEach(element => {
        var marcador=element.marcador;
        L.marker([marcador.lat, marcador.lng]).addTo(mapa).bindPopup("<b>"+marcador.nombre+"</b><br/>"+marcador.direccion+"<br/>"+marcador.telefono+"<br/>"+marcador.email);
    });
}

function crearMapa(posicion){
    var mapa
    if(posicion!=null){
        var mapa = L.map('mapa').setView([posicion.lat, posicion.lng], 10);
    }
    else{
        var mapa = L.map('mapa').setView([40.423486, -3.685551], 5);
    }
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(mapa);
    return mapa;
}