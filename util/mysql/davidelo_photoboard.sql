-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Creato il: Mag 21, 2023 alle 19:03
-- Versione del server: 5.7.39
-- Versione PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `davidelo_photoboard`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `albums`
--

CREATE TABLE `albums` (
  `id` int(16) NOT NULL,
  `usr_id` int(16) NOT NULL,
  `date` date NOT NULL,
  `version` int(16) NOT NULL,
  `page` int(16) NOT NULL,
  `img` varchar(52) NOT NULL,
  `msg` longtext NOT NULL,
  `mod` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `albums`
--

INSERT INTO `albums` (`id`, `usr_id`, `date`, `version`, `page`, `img`, `msg`, `mod`) VALUES
(1, 1, '2021-07-12', 0, 0, 'pippo.jpg', 'testo di esempio', 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `clients`
--

CREATE TABLE `clients` (
  `id` int(16) NOT NULL,
  `c_date` date NOT NULL,
  `usr_id` int(16) NOT NULL,
  `ph_id` int(16) NOT NULL,
  `name` varchar(52) NOT NULL,
  `surname` varchar(52) NOT NULL,
  `email` varchar(52) NOT NULL,
  `phone` varchar(52) NOT NULL,
  `contract` varchar(52) NOT NULL,
  `album_id` int(16) NOT NULL,
  `gallery_id` int(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `clients`
--

INSERT INTO `clients` (`id`, `c_date`, `usr_id`, `ph_id`, `name`, `surname`, `email`, `phone`, `contract`, `album_id`, `gallery_id`) VALUES
(1, '2023-05-18', 2, 1, 'Peter', 'Parker', 'peterparker@gmail.com', '3456567865', 'test-contratto.pdf', 0, 0),
(7, '2023-02-09', 10, 1, 'pppppp', 'pppppp', 'pppppp@pppppp.com', '33333', 'pppp.pdf', -1, -1),
(8, '2023-05-11', 10, 1, 'Davide', 'Longo', 'pppppp@pppppp.com', '3406704647', '', -1, -1),
(11, '2023-05-06', 12, 1, 'chiara', 'bert', 'bertonechiara@gmail.com', '3406704647', '', -1, -1),
(12, '2023-05-04', 12, 1, 'Davide', 'Longo', 'bertonechiara@gmail.com', '3406704647', '', -1, -1),
(13, '2023-05-03', 12, 1, 'chiara', 'Longo', 'bertonechiara@gmail.com', '3406704647', '', -1, -1),
(14, '2023-05-03', 10, 1, 'alberto', 'rossi', 'pppppp@pppppp.com', '9485969049', '', -1, -1),
(15, '2023-05-04', 12, 1, 'Davide', 'Longo', 'bertonechiara@gmail.com', '3406704647', '', -1, -1),
(16, '2023-05-11', 17, 1, 'Davide', 'Longo', 'davide.longo.joy@gmail.com', '3406704647', '2023-05-11_1-DavideLongo-contract.svg+xml', -1, -1),
(17, '2023-05-04', 17, 1, 'Davide', 'Longo', 'davide.longo.joy@gmail.com', '3406704647', '2023-05-04_1-DavideLongo-contract.svg+xml', -1, -1),
(18, '2023-05-04', 17, 1, 'Davide', 'Longo', 'davide.longo.joy@gmail.com', '3406704647', '2023-05-04_1-DavideLongo-contract.octet-stream', -1, -1),
(19, '2023-05-04', 17, 1, 'Davide', 'Longo', 'davide.longo.joy@gmail.com', '3406704647', '2023-05-04_1-DavideLongo-contract.svg+xml', -1, -1),
(20, '2023-05-10', 17, 1, 'FRANCO', 'VERDI', 'davide.longo.joy@gmail.com', '3406704647', '2023-05-10_1-FRANCOVERDI-contract.octet-stream', -1, -1),
(21, '2023-05-10', 17, 1, 'ALFREDO', 'Longo', 'davide.longo.joy@gmail.com', '3406704647', '2023-05-10_1-ALFREDOLongo-contract.pdf', -1, -1),
(22, '2023-05-05', 17, 1, 'CINZIA', 'Longo', 'davide.longo.joy@gmail.com', '3406704647', '', -1, -1),
(23, '2023-05-25', 17, 1, 'GISELLA', 'Longo', 'davide.longo.joy@gmail.com', '3406704647', '2023-05-25_1-GISELLALongo-contract.pdf', -1, -1);

-- --------------------------------------------------------

--
-- Struttura della tabella `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `sid` varchar(128) NOT NULL,
  `lvl` int(11) NOT NULL,
  `usr` varchar(128) NOT NULL,
  `psw` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `users`
--

INSERT INTO `users` (`id`, `sid`, `lvl`, `usr`, `psw`) VALUES
(1, '', 2, 'johnsmith', 'johnsmith'),
(2, '', 1, 'peterparker@gmail.com', 'peterparker'),
(10, '', 1, 'pppppp@pppppp.com', 'pppppp'),
(12, '', 1, 'bertonechiara@gmail.com', 'bertonechiara'),
(17, '', 1, 'davide.longo.joy@gmail.com', 'davidelongorrrr');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usr` (`usr`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `albums`
--
ALTER TABLE `albums`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT per la tabella `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT per la tabella `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
