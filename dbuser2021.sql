-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-06-2022 a las 18:45:42
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dbuser2021`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hay_descuento`
--

CREATE TABLE `hay_descuento` (
  `id_producto` int(11) NOT NULL,
  `id_tienda` int(11) NOT NULL,
  `descuento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `hay_descuento`
--

INSERT INTO `hay_descuento` (`id_producto`, `id_tienda`, `descuento`) VALUES
(1, 6, 5),
(1, 7, 15),
(3, 7, 15),
(5, 3, 5),
(5, 5, 10),
(5, 7, 15),
(6, 2, 15),
(7, 2, 15),
(8, 7, 20),
(12, 8, 30),
(13, 5, 25),
(14, 3, 30),
(17, 2, 20),
(17, 3, 20),
(18, 1, 30),
(20, 1, 10),
(22, 1, 25),
(25, 4, 15),
(26, 5, 15),
(26, 8, 20),
(27, 5, 5),
(28, 1, 10),
(30, 1, 20),
(30, 3, 10),
(30, 6, 30),
(31, 2, 25),
(33, 8, 5),
(34, 1, 20),
(34, 4, 15),
(34, 6, 15),
(34, 7, 30),
(36, 1, 30),
(36, 5, 30),
(38, 2, 15),
(40, 7, 30),
(41, 5, 25),
(43, 1, 5),
(45, 6, 15),
(46, 3, 10),
(46, 7, 15),
(47, 5, 30);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hay_existencia`
--

CREATE TABLE `hay_existencia` (
  `id_producto` int(11) NOT NULL,
  `id_tienda` int(11) NOT NULL,
  `unidades` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `hay_existencia`
--

INSERT INTO `hay_existencia` (`id_producto`, `id_tienda`, `unidades`) VALUES
(1, 1, 18),
(1, 2, 2),
(1, 3, 19),
(1, 4, 16),
(1, 5, 0),
(1, 6, 11),
(1, 7, 14),
(1, 8, 13),
(2, 1, 16),
(2, 2, 9),
(2, 3, 0),
(2, 4, 3),
(2, 5, 4),
(2, 6, 3),
(2, 7, 11),
(2, 8, 10),
(3, 1, 0),
(3, 2, 13),
(3, 3, 19),
(3, 4, 7),
(3, 5, 2),
(3, 6, 9),
(3, 7, 8),
(3, 8, 8),
(4, 1, 7),
(4, 2, 12),
(4, 3, 13),
(4, 4, 10),
(4, 5, 19),
(4, 6, 17),
(4, 7, 12),
(4, 8, 16),
(5, 1, 7),
(5, 2, 0),
(5, 3, 10),
(5, 4, 15),
(5, 5, 3),
(5, 6, 16),
(5, 7, 1),
(5, 8, 18),
(6, 1, 10),
(6, 2, 8),
(6, 3, 4),
(6, 4, 9),
(6, 5, 9),
(6, 6, 7),
(6, 7, 10),
(6, 8, 5),
(7, 1, 4),
(7, 2, 10),
(7, 3, 10),
(7, 4, 17),
(7, 5, 16),
(7, 6, 12),
(7, 7, 9),
(7, 8, 16),
(8, 1, 3),
(8, 2, 16),
(8, 3, 3),
(8, 4, 5),
(8, 5, 3),
(8, 6, 4),
(8, 7, 8),
(8, 8, 8),
(9, 1, 17),
(9, 2, 13),
(9, 3, 6),
(9, 4, 18),
(9, 5, 14),
(9, 6, 3),
(9, 7, 11),
(9, 8, 13),
(10, 1, 1),
(10, 2, 0),
(10, 3, 10),
(10, 4, 0),
(10, 5, 6),
(10, 6, 11),
(10, 7, 0),
(10, 8, 4),
(11, 1, 1),
(11, 2, 10),
(11, 3, 5),
(11, 4, 4),
(11, 5, 15),
(11, 6, 6),
(11, 7, 14),
(11, 8, 14),
(12, 1, 2),
(12, 2, 13),
(12, 3, 19),
(12, 4, 9),
(12, 5, 2),
(12, 6, 19),
(12, 7, 9),
(12, 8, 5),
(13, 1, 1),
(13, 2, 16),
(13, 3, 8),
(13, 4, 16),
(13, 5, 12),
(13, 6, 10),
(13, 7, 16),
(13, 8, 18),
(14, 1, 10),
(14, 2, 11),
(14, 3, 13),
(14, 4, 17),
(14, 5, 17),
(14, 6, 13),
(14, 7, 1),
(14, 8, 4),
(15, 1, 8),
(15, 2, 19),
(15, 3, 6),
(15, 4, 8),
(15, 5, 16),
(15, 6, 12),
(15, 7, 3),
(15, 8, 2),
(16, 1, 16),
(16, 2, 1),
(16, 3, 5),
(16, 4, 11),
(16, 5, 9),
(16, 6, 17),
(16, 7, 2),
(16, 8, 13),
(17, 1, 18),
(17, 2, 9),
(17, 3, 5),
(17, 4, 1),
(17, 5, 0),
(17, 6, 15),
(17, 7, 4),
(17, 8, 14),
(18, 1, 18),
(18, 2, 15),
(18, 3, 0),
(18, 4, 15),
(18, 5, 13),
(18, 6, 15),
(18, 7, 3),
(18, 8, 6),
(19, 1, 5),
(19, 2, 13),
(19, 3, 11),
(19, 4, 3),
(19, 5, 6),
(19, 6, 2),
(19, 7, 11),
(19, 8, 6),
(20, 1, 2),
(20, 2, 11),
(20, 3, 3),
(20, 4, 16),
(20, 5, 0),
(20, 6, 18),
(20, 7, 13),
(20, 8, 3),
(21, 1, 10),
(21, 2, 4),
(21, 3, 18),
(21, 4, 11),
(21, 5, 3),
(21, 6, 4),
(21, 7, 4),
(21, 8, 8),
(22, 1, 9),
(22, 2, 19),
(22, 3, 16),
(22, 4, 4),
(22, 5, 18),
(22, 6, 7),
(22, 7, 17),
(22, 8, 10),
(23, 1, 6),
(23, 2, 12),
(23, 3, 8),
(23, 4, 13),
(23, 5, 14),
(23, 6, 5),
(23, 7, 17),
(23, 8, 12),
(24, 1, 13),
(24, 2, 12),
(24, 3, 11),
(24, 4, 1),
(24, 5, 3),
(24, 6, 3),
(24, 7, 11),
(24, 8, 14),
(25, 1, 7),
(25, 2, 19),
(25, 3, 1),
(25, 4, 9),
(25, 5, 2),
(25, 6, 4),
(25, 7, 14),
(25, 8, 13),
(26, 1, 16),
(26, 2, 5),
(26, 3, 8),
(26, 4, 15),
(26, 5, 0),
(26, 6, 19),
(26, 7, 12),
(26, 8, 15),
(27, 1, 13),
(27, 2, 5),
(27, 3, 1),
(27, 4, 18),
(27, 5, 13),
(27, 6, 2),
(27, 7, 3),
(27, 8, 15),
(28, 1, 14),
(28, 2, 16),
(28, 3, 5),
(28, 4, 1),
(28, 5, 2),
(28, 6, 15),
(28, 7, 15),
(28, 8, 18),
(29, 1, 16),
(29, 2, 11),
(29, 3, 6),
(29, 4, 0),
(29, 5, 17),
(29, 6, 8),
(29, 7, 8),
(29, 8, 18),
(30, 1, 2),
(30, 2, 4),
(30, 3, 12),
(30, 4, 6),
(30, 5, 9),
(30, 6, 6),
(30, 7, 10),
(30, 8, 3),
(31, 1, 9),
(31, 2, 6),
(31, 3, 8),
(31, 4, 2),
(31, 5, 5),
(31, 6, 0),
(31, 7, 2),
(31, 8, 14),
(32, 1, 2),
(32, 2, 12),
(32, 3, 14),
(32, 4, 19),
(32, 5, 3),
(32, 6, 10),
(32, 7, 4),
(32, 8, 8),
(33, 1, 12),
(33, 2, 0),
(33, 3, 18),
(33, 4, 15),
(33, 5, 6),
(33, 6, 1),
(33, 7, 9),
(33, 8, 11),
(34, 1, 0),
(34, 2, 3),
(34, 3, 11),
(34, 4, 1),
(34, 5, 3),
(34, 6, 1),
(34, 7, 2),
(34, 8, 19),
(35, 1, 1),
(35, 2, 15),
(35, 3, 3),
(35, 4, 1),
(35, 5, 8),
(35, 6, 10),
(35, 7, 18),
(35, 8, 16),
(36, 1, 16),
(36, 2, 1),
(36, 3, 16),
(36, 4, 6),
(36, 5, 19),
(36, 6, 0),
(36, 7, 0),
(36, 8, 16),
(37, 1, 17),
(37, 2, 14),
(37, 3, 11),
(37, 4, 8),
(37, 5, 14),
(37, 6, 8),
(37, 7, 19),
(37, 8, 6),
(38, 1, 3),
(38, 2, 5),
(38, 3, 19),
(38, 4, 11),
(38, 5, 17),
(38, 6, 9),
(38, 7, 8),
(38, 8, 11),
(39, 1, 19),
(39, 2, 5),
(39, 3, 17),
(39, 4, 16),
(39, 5, 15),
(39, 6, 19),
(39, 7, 12),
(39, 8, 9),
(40, 1, 18),
(40, 2, 8),
(40, 3, 16),
(40, 4, 4),
(40, 5, 11),
(40, 6, 19),
(40, 7, 14),
(40, 8, 14),
(41, 1, 16),
(41, 2, 8),
(41, 3, 1),
(41, 4, 2),
(41, 5, 2),
(41, 6, 18),
(41, 7, 5),
(41, 8, 13),
(42, 1, 4),
(42, 2, 1),
(42, 3, 12),
(42, 4, 15),
(42, 5, 17),
(42, 6, 16),
(42, 7, 11),
(42, 8, 11),
(43, 1, 10),
(43, 2, 13),
(43, 3, 0),
(43, 4, 11),
(43, 5, 5),
(43, 6, 6),
(43, 7, 12),
(43, 8, 2),
(44, 1, 1),
(44, 2, 18),
(44, 3, 9),
(44, 4, 3),
(44, 5, 5),
(44, 6, 12),
(44, 7, 16),
(44, 8, 4),
(45, 1, 13),
(45, 2, 0),
(45, 3, 4),
(45, 4, 16),
(45, 5, 18),
(45, 6, 5),
(45, 7, 0),
(45, 8, 7),
(46, 1, 4),
(46, 2, 12),
(46, 3, 17),
(46, 4, 3),
(46, 5, 15),
(46, 6, 0),
(46, 7, 4),
(46, 8, 16),
(47, 1, 17),
(47, 2, 15),
(47, 3, 18),
(47, 4, 10),
(47, 5, 16),
(47, 6, 18),
(47, 7, 9),
(47, 8, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id_producto` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `categoria` varchar(50) NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  `marca` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id_producto`, `nombre`, `categoria`, `precio`, `marca`) VALUES
(1, 'conjunto Valencia', 'armarios', '930', 'Vindred design'),
(2, 'conjunto Barcelona', 'armarios', '1200', 'Vindred design'),
(3, 'conjunto Palma', 'armarios', '1960', 'Vindred design'),
(4, 'conjunto Sevilla', 'armarios', '3000', 'Vindred design'),
(5, 'mesa Dalia', 'mesas', '120', 'Vindred design'),
(6, 'mesa Omar', 'mesas', '120', 'Vindred design'),
(7, 'mesa Amalia', 'mesas', '120', 'Vindred design'),
(8, 'mesa Sara', 'mesas', '120', 'Vindred design'),
(9, 'silla Wendy', 'sillas', '70', 'Vindred design'),
(10, 'silla Manolo', 'sillas', '80', 'Vindred design'),
(11, 'conjunto sal y pienta', 'decoración', '12', 'Innis decor'),
(12, 'cesta de mimbre', 'decoración', '16', 'Innis decor'),
(13, 'mueble auxiliar Mindy', 'muebles', '130', 'Vindred design'),
(14, 'conjunto Asia', 'lavabos', '450', 'Nivelu Italian Marmol'),
(15, 'conjunto Africa', 'lavabos', '470', 'Nivelu Italian Marmol'),
(16, 'conjunto America', 'lavabos', '530', 'Nivelu Italian Marmol'),
(17, 'espejo Caronte', 'espejos', '180', 'Tracia baños'),
(18, 'espejo Dunas', 'espejos', '160', 'Tracia baños'),
(19, 'espejo Santana', 'espejos', '230', 'Tracia baños'),
(20, 'lámpara Trompa Naranja', 'lámparas', '46', 'Lion lampes'),
(21, 'lámpara Pirámide', 'lámparas', '65', 'Lion lampes'),
(22, 'lámpara Cloe', 'lámparas', '25', 'Lion lampes'),
(23, 'sofá Roma', 'sofás', '521', 'Felicia confort'),
(24, 'sofá Europa', 'sofás', '725', 'Felicia confort'),
(25, 'estantería Tura', 'estanterías', '950', 'Vindred design'),
(26, 'estantería Kuzco', 'estanterías', '500', 'Vindred design'),
(27, 'estantería Irma', 'estanterías', '674', 'Vindred design'),
(28, 'Mueble TV Spark', 'muebles mustimedia', '300', 'Vindred design'),
(29, 'Mueble TV Acero', 'muebles mustimedia', '360', 'Vindred design'),
(30, 'Mesa de té Alicia', 'mesas de té', '370', 'Vindred design'),
(31, 'Mesa de té Liebre', 'mesas de té', '250', 'Vindred design'),
(32, 'Mesa de té Conejo', 'mesas de té', '360', 'Vindred design'),
(33, 'Set de cojines', 'decoración', '20', 'Innis decor'),
(34, 'Escultura de flamenco', 'decoración', '45', 'Innis decor'),
(35, 'Jarrón Azul', 'decoración', '30', 'Innis decor'),
(36, 'Cama Princesa', 'camas', '1025', 'Felicia confort'),
(37, 'Cama Marta', 'camas', '1600', 'Felicia confort'),
(38, 'Cama Bandera', 'camas', '820', 'Felicia confort'),
(39, 'Armario Toro', 'armarios', '900', 'Vindred design'),
(40, 'Armario Vaca', 'armarios', '956', 'Vindred design'),
(41, 'Armario Cabra', 'armarios', '736', 'Vindred design'),
(42, 'Cómoda Teca', 'cómodas', '252', 'Vindred design'),
(43, 'Cómoda Roble', 'cómodas', '202', 'Vindred design'),
(44, 'Cómoda Metálica', 'cómodas', '85', 'Vindred design'),
(45, 'Mesita de noche Osito', 'mesitas de noche', '83', 'Vindred design'),
(46, 'Mesita de noche Luna', 'mesitas de noche', '125', 'Vindred design'),
(47, 'Mesita de noche Estrella', 'mesitas de noche', '118', 'Vindred design');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tienda`
--

CREATE TABLE `tienda` (
  `id_tienda` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `ciudad` varchar(100) NOT NULL,
  `provincia` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tienda`
--

INSERT INTO `tienda` (`id_tienda`, `nombre`, `ciudad`, `provincia`) VALUES
(1, 'Muu Gijón', 'Gijón', 'Asturias'),
(2, 'Muu Oviedo', 'Oviedo', 'Asturias'),
(3, 'Muu Avilés', 'Avilés', 'Asturias'),
(4, 'Muu Pola de Siero', 'Pola de Siero', 'Asturias'),
(5, 'Muu Madrid Salamanca', 'Madrid', 'Madrid'),
(6, 'Muu Barcelona', 'Barcelona', 'Barcelona'),
(7, 'Muu Valencia', 'Valencia', 'Valencia'),
(8, 'Muu Madrid Tetuán', 'Madrid', 'Madrid');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `hay_descuento`
--
ALTER TABLE `hay_descuento`
  ADD PRIMARY KEY (`id_producto`,`id_tienda`),
  ADD KEY `id_tienda_descuento` (`id_tienda`);

--
-- Indices de la tabla `hay_existencia`
--
ALTER TABLE `hay_existencia`
  ADD PRIMARY KEY (`id_producto`,`id_tienda`),
  ADD KEY `id_tienda` (`id_tienda`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `tienda`
--
ALTER TABLE `tienda`
  ADD PRIMARY KEY (`id_tienda`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `hay_descuento`
--
ALTER TABLE `hay_descuento`
  ADD CONSTRAINT `id_producto_descuento` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`),
  ADD CONSTRAINT `id_tienda_descuento` FOREIGN KEY (`id_tienda`) REFERENCES `tienda` (`id_tienda`);

--
-- Filtros para la tabla `hay_existencia`
--
ALTER TABLE `hay_existencia`
  ADD CONSTRAINT `id_producto` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`),
  ADD CONSTRAINT `id_tienda` FOREIGN KEY (`id_tienda`) REFERENCES `tienda` (`id_tienda`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
