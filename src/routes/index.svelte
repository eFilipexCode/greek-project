<script>
</script>

<svelte:head>
	<title>Greek Project</title>
</svelte:head>

<style>
	#initial-screen {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-family: 'Merriweather', serif;
		height: 100vh;
	}

	#initial-screen h1 {
		color: white;
		font-size: 2.5em;
		margin: 10px 0px;
	}

	#initial-screen p {
		color: #ddd;
		font-size: 1em;
		margin: 10px;
	}

	#initial-screen button {
		width: 150px;
		height: 50px;
		color: white;
		font-family: inherit;
		background-color: #6c2cec;
		border: none;
		outline: none;
		margin: 10px 0px;
		border-radius: 10px;
		font-size: 1em;
		cursor: pointer;
		transition: all .2s;
	}

	#initial-screen button:hover {
		background-color: #341f97;
	}
</style>

<main id="initial-screen">
	<h1>Greek Project</h1>
	<p><strong>A little project for greek learners.</strong></p>
	<button>Get Started!</button>
</main>
