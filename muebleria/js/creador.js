var num=0;
var muebles=[];
var total=0;
iniciar();

function fila(pos){
    if(pos=='top'||pos=='bot'){
        var i = num+1;
        var tipo1;
        var txt1;
        var tipo2;
        var txt2;
        if(pos=='top'){
            tipo1='armario'
            tipo2='estanteria'
            txt1='Armario'
            txt2='Estantería'
        }
        else{
            tipo1='cajones'
            tipo2='puertas'
            txt1='Cajones'
            txt2='Puertas'
        }
        var fila = "";
        fila+="<div class='fila fila_"+pos+"'>"+
                    "<div class='tipo elemento'>"+
                        "<input type='radio' name='"+pos+"_"+i+"' value='"+tipo1+"' id='"+pos+"_"+tipo1+"_"+i+"' checked>"+"<label for='"+pos+"_"+tipo1+"_"+i+"'>"+txt1+"</label>"+
                        "<input type='radio' name='"+pos+"_"+i+"' value='"+tipo2+"' id='"+pos+"_"+tipo2+"_"+i+"'>"+"<label for='"+pos+"_"+tipo2+"_"+i+"'>"+txt2+"</label>"+
                        "<input type='checkbox' name='"+pos+"_"+i+"' value='vacio' id='"+pos+"_vacio_"+i+"'>"+"<label for='"+pos+"_vacio_"+i+"'>Vacío</label>"+
                    "</div>"+
                    "<div class='elemento'>"+
                        "<label for='"+pos+"_modelo_"+i+"'>Seleccione el modelo:</label>"+
                        "<select class='modelo' name='"+pos+"_modelo_"+i+"' id='"+pos+"_modelo_"+i+"'>"+
                            "<optgroup label='Linea Classic'>"+
                                "<option value='1'>Classic madera de haya</option>"+
                                "<option value='2'>Classic madera de roble</option>"+
                                "<option value='3'>Classic madera de pino</option>"+
                            "</optgroup>"+
                            "<optgroup label='Linea Modern'>"+
                                "<option value='4'>Modern metal</option>"+
                                "<option value='5'>Modern madera</option>"+
                            "</optgroup>"+
                        "</select>"+
                    "</div>"+
                    "<div class='elemento'>"+
                        "<label for='"+pos+"_color_"+i+"'>Seleccione el color:</label>"+
                        "<select class='color' name='"+pos+"_color_"+i+"' id='"+pos+"_color_"+i+"'>"+
                            "<option value='1'>Natural</option>"+
                            "<option value='2'>Lacado Blanco</option>"+
                            "<option value='3'>Lacado Negro</option>"+
                        "</select>"+
                    "</div>"+
                    "<button>Eliminar</button>"+
                "</div>";
        return fila;
    }
    else{
        return null;
    }
}

function iniciar(){
    addFila('top');
    addFila('bot');
}

function addFila(pos){
    if(pos=='top'||pos=='bot'){
        $('#filas_'+pos).append(fila(pos))
        num++;
        filaReset()
    }
    else{
        console.log('postition '+pos+' must be top or bot');
    }
}

function filaReset(){
    //vacio
    $('.fila').find("input[type='checkbox']").off('click')
    $('.fila').find("input[type='checkbox']").on('click', function(){
        $(this).siblings().prop( "disabled", $(this).prop('checked'))
        $(this).parent().siblings().find('select').prop( "disabled", $(this).prop('checked'))
    })
    //eliminar
    $('.fila button').off('click')
    $('.fila button').on('click', function(){
        $(this).parent().remove()
    })
}

function crear(){
    //muebles
    muebles=[];
    muebles.push([])
    $('.fila_top').toArray().forEach(element => {
        if($(element).children().find("input[type='checkbox']").prop('checked')){
            muebles[0].push(new Mueble('vacio'));
        }
        else{
            var tipo = $(element).children().find("input[type='radio']:checked").val();
            var modelo = $(element).children().find("select.modelo").val();
            var color = $(element).children().find("select.color").val();
            muebles[0].push(new Mueble(tipo,modelo,color,'top'));
        }
    });
    muebles.push([])
    $('.fila_bot').toArray().forEach(element => {
        if($(element).children().find("input[type='checkbox']").prop('checked')){
            muebles[1].push(new Mueble('vacio'));
        }
        else{
            var tipo = $(element).children().find("input[type='radio']:checked").val();
            var modelo = $(element).children().find("select.modelo").val();
            var color = $(element).children().find("select.color").val();
            muebles[1].push(new Mueble(tipo,modelo,color,'bot'));
        }
    });
    
    showTotal();
    showCroquis();
}

function getTotal() {
    total=0;
    muebles.forEach(fila => {
        fila.forEach(mueble => {
            total+=mueble.getPrice();
        });
    });
    return total;
}

function showTotal() {
    //vaciar
    $('#total_area').empty()
    //precio total
    $('#total_area').append(
        "<h2>Total: "+getTotal()+"€<!h2>"
    )
    //conversor de divisas
    $('#total_area').append(conversor.getConversor())
}

function showCroquis(){
    //vaciar
    $('#croquis_area').empty()
    //precio total
    $('#croquis_area').append(
        "<canvas id='canvas' width='1600' height='520'></canvas>"
    )
    var proporcionX = 160
    var proporcionY = 200
    var top = 0
    var mid = 280
    var croquis = new Croquis(proporcionX, proporcionY, top, mid);
    muebles.forEach(fila => {
        var desplazamiento = 0;
        fila.forEach(mueble => {
            mueble.getCroquis(croquis,desplazamiento);
            desplazamiento+=proporcionX
        });
    });
}