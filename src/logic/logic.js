import fs from "fs/promises";

async function readJson() {
  try {
    const data = await fs.readFile("./src/logic/spotify_data.json", "utf8");
    return JSON.parse(data);
  } catch (error) {
    return "Error reading JSON file:";
  }
}

class Audio {
  constructor(data) {
    this.id = data._id["$oid"];
    this.timestamp = data.ts;
    this.msPlayed = data.ms_played;
    this.trackName = data.master_metadata_track_name;
    this.albumArtistName = data.master_metadata_album_artist_name;
    this.albumName = data.master_metadata_album_album_name;
    this.episodeName = data.episode_name;
    this.showName = data.episode_show_name;
    this.reasonStart = data.reason_start;
    this.reasonEnd = data.reason_end;
    this.shuffle = data.shuffle;
    this.skipped = data.skipped;
  }
}

class Logic {

  all = [];


  songs = [];

  songsSet = new Set();
  podcastSet = new Set();
  playsNumber = 0; // how many plays
  totalTime = 0; // how many

  constructor(data) {



    for (let i = 0; i < data.length; i++) {
      this.all.push(new Audio(data[i]));
    }





    this.songs = this.all.filter(
      (e) => e.episodeName === null && e.showName === null
    );

    this.podcast = this.all.filter(
      (e) => e.episodeName !== null && e.showName !== null
    );

    this.songs.forEach((e)=>{
      this.songsSet.add(e)
    })
  }
}

let test;
 readJson().then((value) => {




  test = new Logic(value);







  console.log(test.all.length);
  console.log(test.songs.length);
  console.log(test.podcast.length);
});
