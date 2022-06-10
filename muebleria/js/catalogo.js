var xml;
$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "xml/catalogo.xml",
      dataType: "xml",
      success: function(datos) {
        //Pasar el archivo XML a un string
        var str = (new XMLSerializer()).serializeToString(datos);
        xml=jQuery.parseXML(str)
        var htmlstr = '<h2>Catálogo</h2>';

        var estancias = $('estancia',xml)
        estancias.toArray().forEach(estancia => {
          var estancia_nombre = $(estancia).attr('nombre')
          htmlstr+='<h3>'+estancia_nombre+'</h3>';

          var categorias= $('categoria',$(estancia));
          categorias.toArray().forEach(categoria => {
            htmlstr+='<h4>'+$(categoria).attr('nombre')+'</h4>';
            
            var productos= $('producto',$(categoria));
            htmlstr+="<table><tr class='tabla'><th>Nombre</th><th>Descripción</th><th>Precio</th><th>Dimensiones</th><th>Color</th></tr>";
            productos.toArray().forEach(producto => {
              htmlstr+='<tr>'
              nombre = $(producto).attr('nombre')
              htmlstr+='<td>'+(nombre==undefined ? "-" : nombre)+'</td>'
              descripcion = $(producto).attr('descripcion')
              htmlstr+='<td>'+(descripcion==undefined ? "-" : descripcion)+'</td>'
              precio = $(producto).attr('precio')
              htmlstr+='<td>'+(precio==undefined ? "-" : precio)+'</td>'
              ancho = $(producto).attr('ancho')
              alto = $(producto).attr('alto')
              fondo = $(producto).attr('fondo')
              htmlstr+='<td>'+
              'Ancho: '+(ancho==undefined ? "-" : ancho)+'<br>'+
              'Alto: '+(alto==undefined ? "-" : alto)+'<br>'+
              'Fondo: '+(fondo==undefined ? "-" : fondo)+
              '</td>';
              color = $(producto).attr('color')
              htmlstr+='<td>'+(color==undefined ? "-" : color)+'</td>'
              htmlstr+='</tr>'
            })
            htmlstr+="</table>";
          });
        });

        $("#catalogo").html(htmlstr);  

        $($('categoria',xml)[1]).attr('nombre')


      },
      error: function() {
        console.log('fallo al llamar al xml')
      }
    });
  });
