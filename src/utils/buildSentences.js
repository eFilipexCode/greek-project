import selectRandomIndex from "./selectRandomIndex";

export default function buildSentences(subjectArray, accusativeArray, verbs, predicativeArray) {
    let sentence;
    let traduction;
    const randomSubjectIndex = selectRandomIndex(subjectArray);
    const randomVerbIndex = selectRandomIndex(verbs);

    const subject = subjectArray[randomSubjectIndex];
    const verb = verbs[randomVerbIndex];

    // Set a number that can be used as a probability to use first or third person.
    const randomProbabilityToFirstPerson = generateRandomnessForThirdOrFirstPerson(10);

    if (randomProbabilityToFirstPerson <= 2) { // 20% chance of being first person conjugate
        sentence = addToSentence(sentence, `ἐγὼ ${verb.first}`);
        traduction = addToSentence(traduction, `I ${`${verb.traduction === undefined ? verb.irregularFirst : `${verb.traduction}`}`}`);
    } else {
        sentence = addToSentence(sentence, `${subject.word} ${verb.third}`);
        traduction = addToSentence(traduction, `The ${subject.traduction}  ${`${verb.traduction === undefined ? verb.irregularThird : `${verb.traduction}s`}`}`);
    };

    if (verb.accusative) {
        const randomAccusativeIndex = selectRandomIndex(accusativeArray);
        const accusative = accusativeArray[randomAccusativeIndex];

        sentence = sentence = addToSentence(sentence, ` ${accusative.word}`);
        traduction = addToSentence(traduction, ` ${accusative.traduction}`);
    } else if (!verb.accusative && verb.predicative) {
        const randomPredicativeIndex = selectRandomIndex(predicativeArray);
        const predicative = predicativeArray[randomPredicativeIndex];

        sentence = addToSentence(sentence, ` ${predicative[`${subject.gender}`]}`);
        traduction = addToSentence(traduction, ` ${predicative.traduction}`);
    };

    return {
        sentence,
        traduction
    };
};

function generateRandomnessForThirdOrFirstPerson(range) {
    const randomNumber = Math.floor(Math.random() * range);
    return randomNumber;
};

function addToSentence(sentenceToBeUpdated, update) {
    if (sentenceToBeUpdated !== undefined) {
        const newSentence = sentenceToBeUpdated + ` ${update}`;
        return newSentence;
    } else
        return `${update}`;
};