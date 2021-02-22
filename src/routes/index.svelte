<script>
	import studying from "images/studying.svg";
</script>

<svelte:head>
	<title>Greek Project</title>
</svelte:head>

<main id="initial-screen">
	<div>
		<h1>Greek Project</h1>
		<p><strong>A little project for greek learners.</strong></p>
		<a href="/select">
			<button>Get Started!</button>
		</a>
	</div>

	<figure>
		<img alt="Studying greek" src={studying} />
	</figure>

	<p class="greek">
		"Σοφίαν ζήλου."
	</p>
</main>

<style>
	#initial-screen {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		height: 100vh;
	}

	#initial-screen div {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		width: 100%;
	}

	#initial-screen h1 {
		color: white;
		font-size: 2.5em;
		margin: 10px 0px;
	}

	#initial-screen p {
		color: #ddd;
		font-size: 1em;
		margin: 10px 0px 40px 0px;
	}

	#initial-screen button {
		width: 150px;
		height: 50px;
		margin: 0px 0px;
	}

	#initial-screen figure {
		overflow: hidden;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#initial-screen figure img {
		width: 60%;
	}

	#initial-screen p.greek {
		color: white;
		font-family: 2em;
	}
</style>
