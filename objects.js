var playlist = {Switchfoot: 'Free'};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, artistName){
  key = artistName'
  delete playlist.key;
  return playlist;
}