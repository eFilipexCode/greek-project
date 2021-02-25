export default function selectRandomIndex(array) {
    const index = Math.floor(Math.random() * array.length);
    return index;
};