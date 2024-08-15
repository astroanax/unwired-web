<script>
		import {Carousel} from 'flowbite-svelte';
		import { scale } from 'svelte/transition';
		import { quintOut } from 'svelte/easing';


		import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
		const scaleAnimation = (x) => scale(x, { duration: 500, easing: quintOut });
		const images = [
			{
				"alt": "1.jpg",
				"src":"/img/1.jpg",
				"title":"1.jpg"
			},
			{
				"alt": "2.jpg", "src":"/img/2.jpg",
				"title":"2.jpg"
			},
			{
				"alt": "3.jpg",
				"src":"/img/3.jpg",
				"title":"3.jpg"
			},
			{
				"alt": "4.jpg",
				"src":"/img/4.jpg",
				"title":"4.jpg"
			},
			{
				"alt": "5.jpg",
				"src":"/img/5.jpg",
				"title":"5.jpg"
			},
			{
				"alt": "6.jpg",
				"src":"/img/6.jpg",
				"title":"6.jpg"
			},
		]

</script>

<svelte:head>
	<title>
		Team Unwired - Projects
	</title>
</svelte:head>
<style>
		#wrap {
				display: flex;
				flex-direction: column;
      	min-height: 100%;
				color: white;
				width: 100%;
		}
		header {
				flex: 1 0 auto;
		}
		footer {
				flex: 0 0 auto;
		}
</style>
<div id="wrap">
	<Navbar  class="bg-primary-500">
		<NavBrand href="/">
			<img src="/img/tuw-logo.png" class="h-100 w-200" alt="TUW Logo" />
		</NavBrand>
		<NavHamburger  />
		<NavUl >
			<NavLi href="/">Home</NavLi>
			<NavLi href="/about">About</NavLi>
			<NavLi href="/projects">Projects</NavLi>
			<NavLi href="/galley">Gallery</NavLi>
			<NavLi href="/team">Team</NavLi>
			<NavLi href="/sponsors">Sponsors</NavLi>
			<NavLi href="/contact">Contact</NavLi>
		</NavUl>
	</Navbar>
	<div id="carousel" class="h-full w-full">
		<Carousel {images} transition={scaleAnimation} let:Controls let:Indicators>
			<Controls />
			<Indicators />
		</Carousel>
	</div>
<footer class="bg-primary-500">
	bye
</footer>
</div>