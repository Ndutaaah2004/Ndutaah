CREATE database Todos;
USE Todos; 

 CREATE TABLE user
 (
 username varchar(150) PRIMARY key,
 password varchar (150),
 email varchar(150),
 Firstname varchar(150),
 Lastname varchar(150),
 CreatedAt datetime,
 ModifiedAT datetime,
 Isactive boolean
 );
 
DESC user;