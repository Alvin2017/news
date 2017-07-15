set names utf8;
drop database if exists user;
create database user charset=utf8;
use user;
create table userlists(id int primary key auto_increment,
uname char(20),
pwd varchar(32));
insert into userlists values(null,"tom","123"),
(null,"jelly","1234"),
(null,"zhang","12345"),
(null,"tom1","123456"),
(null,"tom2","123123");
select * from userlists;