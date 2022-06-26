-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: onlineexam
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question` (
  `question_id` int NOT NULL AUTO_INCREMENT,
  `question_statement` varchar(200) DEFAULT NULL,
  `option_1` varchar(200) DEFAULT NULL,
  `option_2` varchar(200) DEFAULT NULL,
  `option_3` varchar(200) DEFAULT NULL,
  `option_4` varchar(200) DEFAULT NULL,
  `answer` varchar(200) DEFAULT NULL,
  `question_type` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`question_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (1,'Number of primitive datatypes in Java are?','6','7','8','9','8','Java'),(2,'What is the size of Float and Double in Java?','32 and 32','32 and 64','64 and 64','64 and 32','32 and 64','Java'),(3,'compareTo() returns:','true','false','An int value','None','An int value','Java'),(4,'In which of the following is toString() defined','java.lang','java.util','java.date','None','java.lang','Java'),(5,'Identify the keyword among the following that makes a variable belong to a class,rather than being defined for each instance of the class','final','static','volatile','abstract','static','Java'),(6,'Identify the corrected definition of a package','A package is a collection of editing tools','A package is a collection of classes','A package is a collection of classes and interfaces','A package is a collection of services','A package is a collection of classes and interfaces','Java'),(7,'Identify the correct extension of the user-defined header file in C++','.cpp','.hg','.h','.hf','.h','C++'),(8,'Identify the incorrect constructor type','Friend constructor','Default constructor','Parameterized constructor','Copy constructor','Friend constructor','C++'),(9,'C++ uses which approach?','Right-Left','Top-Down','Left-Right','Bottom-Up','Bottom-Up','C++'),(10,'Which of the following data type is supported in C++ but not in C?','int','bool','double','float','bool','C++'),(11,'Identify the correct syntax for declaring arrays in C++','array arr[10]','array{10}','int arr[10]','int arr','int arr[10]','C++'),(12,'Which of the following is “address of operator”?','*','&','[]','&&','&','C++'),(14,'Identify the correct example for a pre-increment operator','++n','n++','--n','+n','++n','C++');
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-26 11:26:49
