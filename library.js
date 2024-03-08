const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  for (let playlist in library.playlists) {
    console.log(`${library.playlists[playlist].id}: ${library.playlists[playlist].name} - ${library.playlists[playlist].tracks.length} tracks`);
  }
};


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  for (let tracks in library.tracks) {
    console.log(`${library.tracks[tracks].id}: ${library.tracks[tracks].name} by ${library.tracks[tracks].artist} (${library.tracks[tracks].album})`);
   }
};


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  for (let playlist in library.playlists) {
    if(playlistId === library.playlists[playlist].id) {
    console.log(`${library.playlists[playlist].id}: ${library.playlists[playlist].name} - ${library.playlists[playlist].tracks.length} tracks`);
    }
  }
  for (let track of library.playlists[playlistId].tracks) {
    for(let songs in library.tracks) {
      if(track === songs) {
        console.log(`${library.tracks[songs].id}: ${library.tracks[songs].name} by ${library.tracks[songs].artist} (${library.tracks[songs].album})`);
      }
    }
  }
};


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  for (let tracks in library.tracks) {
    if(trackId === library.tracks[tracks].id) {
      for (let playlist in library.playlists) {
        if(playlistId === library.playlists[playlist].id) {
        library.playlists[playlist].tracks.push(trackId);
        }
      }
    }
   }
}


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
  let id = generateUid();
  library.tracks[id] = {};
  library.tracks[id].id = id;
  library.tracks[id].name = name;
  library.tracks[id].artist = artist;
  library.tracks[id].album = album;
}


// adds a playlist to the library
const addPlaylist = function(name) {
  let id = generateUid();
  library.playlists[id] = {};
  library.playlists[id].id = id;
  library.playlists[id].name = name;
  library.playlists[id].tracks = [];
}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}




printPlaylists();
printTracks();
printPlaylist("p01");
addTrackToPlaylist("t03", "p01");
addTrack("Smells like teen spirit", "Nirvana", "Nevermind");
addPlaylist("Chill");