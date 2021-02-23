<script>
	import circle from "images/circle.png";
	import pillar from "images/pillar.png";
</script>

<svelte:head>
	<title>Greek Project</title>
</svelte:head>

<main id="initial-screen">
	<div class="animate__animated animate__fadeInUp">
		<img src={circle} alt="Circle" class="circle" />
		<h1>Greek Project</h1>
		<p><strong>A little project for greek learners.</strong></p>
		<a href="/select">
			<button>Get Started!</button>
		</a>
		<img src={pillar} alt="Pillar" class="pillar animate__animated animate__fadeInUp" />
		<p class="greek">"Σοφίαν ζήλου."</p>
	</div>

</main>

<style>
	#initial-screen {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		max-width: 100vw;
		overflow: hidden;
	}

	#initial-screen div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		position: relative;
	}

	#initial-screen div img.circle {
		width: 400px;
		position: absolute;
		opacity: 0.5;
		z-index: -5;
		transform: translateY(50%);
		top: 0%;
		animation: rotate 15s linear infinite;
		pointer-events: none;
	}

	#initial-screen img.pillar {
		width: 300px;
		position: absolute;
		top: 80%;
		z-index: -3;
		pointer-events: none;
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
		width: 250px;
	}

	#initial-screen p.greek {
		color: white;
		font-family: 2em;
	}

	@media (min-width: 700px) {
		#initial-screen figure img {
			width: 350px;
		}
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
