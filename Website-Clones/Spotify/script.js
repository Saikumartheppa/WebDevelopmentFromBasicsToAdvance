let currentSong = new Audio();
let isDragging = false;
const seekBar =  document.querySelector(".seekBar");
const circle = document.querySelector(".circle");
function secondsToMinutes(seconds){
   if(isNaN(seconds) || seconds < 0){
       return "Invalid Input";
   }
   const minutes = Math.floor(seconds / 60);
   const remainingSeconds = Math.floor(seconds % 60);

   const formattedMinutes = String(minutes).padStart(2 , '0');
   const formattedSeconds = String(remainingSeconds).padStart(2 , '0');
//    console.log(`${formattedMinutes}:${formattedSeconds}`);
   return `${formattedMinutes}:${formattedSeconds}`;
}
async function getSongs() {
    let s = await fetch("http://127.0.0.1:3000/Website-Clones/Spotify/Assests/Songs/");
    let response = await s.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName('a');
    let songs = [];
    for(let i = 0; i < as.length; i++){
        const element = as[i];
        if(element.href.endsWith(".mp3")){
            let encodedName = element.href.split("Songs/").pop();
            let decodedName = decodeURIComponent(encodedName);
            songs.push(decodedName);
        }
    }
    return songs;
}
const playMusic = (track , pause = false)=>{
    currentSong.src = "Assests/Songs/"+track;
    if(!pause){
        currentSong.play();
        play.src = "Assests/songPause.svg";
    }
    document.querySelector(".songInfo").innerHTML = track;
    document.querySelector(".songTime").innerHTML = " 00:00 / 00:00";
}
async function main(){
    
    // fetch all songs
    let songs = await getSongs();
    playMusic(songs[0] , true);
    // Show all songs in the playList

    let ul = document.querySelector(".songsList").getElementsByTagName("ul")[0];
    for(song of songs){
        ul.innerHTML = ul.innerHTML +` <li class="flex">
                <img class="invert" src="Assests/music.svg" alt="Music" />
                <div class="info">
                  <div>${song}</div>
                  <div>Unknown Artist</div>
                </div>
                <div class="playNow flex align-items justify-content">
                  <span>Play now</span>
                  <img class="invert" src="Assests/songPlay.svg" alt="Play" />
                </div></li> `;
    }

    // Add an EventListener to each Song
    Array.from(document.querySelector(".songsList").getElementsByTagName('li')).forEach( e => {
        e.addEventListener("click" , element => {
            console.log(e.querySelector(".info").firstElementChild.innerHTML);
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
        })
    })

    // Add an Event Listener to Play , Next & Previous
    play.addEventListener("click" , () => {
        if(currentSong.paused){
            currentSong.play();
            play.src = "Assests/songPause.svg";
        }else{
            currentSong.pause();
            play.src = "Assests/songPlay.svg";
        }
    })

    // Listen to Time Update Event
    currentSong.addEventListener("timeupdate" , ()=>{
        if(!isDragging){
            document.querySelector(".songTime").innerHTML = `${secondsToMinutes(currentSong.currentTime)} / ${secondsToMinutes(currentSong.duration)}`;
            circle.style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
        }
    })

    //  Add an Event listener to load  Meta data
    currentSong.addEventListener("loadedmetadata" , ()=>{
         console.log("On Loaded metata Event called");
         document.querySelector(".songTime").innerHTML = `00:00 / ${secondsToMinutes(currentSong.duration)}`;
    } , {once:true});

    // Add an Event listener to sneek Bar
    
    //    sneekBar.addEventListener("click" , (element) =>{
    //     let percent = (element.offsetX / element.target.getBoundingClientRect().width) * 100;
    //     document.querySelector(".circle").style.left = percent + "%";
    //     currentSong.currentTime = (percent * currentSong.duration) / 100;
    // })

    // Add an Even Listener(drag n drop) to sneek Bar

    
    function updateSeekBarPosition(e){
        const rect = seekBar.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;

        const clampedX = Math.max(0 , Math.min(x , width));
        const percent = clampedX / width;
        const newTime = percent * currentSong.duration; 

        circle.style.left = `${percent * 100}%`
           // Update actual audio time (only on mouseup or click)
        if (!isDragging) {
         currentSong.currentTime = newTime;
        } else {
            // If dragging, store it temporarily; final set on mouseup
         currentSong.dataset.tempSeek = newTime;
  }

    }
    function startDrag(e){
        isDragging = true;
        document.body.classList.add("dragging");
        updateSeekBarPosition(e);
    }
    function duringDrag(e){
       if(isDragging){
        updateSeekBarPosition(e);
       }
    }
    function stopDrag(e){
        if(isDragging){
            document.body.classList.remove("dragging");
            updateSeekBarPosition(e);
            isDragging = false;
            if (currentSong.dataset.tempSeek) {
                currentSong.currentTime = parseFloat(currentSong.dataset.tempSeek);
                delete currentSong.dataset.tempSeek;
            }
        }
    }
    seekBar.addEventListener("mousedown" , (e)=>{
        startDrag(e);
    });
    window.addEventListener("mousemove", (e) =>{
        duringDrag(e);
    });
    window.addEventListener("mouseup" , (e)=>{
        stopDrag(e);
    });

}
main();