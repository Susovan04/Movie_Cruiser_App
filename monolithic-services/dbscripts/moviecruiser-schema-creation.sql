CREATE SCHEMA IF NOT EXISTS `moviecruiser` ;
USE `moviecruiser` ;

-- -----------------------------------------------------
-- Table `moviecruiser`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `moviecruiser`.`user` (
	us_id integer NOT NULL AUTO_INCREMENT, 
	us_username varchar(45) null, 
	us_firstname varchar(45) null, 
	us_lastname varchar(45) null, 
	us_password varchar(200) null, 
   PRIMARY KEY (us_id));

-- -----------------------------------------------------
-- Table `moviecruiser`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `moviecruiser`.`role` (
  ro_id integer NOT NULL AUTO_INCREMENT, 
  ro_name varchar(45) null,
  PRIMARY KEY (`ro_id`));

-- -----------------------------------------------------
-- Table `moviecruiser`.`user_role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `moviecruiser`.`user_role` (
   ur_id int not null auto_increment primary key, 
   ur_us_id int null, 
   ur_ro_id int null, 
 foreign key(ur_us_id) references user(us_id), 
 foreign key(ur_ro_id) references role(ro_id));


-- -----------------------------------------------------
-- Table `moviecruiser`.`movie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `moviecruiser`.`movie` (
  	mv_id integer NOT NULL AUTO_INCREMENT, 
	mv_title varchar(100) null, 
	mv_box_office double null, 
	mv_active boolean null, 
	mv_date_of_launch DATE null, 
	mv_genre varchar(45) null, 
	mv_has_teaser boolean null, 
	mv_url varchar(200) null,
  PRIMARY KEY (`mv_id`));


-- -----------------------------------------------------
-- Table `moviecruiser`.`favorites`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `moviecruiser`.`favorites` (
  	fv_id int not null auto_increment primary key, 
	fv_us_id int null, 
	fv_mv_id int null, 
   foreign key(fv_us_id) references user(us_id) 
	on delete no action 
	on update no action, 
   foreign key(fv_mv_id) references menu_item(mv_id) 
	on delete no action 
	on update no action);
