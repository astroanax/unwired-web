<script>
	import Header from './lib/header.svelte';
	import Footer from './lib/footer.svelte';
	import {Carousel, Indicator} from 'flowbite-svelte';

	export const images = [
		{
			alt: '1.jpg',
			src: '/img/1.jpg',
			title: '1.jpg'
		},
		{
			alt: '2.jpg',
			src: '/img/2.jpg',
			title: '2.jpg'
		},
		{
			alt: '3.jpg',
			src: '/img/3.jpg',
			title: '3.jpg'
		},
		{
			alt: '4.jpg',
			src: '/img/4.jpg',
			title: '4.jpg'
		},
		{
			alt: '5.jpg',
			src: '/img/5.jpg',
			title: '5.jpg'
		},
		{
			alt: '6.jpg',
			src: '/img/6.jpg',
			title: '6.jpg'
		},
			]
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
	<div class="h-60 w-full sm:h-64 xl:h-80 2xl:h-96 content-center">
		<Carousel {images} let:Controls let:Indicators>
			<Controls />
			<Indicators />
		</Carousel>
	</div>
</main>
<Footer />

<style>
	h2{
			text-align: center;
	}
	main{
		margin-bottom: auto;
		flex-grow: 1;
		width: 100%;
	}
</style>
