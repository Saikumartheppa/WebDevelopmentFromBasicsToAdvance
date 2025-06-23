let currentSong = new Audio();
let songs;
let isDragging = false;
const seekBar = document.querySelector(".seekBar");
const circle = document.querySelector(".circle");
let currFolder;

function secondsToMinutes(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
  }
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");
  //    console.log(`${formattedMinutes}:${formattedSeconds}`);
  return `${formattedMinutes}:${formattedSeconds}`;
}

function attachSongClickListeners() {
  // Add an EventListener to each Song
  Array.from(
    document.querySelector(".songsList").getElementsByTagName("li")
  ).forEach((e) => {
    e.addEventListener("click", (element) => {
      setTimeout(() => {
        e.classList.toggle("clickedBG");
      }, 250);
      e.classList.toggle("clickedBG");
      // console.log(e.querySelector(".info").firstElementChild.innerHTML);
      playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
    });
  });
}

async function getSongs(folder) {
  currFolder = folder;
  let s = await fetch(
    `http://127.0.0.1:3000/Website-Clones/Spotify/Assests/Songs/${folder}`
  );
  let response = await s.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  songs = [];
  for (let i = 0; i < as.length; i++) {
    const element = as[i];
    if (element.href.endsWith(".mp3")) {
      let encodedName = element.href.split(`/${folder}/`).pop();
      let decodedName = decodeURIComponent(encodedName);
      // console.log(decodedName);
      songs.push(decodedName);
    }
  }

  // Show all songs in the playList

  let ul = document.querySelector(".songsList").getElementsByTagName("ul")[0];
  ul.innerHTML = "";
  for (song of songs) {
    ul.innerHTML =
      ul.innerHTML +
      ` <li class="flex">
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
}
const playMusic = (track, pause = false) => {
  currentSong.src = `Assests/Songs/${currFolder}/` + track;
  if (!pause) {
    currentSong.play();
    play.src = "Assests/songPause.svg";
  }
  document.querySelector(".songInfo").innerHTML = track;
  document.querySelector(".songTime").innerHTML = " 00:00 / 00:00";
};

async function displayAlbums() {
  let s = await fetch(
    `http://127.0.0.1:3000/Website-Clones/Spotify/Assests/Songs/`
  );
  let response = await s.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let anchors = div.getElementsByTagName("a");
  let cardContainer = document.querySelector(".cardContainer");
  // console.log(div);
  let arr = Array.from(anchors);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].href.includes(`/Songs/`)) {
      // console.log(e.href.split(`/`).slice(-2)[0]);
      let folder = arr[i].href.split(`/`).slice(-2)[0];
      // console.log(folder);
      let a = await fetch(
        `http://127.0.0.1:3000/Website-Clones/Spotify/Assests/Songs/${folder}/info.json`
      );
      let response = await a.json();
      // console.log(jsonResponse);
      cardContainer.innerHTML = cardContainer.innerHTML + `<div data-folder=${folder} class="card">
              <div class="play">
                <img
                  class="justify-content align-items"
                  src="Assests/Play.svg"
                  alt="Play"
                />
              </div>
              <img
                src="Assests/Songs/${folder}/cover.jpg"
                alt="HappyHits"
              />
              <h4>${response.title}</h4>
              <p>${response.description}</p>
            </div>`
    }
  }

  // Load the Play List whenever card is clicked
  Array.from(document.getElementsByClassName("card")).forEach((element) => {
    element.addEventListener("click", async (item) => {
      //  console.log(item.target , item.currentTarget)
      console.log(item.currentTarget.dataset.folder);
      songs = await getSongs(`${item.currentTarget.dataset.folder}`);
      attachSongClickListeners();
      // console.log(songs);
      // playMusic(songs[0], true);
    });
  });
}

async function main() {
  // fetch all songs
  await getSongs("Top50");
  attachSongClickListeners();
  playMusic(songs[0], true);

  // Display all the albums dynamically
  displayAlbums();

  // Add an Event Listener to Play
  play.addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      play.src = "Assests/songPause.svg";
    } else {
      currentSong.pause();
      play.src = "Assests/songPlay.svg";
    }
  });

  // Add an Event Listener to  Previous
  previous.addEventListener("click", () => {
    currentSong.pause();
    let idx = songs.indexOf(
      decodeURIComponent(currentSong.src.split("/").pop())
    );
    if (idx > 0) {
      playMusic(songs[idx - 1]);

      // If current song is first in the list , If user clicks on previous it will play last song
    } else if (idx == 0) {
      playMusic(songs[songs.length - 1]);
    }
  });
  // Add an Event Listener to  Next
  next.addEventListener("click", () => {
    currentSong.pause();
    let idx = songs.indexOf(
      decodeURIComponent(currentSong.src.split("/").pop())
    );
    if (idx < songs.length - 1) {
      playMusic(songs[idx + 1]);

      // If current song is last in the list , If user clicks on next it will play first song
    } else if (idx == songs.length - 1) {
      playMusic(songs[0]);
    }
  });

  // Listen to Time Update Event
  currentSong.addEventListener("timeupdate", () => {
    if (!isDragging) {
      document.querySelector(".songTime").innerHTML = `${secondsToMinutes(
        currentSong.currentTime
      )} / ${secondsToMinutes(currentSong.duration)}`;
      circle.style.left =
        (currentSong.currentTime / currentSong.duration) * 100 + "%";
    }
  });

  //  Add an Event listener to load  Meta data
  currentSong.addEventListener(
    "loadedmetadata",
    () => {
      // console.log("On Loaded metata Event called");
      document.querySelector(
        ".songTime"
      ).innerHTML = `00:00 / ${secondsToMinutes(currentSong.duration)}`;
    },
    { once: true }
  );

  // Add an Event listener to sneek Bar

  //       seekBar.addEventListener("click" , (element) =>{
  //       let percent = (element.offsetX / element.target.getBoundingClientRect().width) * 100;
  //       document.querySelector(".circle").style.left = percent + "%";
  //       currentSong.currentTime = (percent * currentSong.duration) / 100;
  //   })

  //   Add an Even Listener(drag n drop) to sneek Bar

  function updateSeekBarPosition(e) {
    const rect = seekBar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;

    const clampedX = Math.max(0, Math.min(x, width));
    const percent = clampedX / width;
    const newTime = percent * currentSong.duration;

    circle.style.left = `${percent * 100}%`;
    // Update actual audio time (only on mouseup or click)
    if (!isDragging) {
      currentSong.currentTime = newTime;
    } else {
      // If dragging, store it temporarily; final set on mouseup
      currentSong.dataset.tempSeek = newTime;
    }
  }
  function startDrag(e) {
    isDragging = true;
    document.body.classList.add("dragging");
    updateSeekBarPosition(e);
  }
  function duringDrag(e) {
    if (isDragging) {
      updateSeekBarPosition(e);
    }
  }
  function stopDrag(e) {
    if (isDragging) {
      document.body.classList.remove("dragging");
      updateSeekBarPosition(e);
      isDragging = false;
      if (currentSong.dataset.tempSeek) {
        currentSong.currentTime = parseFloat(currentSong.dataset.tempSeek);
        delete currentSong.dataset.tempSeek;
      }
    }
  }
  seekBar.addEventListener("mousedown", (e) => {
    startDrag(e);
  });
  window.addEventListener("mousemove", (e) => {
    duringDrag(e);
  });
  window.addEventListener("mouseup", (e) => {
    stopDrag(e);
  });

  // Add an Event Listener for Hamburger
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0";
  });

  // Add an Event Listener for Hamburger
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-120%";
  });

  // Add an Event Listener for Volume

  document
    .querySelector(".range")
    .getElementsByTagName("input")[0]
    .addEventListener("change", (e) => {
      // console.log(e , e.target.value , e.target);
      currentSong.volume = Number.parseInt(e.target.value) / 100;
    });

}

main();
