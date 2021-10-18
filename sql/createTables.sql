CREATE DATABASE IF NOT EXISTS conygre;
use conygre;

drop table customer_policies;
create table customer_policies (customerid int primary key auto_increment,firstname varchar(50),lastname varchar(50), city varchar(30), zipcode int,date_joined varchar(50),policycode varchar(50));

insert into customer_policies values(9,'Mohammed','Alotaibi','Dallas',75082,'June 14 2021','1,2,3,4,5,6,7');
insert into customer_policies values(10,'Will','Rogers','Dallas',75082,'June 14 2021','3,4');
insert into customer_policies values(11,'David','H','Dallas',75082,'June 14 2021','7');
insert into customer_policies values(13,'David','C','Dallas',75082,'June 14 2021','1,2');
insert into customer_policies values(17,'Frank','Callay','Dallas',75082,'June 14 2021','1');

