CREATE DATABASE golfCourses_db;
USE golfCourses_db;

CREATE TABLE courses
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	played BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);