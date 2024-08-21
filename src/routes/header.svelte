<script>
	import { base } from '$app/paths';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<header class="bg-black">
	<Navbar let:NavContainer class="bg-black">
		<NavContainer class="bg-black">
			<NavBrand href="{base}/">
				<img src="{base}/img/tuw-logo.png" alt="Team Unwired Logo" />
			</NavBrand>
			<NavHamburger class="bg-primary-900 text-primary-200 hover:bg-primary-900" />
			<NavUl classUl="bg-black" class="customanim">
				<NavLi class="link text-xl hover:bg-primary-900 hover:text-secondary-100" href="{base}/"
					>Home</NavLi
				>
				<NavLi
					class="link text-xl hover:bg-primary-900 hover:text-secondary-100"
					href="http://teamunwired.org/about.html">About</NavLi
				>
				<NavLi
					class="link text-xl hover:bg-primary-900 hover:text-secondary-100"
					href="http://teamunwired.org/contact.html">Contact</NavLi
				>
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
