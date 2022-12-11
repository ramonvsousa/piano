const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", playNote);

function getKeyCode(event) {
    let eventType = event.type;

    if (eventType === "click") {
        keyCode = event.target.dataset.key;
    } else if (eventType === "keydown") {
        keyCode = event.keyCode;
    }

    return keyCode;
}

function playAudio(keyCode) {
    const audioKey = document.querySelector(`audio[data-key="${keyCode}"]`);
    
    audioKey.currentTime = 0;
    audioKey.play();
}

function addPlayingClass(key) {
    key.classList.add('playing')
}

function removePlayingClass(event) {
    event.target.classList.remove("playing")
}

function playNote(event) {
    keyCode = getKeyCode(event);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);        

    if (key) {
        addPlayingClass(key)
        playAudio(keyCode);
    }
}

keys.forEach(function (key) {
    key.addEventListener("click", playNote);
    key.addEventListener("transitionend", removePlayingClass)
});