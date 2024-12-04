import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { togglePlay, setAudioData, setTranscription } from '../app/features/AudioSlice';
import playButtonImage from '../assets/images/pause-play.png';

const AudioButton = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.audio.isPlaying);
  const transcription = useSelector((state) => state.audio.transcription);
  const [mediaRecorder, setMediaRecorder] = useState('');

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          const recorder = new MediaRecorder(stream);
          setMediaRecorder(recorder);

          recorder.ondataavailable = (event) => {
            const audioData = event.data;
            dispatch(setAudioData(audioData));

            simulateApiCall(audioData)
              .then(data => {
                console.log('Transcription:', data);
                dispatch(setTranscription(data)); 
              })
              .catch(error => {
                console.error('Error in placeholder API:', error);
              });
          };
        })
        .catch(err => {
          console.error(
            "You need to grant this page permission to access your camera and microphone.",
          );
        });
    }
  }, [dispatch]);

  useEffect(() => {
    if (mediaRecorder) {
      if (isPlaying) {
        mediaRecorder.start();
      } else {
        mediaRecorder.stop();
      }
    }
  }, [isPlaying, mediaRecorder]);

  const handleButtonClick = () => {
    dispatch(togglePlay());
  };

  const simulateApiCall = (audioData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("This is a simulated transcription of the audio data.");
      }, 1000);
    });
  };

  return (
    <div className="bg-white p-50 rounded-lg flex flex-col items-center justify-center mt-80">
      <button
        onClick={handleButtonClick}
        className={`flex flex-col items-center justify-center px-4 py-2 rounded-full text-black font-semibold transition duration-300 focus:outline-none ${
          isPlaying ? 'bg-red-600 animate-pulse text-white' : 'bg-white text-black border border-gray-300'
        }`}
      >
        <span className="mb-2">{isPlaying ? 'Recording...' : 'Start Transcribing'}</span>
        <img src={playButtonImage} alt="Play Button" className="w-6 h-6 rounded-full mt-2" />
      </button>
      {transcription && (
        <div className="text-black text-center mt-2">
          <h3 className="text-lg font-semibold">Transcription:</h3>
          <p>{transcription}</p>
        </div>
      )}
    </div>
  );
};

export default AudioButton;
