import React from 'react';
// import Sound from 'react-sound';
import ReactAudioPlayer from 'react-audio-player';

function HelicopterSound() {
  return (
    // <Sound
    //   url='https://s3-ap-northeast-1.amazonaws.com/poodll-audioprocessing-out/CP/30/localhostuser/recordmp3online.com/poodll/poodllfile5edd194053c021.mp3'
    //   playStatus={Sound.status.PLAYING}
    //   autoLoad={true}
    // />
    <ReactAudioPlayer
      src='https://s3-ap-northeast-1.amazonaws.com/poodll-audioprocessing-out/CP/30/localhostuser/recordmp3online.com/poodll/poodllfile5edd194053c021.mp3'
      autoPlay={true}
    />
  );
}

export default HelicopterSound;
