<script>
    // JavaScript function to play the video when poster image is clicked
    function playVideo() {
        var video = document.getElementById('video-container'); // Updated ID
        var poster = document.querySelector('.video-poster');
        video.style.display = 'block';
        poster.style.display = 'none';
        video.play();
    }
</script>
