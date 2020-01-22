INSERT INTO movie (mv_title, mv_boxOffice, mv_active, mv_date_of_launch, mv_genre, mv_has_teaser, mv_url) 
VALUES ('Avatar', '2787965087', true, '2017/03/15', 'Science Fiction', true, 'http://genchi.info/image/avatar-hd-wallpapers-1080p-29.jpg'),
('The Avengers','1518812988', true, '2017/12/23', 'Superhero', false, 'http://genchi.info/img/avengers-hd-wallpaper-10.jpg'),
('Titanic','2187463944', true,'2017/08/21', 'Romance', false, 'http://genchi.info/images/titanic-wallpaper-43.jpg'),
('Jurasic World','1671713208', false,'2017/07/02', 'Science Fiction', true, 'https://steamuserimages-a.akamaihd.net/ugc/918053309022146367/DE86DED63A5A818CDD79FD6A31CE852FABD98A1B/'),
('Avengers: End Game','2750760348',
true,'2022/11/02','Superhero', true, 'https://s2.dmcdn.net/v/P5eHF1S2sOONoP59X/x1080');
 
 

INSERT INTO role (ro_name) VALUES ('USER'), ('ADMIN');
  
  

INSERT INTO user (us_username, us_firstname, us_lastname, us_password) 
  VALUES ('user', 'Adam', 'James', '$2a$10$R/lZJuT9skteNmAku9Y7aeutxbOKstD5xE5bHOf74M2PHZipyt3yK'),
  ('admin', 'Susovan', 'Mukherjee', '$2a$10$R/lZJuT9skteNmAku9Y7aeutxbOKstD5xE5bHOf74M2PHZipyt3yK');
  
  

INSERT INTO user_role (ur_us_id, ur_ro_id) 
VALUES (1, 1), (2, 2);
  