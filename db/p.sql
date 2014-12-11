/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50614
Source Host           : localhost:3306
Source Database       : promoplat

Target Server Type    : MYSQL
Target Server Version : 50614
File Encoding         : 65001

Date: 2014-11-14 18:26:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `advertisements`
-- ----------------------------
DROP TABLE IF EXISTS `advertisements`;
CREATE TABLE `advertisements` (
  `ad_id` int(11) NOT NULL AUTO_INCREMENT,
  `ad_name` varchar(100) DEFAULT NULL COMMENT '广告名称',
  `ad_url` varchar(200) NOT NULL,
  `ad_sort` int(11) NOT NULL DEFAULT '255' COMMENT '广告位置排列顺序',
  PRIMARY KEY (`ad_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of advertisements
-- ----------------------------

-- ----------------------------
-- Table structure for `goods`
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `gd_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品id作为主键',
  `gd_name` varchar(30) NOT NULL COMMENT '商品名称',
  `gd_code` varchar(30) NOT NULL COMMENT '货号',
  `gd_price` float NOT NULL COMMENT '商品价格',
  `gd_formerprice` float DEFAULT NULL COMMENT '促销价格',
  `gd_store` int(11) NOT NULL COMMENT '库存',
  `gd_intro` varchar(200) DEFAULT NULL COMMENT '商品简介',
  `gd_photo` varchar(200) NOT NULL COMMENT '图片地址',
  `gd_sort` int(11) NOT NULL DEFAULT '255' COMMENT '商品排列优先级（由商家设置，越小优先级越高，排列越靠前）',
  `fk_gt_id` int(11) NOT NULL COMMENT '商品类别id作为外键',
  PRIMARY KEY (`gd_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------

-- ----------------------------
-- Table structure for `goodstype`
-- ----------------------------
DROP TABLE IF EXISTS `goodstype`;
CREATE TABLE `goodstype` (
  `gt_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品类别id作为主键',
  `gt_name` varchar(30) NOT NULL COMMENT '类别名',
  `fk_seller_id` int(11) NOT NULL COMMENT '卖家id作为外键',
  `gt_sort` int(11) DEFAULT '255' COMMENT '位置排序',
  PRIMARY KEY (`gt_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodstype
-- ----------------------------

-- ----------------------------
-- Table structure for `seller`
-- ----------------------------
DROP TABLE IF EXISTS `seller`;
CREATE TABLE `seller` (
  `sell_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id作为主键',
  `sell_name` varchar(30) NOT NULL COMMENT '用户名',
  `sell_real_name` varchar(30) DEFAULT NULL COMMENT '用户真实姓名',
  `sell_pwd` varchar(30) NOT NULL COMMENT '密码',
  `phone_num` varchar(11) NOT NULL COMMENT '手机号',
  `mail_box` varchar(50) NOT NULL COMMENT '邮箱',
  `verify_valid` int(11) NOT NULL DEFAULT '0' COMMENT '是否通过验证（手机验证）0：未通过  1：通过',
  `serv_level` int(11) NOT NULL DEFAULT '0' COMMENT '服务等级（0:不提供任何服务 1：）',
  `shop_name` varchar(30) DEFAULT NULL COMMENT '商铺名称',
  `shop_logo` varchar(100) DEFAULT NULL COMMENT 'logo地址',
  `shop_bg` varchar(100) DEFAULT NULL COMMENT '商家背景图片地址',
  `shop_address` varchar(100) DEFAULT NULL COMMENT '商家地址',
  `shop_phone` varchar(13) DEFAULT NULL COMMENT '商家联系电话',
  `shop_qq` varchar(15) DEFAULT NULL COMMENT '商家联系qq号',
  `gold_count` float NOT NULL DEFAULT '0' COMMENT '充值金币数',
  `gener_html5` int(11) NOT NULL DEFAULT '0' COMMENT '是否已生成HTML5版APP',
  `gener_android_app` int(11) NOT NULL DEFAULT '0' COMMENT '是否已生成android版app',
  PRIMARY KEY (`sell_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of seller
-- ----------------------------
