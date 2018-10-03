------ PSQL ------
-- READ
SELECT * FROM artist WHERE artistID in (SELECT main_artist_id FROM genre0 WHERE id > 345760 AND id < 345772);
  -- Average Cold Call time: 7.9594 ms
  -- Average Cached Call time: 0.359 ms
-- WRITE
INSERT INTO artist(artist_name, listeners, artist_image, popularsong, artist_genre) VALUES ('Wissem', 93486, 'www.www.www', 'weezy', 'Pop');
  -- Average time: 5.5596 ms

------ Cassandra ------
-- READ
SELECT * FROM artist WHERE artistid in (289343, 8524355, 1369726, 7056534, 9073567, 5236915, 8754905, 8409587, 7795503, 1946820);
  -- Average Cold Call time: 13.7896 ms
  -- Average Cached Call time: 1.4078 ms
-- WRITE
INSERT INTO artist(artistid, artist_name, listeners, artist_image, popularsong, related_artists) VALUES (10000003, 'Wissem', 93486, 'www.www.www', 'weezy', [1, 2, 3]);
  -- Average time: 14.1494 ms

