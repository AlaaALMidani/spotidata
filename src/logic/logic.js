class Audio {
  constructor(data) {
    this.id = data._id["$oid"];
    this.timestamp = new Date(data.ts);
    this.msPlayed = data.ms_played / 60 / 1000;
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
class LogicFunctions {
  static orderAccordingTo(dataList, field) {
    let map = new Map()
    let sortedTracks;

    for (let i = 0; i < dataList.length; i++) {
      let e = dataList[i]
      if (!map.has(e[field])) {
        map.set(e[field], e.msPlayed)
      }
      else {
        map.set(e[field], map.get(e[field]) + e.msPlayed)
      }
    }
    sortedTracks = Array.from(map);
    return sortedTracks.sort((b, a) => a[1] - b[1]);
  }
  static getPreferredListingHour(data) {
    let hours = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = 0; i < data.length; i++) {
      if (data[i].timestamp) {
        let minute = data[i].timestamp.getMinutes()
        let hour = data[i].timestamp.getHours();
        let playedMinute = data[i].msPlayed;

        if (minute + playedMinute > 60) {

          hours[hour] += 60 - minute;
          hours[(hour + 1) % 24] += playedMinute - (60 - minute)
        } else {
          hours[hour] += playedMinute
        }

      }
    }
    return hours.indexOf(Math.max(...hours)) 
  }
  static getPreferredListingSeason(data) {
    let season = [0, 0, 0, 0]
    let names = ['winter', 'spring', 'summer', 'autumn']
    for (let i = 0; i < data.length; i++) {
      if (data[i].timestamp) {
        let month = data[i].timestamp.getMonth()
        let playedMinute = data[i].msPlayed;
        if (month > 1 && month < 5)
          season[1] += playedMinute;
        else if (month > 4 && month < 8)
          season[2] += playedMinute;
        else if (month > 7 && month < 11)
          season[3] += playedMinute;
        else
          season[0] += playedMinute
      }
    }
    return names[season.indexOf(Math.max(...season))]

  }
  static getAverageListingHoursInDay(data) {
    let set = new Set()
    let totalTimePlayed = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].timestamp && (data[i].skipped === null || data[i].skipped === false)) {
        totalTimePlayed += data[i].msPlayed;
        set.add(data[i].timestamp.toDateString())
      }
    }
    return totalTimePlayed / set.size
  }
  static countUniqElements(data, field) {
    let set = new Set()
    data.forEach((e) => {
      if (e[field])
        set.add(e[field])
    });
    return set.size;
  };
  static spentListingTime(data) {
    let sum = 0
    data.forEach((e) => { sum += e.msPlayed })
    return sum;
  }
  static getPlays(data,artist){
    let filtered = data.filter((e)=> e.albumArtistName === artist)
    return filtered
  }
  static getDifferentTracksNumber(data,artist){
    let filtered = data.filter((e)=> e.albumArtistName === artist)
    let tracks = []
    for(let i of filtered){
      if(tracks.indexOf(i.trackName) ===-1){
        tracks.push(i.trackName)
      }
    }
    return tracks.length
  }
  static getTimeListening(data,artist){
    let filtered = data.filter((e)=> e.albumArtistName === artist)
    let times = 0
    for(let i of filtered){
      times+= i.msPlayed
    }
    return times
  }
  static getDifferentTracks(data,artist){
    let filtered = data.filter((e)=> e.albumArtistName === artist)
    let tracks = []
    for(let i of filtered){
      if(tracks.indexOf(i.trackName) ===-1){
        tracks.push(i)
      }
    }
    return tracks
  }
  static getTop20(data,id){
    let tracks = this.getDifferentTracks(data,id)
    let map = new Map()
    for(let i of tracks){
      if(!map.has(i.trackName)){
        map.set(i.trackName,i.msPlayed)
      }
      else{
        map.set(i.trackName, map.get(i.trackName)+ i.msPlayed) 
      }
    }
    let array = Array.from(map).sort((a,b)=> b[1]-a[1])
    let result = []
    for(let i of array){
      result.push(i[0])
    }
    return result
  }
}

 class State {

  //splitted lists (contain objects of Audio Class )
  all = [];
  tracks = [];
  podcast = [];
 
  //sorted lists (contain objects of Audio Class )
  sortedTracks;
  sortedArtists;
  sortedAlbums;
  
  //all statistics
  playsNumber; //1.how many total plays
  differentAudios; //2.how many different tracks
  spentListingTime; //3.how much time spent listening
  dailyAverageTimeSpent; //4.daily average time spent listing (non-skipped songs)
  preferredHour; //5.in which hour of the day does the user spend most time listening
  preferredSeason; //6.in which season of the year does the user spend most time listing 
 
  //songs 
  songsPlaysNumber; //1.how many total plays
  songsDifferentAudios; //2.how many different tracks
  songsSpentListingTime; //3.how much time spent listening
  songsDailyAverageTimeSpent; //4.daily average time spent listing (non-skipped songs)
  songsPreferredHour; //5.in which hour of the day does the user spend most time listening
  songsPreferredSeason; //6.in which season of the year does the user spend most time listing 
 
  //podcasts
  podcastPlaysNumber; //1.how many total plays
  podcastDifferentAudios; //2.how many different tracks
  podcastSpentListingTime; //3.how much time spent listening
  podcastDailyAverageTimeSpent; //4.daily average time spent listing (non-skipped podcast)
  podcastPreferredHour; //5.in which hour of the day does the user spend most time listening
  podcastPreferredSeason; //6.in which season of the year does the user spend most time listing 

  constructor(data) {
    
    //converting list of json objects into list of Audio objects
    this.all = data.map((e) => new Audio(e))

    //splitting the tracks from podcast
    this.tracks = this.all.filter((e) => e.episodeName === null && e.showName === null)
    this.podcast = this.all.filter((e) => e.episodeName !== null && e.showName !== null);

    //sorting according to a specific field
    this.sortedTracks = LogicFunctions.orderAccordingTo(this.tracks, 'trackName')
    this.sortedArtists = LogicFunctions.orderAccordingTo(this.tracks, 'albumArtistName')
    this.sortedAlbums = LogicFunctions.orderAccordingTo(this.tracks, 'albumName')

    //set general data 
    this.playsNumber = this.all.length
    this.differentAudios = LogicFunctions.countUniqElements(this.all, 'trackName') + LogicFunctions.countUniqElements(this.all, 'episodeName')
    this.spentListingTime = LogicFunctions.spentListingTime(this.all)
    this.dailyAverageTimeSpent = LogicFunctions.getAverageListingHoursInDay(this.all)
    this.preferredHour = LogicFunctions.getPreferredListingHour(this.all)
    this.preferredSeason = LogicFunctions.getPreferredListingSeason(this.all)
    
    //set songs data 
    this.songsPlaysNumber = this.tracks.length
    this.songsDifferentAudios = LogicFunctions.countUniqElements(this.tracks, 'trackName')
    this.songsSpentListingTime = LogicFunctions.spentListingTime(this.tracks)
    this.songsDailyAverageTimeSpent = LogicFunctions.getAverageListingHoursInDay(this.tracks)
    this.songsPreferredHour = LogicFunctions.getPreferredListingHour(this.tracks)
    this.songsPreferredSeason = LogicFunctions.getPreferredListingSeason(this.tracks)
    
    //set podcasts data 
    this.podcastPlaysNumber = this.podcast.length
    this.podcastDifferentAudios = LogicFunctions.countUniqElements(this.podcast, 'episodeName')
    this.podcastSpentListingTime = LogicFunctions.spentListingTime(this.podcast)
    this.podcastDailyAverageTimeSpent = LogicFunctions.getAverageListingHoursInDay(this.podcast)
    this.podcastPreferredHour = LogicFunctions.getPreferredListingHour(this.podcast)
    this.podcastPreferredSeason = LogicFunctions.getPreferredListingSeason(this.podcast)
    
  }
  getPlaysOfArtist(id)
  {
    let result = LogicFunctions.getPlays(this.tracks,id)
    return result.length
  }
  getDifferentTracksOfArtist(id){
    let result = LogicFunctions.getDifferentTracksNumber(this.tracks,id)
    return result
  }
  getTimeListeningOfArtist(id){
    let result = LogicFunctions.getTimeListening(this.tracks,id)
    return result
  }
  getPercentageOfArtist(id){
    let artistTime = LogicFunctions.getTimeListening(this.tracks,id)
    let result = artistTime*  100/this.songsSpentListingTime
    return (Math.floor(result*100))/100+"%"
  }
  getPositiionOfAritst(id){
    let pos = this.sortedArtists
    let result = 0
    for(let i of pos){
      if(i[0] === id){
        result = pos.indexOf(i) + 1
      }
    }
    return result + '#'
  }
  getFavoriteSeasonOfArtist(id){
    let list =  LogicFunctions.getTimeListening(this.tracks,id)
    let result = LogicFunctions.getPreferredListingSeason(list)
    return result
  }
  getTop20OfArtist(id){
    let result = LogicFunctions.getTop20(this.tracks,id)
    return result
  }
}
export default State