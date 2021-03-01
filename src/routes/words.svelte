<script>
    import words from "../utils/words";
    import selectRandomIndex from "../utils/selectRandomIndex";
    import generateOptions from "../utils/generateOptions";
    import checkAnswer from "../utils/checkAnswer";
    import playCorrectSound from '../utils/playCorrectSound';

    let wordIndex = selectRandomIndex(words);
    const answers = words.map((word) => {
        return { traduction: word.traduction };
    });
    let wordOptions = generateOptions(answers, wordIndex, "traduction");

    let colorAnswer = "#5f27cd";
    function changeBg(correct) {
        correct ? colorAnswer = '#2ecc71' : colorAnswer = "#e74c3c";
        setTimeout(() => {
            colorAnswer = "#5f27cd";
        }, 500);
    }

    function handleCheckAnswers(option) {
        if (checkAnswer(answers.indexOf(option), wordIndex)) {
            playCorrectSound(true);
            changeBg(true);
            wordIndex = selectRandomIndex(words);
            wordOptions = generateOptions(answers, wordIndex, "traduction");
        } else {
            changeBg(false);
            playCorrectSound(false);
        }
    }
</script>

<svelte:head>
    <title>Greek Project - Words</title>
</svelte:head>

<main class="container-game" style={`background: ${colorAnswer}`}>
    <div class="options-screen">
        <p class="greek option-show-word">
            {words[wordIndex].word}
        </p>
    </div>
    <p class="command">Means...</p>
    <div class="options-letters">
        {#each wordOptions as option}
            <button
                class="greek-option option animate__animated animate__fadeInUp"
                on:click={(e) => handleCheckAnswers(option)}
                >{option.traduction}</button
            >
        {/each}
    </div>
</main>

<style>
    p.option-show-word {
        font-size: 3rem;
        text-align: center;
    }

    div button {
        padding: 5px;
        min-height: inherit;
        font-size: 1.4em;
    }
</style>
