<audio id="bgMusic" loop>
  <source src="your_music_file.mp3" type="audio/mp3">
  Your browser does not support the audio element.
</audio>

<button onclick="toggleMusic()">Play/Pause Music</button>

<script>
  const bgMusic = document.getElementById("bgMusic");
  let isPlaying = false;

  function toggleMusic() {
    if (isPlaying) {
      bgMusic.pause();
      isPlaying = false;
    } else {
      bgMusic.play();
      isPlaying = true;
    }
  }
</script>