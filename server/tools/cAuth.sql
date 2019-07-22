/*
 Navicat Premium Data Transfer

 Source Server         : Localhost
 Source Server Type    : MySQL
 Source Server Version : 50717
 Source Host           : localhost
 Source Database       : cAuth

 Target Server Type    : MySQL
 Target Server Version : 50717
 File Encoding         : utf-8

 Date: 08/10/2017 22:22:52 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `cSessionInfo`
-- ----------------------------
DROP TABLE IF EXISTS `cSessionInfo`;
CREATE TABLE `cSessionInfo` (
  `open_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `uuid` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `skey` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_visit_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `session_key` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_info` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`open_id`),
  KEY `openid` (`open_id`) USING BTREE,
  KEY `skey` (`skey`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='会话管理用户信息';

DROP TABLE IF EXISTS `class`;
CREATE TABLE `class` (
  `Date` date COLLATE utf8mb4_unicode_ci NOT NULL,
  `Number` varchar(100)  NOT NULL,
  `CName` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `SName` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='class';

DROP TABLE IF EXISTS `coach`;
CREATE TABLE `coach` (
  `CName` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `School` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL ,
  `CTel` varchar(100)  NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='coach';

DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `SName` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `STel` varchar(100)  NOT NULL,
  `Time` date NOT NULL,
  `SCoach` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hasCoach` char(5) NOT NULL,
  `isWhite` char(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='student';

INSERT INTO `coach` VALUES ('张顺','东源驾校','15940453453');
INSERT INTO `student` VALUES ('张力','18852349583','2018-5-10','张顺','Y','Y');
SET FOREIGN_KEY_CHECKS = 1;
