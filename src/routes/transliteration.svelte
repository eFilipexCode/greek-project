<script>
    import selectRandomIndex from '../utils/selectRandomIndex';;
    import greekAlphabet from '../utils/greekAlphabet';
    import transcription from '../utils/transcription';
    import generateOptions from '../utils/generateOptions';

    let recentLetterIndex = selectRandomIndex(greekAlphabet);
    let letterOptions = generateOptions(transcription, recentLetterIndex, 'uppercase', 'lowercase');

    let colorAnswer = '#5f27cd';
    function checkAnswer(index) {
        if (index === recentLetterIndex) {
            colorAnswer = '#2ecc71';
            setTimeout(() => {
                colorAnswer = '#5f27cd'
            }, 500);
            recentLetterIndex = selectRandomIndex(greekAlphabet);
            letterOptions = generateOptions(transcription, recentLetterIndex, 'uppercase', 'lowercase');
        } else if (index !== recentLetterIndex){
            colorAnswer = '#e74c3c';
            setTimeout(() => {
                colorAnswer = '#5f27cd'
            }, 500);
        };
    };
</script>

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
            <button class="greek-option option animate__animated animate__fadeInUp" on:click={e => checkAnswer(transcription.indexOf(option))}
                >{option.uppercase}{option.lowercase}</button>
        {/each}
    </div>
</main>

<style>
    p.option-show-letter {
        font-size: 10rem;
    }
</style>
