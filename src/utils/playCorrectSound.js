export default function playCorrectSound(correct) {
    const audio = new Audio(`${correct ? `${'/correct.mp3'}` : `${'incorrect.mp3'}`}`);
    audio.play();
};