import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: 'Sunflower',
      duration: '2:50'
    },
    {
      title: 'Creep',
      duration: '3:44'
    },
    {
      title: 'I want it that way',
      duration: '4:02'
    }
  ];
};

const SelectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: SelectedSongReducer
});
