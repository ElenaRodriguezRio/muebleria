let tiendas=[];
let productos=[];
let s="";

console.log("descuento")
init();
randomGeneration();
console.log(s)




function init(){
    for (let index = 1; index < 8+1; index++) {
        tiendas.push(index)
    }
    for (let index = 1; index < 47+1; index++) {
        productos.push(index)
    }
}

function randomGeneration(){
    for (let tienda = 0; tienda < tiendas.length; tienda++) {
        for (let producto = 0; producto < productos.length; producto++) {
            if(Math.random()>0.9){
                let randUnits = Math.floor(Math.random() * 6)*5+5;//max 30 min 5
                s+="INSERT INTO `hay_descuento`(`id_producto`, `id_tienda`, `descuento`) VALUES ('"+productos[producto]+"','"+tiendas[tienda]+"','"+randUnits+"');\n"
            }
        }
    }
}