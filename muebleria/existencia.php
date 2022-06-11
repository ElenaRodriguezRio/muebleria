<?php
class Existencia{
    function getProvincias(){
        $pdo = new PDO('mysql:host=localhost;dbname=dbuser2021;charset=utf8', 'DBUSER2021', 'DBPSWD2021');
        $sql = "SELECT DISTINCT provincia FROM tienda";
        foreach ($pdo->query($sql) as $row) {
        echo "<option value='" . $row['provincia'] . "'>" . $row['provincia'] . "</option>";
        }
    }

    function getCiudades(){
        $pdo = new PDO('mysql:host=localhost;dbname=dbuser2021;charset=utf8', 'DBUSER2021', 'DBPSWD2021');
        $sql = "SELECT DISTINCT ciudad FROM tienda";
        foreach ($pdo->query($sql) as $row) {
        echo "<option value='" . $row['ciudad'] . "'>" . $row['ciudad'] . "</option>";
        }
    }

    function getProductos(){
        $pdo = new PDO('mysql:host=localhost;dbname=dbuser2021;charset=utf8', 'DBUSER2021', 'DBPSWD2021');
        $sql = "SELECT nombre FROM producto";
        foreach ($pdo->query($sql) as $row) {
        echo "<option value='" . $row['nombre'] . "'>" . $row['nombre'] . "</option>";
        }
    }


    function resultadoProvincias(){
        $pdo = new PDO('mysql:host=localhost;dbname=dbuser2021;charset=utf8', 'DBUSER2021', 'DBPSWD2021');
        $sql = "SELECT t.nombre as tienda, p.nombre, e.unidades
        FROM producto p, tienda t, hay_existencia e 
        WHERE p.id_producto = e.id_producto
            and t.id_tienda = e.id_tienda
            and t.provincia = '".$_GET["fielset_provincia"]."'
            and p.nombre = '".$_GET["fielset_producto"]."'";
        foreach ($pdo->query($sql) as $row) {
        echo "<tr>";
        echo "<td>" . $row['tienda'] . "</td>";
        echo "<td>" . $row['nombre'] . "</td>";
        echo "<td>" . $row['unidades'] . "</td>";
        echo "</tr>";
        }
    }

    function resultadoCiudades(){
        $pdo = new PDO('mysql:host=localhost;dbname=dbuser2021;charset=utf8', 'DBUSER2021', 'DBPSWD2021');
        $sql = "SELECT t.nombre as tienda, p.nombre, e.unidades
        FROM producto p, tienda t, hay_existencia e 
        WHERE p.id_producto = e.id_producto
            and t.id_tienda = e.id_tienda
            and t.ciudad = '".$_GET["fielset_ciudad"]."'
            and p.nombre = '".$_GET["fielset_producto"]."'";
        foreach ($pdo->query($sql) as $row) {
        echo "<tr>";
        echo "<td>" . $row['tienda'] . "</td>";
        echo "<td>" . $row['nombre'] . "</td>";
        echo "<td>" . $row['unidades'] . "</td>";
        echo "</tr>";
        }
    }
}
$existencia = new Existencia;
?>

<!DOCTYPE HTML>

<html lang="es">
<head>
    <meta charset="UTF-8"/>
    <title>Proovedores</title>
    <link rel="stylesheet"  href="estilo.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name=author content="Elena Rodríguez Río">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
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
        <h2>Buscador de existencias:</h2>
        <form id="formulario_existencia_provincia" action='#' method='get' name='existencia_provincia'>
            <h4>Ver la existencia en provincia:</h4>
            <label for="fielset_producto">Producto:</label>
            <select class="fielset_producto" name="fielset_producto" id='fielset_producto'>
                <?php $existencia->{'getProductos'}()?>
            </select>
            <label for="fielset_provincia">Provincia:</label>
            <select class="fielset_provincia" name="fielset_provincia" id='fielset_provincia'>
                <?php $existencia->{'getProvincias'}()?>
            </select>
            <input type='submit' name='submitProvincia' value='Ver'/>
        </form>
        <form id="formulario_existencia_ciudad" action='#' method='get' name='existencia_ciudad'>
            <h4>Ver la existencia en ciudad:</h4>
            <label for="fielset_producto">Producto:</label>
            <select class="fielset_producto" name="fielset_producto" id='fielset_producto'>
                <?php $existencia->{'getProductos'}()?>
            </select>
            <label for="fielset_ciudad">Ciudad:</label>
            <select class="fielset_ciudad" name="fielset_ciudad" id='fielset_ciudad'>
                <?php $existencia->{'getCiudades'}()?>
            </select>
            <input type='submit' name='submitCiudad' value='Ver'/>
        </form>
<?php
if(isset($_GET["fielset_ciudad"]) || isset($_GET["fielset_provincia"])){
echo        "<section id = 'resultado_descuentos'>";
echo            "<h3>Existencias:</h3>";
echo            "<table>";
echo                "<tr class='tabla'>";
echo                    "<th>Tienda</th>";
echo                    "<th>Producto</th>";
echo                    "<th>Unidades</th>";
echo                "</tr>";
if(isset($_GET["fielset_ciudad"])){
    $existencia->{'resultadoCiudades'}();
}
elseif (isset($_GET["fielset_provincia"])) {
    $existencia->{'resultadoProvincias'}();
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