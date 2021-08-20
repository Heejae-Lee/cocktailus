-- MySQL dump 10.13  Distrib 8.0.26, for Linux (x86_64)
--
-- Host: localhost    Database: cocktailer
-- ------------------------------------------------------
-- Server version	8.0.26-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `article_id` bigint DEFAULT NULL,
  `content` longtext,
  `created` datetime(6) DEFAULT NULL,
  `member_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (2,1,'asdfadsf','2021-08-17 03:49:10.200000','lktgt'),(3,1,'gdsagds','2021-08-17 03:49:11.559000','lktgt'),(5,8,'와... 장난아닌것 같아요','2021-08-17 12:36:04.600000','domain'),(6,8,'너무 맛있을것같음','2021-08-17 12:36:08.536000','domain'),(7,3,'언제까지 어깨춤을 추게할꺼야!','2021-08-17 12:39:42.852000','domain'),(9,2,'역시 소맥이 최고!','2021-08-17 13:45:33.481000','지환'),(10,11,'맛있어 보이는데 이름이 야하네요 ㅎㅎ..','2021-08-17 14:02:26.432000','복숭아술'),(11,9,'오렌지 주스 술을 좋아하는데 다음에 한번 도전해봐야겠네요!','2021-08-17 14:03:20.792000','주정뱅이'),(12,10,'크렌베리주스가 칵테일을 색을 정말 예쁘게 하네요~','2021-08-17 14:04:12.668000','1일1칵테일'),(13,11,'한 잔 마셔보니 달달해서 마시기 좋네요!','2021-08-17 14:10:01.704000','술식가'),(14,10,'맛은 있는데... 저에게는 약한 도수네요...','2021-08-17 14:13:44.449000','스미노프'),(15,9,'털투성이라는 의미와는 다르게 의외로 달달하네요~','2021-08-17 14:19:33.035000','달달한술주세용'),(16,11,'여러잔 먹다보면 저도 모르게 많이 취하네요 ㅠㅠ','2021-08-17 14:25:03.826000','딱한잔'),(20,10,'칵테일 맛있어 보이네요!','2021-08-19 02:51:40.319000','신교');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `article_id` bigint NOT NULL,
  `member_name` varchar(255) NOT NULL,
  `liked` bit(1) DEFAULT NULL,
  PRIMARY KEY (`article_id`,`member_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES (1,'domain',_binary '\0'),(1,'복숭아술',_binary '\0'),(2,'1일1칵테일',_binary '\0'),(2,'domain',_binary ''),(2,'lktgt',_binary '\0'),(2,'ssafy',_binary '\0'),(2,'usTeam',_binary '\0'),(2,'김싸피',_binary '\0'),(2,'달달한술주세용',_binary '\0'),(2,'복숭아술',_binary '\0'),(2,'스미노프',_binary '\0'),(2,'신교',_binary '\0'),(2,'안녕하세요',_binary ''),(2,'알콜홀릭',_binary '\0'),(2,'지환',_binary ''),(3,'1일1칵테일',_binary '\0'),(3,'domain',_binary ''),(3,'lktgt',_binary ''),(3,'ssafy',_binary '\0'),(3,'testtest',_binary ''),(3,'usTeam',_binary '\0'),(3,'김싸피',_binary '\0'),(3,'달달한술주세용',_binary '\0'),(3,'복숭아술',_binary '\0'),(3,'스미노프',_binary '\0'),(3,'신교',_binary '\0'),(3,'안녕하세요',_binary '\0'),(3,'알콜홀릭',_binary '\0'),(3,'지환',_binary ''),(4,'1일1칵테일',_binary '\0'),(4,'domain',_binary ''),(4,'lktgt',_binary ''),(4,'ssafy',_binary '\0'),(4,'usTeam',_binary '\0'),(4,'김싸피',_binary ''),(4,'달달한술주세용',_binary '\0'),(4,'복숭아술',_binary '\0'),(4,'스미노프',_binary '\0'),(4,'신교',_binary '\0'),(4,'안녕하세요',_binary '\0'),(4,'알콜홀릭',_binary '\0'),(4,'지환',_binary '\0'),(5,'1일1칵테일',_binary '\0'),(5,'domain',_binary ''),(5,'lktgt',_binary '\0'),(5,'ssafy',_binary '\0'),(5,'usTeam',_binary '\0'),(5,'김싸피',_binary '\0'),(5,'달달한술주세용',_binary '\0'),(5,'복숭아술',_binary '\0'),(5,'스미노프',_binary '\0'),(5,'신교',_binary '\0'),(5,'안녕하세요',_binary '\0'),(5,'알콜홀릭',_binary '\0'),(5,'지환',_binary '\0'),(6,'1일1칵테일',_binary '\0'),(6,'domain',_binary ''),(6,'lktgt',_binary '\0'),(6,'ssafy',_binary '\0'),(6,'testtest',_binary ''),(6,'usTeam',_binary '\0'),(6,'김싸피',_binary '\0'),(6,'달달한술주세용',_binary '\0'),(6,'복숭아술',_binary '\0'),(6,'스미노프',_binary '\0'),(6,'신교',_binary '\0'),(6,'안녕하세요',_binary ''),(6,'알콜홀릭',_binary '\0'),(6,'지환',_binary ''),(7,'1일1칵테일',_binary '\0'),(7,'domain',_binary ''),(7,'lktgt',_binary '\0'),(7,'ssafy',_binary '\0'),(7,'usTeam',_binary '\0'),(7,'김싸피',_binary '\0'),(7,'달달한술주세용',_binary '\0'),(7,'복숭아술',_binary '\0'),(7,'스미노프',_binary '\0'),(7,'신교',_binary '\0'),(7,'안녕하세요',_binary '\0'),(7,'알콜홀릭',_binary '\0'),(7,'지환',_binary '\0'),(8,'1일1칵테일',_binary '\0'),(8,'domain',_binary ''),(8,'lktgt',_binary '\0'),(8,'ssafy',_binary '\0'),(8,'usTeam',_binary '\0'),(8,'김싸피',_binary '\0'),(8,'달달한술주세용',_binary '\0'),(8,'복숭아술',_binary '\0'),(8,'스미노프',_binary '\0'),(8,'신교',_binary '\0'),(8,'안녕하세요',_binary '\0'),(8,'알콜홀릭',_binary '\0'),(8,'지환',_binary '\0'),(9,'1일1칵테일',_binary '\0'),(9,'domain',_binary ''),(9,'lktgt',_binary '\0'),(9,'ssafy',_binary ''),(9,'usTeam',_binary ''),(9,'김싸피',_binary '\0'),(9,'달달한술주세용',_binary ''),(9,'복숭아술',_binary ''),(9,'스미노프',_binary ''),(9,'신교',_binary ''),(9,'안녕하세요',_binary '\0'),(9,'알콜홀릭',_binary ''),(9,'지환',_binary '\0'),(9,'칵테일러버',_binary '\0'),(10,'1일1칵테일',_binary '\0'),(10,'domain',_binary ''),(10,'lktgt',_binary '\0'),(10,'ssafy',_binary '\0'),(10,'usTeam',_binary ''),(10,'김싸피',_binary '\0'),(10,'달달한술주세용',_binary ''),(10,'복숭아술',_binary ''),(10,'스미노프',_binary ''),(10,'신교',_binary ''),(10,'안녕하세요',_binary '\0'),(10,'알콜홀릭',_binary ''),(10,'지환',_binary '\0'),(10,'칵테일러버',_binary '\0'),(11,'1일1칵테일',_binary '\0'),(11,'domain',_binary ''),(11,'lktgt',_binary '\0'),(11,'ssafy',_binary '\0'),(11,'usTeam',_binary ''),(11,'김싸피',_binary '\0'),(11,'달달한술주세용',_binary ''),(11,'복숭아술',_binary ''),(11,'스미노프',_binary ''),(11,'신교',_binary ''),(11,'안녕하세요',_binary '\0'),(11,'알콜홀릭',_binary ''),(11,'주류전문가',_binary '\0'),(11,'지환',_binary '\0'),(12,'1일1칵테일',_binary '\0'),(12,'domain',_binary ''),(12,'lktgt',_binary ''),(12,'ssafy',_binary '\0'),(12,'usTeam',_binary '\0'),(12,'김싸피',_binary '\0'),(12,'달달한술주세용',_binary '\0'),(12,'복숭아술',_binary '\0'),(12,'술전도사',_binary '\0'),(12,'스미노프',_binary '\0'),(12,'신교',_binary '\0'),(12,'안녕하세요',_binary '\0'),(12,'알콜홀릭',_binary '\0'),(12,'지환',_binary '\0'),(13,'1일1칵테일',_binary '\0'),(13,'domain',_binary ''),(13,'lktgt',_binary '\0'),(13,'ssafy',_binary '\0'),(13,'usTeam',_binary '\0'),(13,'김싸피',_binary '\0'),(13,'달달한술주세용',_binary '\0'),(13,'복숭아술',_binary '\0'),(13,'스미노프',_binary '\0'),(13,'신교',_binary '\0'),(13,'안녕하세요',_binary '\0'),(13,'알콜홀릭',_binary '\0'),(13,'지환',_binary '\0'),(14,'1일1칵테일',_binary '\0'),(14,'domain',_binary ''),(14,'lktgt',_binary '\0'),(14,'ssafy',_binary '\0'),(14,'usTeam',_binary '\0'),(14,'김싸피',_binary '\0'),(14,'달달한술주세용',_binary '\0'),(14,'복숭아술',_binary '\0'),(14,'스미노프',_binary '\0'),(14,'신교',_binary '\0'),(14,'안녕하세요',_binary '\0'),(14,'알콜홀릭',_binary '\0'),(14,'주정뱅이',_binary '\0'),(14,'지환',_binary '\0'),(15,'1일1칵테일',_binary '\0'),(15,'domain',_binary '\0'),(15,'lktgt',_binary '\0'),(15,'ssafy',_binary '\0'),(15,'usTeam',_binary '\0'),(15,'김싸피',_binary '\0'),(15,'달달한술주세용',_binary '\0'),(15,'복숭아술',_binary '\0'),(15,'스미노프',_binary '\0'),(15,'신교',_binary '\0'),(15,'안녕하세요',_binary '\0'),(15,'알콜홀릭',_binary '\0'),(15,'지환',_binary '\0'),(16,'1일1칵테일',_binary '\0'),(16,'domain',_binary ''),(16,'lktgt',_binary '\0'),(16,'ssafy',_binary '\0'),(16,'usTeam',_binary '\0'),(16,'김싸피',_binary '\0'),(16,'달달한술주세용',_binary '\0'),(16,'복숭아술',_binary '\0'),(16,'술식가',_binary '\0'),(16,'스미노프',_binary '\0'),(16,'신교',_binary '\0'),(16,'안녕하세요',_binary '\0'),(16,'알콜홀릭',_binary '\0'),(16,'지환',_binary '\0'),(17,'1일1칵테일',_binary '\0'),(17,'domain',_binary '\0'),(17,'lktgt',_binary '\0'),(17,'ssafy',_binary '\0'),(17,'usTeam',_binary '\0'),(17,'김싸피',_binary '\0'),(17,'달달한술주세용',_binary '\0'),(17,'복숭아술',_binary '\0'),(17,'스미노프',_binary '\0'),(17,'신교',_binary '\0'),(17,'안녕하세요',_binary '\0'),(17,'알콜홀릭',_binary '\0'),(17,'지환',_binary '\0'),(18,'1일1칵테일',_binary '\0'),(18,'domain',_binary '\0'),(18,'lktgt',_binary '\0'),(18,'ssafy',_binary '\0'),(18,'usTeam',_binary '\0'),(18,'김싸피',_binary '\0'),(18,'달달한술주세용',_binary '\0'),(18,'복숭아술',_binary '\0'),(18,'스미노프',_binary '\0'),(18,'신교',_binary '\0'),(18,'안녕하세요',_binary '\0'),(18,'알콜홀릭',_binary '\0'),(18,'지환',_binary '\0'),(19,'1일1칵테일',_binary '\0'),(19,'domain',_binary ''),(19,'lktgt',_binary '\0'),(19,'ssafy',_binary '\0'),(19,'usTeam',_binary '\0'),(19,'김싸피',_binary '\0'),(19,'달달한술주세용',_binary '\0'),(19,'딱한잔',_binary '\0'),(19,'복숭아술',_binary '\0'),(19,'스미노프',_binary '\0'),(19,'신교',_binary '\0'),(19,'안녕하세요',_binary '\0'),(19,'알콜홀릭',_binary '\0'),(19,'지환',_binary '\0'),(20,'지환',_binary '\0'),(21,'domain',_binary '\0'),(21,'lktgt',_binary '\0'),(21,'ssafy',_binary '\0'),(21,'usTeam',_binary '\0'),(21,'김싸피',_binary '\0'),(21,'지환',_binary '\0'),(22,'domain',_binary '\0'),(22,'lktgt',_binary '\0'),(22,'usTeam',_binary '\0'),(22,'지환',_binary '\0'),(23,'lktgt',_binary '\0'),(23,'지환',_binary '\0'),(24,'domain',_binary '\0'),(24,'신교',_binary '\0');
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `email` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES ('aaa@naver.com','aaa','$2a$10$lCCG1KA5HcD5yRgHi387JuR6EFEUfYpcIwkGFDeSWrIxxv82v2B/G','ROLE_Member'),('domain@naver.com','domain','$2a$10$VmBVv8OVXy/dac0kaNXjAefTbGSdY8PPzY4tReZbuZtrA0zIkZBrG','ROLE_Member'),('jihwan@test.test','지환','$2a$10$zKWeMoFE/Lo5qKqYctBIQO7nAM0UAjSfeDs74jXqgTYNURJrl3U7G','ROLE_Member'),('kiho@naver.com','신교','$2a$10$gbqiUDLKCJiu7JigI79wOessFbGI.Srq6T3DMg62Gb.bFMD6uT0Tm','ROLE_Member'),('kt@naver.com','규태','$2a$10$4b9rqps1Ymoda96busw4z.ixWoJ2dmq/bjLaw0sVKyfo5vTjlN4o2','ROLE_Member'),('lktgt@naver.com','lktgt','$2a$10$l/BM9O3qpiEunLLnki1JEOeQ5sxpc9XhLtcq4zJHzhKF3/f7DW7k6','ROLE_Member'),('new@new.new','newsdfsd','$2a$10$oxVF5.OteJQe5QJCXhpMT.ZR.6M6UXXEftxS4VvpiF7qgIDWwPJUK','ROLE_Member'),('ssafy@multicampus.com','김싸피','$2a$10$Q.oxtGNbvuWcg9JgZyoMvuigasfsGDb9rW7/BEC8VGCo6MFM54vaK','ROLE_Member'),('ssafy@ssafy.com','ssafy','$2a$10$vk2hQvFGasU3rU.l50izaOnIE2fp1KIsEQd.CxaMJ6vOCAE1jb5Le','ROLE_Member'),('test@test.com','안녕하세요','$2a$10$yxRIb/wMNEjvkYmb/mB8Qun7eozw.i4SfGmi9kmM0lmsHwo3IQ.ky','ROLE_Member'),('test1@naver.com','알콜홀릭','$2a$10$YTWhMGUx.Z8ahSqPulSVS.8woa7zq43hQj1oTGswREm/Z4Gf.bFI6','ROLE_Member'),('test1009@naver.com','test1009','$2a$10$vvJFtib5X3kWJRodBW3N1.TOHnQnEyeeR.nSE7BfQrhCFvYiNpH2q','ROLE_Member'),('test1010@naver.com','test1010','$2a$10$2E7fbbvObuBYdopYQH6sn.j4BfnPCjpXrMeTT0KBRD3ODW3sUB552','ROLE_Member'),('test2@naver.com','칵테일러버','$2a$10$vXKAIz34MpS/6.D3hBk7YePbocpSvrirvUWLg0EL921KS1ICllneq','ROLE_Member'),('testtest@naver.com','testtest','$2a$10$ydbEbgRV2ybNJeouPnx3S.JAk4y.XsCDuee7V.RrXVFBofHDdYV4G','ROLE_Member'),('testtest1@naver.com','주류전문가','$2a$10$HFgnDeDH8YzSMGTMyfRtLuJh4rsyFx8Lniekqp6boP3/tDirLA8Jy','ROLE_Member'),('testtest2@naver.com','술전도사','$2a$10$EAmEuylzkesaXepc3vEY/etjKFkZvbcketQlPJf4BH38akrHZkhQe','ROLE_Member'),('testtest3@naver.com','1일1칵테일','$2a$10$8aT2/j..Gzua.nmsa9cRLOqqYUHve91LpGpmjmVk/GDX8yAh9TWMe','ROLE_Member'),('testtest4@naver.ccom','주정뱅이','$2a$10$MfE463ALXkFzuz6OgwwA../sQWgL.rtZElDcn2F1fqw4wxq3VtZoS','ROLE_Member'),('testtest4@naver.com','testtest','$2a$10$KgDhA6Cmp/Za6G0ODLgOCeTZ7QAi6B7EyPEkdAdASVS1fhPGKJKTm','ROLE_Member'),('testtest5@naver.com','복숭아술','$2a$10$E/8gFOFl2/jB2x42r.LhZ.v834PYO5.Fs868/jml1XFubFl1OrVIO','ROLE_Member'),('testtest6@naver.com','술식가','$2a$10$51f1YAP2l30Xo3zLsdVIruuRuaB79EY4XexIUTrP2SsjQwY9FD/WW','ROLE_Member'),('testtest7@naver.com','스미노프','$2a$10$ZQO6Zy.RTK9N3x9yfnDF/udz0Jsn6NmaKXvw.FOmRq5irysSBsMey','ROLE_Member'),('testtest8@naver.com','달달한술주세용','$2a$10$01KKTEoxpmA7YTV4Uz6nv.X/f1qziKVXRP9r6c/e.rOZeW361vFLO','ROLE_Member'),('testtest9@naver.com','딱한잔','$2a$10$JpS6LG3.yfNDR8SoH.Cp/uhoX2eyUhIkbkcyqoUd/..Y6F3DA3F2.','ROLE_Member'),('us@naver.com','usTeam','$2a$10$eEnPSYLqwGQdGNOtyWM30eZhojPXohqo99mQI0RUQWA.eH.IhdUBW','ROLE_Member');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notice`
--

DROP TABLE IF EXISTS `notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notice` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `content` longtext,
  `created` datetime(6) DEFAULT NULL,
  `member_name` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `updated` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notice`
--

LOCK TABLES `notice` WRITE;
/*!40000 ALTER TABLE `notice` DISABLE KEYS */;
INSERT INTO `notice` VALUES (1,'환영합니다','2021-08-17 07:12:45.112000','지환','[공지사항] 칵테일러스에 오신걸 환영합니다.','2021-08-17 07:12:45.112000'),(2,'좋아요를 누르거나 자신이 등록한 레시피를 임베디드에서 이용하실 수 있습니다.','2021-08-19 01:37:45.037000','규태','[공지사항] 레시피 이용 안내','2021-08-19 01:37:45.037000'),(3,'너무 많은 작업을 짧은 시간에 여러번 하시면 차단될 수 있습니다.','2021-08-19 01:39:37.917000','규태','[공지사항] 칵테일러스 이용 안내','2021-08-19 01:39:37.917000'),(4,'SNS에 해시태그 #칵테일러스 와 같이 칵테일 인증샷을 업로드 하시면 추첨을 통해 상품을 드립니다.','2021-08-19 01:42:17.547000','규태','[이벤트] 칵테일러스 오픈 이벤트','2021-08-19 01:42:17.547000');
/*!40000 ALTER TABLE `notice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipe_article`
--

DROP TABLE IF EXISTS `recipe_article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipe_article` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `content` longtext,
  `created` datetime(6) DEFAULT NULL,
  `drink` varchar(255) DEFAULT NULL,
  `drink_ratio` varchar(255) DEFAULT NULL,
  `imageurl` varchar(255) DEFAULT NULL,
  `like_count` int DEFAULT '0',
  `member_name` varchar(255) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `updated` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe_article`
--

LOCK TABLES `recipe_article` WRITE;
/*!40000 ALTER TABLE `recipe_article` DISABLE KEYS */;
INSERT INTO `recipe_article` VALUES (2,'회식 기본 아이템\n코리안 칵테일...\n그 이름은 소맥...','2021-08-17 04:58:48.916000','소주|맥주||','15|60||','https://cocktailus.s3.ap-northeast-2.amazonaws.com/static/9651fa98-0318-4983-9dd9-4510d300a398',51,'domain','베이직한 소맥|소주|맥주|회식|최고','소맥','2021-08-18 06:46:05.934000'),(3,'스까먹는 고진감래주','2021-08-17 06:33:28.392000','맥주|소주|콜라|','90|45|45|','https://cocktailus.s3.ap-northeast-2.amazonaws.com/static/93093f2e-2716-45e3-b5a4-a54d9de8ec2a',29,'domain','쓴 맛|달콤|탄산음료','고진감래','2021-08-18 06:46:06.717000'),(4,'영롱한 색이 예쁜 에너자이저...!','2021-08-17 06:35:37.907000','파워에이드|핫식스|소주|','60|60|30|','https://cocktailus.s3.ap-northeast-2.amazonaws.com/static/215bcaa3-f8e8-477e-b944-954556f23cf3',36,'domain','한국식|훅감','에너자이저','2021-08-18 06:46:08.388000'),(5,'부드러운 깔루아밀크 어떠세요?','2021-08-17 06:36:37.244000','깔루아|우유||','30|60||','https://cocktailus.s3.ap-northeast-2.amazonaws.com/static/6a7e7b5f-9678-40ae-92ad-c7df07c7ee47',29,'domain','깔루아|부드러운맛','깔루아밀크','2021-08-18 08:31:31.252000'),(6,'새콤한 맛이 나는 막걸리 한잔','2021-08-17 06:37:55.700000','홍초|막걸리||','45|60||','https://cocktailus.s3.ap-northeast-2.amazonaws.com/static/30f96293-5b92-460c-be46-42efb910a12c',11,'domain','전통주|홍초|막걸리','홍초 막걸리','2021-08-18 06:46:09.940000'),(7,'저는 색을 위해서 블루레몬에이드를 사용해 줬는데, 블루레몬에이드가 없다면 그냥 레몬에이드를 사용해 주셔도 좋아요.\n저는 진로 소주를 사용했지만, 집에 남는 소주 아무 종류나 사용하셔도 무방할 것 같습니다.\n마찬가지로 저는 CU 편의점에서 얼음컵(700원)을 구매했지만, 집에 있으신 얼음을 사용하셔도 무방합니다.\n\n❶ 칵테일을 만들 잔에 얼음을 적당히 넣습니다.\n전 컵의 1/3 정도 얼음을 넣는 게 적당했던 것 같아요.\n❷ 밀키스와 블루레몬에이드를 1 대 1 비율로 넣습니다.\n저는 소주잔 기준으로 밀키스 1.5잔, 블루레몬에이드 1.5잔을 넣었습니다.\n❸ 소주 2oz (소주잔 기준 한 잔)을 넣습니다.\n➍ 잘 섞어주면 ‘밀키스 레몬에이드’ 완성!\n\n출처 : 데일리팝(http://www.dailypop.kr)','2021-08-17 06:42:09.310000','밀키스|블루레몬에이드|소주|','60|60|30|','https://cocktailus.s3.ap-northeast-2.amazonaws.com/static/838536a6-5ab9-4cb2-88d1-f2cfe50e99e9',5,'domain','편의점 칵테일|밀키스|한잔허쉴?','밀키스 레몬에이드','2021-08-18 06:46:09.230000'),(8,'셰이커에 크렘 드 뮈르와 블랙베리를 제외한 나머지 재료를 붓는다.\n얼음을 넣고 표면에 성에가 낄 때까지 쉐이킹 한다.\n잔에 크러시드 아이스를 채운 다음 스트레이너로 셰이커의 얼음을 걸러내면서 따른다.\n바 스푼을 이용해서 크렘 드 뮈르가 위에 뜨도록 조심스럽게 따른다.\n나무 꼬치에 끼운 블랙베리를 올린다.','2021-08-17 12:34:50.358000','진|레몬주스|심플 시럽|크렘 드 뮈르','45|15|15|15','https://cocktailus.s3.ap-northeast-2.amazonaws.com/static/c6849c6e-566b-4357-87b3-f4d40a26dbf3',1,'domain','노랑|블랙베리와 함께|새콤함','브램블','2021-08-18 06:46:13.616000'),(9,'퍼지네이블은 한때 인기를 반영하듯 여러 변형 칵테일이 등장했다. \n그중 가장 알려진 칵테일은 퍼지네이블에 보드카를 넣은 것이다. \n이 칵테일은 보드카 첨가에 따른 강한 이미지를 살려 솜털이 아닌 털투성이라는 의미로 헤어리네이블(Hairy Navel)이라고 부른다.\n\n','2021-08-17 13:29:08.380000','보드카|피치트리|오렌지주스|','30|15|120|','https://cocktailus.s3.ap-northeast-2.amazonaws.com/static/c86b0c37-232b-401a-b767-cc70a67158ef',153,'알콜홀릭','보드카|피치트리|오렌지주스|달콤','헤어리 네이블','2021-08-19 02:21:46.453000'),(10,'크렌베리주스가 120ml나 들어가지만 마시기 시작하자마자 피치스냅스의 복숭아향이 매우 강하게 느껴진다.   \n붉고 아름다은 색을 가지는 칵테일이지만 의외로 알콜향이 많이 드러나서 아주 편하게 마실 수 있는 칵테일은 아닐 수도 있다. \n칵테일 우우는 한 어부의 이야기에서부터 유래했다고 전해진다.   \n캐롤라이나의 Jimmy WooWoo Harker라는 어부가 술을 잘 마시지 못해서 피치스냅스, 크랜베리주스를 섞어 마셨던 것에서 시작되었고 2006에 사망한 그의 이름을 따서 우우가 되었다고 한다.   \n\"믿거나 말거나\"','2021-08-17 13:34:11.428000','보드카|피치트리|크렌베리주스|','30|15|120|','https://cocktailus.s3.ap-northeast-2.amazonaws.com/static/16933c67-1cfc-4763-bc66-0d518b6eaf41',73,'칵테일러버','보드카|피치트리|크랜베리주스|과일맛','우우','2021-08-19 02:21:48.688000'),(11,'무척이나 개성 넘치는 이름 때문에 인기가 많은 칵테일이기도 하다. \n1987년에 만들어졌지만 의외로 공식 고전 레시피로 빨리 자리 잡았다. \n플로리다의 마이애미 해변의 연장선상에 위치해 있는 포트로더데일(Fort Lauderdale)에서 열린 1,000달러짜리 칵테일 경연에서 Ted Pizio라는 젊은 바텐더가 출품한 것. \n이름의 유래는, 휴양지인 포트로더데일에 사람들이 오는 이유가 해변 위에서 야외섹스였는데, 여기서 영감이 떠올라 \"Sex on the Beach!\"라고 외친데서 비롯되었다.\n잔은 하이볼 글라스를 준비한다. 보드카 베이스에 복숭아 혹은 파인애플 주스를 넣고, 이후 (주로 동일량의) 주스들을 배합하는 대단히 많은 변형이 존재하며 취향에 따라 체리나 막대사탕을 곁들이는 등 다양한 형태로 즐길 수 있다.','2021-08-17 13:38:24.608000','보드카|피치트리|오렌지주스|크랜베리주스','30|15|60|60','https://cocktailus.s3.ap-northeast-2.amazonaws.com/static/b3b6649c-726a-46dc-8d2d-9b89847a42ae',86,'주류전문가','보드카|피치트리|크랜베리주스|오렌지주스|레이디킬러','섹스 온 더 비치','2021-08-19 02:21:49.824000'),(12,'탄산음료에 의해 알콜이 희석되기 때문에 도수가 크게 낮아지며 알콜 특유의 향도 거의 사라진다. \n따라서 술에 약한 사람도 쉽게 마실 수 있다는 장점이 있기 때문에 바나 클럽에서는 진 토닉처럼 반드시 팔고 있다. \n맛도 향도 제일 무난하기 때문에 그 입지가 거의 우리나라에서의 소주급.\n기원이 정확하지 않은데, 럼 브랜드 바카디의 주장에 따르면 1902년 스페인의 식민지였던 쿠바가 독립을 위한 전쟁 당시 \'Viva, Cuba Libre\'(자유 쿠바 만세)[1]라는 구호를 사용했는데, 이때 도와주러 왔던 미군이 럼(쿠바)에 콜라(미국)를 부어 마시며 구호를 외친 것에서 유래된 칵테일이라고 한다. 하지만 쿠바 국영 기업인 아바나 클럽에 따르면 기원이 확실치 않다고 한다. 사실 쿠바의 독립 자체는 1898년인데 1900년까지는 코카콜라가 수입되지 않았기 때문이다. 한마디로 이 설은 역사적으로 불가능, 아마도 그 이후에 남아있던 미국 병력들이 이용하던 아바나의 바에서 1901년 이후에 만들어진 레시피였다는 것이 가장 유력한 설이다.','2021-08-17 13:44:26.482000','럼|콜라|라임주스|','45|120|15|','https://cocktailus.s3.ap-northeast-2.amazonaws.com/static/f4627778-c0d5-47bc-8719-9fb51169b8cb',48,'술전도사','럼|콜라|라임|달짝찌근','쿠바리브레','2021-08-19 02:04:12.961000'),(13,'데킬라를 베이스로 하는 칵테일이며, 이름의 뜻은 데킬라를 마시고 난 숙취를 뜻한다. \n오렌지 주스와 그레나딘 시럽이 들어가 잘 넘어가는 편. 때문에 주의할 필요가 있다.\n데킬라를 제외시키면 선라이즈라는 이름의 논 알콜 칵테일이 된다. 데킬라를 보드카로 바꾸면 보드카 선라이즈가 된다.\n아이러브커피에서 2016년 7월 4주년 한정 메뉴로 등장하였다. 게임 내 이름은 4주년 기념 데낄라 선라이즈.\n본 칵테일과는 반대로 석양을 컨셉으로 한 데킬라 선셋이라는 칵테일도 존재한다.','2021-08-17 13:50:53.410000','데낄라|오렌지주스|그레나딘시럽|','45|120|15|','https://cocktailus.s3.ap-northeast-2.amazonaws.com/static/4475bb05-5983-4631-9ad4-1a3466d658c3',3,'1일1칵테일','데낄라|오렌지주스|그레나딘시럽|예쁨','데낄라 선라이즈','2021-08-18 06:46:16.980000'),(14,'칵테일의 한 종류. 칵테일의 왕으로 통한다. 간단히 말해 진에 드라이 베르무트를 6:1로 휘저어 섞은 술이다.\n\'드라이 마티니\'라고 부르기도 하는데, 사람에 따라 무엇을 의미하는지 달라 정확한 확인이 필요하다. \n스위트 베르무트를 사용한 \'스위트 마티니\'와 구분하여 \'드라이 마티니\'라고 부르는 경우와 진과 드라이 베르무트를 3:1로 섞은 것을 마티니, 현재의 IBA와 조주기능사 레시피처럼 진의 비율을 높인 것을 드라이 마티니라고 부르는 경우가 있기 때문이다. \nIBA 공식 레시피에서는 6:1 마티니가 드라이 마티니라고 적혀있다.','2021-08-17 13:57:45.390000','드라이 진|드라이 베르무트||','90|15||','https://cocktailus.s3.ap-northeast-2.amazonaws.com/static/98e89a2c-62ae-4d5c-9a89-266d0ffe6e26',7,'주정뱅이','드라이 진|드라이 베르무트|올리브|강함','드라이 마티니','2021-08-18 06:46:19.263000'),(15,'\'피치 트리\'로 유명한 피치 시냅스 계열의 리큐르와 이런 저런 주스들을 잘 섞어서 만드는 한 잔이다. \n복숭아 향이 살짝 나며 맛은 약간 새콤한 느낌.\n사실상 술은 피치 시냅스밖에 안 들어가기 때문에 도수가 매우 낮으며, 덕분에 여성들에게 인기가 많은 칵테일이다. \n가끔 진짜 복숭아를 으깨서 넣는 경우도 있다고 한다. \n어찌 보면 이쪽이 더 칵테일의 이름(크러시)에 걸맞은 셈.','2021-08-17 14:01:45.662000','피치트리|스윗 앤 사워 믹스|크랜베리 주스|','45|60|120|','https://cocktailus.s3.ap-northeast-2.amazonaws.com/static/471523b3-c50d-4f35-9592-4748227b829b',9,'복숭아술','피치트리|스윗 앤 사워 믹스|크랜베리 주스|복숭아','피치 크러쉬','2021-08-19 04:53:08.374000'),(16,'럼 베이스. 1957년 해리 예(Harry Yee)라는 바텐더가 와이키키에 있는 하와이 마을에서 일하던 무렵에 볼스 영업사원이 회사 제품인 블루 큐라소로 만든 음료를 부탁하자 직접 만들어낸 칵테일이라고 한다.\n맛은 아주 미묘해서 무슨 맛이냐고 물으면 그냥 블루 하와이맛이라고 할 수 밖에 없다고 한다. \n겨우겨우 비슷한 맛을 꼽으라면 파워에이드 마운틴블라스트, 폴라포 스포츠 맛 정도.','2021-08-17 14:08:10.272000','화이트럼|블루 큐라소|파인애플 주스|라임 주스','30|15|30|15','https://cocktailus.s3.ap-northeast-2.amazonaws.com/static/2f76fc32-4e20-468b-9006-a3cba1b93ecb',4,'술식가','화이트 럼|블루 큐라소|파인애플주스|라임주스|파랑','블루하와이','2021-08-18 06:46:22.535000'),(17,'보드카 베이스로, 술 맛이 전혀 느껴지지 않아 오렌지 주스 맛과 크게 다르지 않다. \n때문에 오렌지 주스를 마시는 듯한 기분이 들 수도 있다.\n하지만 도수가 절대로 약한 술은 아니라서 부담없이 마시고는 금세 취할 위험이 있기에 주량이 약하다면 주의. \n덕분에 이 칵테일에는 플레이보이, 레이디 킬러 칵테일이라는 별명이 붙었다.\n','2021-08-17 14:13:14.453000','보드카|오렌지주스||','30|120||','https://cocktailus.s3.ap-northeast-2.amazonaws.com/static/d847b68b-832c-4fa2-8840-824263d4d20b',13,'스미노프','보드카|오렌지주스|노랑빛|레이디킬러|달달','스크루 드라이버','2021-08-19 04:52:12.333000'),(18,'케이프 코드(Cape Cod)의 사전적 의미는 지명으로 미국 매사추세츠주(州) 남동부에 있는 반도를 말한다.\n이 지역에는 크린베리가 아주 잘 자라는데 그래서 보드카와 섞어 마시던 것에서 유래가 되어 널리 퍼진게 바로 케이프 코드(Cape Cod) 이다.','2021-08-17 14:18:40.977000','보드카|크렌베리 주스||','30|120||','https://cocktailus.s3.ap-northeast-2.amazonaws.com/static/32272dfe-e192-46af-9409-a80529e9993b',18,'달달한술주세용','보드카|크렌베리 주스|달달함|과일향','케이프 코드','2021-08-19 04:52:05.905000'),(19,'코코넛향이 은은히 올라오는 달콤한 맛의 칵테일입니다.\n라임의 신맛은 거의 느껴지지 않아 레몬 혹은 라임 등으로 장식을 해도 괜찮겠다는 생각을 했습니다.\n술을 잘 못하시는 분들도 편하게 즐길 수 있는 거기에 비쥬얼도 넘나 이쁜 칵테일입니다.','2021-08-17 14:24:16.383000','블루큐라소|피치트리|말리부|사이다','15|15|15|120','https://cocktailus.s3.ap-northeast-2.amazonaws.com/static/c6d98681-dc0b-402d-97ad-6da641cee7bd',9,'딱한잔','블루큐라소|피치트리|말리부|사이다|달달하고 예쁨','블루 사파이어','2021-08-18 06:46:23.417000'),(24,'보드카 베이스 칵테일. 여기에 리큐르인 깔루아를 넣는다. 보드카 베이스인데다 우유, 토닉워터, 주스 등 음료는 안 들어가고 술과 리큐르만 들어가기 때문에 도수는 제법 높다','2021-08-19 02:26:51.235000','보드카|깔루아||','30|15||','https://cocktailus.s3.ap-northeast-2.amazonaws.com/static/72bee045-e61a-4831-81dd-771c53f32404',0,'신교','깔루아|보드카|도수가 높음','블랙 러시안','2021-08-19 02:26:51.235000');
/*!40000 ALTER TABLE `recipe_article` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-19  5:14:42
