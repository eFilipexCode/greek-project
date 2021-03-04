<script>
    import buildSentence from "../utils/buildSentences";
    import {
        subject,
        accustive,
        verbs,
        predicative,
    } from "../utils/wordsForSentences";
    import shuffle from "../utils/arrayShuffle";
    import playSound from "../utils/playCorrectSound";
    import Button from "../components/Button.svelte";

    let { sentence, traduction } = buildSentence(
        subject,
        accustive,
        verbs,
        predicative
    );
    let incorrectTranslations;
    let options;

    function generateNewSentences() {
        incorrectTranslations = [];
        for (let i = 0; i < 3; i++) {
            const newIncorrectTranslation = buildSentence(
                subject,
                accustive,
                verbs,
                predicative
            );
            if (newIncorrectTranslation.traduction === traduction) i--;
            else incorrectTranslations.push(newIncorrectTranslation);
        }
        options = [...incorrectTranslations, { sentence, traduction }];
        shuffle(options);
    }

    generateNewSentences();

    let colorAnswer = "#5f27cd";
    function changeBg(correct) {
        correct ? (colorAnswer = "#2ecc71") : (colorAnswer = "#e74c3c");
        setTimeout(() => {
            colorAnswer = "#5f27cd";
        }, 500);
    }

    function checkAnswer(option) {
        if (option.traduction === traduction) {
            playSound(true);

            const newMainSentence = buildSentence(
                subject,
                accustive,
                verbs,
                predicative
            );
            sentence = newMainSentence.sentence;
            traduction = newMainSentence.traduction;

            generateNewSentences();
            changeBg(true);
        } else {
            playSound(false);
            changeBg(false);
        }
    }
</script>

<svelte:head>
    <title>Greek Project - Sentences</title>
</svelte:head>

<main class="container-game" style={`background: ${colorAnswer}`}>
    <Button
        className="back-button"
        linkUrl="/select"
        text="Back"
    />
    <div class="options-screen">
        <p class="greek option-show">
            {sentence}
        </p>
    </div>
    <p class="command">Means...</p>
    <div class="options-letters">
        {#each options as option}
            <button
                on:click={() => checkAnswer(option)}
                class="greek-option option animate__animated animate__fadeInUp"
                >{option.traduction}</button
            >
        {/each}
    </div>
</main>

<style>
    main {
        height: 100vh;
        width: 100vw;
    }

    .option-show {
        font-size: 2.5rem;
    }
    .options-letters button {
        font-size: 1.2rem;
        padding: 6px;
        min-height: 90px;
        width: 170px;
    }

    @media (max-width: 600px) {
        div.options-letters button.greek-option {
            width: 100%;
            min-height: 70px;
        }
    }
</style>
