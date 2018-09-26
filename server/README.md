# CRUD API

The current server can handle 4 different types of requests:

1. PUT: /artist/newArtist - `postNewArtist`
When provided with a new Artist, the PUT request will place a new Artist in the Database and adds related artists to them

2. GET: /artist/:id/relatedArtists - `getRelatedArtists`
Given an id, the Artist information is retrieved from the Database, as well as the info about their related artists

3. PUT: /artist/:id/edit - `editArtist`
Given an id and new information, the Artist's information can be edited

4. DELETE: /artist/:id/delete - `deleteArtist`
When provided with an Artist id, the DELETE request deletes the artist's records, updating all tables

