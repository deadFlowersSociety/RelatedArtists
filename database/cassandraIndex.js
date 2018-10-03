const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'relatedArtists' });
 
const getRelatedArtists = function (id, showArtist) {
  const query1 = 'SELECT related_artists FROM Artist WHERE artistid = ' + id;
  const query2 = 'SELECT * FROM Artist WHERE artistid in ';
  client.execute(query1, function(err, result) {
    if (err) showArtist(err, null);
    var ids = result.rows[0].related_artists;
    var str = '(' + ids[0];
    for (var i = 1; i < ids.length; i++) {
      str += ', ' + ids[i];
    }
    str += ')';
    var newQuery = query2 + str;
    client.execute(newQuery, function(err, result) {
      if (err) showArtist(err, null);
      showArtist(null, result.rows);
    })
  });
}

module.exports.getRelatedArtists = getRelatedArtists;