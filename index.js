// songs details
let songs = [
    { songName: 'Dil Diyan Gallan', filePath: './songs/02 - Dil Diyan Gallan - DownloadMing.SE.mp3', coverPath: './img/Dil Diyan Gallan.jpg' },

    { songName: 'Darkhaast - Shivaay (Arijit Singh)', filePath: './songs/02 Darkhaast - Shivaay (Arijit Singh) 190Kbps.mp3', coverPath: './img/Darkhaast - Shivaay.jpg' },

    { songName: 'Panchhi Bole - DownloadMing.SE', filePath: './songs/06 - Panchhi Bole - DownloadMing.SE.mp3', coverPath: './img/Panchhi Bole.jpg' },

    { songName: 'Khalid - Young Dumb & Broke', filePath: './songs/82. Khalid - Young Dumb & Broke.mp3', coverPath: './img/Khalid - Young Dumb & Broke.jpg' },

    { songName: 'Arziyaan - Jigariyaa', filePath: './songs/arziyaan_jigariyaa_shital cyber.mp3', coverPath: './img/Arziyaan - Jigariyaa.jpg' },

    { songName: 'TheFatRat - Fly Away feat. Anjulie', filePath: './songs/TheFatRat - Fly Away feat. Anjulie.mp3', coverPath: './img/TheFatRat - Fly Away feat. Anjulie.jpg' },

    { songName: 'Paniyon Sa - Satyameva jayate', filePath: './songs/Paniyon Sa - Satyameva jayate 320 Kbps.mp3', coverPath: './img/Paniyon Sa - Satyameva jayate.jpg' },

    { songName: 'Galti-Se-Mistake - (Mr-Jatt.com)', filePath: './songs/Galti Se Mistake.mp3', coverPath: './img/Galti-Se-Mistake.jpg' },

    { songName: 'Chennai Express - Tera Rastaa Chhodoon Na', filePath: './songs/Chennai Express - 03 - Tera Rastaa Chhodoon Na.mp3', coverPath: './img/Chennai Express - Tera Rastaa Chhodoon Na.jpg' },

    { songName: 'Mere Humsafar', filePath: './songs/04 - Mere Humsafar.mp3', coverPath: './img/Mere Humsafar.jpg' },

    { songName: 'Adventurer - Reality', filePath: './songs/Adventurer - Reality.mp3', coverPath: './img/Adventurer - Reality.jpg' },

    { songName: 'Clean Bandit - Symphony ft. Zara Larsson', filePath: './songs/Clean Bandit - Symphony ft. Zara Larsson (Beau Collins Remix).mp3', coverPath: './img/Clean Bandit - Symphony ft. Zara Larsson.jpg' },

    { songName: 'Meri Maa by Sankalp Khetwal', filePath: './songs/Meri Maa by Sankalp Khetwal Dil Hai Hindustani 11 August.mp3', coverPath: './img/Meri Maa by Sankalp Khetwal.jpg' },

    { songName: 'Namo Namo - Lyrical Kedarnath', filePath: './songs/Namo Namo - Lyrical _ Kedarnath _ Sushant Rajput _ Sara Ali Khan _ Amit Trivedi _ Amitabh B.mp3', coverPath: './img/Namo Namo - Lyrical _ Kedarnath.jpeg' },

    { songName: 'Krewella - Alibi', filePath: './songs/Krewella - Alibi (Official Music Video).mp3', coverPath: './img/Krewella - Alibi.jpg' },

    { songName: 'Teri Mitti - Lyrical Kesari', filePath: './songs/Teri Mitti - Lyrical _ Kesari _ Akshay Kumar &amp; Parineeti Chopra _ Arko _ B Praak_ Manoj Muntashir.mp3', coverPath: './img/Teri Mitti - Lyrical _ Kesari.jpeg' },

    { songName: 'Hear Me - Zephyrtone', filePath: './songs/Hear Me - Zephyrtone (128  kbps).mp3', coverPath: './img/Hear Me - Zephyrtone.jpg' },

    { songName: 'BESABRIYAAN', filePath: './songs/BESABRIYAAN Full Video SongM. S. DHONI - THE UNTOLD STORYSushant Singh Rajput.mp3', coverPath: './img/BESABRIYAAN.jpeg' },

    { songName: 'Zindagi', filePath: './songs/Zindagi_(webmusic.in).mp3', coverPath: './img/Zindagi.jpeg' },

    { songName: 'Arijit Singh DESH MERE Song', filePath: './songs/Arijit Singh_ DESH MERE Song _ Ajay D, Sanjay D, Ammy V _ Arko, Manoj M _ Bhuj_ The Pride Of India (1).mp3', coverPath: './img/Arijit Singh_ DESH MERE Song.jpg' },

    { songName: 'Alan Walker Ava Max Alone Pt II', filePath: './songs/Alan_Walker_Ava_Max_Alone_Pt_II_Live_at_Châ.mp3', coverPath: './img/Alan_Walker_Ava_Max_Alone_Pt_II.jpg' },

    { songName: 'Lost Sky Dreams pt II feat Sara Skinner NCS Release', filePath: './songs/Lost_Sky_Dreams_pt_II_feat_Sara_Skinner_NCS_Release_.mp3', coverPath: './img/Lost_Sky_Dreams_pt_II.jpeg' },
]
// Print all songs details
let counter = 0;
songs.forEach(e => {
    document.getElementById('song').innerHTML += `<div class="songList">
    <div class="songItems flex">
    <img class="songCoverImg" src="${e.coverPath}" alt="">
    <div class="songDetail flex">
    <span id="songName" class="songName">${e.songName}</span>
    <div class="flex songPlayDuration">
    <img id="${counter}" class="playPause" src="./img/play-button.png" alt="">
    <span class="songDuration">525</span>
    </div>
    </div>
    </div>
    
    </div>`
    counter++;
})
// Handle play pause songlist buttons
Array.from(document.querySelectorAll('.playPause')).forEach((e) => {
    let counter = ''
    e.onclick = () => {
        if (counter == '') {
            playChange()
            songIndex = e.id;
            e.src = './img/pause.png'
            audioElement.currentTime = 0;
            audioElement.src = songs[songIndex].filePath
            audioElement.play()
            playButton()
            counter = e.id
        }
        else if (counter == e.id) {
            audioElement.pause()
            Array.from(play).forEach(play => {
                play.innerText = '▶️'
            });
            playChange()
            counter = ''
        }
    }
})
// Html dom elements
const songName = document.querySelector('.songName')
const play = document.getElementsByClassName('play')
const shuffle = document.getElementsByClassName('shuffle')
const nextBtn = document.getElementsByClassName('next')
const previousBtn = document.getElementsByClassName('rewind')
const progressBar = document.getElementsByClassName('progress')
const currTime = document.getElementsByClassName('currTime')
const totalTime = document.getElementsByClassName('totalTime')
const cntrlImage = document.getElementsByClassName('cntrlImage')

// Audio initializer
let songIndex = 0;
let audioElement = new Audio(songs[songIndex].filePath);

// pause button set
const playButton = () => {
    Array.from(play).forEach(play => {
        play.innerText = '⏸️'
    });
}
// pause button set
const pauseButton = () => {
    Array.from(play).forEach(play => {
        play.innerText = '▶️'
    });
}

// Handle next click
Array.from(nextBtn).forEach(nextBtn => {
    nextBtn.onclick = () => {
        if (songIndex < (songs.length - 1) && songIndex >= 0) {
            songIndex = songIndex + 1
            playChange()
            document.getElementById(songIndex).src = './img/pause.png'
            audioElement.currentTime = 0;
            audioElement.src = `${songs[songIndex].filePath}`
            audioElement.play()
            playButton()

        }
        else if (songIndex == (songs.length - 1)) {
            songIndex = 0;
            playChange()
            document.getElementById(songIndex).src = './img/pause.png'
            audioElement.currentTime = 0;
            audioElement.src = `${songs[songIndex].filePath}`
            audioElement.play()
        }
    }
})

//Handle previous click
Array.from(previousBtn).forEach(previousBtn => {
    previousBtn.onclick = () => {
        if (songIndex > 0 && audioElement.currentTime < 1) {
            songIndex = songIndex - 1;
            playChange()
            document.getElementById(songIndex).src = './img/pause.png'
            audioElement.currentTime = 0;
            audioElement.src = `${songs[songIndex].filePath}`
            audioElement.play()
            Array.from(play).forEach(play => {
                play.innerText = '⏸️'
            });
        }
        else if (audioElement.currentTime > 2) {
            audioElement.currentTime = 0;
        }
        if (songIndex == 0) {

            console.log(previousBtn);
        }
    }
})
// Handle shuffle
Array.from(shuffle).forEach(shuffle => {
    shuffle.onclick = () => {
        songIndex = Math.floor(Math.random() * songs.length)
        playChange()
        document.getElementById(songIndex).src = './img/pause.png'
        audioElement.currentTime = 0;
        audioElement.src = `${songs[songIndex].filePath}`
        audioElement.play()
        playButton()
    }
})

// Handle play/pause
Array.from(play).forEach(play => {
    play.onclick = () => {
        if (audioElement.currentTime <= 0 || audioElement.paused) {
            document.getElementById(songIndex).src = './img/pause.png'
            audioElement.play();
            playButton()
        }
        else {
            audioElement.pause()
            play.innerText = '▶️'
            playChange()
        }
    }
})


// change pause button to play
const playChange = () => { Array.from(document.querySelectorAll('.playPause')).forEach((e) => { e.src = './img/play-button.png' }) }


// Song time duration update
audioElement.addEventListener('timeupdate', () => {
    // change song name and cover image
    Array.from(cntrlImage).forEach((cntrlImage) => {
        if (cntrlImage.id == 'cntrlImage') {
            cntrlImage.innerHTML = `<img class="controlImg" src='${songs[songIndex].coverPath}' alt="">`
        }
        if (cntrlImage.id == 'bottomCntrlImage') {
            cntrlImage.innerHTML = `<img id="bottomControlImg" src='${songs[songIndex].coverPath}' alt="">`
        }
    })
    Array.from(document.getElementsByClassName('controllName')).forEach(controllName => {
        controllName.innerText = `${songs[songIndex].songName}`
    })
    // set total song duration and current duration
    Array.from(currTime).forEach(currTime => { currTime.innerText = secondsToMinutes(audioElement.currentTime) })
    Array.from(totalTime).forEach(totalTime => { totalTime.innerText = secondsToMinutes(audioElement.duration) })

    // update progressBar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    Array.from(progressBar).forEach(progressBar => { progressBar.value = progress })
    // play next song
    if (audioElement.currentTime == audioElement.duration) nextSong();
})

// change song time using progress bar
Array.from(progressBar).forEach(progressBar => {
    progressBar.onchange = () => { audioElement.currentTime = (progressBar.value * audioElement.duration) / 100; }
})


// function to convert seconds to minutes
const secondsToMinutes = (second) => {
    let minutes = Math.floor(second / 60);
    let extraSeconds = second % 60
    minutes = minutes < 10 ? '0' + minutes : minutes;
    extraSeconds = Math.round(extraSeconds < 10 ? "0" + extraSeconds : extraSeconds);
    return `${minutes}:${extraSeconds}`
}
// play next song automatically
const nextSong = () => {
    if (songIndex < (songs.length - 1) && songIndex >= 0) {
        songIndex = songIndex + 1
        playChange()
        document.getElementById(songIndex).src = './img/pause.png'
        audioElement.currentTime = 0;
        audioElement.src = `${songs[songIndex].filePath}`
        audioElement.play()
        playButton()
    }
    else if (songIndex == (songs.length - 1)) {
        songIndex = 0;
        playChange()
        document.getElementById(songIndex).src = './img/pause.png'
        audioElement.currentTime = 0;
        audioElement.src = `${songs[songIndex].filePath}`
        audioElement.play()
    }

}