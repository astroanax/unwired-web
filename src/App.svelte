<script>
	import Header from './lib/header.svelte';
	import Footer from './lib/footer.svelte';
	import { Slidy } from "@slidy/svelte";
	import { flip } from "@slidy/animation";

	let index = 4, position = 0, limit = 6;
	const slides = [
		{
			width: 400,
			height: 400,
			id: 1,
			src: "/img/1.jpg",
		},
		{
			width: 400,
			height: 400,
			id: 2,
			src: "/img/2.jpg",
		},
		{
			width: 400,
			height: 400,
			id: 3,
			src: "/img/3.jpg",
		},
		{
			width: 400,
			height: 400,
			id: 4,
			src: "/img/4.jpg",
		},
		{
			width: 400,
			height: 400,
			id: 5,
			src: "/img/5.jpg",
		},
		{
			width: 400,
			height: 400,
			id: 6,
			src: "/img/6.jpg",
		},
	];
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@100..800&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap" rel="stylesheet">
	<title>
		Team Unwired - Projects
	</title>
</svelte:head>

<Header />
<main>
<h2> Team Unwired's Project over the years</h2>
	<div class="slidy-container">
		<Slidy slides={slides} bind:index
			   bind:position
			   snap="center"
			   animation={flip}
			   thumbnail/>
	</div>
</main>
<Footer />

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
	.slidy-container{
		height: 10%;
	}
</style>
