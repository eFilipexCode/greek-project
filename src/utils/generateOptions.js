
import selectRandomIndex from './selectRandomIndex';
import shuffle from '../utils/arrayShuffle';

export default function generateOptions(answersArray, recentSubject) {
    const newOptions = [];
    const answersKeeper = [...answersArray];
    const shuffledArray = shuffle(answersArray);
    for (let i = 0; i < 3; i++) {
        let randomIndexOption = selectRandomIndex(shuffledArray);
        //Check if there's already another option with the same data.
        for (let index = 0; index < newOptions.length - 1; index++) {
            if (newOptions[randomIndexOption] === shuffledArray[randomIndexOption]) {
                randomIndexOption++;
            };
        }

        if (randomIndexOption === recentSubject) {
            i--;
        } else {
            newOptions.push(shuffledArray[randomIndexOption]);
        };
    };

    const correct = shuffledArray.filter((item) => {
        return item === answersKeeper[recentSubject];
    })[0];
    newOptions.push(correct);
    shuffle(newOptions);
    return newOptions;
};