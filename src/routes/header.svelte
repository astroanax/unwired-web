<script>
	import { base } from '$app/paths';
	const headerBg = base + '/img/carr.webp';
	import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
</script>

<header class="bg-black">
	<Navbar
		let:NavContainer
		class="header-navbar bg-black bg-opacity-85"
		style="background-image: url({headerBg})"
	>
		<NavContainer class="bg-black bg-opacity-80">
			<NavBrand href="{base}/">
				<img src="{base}/img/tuw-logo.png" alt="Team Unwired Logo" />
			</NavBrand>
			<NavHamburger class="bg-primary-900 text-primary-200 hover:bg-primary-900" />
			<NavUl classUl="bg-black bg-opacity-0" class="customanim">
				<NavLi
					class="link text-xl hover:bg-primary-900 hover:text-secondary-100"
					href="http://teamunwired.org/"
					>Home
				</NavLi>
				<NavLi
					class="link text-xl hover:bg-primary-900 hover:text-secondary-100"
					href="http://teamunwired.org/about.html">About</NavLi
				>
				<NavLi class="link text-xl hover:bg-primary-900 hover:text-secondary-100" href="{base}/"
					>Projects
				</NavLi>
				<NavLi
					class="link text-xl hover:bg-primary-900 hover:text-secondary-100"
					href="http://teamunwired.org/gallery.html"
					>Gallery
				</NavLi>
				<NavLi
					class="link text-xl hover:bg-primary-900 hover:text-secondary-100"
					href="http://teamunwired.org/teamtry.html"
					>Team
				</NavLi>
				<NavLi
					class="link text-xl hover:bg-primary-900 hover:text-secondary-100"
					href="http://teamunwired.org/sponsors.html"
					>Sponsors
				</NavLi>
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
