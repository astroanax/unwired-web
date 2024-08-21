<script>
	import { base } from '$app/paths';
</script>

<header class="bg-surface-700">
	<img src="{base}/img/tuw-logo.png" class="" alt="Flowbite Logo" />
	<div class="btn-container text-primary-200">
		<a class="link" href="{base}/">Home</a>
		<a class="link" href="http://teamunwired.org/about.html">About</a>
		<a class="link" href="http://teamunwired.org/contact.html">Contact</a>
	</div>
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

	.btn-container {
		margin-left: auto;
		max-width: 50%;
		width: 20%;
		margin-right: 5%;
		font-size: 1.25em;
		display: flex;
		justify-content: space-between;
		align-items: center;
		overflow: visible;
		flex-wrap: wrap;
		gap: 1em;
	}
</style>
