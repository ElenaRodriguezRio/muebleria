var xml;
$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "../xml/catalogo.xml",
      dataType: "xml",
      success: function(datos) {
        //Pasar el archivo XML a un string
        var str = (new XMLSerializer()).serializeToString(datos);
        xml=jQuery.parseXML(str)

        var sql="INSERT INTO `producto` (`id_producto`, `nombre`, `categoria`, `precio`, `marca`) VALUES ";

        
        var id = 1;
        var sql_nombre = "";
        var sql_categoria = "";
        var sql_precio = "";
        var sql_marca = "";

        var estancias = $('estancia',xml)
        estancias.toArray().forEach(estancia => {
          var categorias= $('categoria',$(estancia));
          categorias.toArray().forEach(categoria => {
            sql_categoria = $(categoria).attr('nombre');

            var productos= $('producto',$(categoria));
            productos.toArray().forEach(producto => {
              sql_nombre = $(producto).attr('nombre')
              sql_precio = $(producto).attr('precio')
              //marca
              if(sql_categoria=="decoración") sql_marca="Innis decor";
              else if(sql_categoria=="lavabos") sql_marca="Nivelu Italian Marmol";
              else if(sql_categoria=="lámparas") sql_marca="Lion lampes";
              else if(sql_categoria=="sofás" || sql_categoria=="camas") sql_marca="Felicia confort";
              else if(sql_categoria=="espejos") sql_marca="Tracia baños";
              else sql_marca="Vindred design";

              sql+="('"+id+"', '"+sql_nombre+"', '"+sql_categoria+"', '"+sql_precio+"', '"+sql_marca+"'),"

              id++;
            })
          });
        });

        sql=sql.slice(0,sql.length-1);
        sql+=";";

        console.log(sql);

      },
      error: function() {
        console.log('fallo al llamar al xml')
      }
    });
  });
