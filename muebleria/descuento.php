<?php
class Descuento{
    public function getTiendas(){
        $pdo = new PDO('mysql:host=localhost;dbname=dbuser2021;charset=utf8', 'DBUSER2021', 'DBPSWD2021');
        $sql = "SELECT nombre FROM tienda";
        foreach ($pdo->query($sql) as $row) {
        echo "<option value='" . $row['nombre'] . "'>" . $row['nombre'] . "</option>";
        }
    }

    public function getCiudades(){
        $pdo = new PDO('mysql:host=localhost;dbname=dbuser2021;charset=utf8', 'DBUSER2021', 'DBPSWD2021');
        $sql = "SELECT DISTINCT ciudad FROM tienda";
        foreach ($pdo->query($sql) as $row) {
        echo "<option value='" . $row['ciudad'] . "'>" . $row['ciudad'] . "</option>";
        }
    }

    public function resultadoTiendas(){
        $pdo = new PDO('mysql:host=localhost;dbname=dbuser2021;charset=utf8', 'DBUSER2021', 'DBPSWD2021');
        $sql = "SELECT t.nombre as tienda, p.nombre, p.precio, p.precio*(100-d.descuento)/100 as descuento
        FROM producto p, tienda t, hay_descuento d 
        WHERE p.id_producto = d.id_producto
            and t.id_tienda = d.id_tienda
            and t.nombre = '".$_GET["fielset_tienda"]."';";
        foreach ($pdo->query($sql) as $row) {
        echo "<tr>";
        echo "<td>" . $row['tienda'] . "</td>";
        echo "<td>" . $row['nombre'] . "</td>";
        echo "<td>" . $row['precio'] . " €</td>";
        echo "<td>" . number_format($row['descuento'], 2, ',', ' ') . " €</td>";
        echo "</tr>";
        }
    }

    public function resultadoCiudades(){
        $pdo = new PDO('mysql:host=localhost;dbname=dbuser2021;charset=utf8', 'DBUSER2021', 'DBPSWD2021');
        $sql = "SELECT t.nombre as tienda, p.nombre, p.precio, p.precio*(100-d.descuento)/100 as descuento
        FROM producto p, tienda t, hay_descuento d 
        WHERE p.id_producto = d.id_producto
            and t.id_tienda = d.id_tienda
            and t.ciudad = '".$_GET["fielset_ciudad"]."';";
        foreach ($pdo->query($sql) as $row) {
        echo "<tr>";
        echo "<td>" . $row['tienda'] . "</td>";
        echo "<td>" . $row['nombre'] . "</td>";
        echo "<td>" . $row['precio'] . " €</td>";
        echo "<td>" . number_format($row['descuento'], 2, ',', ' ') . " €</td>";
        echo "</tr>";
        }
    }
}
$descuento = new Descuento;
?>

<!DOCTYPE HTML>

<html lang="es">
<head>
    <meta charset="UTF-8"/>
    <title>Descuentos</title>
    <link rel="stylesheet"  href="estilo.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name=author content="Elena Rodríguez Río">
</head>

<body>
    <header>
        <h1>Mueblerías Muu</h1>
    </header>
    <nav>   
        <h2>Índice</h2>
        <ul id = "indice">
            <li><a href="./info.html" accesskey="i" title="enlace a la introdiccion">Introduccion y realización</a></li>
            <li><a href="./proovedores.html" accesskey="p" title="enlace a los proovedores">Nuestros proovedores</a></li>
            <li><a href="./transporte.html" accesskey="t" title="enlace a los transportes">Transporte</a></li>
            <li><a href="./catalogo.html" accesskey="c" title="enlace al catálogo">Catálogo</a></li>
            <li><a href="./localizaciones.html" accesskey="l" title="enlace a las localizaciones">Localizaciones</a></li>
            <li><a href="./creador.html" accesskey="r" title="enlace al creador de cocinas">Creador de cocinas</a></li>
            <li><a href="./existencia.php" accesskey="e" title="enlace al formulario de existencias">Existencias</a></li>
            <li><a href="./descuento.php" accesskey="d" title="enlace al formulario de descuentos">Descuentos</a></li>
        </ul>
    </nav>
    <main>
        <h2>Buscador de descuentos</h2>
        <form id="formulario_descuentos_tienda" action='#' method='get' name='descuentos_tienda'>
            <h3>Ver los descuentos en las tiendas:</h3>
            <label for="fielset_tienda">Tienda:</label>
            <select class="fielset_tienda" name="fielset_tienda" id='fielset_tienda'>
                <?php $descuento->{'getTiendas'}()?>
            </select>
            <input type='submit' name='submitTienda' value='Ver'/>
        </form>
        <form id="formulario_descuentos_ciudad" action='#' method='get' name='descuentos_ciudad'>
            <h3>Ver los descuentos en las ciudades:</h3>
            <label for="fielset_ciudad">Ciudad:</label>
            <select class="fielset_ciudad" name="fielset_ciudad" id='fielset_ciudad'>
                <?php $descuento->{'getCiudades'}()?>
            </select>
            <input type='submit' name='submitCiudad' value='Ver'/>
        </form>
<?php
if(isset($_GET["fielset_ciudad"]) || isset($_GET["fielset_tienda"])){
echo        "<section id = 'resultado_descuentos'>";
echo            "<h3>Productos con decuento:</h3>";
echo            "<table>";
echo                "<tr class='tabla'>";
echo                    "<th>Tienda</th>";
echo                    "<th>Producto</th>";
echo                    "<th>Precio original</th>";
echo                    "<th>Precio con descuento</th>";
echo                "</tr>";
if(isset($_GET["fielset_ciudad"])){
    $descuento->{'resultadoCiudades'}();
}
elseif (isset($_GET["fielset_tienda"])) {
    $descuento->{'resultadoTiendas'}();
}
echo            "</table>";
echo        "</section>";
}
?>

    </main>
    <footer>
        <p>Mueblerías Muu</p>
        <p>985123456</p>
        <p>contacto@muu.es</p>
    </footer>
</body>
</html>