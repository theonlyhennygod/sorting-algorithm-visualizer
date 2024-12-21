import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const SoundPlayer = forwardRef(({ moveSoundFile, finishSoundFile }, ref) => {
  const moveAudioRef = useRef(null);
  const finishAudioRef = useRef(null);

  useImperativeHandle(ref, () => ({
    playMoveSound: () => {
      if (moveAudioRef.current) {
        moveAudioRef.current.play();
      }
    },
    playFinishSound: () => {
      if (finishAudioRef.current) {
        finishAudioRef.current.play();
      }
    },
  }));

  return (
    <>
      <audio ref={moveAudioRef} src={moveSoundFile} />
      <audio ref={finishAudioRef} src={finishSoundFile} />
    </>
  );
});

export default SoundPlayer;