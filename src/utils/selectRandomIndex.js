export default function selectRandomLetter(array) {
    const index = Math.floor(Math.random() * array.length);
    return index;
};