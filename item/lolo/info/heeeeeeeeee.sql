-- phpMyAdmin SQL Dump
-- version 4.0.10.14
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Jan 23, 2017 at 04:45 PM
-- Server version: 5.6.30-cll-lve
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `heeeeeeeeee`
--

-- --------------------------------------------------------

--
-- Table structure for table `he_humans`
--

CREATE TABLE IF NOT EXISTS `he_humans` (
  `id` bigint(12) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(25) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `emailstate` int(1) unsigned NOT NULL DEFAULT '1',
  `password` char(40) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(25) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `uniqid` varchar(55) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `avatar` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `back` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `tag` varchar(25) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `bio` varchar(125) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `myloloviewstate` int(1) unsigned NOT NULL DEFAULT '1',
  `lolotop` varchar(38) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Dumping data for table `he_humans`
--

INSERT INTO `he_humans` (`id`, `email`, `emailstate`, `password`, `name`, `uniqid`, `avatar`, `back`, `tag`, `bio`, `myloloviewstate`, `lolotop`) VALUES
(18, 'nnnnn@nn.nnn', 1, 'a2efbdfcaf888ebb8e3d3b658b2656bf6a8fcd5b', 'nnnnn', 'e911e680a4f80a99bb1911db215568cc4ebc633e18352', NULL, NULL, NULL, NULL, 1, NULL),
(19, 'xxxxx@xx.xxx', 1, '38a3feab8631d0d34798fd82972242b3fc8a3ad0', 'xxxxx', '3231a0eb46b5b54bf6f676f8c804d361557aa28c1916e', 'source/image/user/avatar/uava14851325337606.png', 'source/image/user/back/ubac14851324463eb44.png', NULL, '像纸飞机那样在一片无尽的绿色中滑来滑去 滑来滑去 滑来滑去 ...', 1, NULL),
(15, 'uuuuu@uu.uuu', 1, 'a2efbdfcaf888ebb8e3d3b658b2656bf6a8fcd5b', 'uuuuu', '44df771b92c6192b480a12447ecbedd0641f05bd153a8', NULL, NULL, NULL, NULL, 1, NULL),
(16, 'hhhhh@hh.hhh', 1, 'a2efbdfcaf888ebb8e3d3b658b2656bf6a8fcd5b', 'hhhhh', '6ff0425cabe8ddb9a54dcab2f1ac945f630f52901623e', 'source/image/user/avatar/uava1485186487c8952.png', 'source/image/user/back/ubac1485186458c0dc5.png', NULL, '世界武道变革先驱者、武术技击家、武术哲学家、UFC开创者、MMA之父、武术宗师、功夫片的开创者和截拳道创始人', 1, '19:369'),
(17, 'ooooo@oo.ooo', 1, 'a2efbdfcaf888ebb8e3d3b658b2656bf6a8fcd5b', 'ooooo', '6fcfff87d8a5eee522801c8ba104acab0a31e4531730d', NULL, NULL, NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `he_idea`
--

CREATE TABLE IF NOT EXISTS `he_idea` (
  `id` bigint(25) unsigned NOT NULL AUTO_INCREMENT,
  `hid` bigint(12) unsigned NOT NULL,
  `lans` varchar(125) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `image` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `imagename` varchar(250) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `tag` varchar(25) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `firstentertype` int(1) unsigned NOT NULL,
  `createtime` datetime NOT NULL,
  `timestate` int(1) unsigned NOT NULL DEFAULT '1',
  `destorytime` datetime NOT NULL,
  `processstate` int(1) unsigned NOT NULL DEFAULT '0',
  `avatar` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(25) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `back` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `bio` varchar(125) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `lanspre` varchar(125) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `imagepre` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=376 ;

--
-- Dumping data for table `he_idea`
--

INSERT INTO `he_idea` (`id`, `hid`, `lans`, `image`, `imagename`, `tag`, `firstentertype`, `createtime`, `timestate`, `destorytime`, `processstate`, `avatar`, `name`, `back`, `bio`, `lanspre`, `imagepre`) VALUES
(365, 15, NULL, 'source/image/idea/source/isou14851308754d7ed.png', '2_1', NULL, 2, '2017-01-23 08:21:15', 1, '2017-01-29 08:21:15', 1, '', 'uuuuu', NULL, NULL, NULL, NULL),
(366, 16, NULL, 'source/image/idea/source/isou1485130975da607.png', '11 (4)', 'image,destroy,sex', 2, '2017-01-23 08:22:55', 1, '2017-01-29 08:22:55', 2, 'source/image/user/avatar/uava1485186487c8952.png', 'hhhhh', 'source/image/user/back/ubac1485186458c0dc5.png', NULL, 'Snapchat is an image messaging and multimedia mobile application created by Evan Spiegel, Bobby Murphy, and Reggie Brown', NULL),
(367, 17, NULL, 'source/image/idea/source/isou148513106343d67.png', '672c20493cb3a846053c52720367fd30_original', NULL, 2, '2017-01-23 08:24:23', 1, '2017-01-29 08:24:23', 1, '', 'ooooo', NULL, NULL, NULL, NULL),
(368, 18, '长有尾巴的孙悟空天生神力，加上曾得到己过世的爷爷（孙悟饭）训练武术，所以悟空找寻七龙珠的期间多次打败作恶的坏人，并且认识了乌龙、乐平、龟仙人、牛魔王及其女儿琪琪等朋友', NULL, NULL, NULL, 1, '2017-01-23 08:27:45', 1, '2017-01-29 08:27:45', 1, '', 'nnnnn', NULL, NULL, NULL, NULL),
(369, 19, NULL, 'source/image/idea/source/isou14851315173991.png', 'audio', '音乐,酷狗,项目', 2, '2017-01-23 08:31:57', 1, '2017-01-29 08:31:57', 2, 'source/image/user/avatar/uava14851325337606.png', 'xxxxx', 'source/image/user/back/ubac14851324463eb44.png', NULL, '音乐总是如此的动人心弦', NULL),
(370, 19, NULL, 'source/image/idea/source/isou1485132553282d4.png', '1 (3)', NULL, 2, '2017-01-23 08:49:13', 1, '2017-01-29 08:49:13', 0, 'source/image/user/avatar/uava14851325337606.png', 'xxxxx', NULL, NULL, NULL, NULL),
(371, 16, NULL, 'source/image/idea/source/isou14851874646fb26.png', 'be0b753b2ed26b294be3a7c92a1935a4_original', NULL, 2, '2017-01-23 09:04:24', 1, '2017-01-29 09:04:24', 2, 'source/image/user/avatar/uava1485186487c8952.png', 'hhhhh', NULL, NULL, NULL, NULL),
(372, 16, 'Snapchat is an image messaging and multimedia mobile application created by Evan Spiegel, Bobby Murphy, and Reggie Brown', NULL, NULL, NULL, 1, '2017-01-23 09:06:23', 0, '2017-01-29 09:06:23', 0, 'source/image/user/avatar/uava1485186487c8952.png', 'hhhhh', NULL, NULL, NULL, 'source/image/idea/pre/isou14851875995a5a7.png');

-- --------------------------------------------------------

--
-- Table structure for table `he_ideacomment`
--

CREATE TABLE IF NOT EXISTS `he_ideacomment` (
  `id` bigint(125) unsigned NOT NULL AUTO_INCREMENT,
  `iid` bigint(25) unsigned NOT NULL,
  `commenthid` bigint(12) unsigned NOT NULL,
  `con` varchar(125) COLLATE utf8_unicode_ci NOT NULL,
  `avatar` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `createtime` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=86 ;

--
-- Dumping data for table `he_ideacomment`
--

INSERT INTO `he_ideacomment` (`id`, `iid`, `commenthid`, `con`, `avatar`, `name`, `createtime`) VALUES
(85, 366, 16, 'Snapchat is an image messaging and multimedia mobile application created by Evan Spiegel, Bobby Murphy, and Reggie Brown', 'source/image/user/avatar/uava1485186487c8952.png', 'hhhhh', '2017-01-23 09:02:30');

-- --------------------------------------------------------

--
-- Table structure for table `he_social`
--

CREATE TABLE IF NOT EXISTS `he_social` (
  `id` bigint(12) unsigned NOT NULL AUTO_INCREMENT,
  `hid` bigint(12) unsigned NOT NULL,
  `followinghid` longtext COLLATE utf8_unicode_ci,
  `followhid` longtext COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=16 ;

--
-- Dumping data for table `he_social`
--

INSERT INTO `he_social` (`id`, `hid`, `followinghid`, `followhid`) VALUES
(11, 19, '18,17,16', '16,16'),
(12, 18, NULL, '19'),
(13, 17, NULL, '19,16'),
(14, 16, '17', '19'),
(15, 15, NULL, '16');

-- --------------------------------------------------------

--
-- Table structure for table `he_works`
--

CREATE TABLE IF NOT EXISTS `he_works` (
  `id` bigint(125) unsigned NOT NULL AUTO_INCREMENT,
  `iid` bigint(25) unsigned NOT NULL,
  `hid` bigint(12) unsigned NOT NULL,
  `timepoint` varchar(125) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `des` varchar(125) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=606 ;

--
-- Dumping data for table `he_works`
--

INSERT INTO `he_works` (`id`, `iid`, `hid`, `timepoint`, `image`, `des`) VALUES
(603, 369, 19, '2017-01-23 08:34:24', 'source/image/works/wpro1485131664cbbe3.png', '微博'),
(602, 369, 19, '2017-01-23 08:33:40', 'source/image/works/wpro1485131620d0aef.png', '先说说酷狗'),
(601, 368, 18, '2017-01-23 08:30:38', 'source/image/works/wpro14851314385e224.png', '关于悟空一家'),
(598, 365, 15, '2017-01-23 08:21:35', 'source/image/works/wpro1485130895e4f70.png', 'one piece'),
(599, 366, 16, '2017-01-23 08:23:21', 'source/image/works/wpro14851310019e117.png', 'let''s start from Pinterest'),
(600, 367, 17, '2017-01-23 08:25:45', 'source/image/works/wpro148513114543d8c.png', '今天介绍一家来自美国的创业公司 wakawaka'),
(604, 366, 16, '2017-01-23 08:57:08', 'source/image/works/wpro1485187028ad2be.png', '接下来是 wechat'),
(605, 371, 16, '2017-01-23 09:05:22', 'source/image/works/wpro148518752249e9c.png', '一架完全由大麻材料构造的飞机');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
