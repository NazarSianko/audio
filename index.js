let isPlay = false;
let playNum = 0;
const audio = document.querySelector('audio');
const play = document.querySelector('.play-btn');
const next = document.querySelector('.next-track');
const prev = document.querySelector('.prev-track');

function playAudio() {
   
    if (isPlay == false) {
        audio.play();
        isPlay = true;
       
       
    }
    else if (isPlay == true) {
        audio.pause();
        isPlay = false;
        
    }
  }
  function toggleBtn() {
   if (isPlay == false ) {
     play.classList.add('stop');
   }
   
    if (isPlay == true) {
    play.classList.remove('stop');
    }
  }

  let arr = ["DuaLipa.mp3",'beyonce.mp3','ZillaKami - Bleach (feat. Denzel Curry).mp3'];


  function playNext() { 
 
    if (playNum <= arr.length-1) {
        playNum++;
        audio.src=`./audio/${arr[playNum]}`;
       isPlay = false;
       play.classList.add('stop');
       playAudio();
    
      }
    if (playNum > arr.length-1) {
          playNum = 0;
          audio.src=`./audio/${arr[playNum]}`;
          isPlay = false;
          play.classList.add('stop');
          playAudio();
        }
     
      
       
    }
 
   
  function playPrev() {
    if (playNum >= 0) {
        playNum--;
        audio.src=`./audio/${arr[playNum]}`;
        isPlay = false;
        play.classList.add('stop');
        playAudio();
      }
    
    if (playNum < 0) {
          playNum = arr.length-1;
          audio.src=`./audio/${arr[playNum]}`;
          isPlay = false;
          play.classList.add('stop');
          playAudio();
      }  
     
     
  }

 

  prev.addEventListener('click',playPrev)
  next.addEventListener('click',playNext);
  play.addEventListener('click',toggleBtn);
  play.addEventListener('click',playAudio);
 
  const audioPlayer = document.querySelector(".player-audio");
  const timeline = audioPlayer.querySelector(".timeline");
timeline.addEventListener("click", e => {
  const timelineWidth = window.getComputedStyle(timeline).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
}, false);
setInterval(() => {
    const progressBar = audioPlayer.querySelector(".progress");
    progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
    audioPlayer.querySelector(".time .current").textContent = timeSec(
      audio.currentTime
    );
  }, 100);
  function timeSec(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;
  
    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
      seconds % 60
    ).padStart(2, 0)}`;
  }
  const len = audioPlayer.querySelector(".time .length");
  audio.addEventListener(
    "loadeddata",
    () => {
      len.textContent = timeSec(
        audio.duration
      );
      
    },
    false
  
  );
  const tag = document.querySelector('.name');

    
    audio.addEventListener(
        "loadeddata",
        () => {
            
               if (playNum == 0) {
                   tag.textContent = 'Dua Lipa - don\'t start now';
               }
               else if (playNum == 1) {
                   tag.textContent = 'Beyonce - Lemonade';
                   
               }
               else if (playNum == 2) {
                 tag.textContent = 'ZillaKami - Bleach (feat. Denzel Curry)';
               }
                
            
        }
      );
 const body = document.querySelector('body');
 const img = document.querySelector('.main-img')
 
 function addBackground() {
   
      if (playNum == 1) {
        body.style.backgroundImage = 'url(./images/img/lemonade.png)';
        img.src = './images/img/lemonade.png'
      }
      if (playNum == 0) {
        body.style.backgroundImage = 'url(./images/img/dontstartnow.png)';
        img.src = './images/img/dontstartnow.png'
      }
      if (playNum == 2) {
        body.style.backgroundImage = 'url(./images/img/dogboy.jpeg)';
        img.src = './images/img/dogboy.jpeg'
      }

      
  
   
 }
 next.addEventListener('click',addBackground);
 prev.addEventListener('click',addBackground);

 audio.addEventListener('ended', function() {
  playNext();
  

})
audio.addEventListener('ended',addBackground);
audio.addEventListener('ended',addBackground);

localStorage.setItem('tag','Dua Lipa - don\'t start now');
localStorage.setItem('duration','3:23');
len.textContent = localStorage.getItem('duration');
tag.textContent = localStorage.getItem('tag');