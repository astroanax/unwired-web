<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<header class="bg-primary-500">
	<Navbar  class="bg-primary-500">
		<NavBrand href="/">
			<img src="/img/tuw-logo.png" class="" alt="Flowbite Logo" />
		</NavBrand>
		<NavHamburger  />
		<NavUl class="bg-primary-500">
			<NavLi href="/">Home</NavLi>
			<NavLi href="/about">About</NavLi>
			<NavLi href="/contact">Contact</NavLi>
		</NavUl>
	</Navbar>
</header>

<style>
		header{
				display: flex;
        font-family: 'Anek Devanagari', monospace;
				align-items: center;
			width: 100%;
		}
	img{
			margin-left: 1.5rem;
	}
</style>
