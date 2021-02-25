<script>
    let options = [
        { title: "Transliteration", link: "/transliteration" },
        { title: "Words", link: "/words" },
        { title: "Sentences", link: "/sentences" },
        { title: "Cases", link: "/cases" },
        { title: "Texts", link: "/texts" },
    ];
</script>

<svelte:head>
    <title>Greek Project - Select</title>
</svelte:head>

<main id="select-page">
    <h1>Select your training:</h1>
    <div class="options">
        {#each options as option, i}
            <a href={`${option.link}`} class="animate__animated animate__fadeInUp">
                <button>{i + 1} - {option.title}</button>
            </a>
        {/each}
        <button class="more-soon animate__animated animate__fadeInUp">More soon...</button>
        <a href="/">
            <button class="back animate__animated animate__fadeInUp">Back</button>
        </a>
    </div>
</main>

<style>
    #select-page {
        height: 100vh;
        padding-top: 30px;
        text-align: center;
    }

    #select-page div.options {
        color: white;
        align-items: center;
        display: flex;
        flex-direction: column;
        padding: 10px;
    }

    #select-page a {
        width: 100%;
    }

    #select-page button {
        width: 100%;
        height: 60px;
        margin: 10px 0px;
    }

    button.more-soon,
    button.back {
        background-color: #4a2497;
        cursor: pointer;
    }

    @media (min-width: 700px) {
        #select-page {
            padding: 40px;
        }
    }

    @media (min-width: 1000px) {
        #select-page div.options {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }

        #select-page a,
        #select-page button.more-soon {
            width: 45%;
            margin: 10px;
        }
    }
</style>
