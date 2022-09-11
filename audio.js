var playBtn = document.getElementById('audio_click'),
  hearbeat = document.getElementById('heartbeat')
	audios = document.querySelectorAll('audio');
console.log(audios);


playBtn.addEventListener('mouseover', function() {
    console.log(123);
[].forEach.call(audios, function(audio) {
  // do whatever
  audio.play();
});
}, false);