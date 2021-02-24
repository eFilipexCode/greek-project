import selectRandomIndex from './selectRandomIndex';
import shuffle from '../utils/arrayShuffle';

export default function generateOptions(answersArray, recentSubject) {
    const newOptions = [];
    for (let i = 0; i < 3; i++) {
        const randomIndexOption = selectRandomIndex(answersArray);
        //Check if there's already another option with the same data.
        for (let index = 0; index < newOptions.length; index++) {
            if (newOptions[randomIndexOption] === answersArray[randomIndexOption]) {
                i--;
            };
        }

        if (randomIndexOption === recentSubject) {
            i--;
        } else {
            newOptions.push(answersArray[randomIndexOption]);
        };
    };

    newOptions.push(answersArray[recentSubject]);
    shuffle(newOptions);
    return newOptions;
};