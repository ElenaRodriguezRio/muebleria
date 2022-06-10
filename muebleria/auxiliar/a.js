let tiendas=[];
let productos=[];
let s="";

console.log("existencias")
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
    let maxExistencias = 20;
    for (let tienda = 0; tienda < tiendas.length; tienda++) {
        for (let producto = 0; producto < productos.length; producto++) {
            let randUnits = Math.floor(Math.random() * maxExistencias);
             s+="INSERT INTO `hay_existencia`(`id_producto`, `id_tienda`, `unidades`) VALUES ('"+productos[producto]+"','"+tiendas[tienda]+"','"+randUnits+"');\n"
        }
    }
}