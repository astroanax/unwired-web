<svelte:options immutable={true}/>

<script>
	import Header from './lib/header.svelte';
	import Footer from './lib/footer.svelte';
	import { Slidy } from '@slidy/svelte'
	import { flip } from "@slidy/animation";

	import { getPhotos } from './lib/photos.js'

	let index = 4, position = 0, limit = 6
</script>

<svelte:head>
	       <link rel="preconnect" href="https://fonts.googleapis.com">
	       <link rel="preconnect" href="https://fonts.gstatic.com">
	       <link href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@100..800&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap" rel="stylesheet">
	       <title>
	               Team Unwired - Projects
			       </title>
</svelte:head>

<Header />
<main>
	<h2> Team Unwired's Project over the years</h2>
	{#await getPhotos(limit) then slides}
		<Slidy
				{slides}
				bind:index
				bind:position
				snap="center"
				animation={flip}
				thumbnail
		/>
		{/await}
</main>
<Footer/>

<style>
	@import url('https://unpkg.com/@slidy/svelte/dist/slidy.css');
	h2{
		text-align: center;
	}
	main{
		margin-bottom: auto;
		flex-grow: 1;
		width: 100%;
	}
</style>