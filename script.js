let videoPlay = document.querySelector('.play-video');
let mediaVideo = videoPlay.querySelector('video');
let controlsICON = videoPlay.querySelector('.icon-controls');

let play = document.querySelector('#play');
let pause = document.querySelector('#pause');
let rwindICON = document.querySelector('#rwid');
let fwdICON = document.querySelector('#fwd');
let fullscrean = document.querySelector('.fullscrean-buttom');
let fullICON = document.querySelector('#full-screen');
let volume = document.querySelector('.video-control .icon');
let volumeProgressBar = document.querySelector('.video-control .volume-control');
let inputProgressBar = document.querySelector('.volume-control');
let progresbarLine = document.querySelector('.progress-video-controls');
let timer = document.querySelector('.timer')
let currentTime = document.querySelector('.timer-show');
let videoTimerSHow = document.querySelector('.video-timer-show');

volume.addEventListener('click', function(){
    volumeProgressBar.classList.toggle('active');
})
mediaVideo.value = 0.5;
inputProgressBar.addEventListener('input', function(){
    mediaVideo.volume = this.value / 100;
    this.style = `background:linear-gradient(90deg , #101074 ${this.value}%, #fff 0%);`;
})
mediaVideo.addEventListener('timeupdate' , function(){
    currentTime.textContent = getTimer(mediaVideo.currentTime);

    let bar = (mediaVideo.currentTime / mediaVideo.duration) * 100;
    progresbarLine.style = `background:linear-gradient(90deg , rgba(0,0,0,.15) ${bar}%, #101074 0%);`
})


fullscrean.addEventListener('click' , function(){
    console.log(document.fullscreenElement)
    if (!document.fullscreenElement) {
        if(videoPlay.requestFullscreen){
            videoPlay.requestFullscreen()
        }else if(videoPlay.requestFullscreen){
            videoPlay.requestFullscreen();
        }else if(videoPlay.mozFullScreenElement){
            videoPlay.mozFullScreenElement();
        }
        else if(videoPlay.msFullscreenElement){
            videoPlay.msFullscreenElement();
        }
        else if(videoPlay.webkitFullscreenElement){
            videoPlay.webkitFullscreenElement();
        }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }else if(document.mozCancelFullscreen){
        document.mozCancelFullscreen();
      }else if(document.msCancelFullscreen){
        document.msCancelFullscreen();
      }else if(document.webkitCancelFullscreen){
        document.webkitCancelFullscreen();
      }
    }
})

play.addEventListener('click' , function(){
    videoTimerSHow.textContent = getTimer(mediaVideo.duration);
    if (mediaVideo.paused){
        toggleplayIcon();
        mediaVideo.play();
    }
        else{
            toggleplayIcon();
            mediaVideo.pause();
        }   
})
rwindICON.addEventListener('click' , function(){
    mediaVideo.currentTime = mediaVideo.currentTime -5;
})
fwdICON.addEventListener('click' , function(){
    mediaVideo.currentTime = mediaVideo.currentTime +5;
})
function toggleplayIcon(){
    let icon = play.querySelector('i');
    icon.classList.toggle('fa-pause');
    icon.classList.toggle('fa-play');
}

function getTimer(timer){
    let minetes = Math.floor(timer / 60);
    let sec = Math.floor(timer - (minetes * 60));
    
    let minetesValue;
    let secValue;
    
    if(minetes < 10){
        minetesValue = '0' + minetes;
    }else{
        minetesValue = minetes;
    }
    
    if(sec < 10){
        secValue = '0' + sec;
    }else{
        secValue = sec;
    }
    return minetesValue + ':' + secValue
}