<script>
    let options = [
        { title: "Alphabet", link: "/alphabet" },
        { title: "Words", link: "/words" },
    ];
</script>

<svelte:head>
    <title>Select</title>
</svelte:head>

<main id="select-page">
    <h1>Select your training:</h1>
    <div class="options">
        {#each options as option, i}
            <a href={`${option.link}`}>
                <button>{i + 1} - {option.title}</button>
            </a>
        {/each}
        <button class="more-soon">More soon...</button>
        <a href="/">
            <button class="back">Back</button>
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

    button.more-soon, button.back{
        background-color: #4a2497;
        cursor: pointer;
    }
</style>
