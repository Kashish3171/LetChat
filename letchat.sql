-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 12, 2017 at 07:30 PM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `letchat`
--

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE IF NOT EXISTS `message` (
  `id` int(10) NOT NULL,
  `text` varchar(500) NOT NULL,
  `date` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`id`, `text`, `date`) VALUES
(3, 'hi', 1499880508),
(5, 'hi', 1499880565),
(3, 'ksa h ldke', 1499880572),
(5, 'jee rhe h bahi', 1499880579),
(3, 'bdiya bhai', 1499880586);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
`id` int(5) NOT NULL,
  `fname` varchar(25) NOT NULL,
  `lname` varchar(25) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(32) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fname`, `lname`, `email`, `password`) VALUES
(3, 'Kashish', 'goyal', 'coolkashishgoyal@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b'),
(4, 'Arjun', 'Singh', 'arjun@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b'),
(5, 'raj', 'kumar', 'raj@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b'),
(6, 'prince', 'mittal', 'pm@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b'),
(7, 'alpha', 'caaling', 'a@gmail.com', 'b936af6bcd25b420ee52ae32a21de129'),
(8, 'gbh', 'wsdefg', 'erty@gmail.com', 'adcaec3805aa912c0d0b14a81bedb6ff');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
MODIFY `id` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
