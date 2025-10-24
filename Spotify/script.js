let currentSong = new Audio();

async function getSongs() {
    const response = await fetch('http://127.0.0.1:5500/Spotify/songs/haryanvi/');
    const data = await response.text();
    const div = document.createElement('div');
    div.innerHTML = data;
    const links = div.getElementsByTagName("a");
    const songs = [];
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        if (link.href.endsWith('.mp3')) {
            songs.push({ name: link.innerText, url: link.href });
        }
    }
    return songs;
}
async function main() {

    //Get the list of all the songs
    const songs = await getSongs();
    // console.log(songs);

    //Show all the songs in the playlist
    let songUrl = document.querySelector(".songList").getElementsByTagName("ul")[0];
    for (const song of songs) {
        let inputString = song.name;
        // Remove all occurrences of "_128"
        let updatedString = inputString.replace(/_128/g, '');

        // Find the index of the hyphen and extract the substring before it (if it exists)
        let hyphenIndex = updatedString.indexOf('-');
        if (hyphenIndex !== -1) {
            updatedString = updatedString.substring(0, hyphenIndex);
        }

        // Trim spaces from the start and end of the final string (optional)
        updatedString = updatedString.trim();
        // console.log(updatedString);
        songUrl.innerHTML += `<li><img class="invert" width="34" src="/Spotify/svgFile/music.svg">
        <div class="info">
          <div class="music-name">
            ${updatedString}
          </div>
          <div class="music-singer">Vikas</div>
        </div>
        <div class="playnow">
           <span>Play Now</span>
           <img class="invert" src="/Spotify/svgFile/playNow.svg">
        </div>
        </li>`;
    }

    //Attach event listeners to all the songs in the playlist
    const songItems = document.querySelectorAll(".songList ul li");
    songItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            // console.log(`Playing song: ${songs[index].name}`);
            currentSong.src = songs[index].url;
            //Play the selected song
            currentSong.play();
        });
    });

    //Attach an event listener to play, pause, previous, and forward buttons
    document.getElementById("play").addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "/Spotify/svgFile/pausebtn.svg";
        } else {
            currentSong.pause();
            play.src = "/Spotify/svgFile/playbtn.svg";
        }
    });
    currentSong.addEventListener("loadeddata", () => {
        console.log(currentSong.duration, currentSong.currentSrc, currentSong.currentTime)
        //The duration variable now holds the duration (in seconds) of the audio
    })
}
main();
