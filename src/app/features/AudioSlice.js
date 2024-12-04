import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPlaying: false,
  audioData: null,  
  transcription: '',  
};

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    setAudioData: (state, action) => {
      state.audioData = action.payload;
    },
    setTranscription: (state, action) => {
      state.transcription = action.payload;
    },
  },
});

export const { togglePlay, setAudioData, setTranscription } = audioSlice.actions;


export default audioSlice.reducer;
