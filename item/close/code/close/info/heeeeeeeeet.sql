-- phpMyAdmin SQL Dump
-- version 4.6.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 19, 2017 at 03:51 PM
-- Server version: 5.7.13-log
-- PHP Version: 5.6.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `heeeeeeeeet`
--

-- --------------------------------------------------------

--
-- Table structure for table `he_calbum`
--

CREATE TABLE `he_calbum` (
  `Calbum_id` bigint(12) UNSIGNED NOT NULL,
  `Calbum_name` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `Calbum_face` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Calbum_des` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Calbum_dir` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `Calbum_type` int(1) UNSIGNED NOT NULL,
  `Calbum_cid` bigint(12) UNSIGNED NOT NULL,
  `Calbum_hid` bigint(12) UNSIGNED NOT NULL,
  `Calbum_time` datetime NOT NULL,
  `Calbum_updtime` datetime NOT NULL,
  `Calbum_infousedstate` int(1) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `he_casource1`
--

CREATE TABLE `he_casource1` (
  `id` bigint(12) UNSIGNED NOT NULL,
  `name` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `des` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `url` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(12) COLLATE utf8_unicode_ci NOT NULL,
  `ssize` varchar(25) COLLATE utf8_unicode_ci NOT NULL DEFAULT '500*500',
  `fsize` varchar(25) COLLATE utf8_unicode_ci NOT NULL DEFAULT '2.5MB',
  `aid` bigint(12) UNSIGNED NOT NULL,
  `cid` bigint(12) NOT NULL,
  `hid` bigint(12) UNSIGNED NOT NULL,
  `addtime` datetime NOT NULL,
  `updtime` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `he_cinfo`
--

CREATE TABLE `he_cinfo` (
  `id` bigint(12) UNSIGNED NOT NULL,
  `con` longtext COLLATE utf8_unicode_ci,
  `cid` bigint(12) UNSIGNED NOT NULL,
  `hid` bigint(12) UNSIGNED NOT NULL,
  `updtime` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `he_cinfop`
--

CREATE TABLE `he_cinfop` (
  `id` bigint(12) UNSIGNED NOT NULL,
  `url` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `des` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `iid` bigint(12) UNSIGNED NOT NULL,
  `cid` bigint(12) UNSIGNED NOT NULL,
  `hid` bigint(12) UNSIGNED NOT NULL,
  `intime` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `he_close`
--

CREATE TABLE `he_close` (
  `Close_id` bigint(12) UNSIGNED NOT NULL,
  `Close_name` varchar(25) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Close_face` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Close_des` varchar(250) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `Close_dir` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Close_hid` bigint(12) UNSIGNED NOT NULL,
  `Close_time` datetime NOT NULL,
  `Close_updtime` datetime NOT NULL,
  `Close_state` int(1) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `he_fileboxpic`
--

CREATE TABLE `he_fileboxpic` (
  `Fileboxpic_id` bigint(12) UNSIGNED NOT NULL,
  `Fileboxpic_path` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `Fileboxpic_name` varchar(125) COLLATE utf8_unicode_ci NOT NULL,
  `Fileboxpic_type` varchar(12) COLLATE utf8_unicode_ci NOT NULL,
  `Fileboxpic_ssize` varchar(25) COLLATE utf8_unicode_ci NOT NULL DEFAULT '500*500',
  `Fileboxpic_fsize` varchar(25) COLLATE utf8_unicode_ci NOT NULL DEFAULT '2.5M',
  `Fileboxpic_uptime` datetime NOT NULL,
  `Fileboxpic_hid` bigint(12) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `he_humans`
--

CREATE TABLE `he_humans` (
  `Humans_id` bigint(12) UNSIGNED NOT NULL,
  `Humans_email` varchar(25) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Humans_password` char(40) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Humans_name` varchar(25) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Humans_uniqid` varchar(55) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Humans_sourcepath` varchar(25) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Humans_avatar` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `Humans_closenum` bigint(12) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `he_sortalbum`
--

CREATE TABLE `he_sortalbum` (
  `Sort_id` bigint(12) UNSIGNED NOT NULL,
  `Sort_sor` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `Sort_atype` int(1) UNSIGNED NOT NULL,
  `Sort_cid` bigint(12) UNSIGNED NOT NULL,
  `Sort_hid` bigint(12) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `he_sortclose`
--

CREATE TABLE `he_sortclose` (
  `Sort_id` bigint(12) UNSIGNED NOT NULL,
  `Sort_sort` varchar(250) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Sort_hid` bigint(12) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `he_sortsource1`
--

CREATE TABLE `he_sortsource1` (
  `id` bigint(12) UNSIGNED NOT NULL,
  `sort` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `aid` bigint(12) UNSIGNED NOT NULL,
  `cid` bigint(12) UNSIGNED NOT NULL,
  `hid` bigint(12) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `he_calbum`
--
ALTER TABLE `he_calbum`
  ADD PRIMARY KEY (`Calbum_id`);

--
-- Indexes for table `he_casource1`
--
ALTER TABLE `he_casource1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `he_cinfo`
--
ALTER TABLE `he_cinfo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `he_cinfop`
--
ALTER TABLE `he_cinfop`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `he_close`
--
ALTER TABLE `he_close`
  ADD PRIMARY KEY (`Close_id`);

--
-- Indexes for table `he_fileboxpic`
--
ALTER TABLE `he_fileboxpic`
  ADD PRIMARY KEY (`Fileboxpic_id`);

--
-- Indexes for table `he_humans`
--
ALTER TABLE `he_humans`
  ADD PRIMARY KEY (`Humans_id`),
  ADD UNIQUE KEY `Humans_email` (`Humans_email`),
  ADD UNIQUE KEY `Humans_uniqid` (`Humans_uniqid`),
  ADD UNIQUE KEY `Humans_firstpath` (`Humans_sourcepath`);

--
-- Indexes for table `he_sortalbum`
--
ALTER TABLE `he_sortalbum`
  ADD PRIMARY KEY (`Sort_id`);

--
-- Indexes for table `he_sortclose`
--
ALTER TABLE `he_sortclose`
  ADD PRIMARY KEY (`Sort_id`);

--
-- Indexes for table `he_sortsource1`
--
ALTER TABLE `he_sortsource1`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `he_calbum`
--
ALTER TABLE `he_calbum`
  MODIFY `Calbum_id` bigint(12) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=384;
--
-- AUTO_INCREMENT for table `he_casource1`
--
ALTER TABLE `he_casource1`
  MODIFY `id` bigint(12) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=741;
--
-- AUTO_INCREMENT for table `he_cinfo`
--
ALTER TABLE `he_cinfo`
  MODIFY `id` bigint(12) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;
--
-- AUTO_INCREMENT for table `he_cinfop`
--
ALTER TABLE `he_cinfop`
  MODIFY `id` bigint(12) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=243;
--
-- AUTO_INCREMENT for table `he_close`
--
ALTER TABLE `he_close`
  MODIFY `Close_id` bigint(12) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=337;
--
-- AUTO_INCREMENT for table `he_fileboxpic`
--
ALTER TABLE `he_fileboxpic`
  MODIFY `Fileboxpic_id` bigint(12) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=366;
--
-- AUTO_INCREMENT for table `he_humans`
--
ALTER TABLE `he_humans`
  MODIFY `Humans_id` bigint(12) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;
--
-- AUTO_INCREMENT for table `he_sortalbum`
--
ALTER TABLE `he_sortalbum`
  MODIFY `Sort_id` bigint(12) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;
--
-- AUTO_INCREMENT for table `he_sortclose`
--
ALTER TABLE `he_sortclose`
  MODIFY `Sort_id` bigint(12) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `he_sortsource1`
--
ALTER TABLE `he_sortsource1`
  MODIFY `id` bigint(12) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
