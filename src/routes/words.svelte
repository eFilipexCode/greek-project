<script context="module">
    let current;
</script>

<script>
    import words from "../utils/words";
    import selectRandomIndex from "../utils/selectRandomIndex";
    import generateOptions from "../utils/generateOptions";

    let wordIndex = selectRandomIndex(words);
    const answers = words.map((word) => {
        return { traduction: word.traduction };
    });
    let wordOptions = generateOptions(answers, wordIndex);

    let colorAnswer = "#5f27cd";
    function checkAnswer(index, e) {
        if (index === wordIndex) {
            colorAnswer = "#2ecc71";
            setTimeout(() => {
                colorAnswer = "#5f27cd";
            }, 500);
            wordIndex = selectRandomIndex(words);
            wordOptions = generateOptions(answers, wordIndex);
        } else if (index !== wordIndex) {
            colorAnswer = "#e74c3c";
            setTimeout(() => {
                colorAnswer = "#5f27cd";
            }, 500);
        }
    }
</script>

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
                class="greek-option option"
                on:click={(e) => checkAnswer(answers.indexOf(option), e)}
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
