
import selectRandomIndex from './selectRandomIndex';
import shuffle from '../utils/arrayShuffle';

export default function generateOptions(answersArray, recentSubject, comparingParameter, comparingParameterOptional) {
    const newOptions = [];
    for (let i = 0; i < 3; i++) {
        let randomIndexOption = selectRandomIndex(answersArray);
        //Check if there's already another option with the same data.
        for (let index = 0; index < newOptions.length; index++) {
            if (newOptions[randomIndexOption] === answersArray[randomIndexOption]) {
                randomIndexOption++;
            };
        }

        if (randomIndexOption === recentSubject) {
            i--;
        } else {
            newOptions.push(answersArray[randomIndexOption]);
        };
    };

    const correct = answersArray.filter((item) => {
        if (!comparingParameterOptional) {
            return item[`${comparingParameter}`] === answersArray[recentSubject][`${comparingParameter}`];
        } else {
            return item[`${comparingParameter}`] === answersArray[recentSubject][`${comparingParameter}`] && item[`${comparingParameterOptional}`] === answersArray[recentSubject][`${comparingParameterOptional}`];
        };
    })[0];
    newOptions.push(correct);
    shuffle(newOptions);
    return newOptions;
};