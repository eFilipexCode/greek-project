<script>
    let greekAlphabet = [
        { uppercase: "Α", lowercase: "α" },
        { uppercase: "Β", lowercase: "β" },
        { uppercase: "Γ", lowercase: "γ" },
        { uppercase: "Δ", lowercase: "δ" },
        { uppercase: "Ε", lowercase: "ε" },
        { uppercase: "Ζ", lowercase: "ζ" },
        { uppercase: "Η", lowercase: "η" },
        { uppercase: "Θ", lowercase: "θ" },
        { uppercase: "Ι", lowercase: "ι" },
        { uppercase: "Κ", lowercase: "κ" },
        { uppercase: "Λ", lowercase: "λ" },
        { uppercase: "Μ", lowercase: "μ" },
        { uppercase: "Ν", lowercase: "ν" },
        { uppercase: "Ξ", lowercase: "ξ" },
        { uppercase: "Ο", lowercase: "ο" },
        { uppercase: "Π", lowercase: "π" },
        { uppercase: "Ρ", lowercase: "ρ" },
        { uppercase: "Σ", lowercase: "σς" },
        { uppercase: "Τ", lowercase: "τ" },
        { uppercase: "Υ", lowercase: "υ" },
        { uppercase: "Φ", lowercase: "φ" },
        { uppercase: "Χ", lowercase: "χ" },
        { uppercase: "Ψ", lowercase: "ψ" },
        { uppercase: "Ω", lowercase: "ω" },
    ];

    let transcription = [
        { uppercase: "A", lowercase: "a" },
        { uppercase: "B", lowercase: "b" },
        { uppercase: "G", lowercase: "g" },
        { uppercase: "D", lowercase: "d" },
        { uppercase: "E", lowercase: "e" },
        { uppercase: "Z", lowercase: "z" },
        { uppercase: "E", lowercase: "e" },
        { uppercase: "TH", lowercase: "" },
        { uppercase: "I", lowercase: "i" },
        { uppercase: "K", lowercase: "k" },
        { uppercase: "L", lowercase: "l" },
        { uppercase: "M", lowercase: "m" },
        { uppercase: "N", lowercase: "n" },
        { uppercase: "X", lowercase: "x" },
        { uppercase: "O", lowercase: "o" },
        { uppercase: "P", lowercase: "p" },
        { uppercase: "RHO", lowercase: "" },
        { uppercase: "S", lowercase: "s" },
        { uppercase: "T", lowercase: "t" },
        { uppercase: "Y", lowercase: "y" },
        { uppercase: "PHI", lowercase: "" },
        { uppercase: "CH", lowercase: "" },
        { uppercase: "PS", lowercase: "" },
        { uppercase: "O", lowercase: "o" },
    ];

    function selectRandomLetter() {
        const index = Math.floor(Math.random() * greekAlphabet.length);
        return index;
    }

    Array.prototype.shuffle = function () {
        let input = this;

        for (let i = input.length - 1; i >= 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            let itemAtIndex = input[randomIndex];

            input[randomIndex] = input[i];
            input[i] = itemAtIndex;
        }
        return input;
    };

    let recentLetterIndex = selectRandomLetter();
    let letterOptions = [];

    function generateOptions() {
        letterOptions = [];
        for (let i = 0; i < 3; i++) {
            let optionIndex = selectRandomLetter();
            for (let i = 0; i < letterOptions.length; i++) {
                if (letterOptions[optionIndex] === transcription[optionIndex]) {
                    i--;
                }
            };

            if (optionIndex === recentLetterIndex) {
                i--;
            } else {
                letterOptions.push(transcription[optionIndex]);
            };
        }

        letterOptions.push(transcription[recentLetterIndex]);
        letterOptions.shuffle();
    }

    generateOptions();

    let colorAnswer = '#5f27cd';
    function checkAnswer(index) {
        if (index === recentLetterIndex) {
            colorAnswer = '#2ecc71';
            setTimeout(() => {
                colorAnswer = '#5f27cd'
            }, 500);
            recentLetterIndex = selectRandomLetter();
            generateOptions();
        } else if (index !== recentLetterIndex){
            colorAnswer = '#e74c3c';
            setTimeout(() => {
                colorAnswer = '#5f27cd'
            }, 500);
        };
    };
</script>

<main style={`background-color: ${colorAnswer}`}>
    <div class="letter">
        <p class="greek letter-show">
            {greekAlphabet[recentLetterIndex].uppercase}{greekAlphabet[
                recentLetterIndex
            ].lowercase}
        </p>
    </div>
    <p>Corresponds to...</p>
    <div class="options-letters">
        {#each letterOptions as option, i}
            <button class="greek-option option" on:click={e => checkAnswer(transcription.indexOf(option))}
                >{option.uppercase}{option.lowercase}</button>
        {/each}
    </div>
</main>

<style>
    main {
        width: 100%;
        height: 100vh;
        text-align: center;
        transition: all 0.2s;
    }

    main p {
        font-size: 18pt;
    }

    div.letter {
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div .letter-show {
        font-size: 150pt;
    }

    div.options-letters {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 10px;
    }

    div.options-letters .option {
        width: 150px;
        height: 65px;
        font-size: 20pt;
        margin: 10px;
    }
</style>
