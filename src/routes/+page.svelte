<svelte:options immutable={true} />

<script>
	import '../slidy.css';
	import Header from './header.svelte';
	import Footer from './footer.svelte';
	import { Slidy } from '@slidy/svelte';
	import { flip } from '@slidy/animation';
	import { getPhotos } from '$lib/photos.js';
	import { projectDescriptions } from '$lib/projectDesc.js';
	import { blur, slide } from 'svelte/transition';

	let index = 0,
		position = 0;
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="NIT Calicut's Automotive club" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@100..800&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap"
		rel="stylesheet"
		media="screen"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
		rel="stylesheet"
		media="screen"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=New+Amsterdam&display=swap"
		rel="stylesheet"
		media="screen"
	/>
	<title>Team Unwired - Projects</title>
</svelte:head>

<Header />
<div class="h-1 w-full bg-primary-600"></div>
<div
	class="passion h-32 flex justify-center items-center w-full bg-secondary-50 text-center text-4xl font-extrabold text-primary-600"
>
	Projects of Passion
</div>
<p class="bg-black h-48 flex flex-col justify-center text-center text-xl text-tertiary-500">
	<span class="dedication font-bold">WITH HOURS OF HARDWORK AND DEDICATION<br /></span>
	<span class="font-light">we've created automotive engineering marvels over and over</span>
</p>
<div ></div>
<main class="text-primary-200">
	<div class="text-center">
	</div>
	<div class="md:flex md:flex-row">
	<div class="slidy-container md:max-w-[50%]">
		{#await getPhotos() then slides}
			<Slidy
				{slides}
				bind:index
				bind:position
				snap="center"
				animation={flip}
				thumbnail
				--slidy-thumbnail-size="5em"
			/>
		{/await}
	</div>
	<div class="project-desc">
		{#key index}
			<h1 transition:slide class="mb-8 bg-secondary-50 text-center text-5xl text-primary-600">
				<span class="project-name w-full">{projectDescriptions[index][0]}</span>
			</h1>
		{/key}
		{#key index}
			<span transition:blur class="achievements mb-8">
				<span class="text-2xl font-bold text-tertiary-500"
					>{projectDescriptions[index][1]}</span
				>
				<span class="rank">{projectDescriptions[index][2]}</span>
			</span>
		{/key}
		<h4 class="font-bold text-primary-300">Specifications</h4>
		<div class="specs">
			{#each projectDescriptions[index][3].split('\r\n') as line}
				<p>{line}</p>
			{/each}
		</div>
	</div>
	</div>
</main>
<div class="h-1 w-full bg-primary-600"></div>
<Footer />

<style>
	:global(body) {
		background-color: rgba(var(--color-secondary-50) / 1) !important;
	}

	main {
		margin-bottom: auto;
		flex-grow: 1;
		width: 100%;
		background-color: black !important;
	}

	.passion {
		font-family: 'Anek Devanagari', monospace;
	}

	.slidy-container {
		height: 25em;
		max-height: 25em;
		overflow: hidden;
	}

	.project-desc {
		text-align: center;
		max-width: 95%;
		width: 95%;
		margin-left: 2.5%;
		display: flex;
		flex-direction: column;
		justify-items: center;
		height: 100%;
	}

	.project-desc > h4 {
		line-height: 150%;
		font-size: 2em;
		font-family: 'Anek Devanagari', monospace;
	}

	.project-name {
		font-family: 'New Amsterdam', sans-serif;
	}

	.achievements {
		color: #a85a5a;
	}

	.specs {
		font-family: 'Anek Devanagari', monospace;
		font-size: 1.25em;
		margin-bottom: 5%;
	}

	.rank {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 1.5em;
	}

	.dedication {
		font-family: 'Anek Devanagari', monospace;
	}
</style>
