-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2024-07-08 16:32:32
-- 伺服器版本： 10.4.32-MariaDB
-- PHP 版本： 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `nodejs`
--

-- --------------------------------------------------------

--
-- 資料表結構 `expense`
--

CREATE TABLE `expense` (
  `id` int(15) NOT NULL,
  `title` varchar(50) NOT NULL,
  `sort` int(2) NOT NULL,
  `money` int(10) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `expense`
--

INSERT INTO `expense` (`id`, `title`, `sort`, `money`, `date`) VALUES
(1, '咖啡', 2, 38, '2024-07-08'),
(2, 'PS5', 5, 15000, '2024-06-24'),
(3, 'YEE大利麵', 1, 180, '2024-07-08'),
(4, '牛奶', 2, 50, '2024-07-08'),
(5, 'Iphone充電線', 7, 200, '2024-07-08');

-- --------------------------------------------------------

--
-- 資料表結構 `sort`
--

CREATE TABLE `sort` (
  `id` int(2) NOT NULL,
  `name` varchar(50) NOT NULL,
  `isvalid` int(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `sort`
--

INSERT INTO `sort` (`id`, `name`, `isvalid`) VALUES
(1, '食物', 0),
(2, '飲品', 0),
(3, '交通', 0),
(4, '消費', 0),
(5, '娛樂', 0),
(6, '居家', 0),
(7, '3C', 0),
(8, '醫療', 0),
(9, '其他', 0),
(10, '收入', 0);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `expense`
--
ALTER TABLE `expense`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `sort`
--
ALTER TABLE `sort`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `expense`
--
ALTER TABLE `expense`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
