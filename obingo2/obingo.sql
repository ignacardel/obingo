-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 06, 2011 at 03:46 AM
-- Server version: 5.5.9
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `obingo`
--
CREATE DATABASE `obingo` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `obingo`;

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `login` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  PRIMARY KEY (`login`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--


-- --------------------------------------------------------

--
-- Table structure for table `patron`
--

CREATE TABLE `patron` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `patron`
--

INSERT INTO `patron` VALUES(3, '4 esquinas');
INSERT INTO `patron` VALUES(4, 'Cruz');
INSERT INTO `patron` VALUES(1, 'Horizontal');
INSERT INTO `patron` VALUES(2, 'Vertical');

-- --------------------------------------------------------

--
-- Table structure for table `posicionespatron`
--

CREATE TABLE `posicionespatron` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `patron_id` int(11) NOT NULL,
  `posicion` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `patron_id` (`patron_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `posicionespatron`
--

INSERT INTO `posicionespatron` VALUES(1, 3, 0);
INSERT INTO `posicionespatron` VALUES(2, 3, 4);
INSERT INTO `posicionespatron` VALUES(3, 3, 19);
INSERT INTO `posicionespatron` VALUES(4, 3, 23);
INSERT INTO `posicionespatron` VALUES(5, 4, 2);
INSERT INTO `posicionespatron` VALUES(6, 4, 7);
INSERT INTO `posicionespatron` VALUES(7, 4, 10);
INSERT INTO `posicionespatron` VALUES(8, 4, 11);
INSERT INTO `posicionespatron` VALUES(9, 4, 12);
INSERT INTO `posicionespatron` VALUES(10, 4, 13);
INSERT INTO `posicionespatron` VALUES(11, 4, 16);
INSERT INTO `posicionespatron` VALUES(12, 4, 21);

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombres` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `telf` bigint(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `usuario`
--


--
-- Constraints for dumped tables
--

--
-- Constraints for table `posicionespatron`
--
ALTER TABLE `posicionespatron`
  ADD CONSTRAINT `posicionespatron_ibfk_1` FOREIGN KEY (`patron_id`) REFERENCES `patron` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
