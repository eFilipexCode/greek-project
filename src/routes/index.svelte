<script>
	import Button from "../components/Button.svelte";
</script>

<svelte:head>
	<title>Greek Project - μάθησις</title>
</svelte:head>

<main id="initial-screen">
	<div class="animate__animated animate__fadeInUp">
		<img src='/circle.png' alt="Circle" class="circle" />
		<span class="greek title">μάθησις</span>
		<h1>Greek Mathesis</h1>
		<p><strong>Free Ancient Greek Education</strong></p>
		<Button
			linkUrl="/select"
			text="Get started"
		style={`width: 150px; height: 50px; margin: 0px`}
		/>
		<img
			src='/pillar.png'
			alt="Pillar"
			class="pillar animate__animated animate__fadeInUp"
		/>
		<p class="greek">"Σοφίαν ζήλου."</p>
	</div>
	<div class="credits">
		<p>By <span class="greek"><a href="https://efilipex.netlify.app" target="_blank">Φίλιππος</a></span></p>
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
		position: relative;
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
		transform: translateY(55%);
		top: 0%;
		animation: rotate 15s linear infinite;
		pointer-events: none;
	}

	#initial-screen img.pillar {
		width: 300px;
		position: absolute;
		top: 85%;
		z-index: -3;
		pointer-events: none;
	}

	#initial-screen h1 {
		color: white;
		font-size: 2em;
		margin: 10px 0px;
	}

	#initial-screen p {
		color: #ddd;
		font-size: 1em;
		margin: 10px 0px 40px 0px;
	}
	span.greek.title{
		font-family: "Cardo", serif;
		color: white;
		font-size: 3em;
		margin: 10px 0px;
	}

	#initial-screen p.greek {
		color: white;
		font-family: 2em;
	}
	#initial-screen div.credits {
		position: absolute;
		right: 0px;
		bottom: 50%;
		color: #fff;
		width: 150px;
		height: 40px;
		padding: 10px;
		background-color: #4a2497;
		transform: rotate(270deg) translateY(140%);
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 15px 15px 0px 0px;
		pointer-events: none;
		transition: all 0.2s
	}
	#initial-screen div.credits p {
		margin: 0px;
	}
	#initial-screen div.credits a {
		pointer-events: all;
		color: #fff;
		text-decoration: none;
	}

	@media (min-width: 700px) {
		#initial-screen figure img {
			width: 350px;
		}
	}
	@media (max-width: 530px) {
		#initial-screen div.credits {
			right: 50%;
			bottom: 0%;
			transform: rotate(0deg) translateX(50%) translateY(0%);
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
