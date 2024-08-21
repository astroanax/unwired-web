<script>
	import { base } from '$app/paths';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<header class="bg-surface-700">
	<Navbar let:NavContainer class="bg-surface-700">
		<NavContainer class="bg-surface-700">
			<NavBrand href="/">
				<img src="{base}/img/tuw-logo.png" class="" alt="Team Unwired Logo" />
			</NavBrand>
			<NavHamburger class="bg-surface-400 hover:bg-surface-500 text-primary-200"/>
			<NavUl classUl="bg-surface-700" class="customanim">
				<NavLi class="text-xl link" href="/">Home</NavLi>
				<NavLi class="text-xl link" href="http://teamunwired.org/about.html">About</NavLi>
				<NavLi class="text-xl link" href="http://teamunwired.org/contact.html">Contact</NavLi>
			</NavUl>
		</NavContainer>
	</Navbar>
</header>

<style>
	header {
		display: flex;
		font-family: 'Anek Devanagari', monospace;
		align-items: center;
		width: 100%;
	}
	img {
		margin-left: 5%;
	}
</style>
