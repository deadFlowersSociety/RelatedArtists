DROP DATABASE IF EXISTS artists;
CREATE DATABASE artists;
USE artists;

DROP TABLE IF EXISTS artist;
CREATE TABLE artist (
  artistID SERIAL PRIMARY KEY,
  artist_name VARCHAR(40) NOT NULL,
  listeners INT,
  artist_image VARCHAR(200) NOT NULL,
  popularSong VARCHAR(30) NOT NULL,
  artist_genre VARCHAR(30) NOT NULL
);

DROP TABLE IF EXISTS genre0;
DROP TABLE IF EXISTS genre1;
DROP TABLE IF EXISTS genre2;
DROP TABLE IF EXISTS genre3;
DROP TABLE IF EXISTS genre4;
DROP TABLE IF EXISTS genre5;
DROP TABLE IF EXISTS genre6;
DROP TABLE IF EXISTS genre7;
DROP TABLE IF EXISTS genre8;
DROP TABLE IF EXISTS genre9;
		
CREATE TABLE genre0 (
  id SERIAL PRIMARY KEY,
  main_Artist_ID INT NOT NULL,
  FOREIGN KEY (main_Artist_ID) REFERENCES artist(artistID) ON DELETE CASCADE
);
CREATE TABLE genre1 (
  id SERIAL PRIMARY KEY,
  main_Artist_ID INT NOT NULL,
  FOREIGN KEY (main_Artist_ID) REFERENCES artist(artistID) ON DELETE CASCADE
);
CREATE TABLE genre2 (
  id SERIAL PRIMARY KEY,
  main_Artist_ID INT NOT NULL,
  FOREIGN KEY (main_Artist_ID) REFERENCES artist(artistID) ON DELETE CASCADE
);
CREATE TABLE genre3 (
  id SERIAL PRIMARY KEY,
  main_Artist_ID INT NOT NULL,
  FOREIGN KEY (main_Artist_ID) REFERENCES artist(artistID) ON DELETE CASCADE
);
CREATE TABLE genre4 (
  id SERIAL PRIMARY KEY,
  main_Artist_ID INT NOT NULL,
  FOREIGN KEY (main_Artist_ID) REFERENCES artist(artistID) ON DELETE CASCADE
);
CREATE TABLE genre5 (
  id SERIAL PRIMARY KEY,
  main_Artist_ID INT NOT NULL,
  FOREIGN KEY (main_Artist_ID) REFERENCES artist(artistID) ON DELETE CASCADE
);
CREATE TABLE genre6 (
  id SERIAL PRIMARY KEY,
  main_Artist_ID INT NOT NULL,
  FOREIGN KEY (main_Artist_ID) REFERENCES artist(artistID) ON DELETE CASCADE
);
CREATE TABLE genre7 (
  id SERIAL PRIMARY KEY,
  main_Artist_ID INT NOT NULL,
  FOREIGN KEY (main_Artist_ID) REFERENCES artist(artistID) ON DELETE CASCADE
);
CREATE TABLE genre8 (
  id SERIAL PRIMARY KEY,
  main_Artist_ID INT NOT NULL,
  FOREIGN KEY (main_Artist_ID) REFERENCES artist(artistID) ON DELETE CASCADE
);
CREATE TABLE genre9 (
  id SERIAL PRIMARY KEY,
  main_Artist_ID INT NOT NULL,
  FOREIGN KEY (main_Artist_ID) REFERENCES artist(artistID) ON DELETE CASCADE
);