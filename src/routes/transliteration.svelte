<script>
    import selectRandomIndex from "../utils/selectRandomIndex";
    import greekAlphabet from "../utils/greekAlphabet";
    import transcription from "../utils/transcription";
    import generateOptions from "../utils/generateOptions";
    import checkAnswer from "../utils/checkAnswer";
    import playCorrectSound from "../utils/playCorrectSound.js";

    let recentLetterIndex = selectRandomIndex(greekAlphabet);
    let letterOptions = generateOptions(
        transcription,
        recentLetterIndex,
        "uppercase",
        "lowercase"
    );

    let colorAnswer = "#5f27cd";

    function changeBg(correct) {
        correct ? (colorAnswer = "#2ecc71") : (colorAnswer = "#e74c3c");
        setTimeout(() => {
            colorAnswer = "#5f27cd";
        }, 500);
    }

    function handleCheckAnswers(option) {
        if (checkAnswer(transcription.indexOf(option), recentLetterIndex)) {
            playCorrectSound(true);
            changeBg(true);
            recentLetterIndex = selectRandomIndex(greekAlphabet);
            letterOptions = generateOptions(
                transcription,
                recentLetterIndex,
                "uppercase",
                "lowercase"
            );
        } else {
            changeBg(false);
            playCorrectSound(false);
        }
    }
</script>

<svelte:head>
    <title> Greek Project - TransliterationM </title>
</svelte:head>

<main class="container-game" style={`background-color: ${colorAnswer}`}>
    <div class="options-screen">
        <p class="greek option-show-letter ">
            {greekAlphabet[recentLetterIndex].uppercase}{greekAlphabet[
                recentLetterIndex
            ].lowercase}
        </p>
    </div>
    <p class="command">Corresponds to...</p>
    <div class="options-letters">
        {#each letterOptions as option}
            <button
                class="greek-option option animate__animated animate__fadeInUp"
                on:click={(e) => handleCheckAnswers(option)}
                >{option.uppercase}{option.lowercase}</button
            >
        {/each}
    </div>
</main>

<style>
    p.option-show-letter {
        font-size: 10rem;
    }
</style>
