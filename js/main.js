let bpmBtn = document.querySelector('.bpm');
let displayBpm = document.querySelector('.display-bpm');
const BPMMS = 60000;
let bpm = 130;
bpmBtn.addEventListener('input', (evt) => {
    let tgt = evt.target.value;
    bpm = tgt;
    displayBpm.textContent = tgt;
});

let controlSurface = document.querySelector('.control');
controlSurface.addEventListener('click', element => {
    let tgt = element.target;
    if (tgt.classList.contains('left') || tgt.classList.contains('left-icon') && bpm > 60) {
        bpm--;
        bpmBtn.value = bpm;
        console.log(bpmBtn.value);
        displayBpm.textContent = bpm;
    } else if (tgt.classList.contains('left') || tgt.classList.contains('right-icon') && bpm < 200) {
        bpm++;
        bpmBtn.value = bpm;
        displayBpm.textContent = bpm;
    } else if(tgt.classList.contains('play-stop') || tgt.classList.contains('play-stop-icon')){
        console.log('play-pause');
        playStop(setBpm(bpm));
    };
});

// BPM Calc
const setBpm = (bpmUsser) => {
    let bpmAux = ((BPMMS/bpmUsser)*0.001);
    return bpmAux.toFixed(3);
}
//p5
let click;
let state = false;
function preload(){ //carga sonido
    soundFormats('mp3');
    click = loadSound('./assets/audio/click.mp3');
}
const setClick = () => { // callback para primer parametro obj SoundLoop
    click.play(); //.play!
}
function setup(){
   
};

const playStop = (bpm) => {
    //console.log(state)
    bpm = parseFloat(bpm);
    //console.log(bpm);
    if(state == false) {
        setLoopClick = new p5.SoundLoop(setClick,bpm);
        setLoopClick.start();
        state = !state;
    } else {
        setLoopClick.stop();
        state = !state;
    };
    printIcon();
};
const printIcon = () => {
    const iconBtn = document.querySelector('.play-stop-icon');
    (!state) ?  iconBtn.src = './assets/icon/play.svg' : iconBtn.src = './assets/icon/stop.svg';
};