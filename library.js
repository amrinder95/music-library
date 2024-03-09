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
             },
  printPlaylists: function() {
                  for (let playlist in this.playlists) {
                    console.log(`${this.playlists[playlist].id}: ${this.playlists[playlist].name} - ${this.playlists[playlist].tracks.length} tracks`);
                    }
                  },
  printTracks: function() {
                for (let tracks in this.tracks) {
                  console.log(`${this.tracks[tracks].id}: ${this.tracks[tracks].name} by ${this.tracks[tracks].artist} (${this.tracks[tracks].album})`);
                }
              },
  printPlaylist: function(playlistId) {
                  for (let playlist in this.playlists) {
                    if(playlistId === this.playlists[playlist].id) {
                      console.log(`${this.playlists[playlist].id}: ${this.playlists[playlist].name} - ${this.playlists[playlist].tracks.length} tracks`);
                    }
                  }
                  for (let track of this.playlists[playlistId].tracks) {
                    for(let songs in this.tracks) {
                      if(track === songs) {
                        console.log(`${this.tracks[songs].id}: ${this.tracks[songs].name} by ${this.tracks[songs].artist} (${this.tracks[songs].album})`);
                      }
                    }
                  }
                },
  addTrackToPlaylist: function(trackId, playlistId) {
                        for (let tracks in this.tracks) {
                          if(trackId === this.tracks[tracks].id) {
                            for (let playlist in this.playlists) {
                              if(playlistId === this.playlists[playlist].id) {
                                this.playlists[playlist].tracks.push(trackId);
                              }
                            }
                          }
                        }
                      },
    generateUid: function() {
                  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
                },
    addTrack: function(name, artist, album) {
                let id = this.generateUid();
                this.tracks[id] = {};
                this.tracks[id].id = id;
                this.tracks[id].name = name;
                this.tracks[id].artist = artist;
                this.tracks[id].album = album;
              },
    addPlaylist: function(name) {
                  let id = this.generateUid();
                  this.playlists[id] = {};
                  this.playlists[id].id = id;
                  this.playlists[id].name = name;
                  this.playlists[id].tracks = [];
                }
};

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}




library.printPlaylists();
library.printTracks();
library.printPlaylist("p01");
library.addTrackToPlaylist("t03", "p01");
library.addTrack("Smells like teen spirit", "Nirvana", "Nevermind");
library.addPlaylist("Chill");