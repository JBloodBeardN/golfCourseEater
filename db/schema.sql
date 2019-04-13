CREATE DATABASE golfCourses_db;
USE golfCourses_db;

CREATE TABLE courses
(
	id INT AUTO_INCREMENT NOT NULL,
	name varchar(255) NOT NULL,
	played BOOLEAN DEFAULT false,
	createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);