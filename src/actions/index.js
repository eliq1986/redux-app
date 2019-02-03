
//action creator
export const selectSong = (song) => {
 // action form
  return {
    type:"SONG_SELECTED",
    payload: song
  };
};
